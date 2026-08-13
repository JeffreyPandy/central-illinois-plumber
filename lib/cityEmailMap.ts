// Maps each city slug to the environment variable holding its lead notification email.
// Add a new line here every time a new city launches, no other code needs to change.
export function getLeadEmailForCity(citySlug: string): string {
  const map: Record<string, string | undefined> = {
    "mattoon-il": process.env.MATTOON_LEAD_EMAIL,
    "charleston-il": process.env.CHARLESTON_LEAD_EMAIL,
  };

  const email = map[citySlug];
  if (email) return email;

  const fallback = process.env.DEFAULT_LEAD_EMAIL;
  if (!fallback) {
    throw new Error(
      "No lead email configured for this city and no DEFAULT_LEAD_EMAIL fallback is set."
    );
  }
  return fallback;
}
