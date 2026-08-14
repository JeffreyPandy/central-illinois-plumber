import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { getLeadEmailForCity } from "@/lib/cityEmailMap";
import { siteConfig, cities } from "@/lib/siteConfig";

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  isEmergency: boolean;
  description?: string;
  website?: string; // honeypot field, must stay empty
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot spam check: real users never fill this hidden field
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ success: true }); // silently accept and drop
    }

    if (!body.name || !body.phone || !body.city || !body.service) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const toEmail = getLeadEmailForCity(body.city);
    const emergencyLabel = body.isEmergency ? "YES — EMERGENCY" : "No";

    const matchedCity = cities.find((c) => c.slug === body.city);
    const cityDisplayName = matchedCity ? matchedCity.displayName : body.city;

    await resend.emails.send({
      from: `${siteConfig.name} Leads <${process.env.RESEND_FROM_EMAIL}>`,
      to: toEmail,
      replyTo: body.email || undefined,
      subject: `New Lead: ${cityDisplayName} — ${body.service}${
        body.isEmergency ? " (EMERGENCY)" : ""
      }`,
      text: `New lead submitted on ${siteConfig.domain}

Name: ${body.name}
Phone: ${body.phone}
Email: ${body.email || "Not provided"}
City: ${cityDisplayName}
Service Needed: ${body.service}
Emergency: ${emergencyLabel}

Description:
${body.description || "No additional details provided."}
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
