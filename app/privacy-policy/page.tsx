import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2>Who We Are</h2>
        <p>
          {siteConfig.name} ("we," "us," or "our") operates {siteConfig.domain}.
          We connect homeowners and businesses in Mattoon and Charleston, IL
          with plumbing service. This policy explains what information we
          collect through this website and how it's used.
        </p>

        <h2>Information We Collect</h2>
        <p>When you submit our contact form, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Phone number</li>
          <li>Email address (if provided)</li>
          <li>City and service you're requesting</li>
          <li>Any additional details you choose to share</li>
        </ul>
        <p>
          If you call the phone number listed on this site, standard call
          and voicemail information is collected through our phone service
          provider.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information you submit to:</p>
        <ul>
          <li>Connect you with plumbing service for your request</li>
          <li>Contact you by phone, text, or email regarding your request</li>
          <li>Improve our service and respond to inquiries</li>
        </ul>

        <h2>How We Share Your Information</h2>
        <p>
          We share the information you submit with the local plumbing
          professional or business assigned to fulfill your service request
          in Mattoon or Charleston, IL, so they can contact you and provide
          service. We do not sell your information to unrelated third
          parties or use it for advertising purposes.
        </p>
        <p>
          We use Resend, a third-party email delivery service, to transmit
          lead notifications internally. Resend processes this information
          only to deliver these emails and does not use it for other
          purposes.
        </p>

        <h2>Consent to Be Contacted</h2>
        <p>
          By submitting the contact form on this site, you consent to be
          contacted by phone, text message, or email by us or the local
          plumbing professional handling your request, regarding the
          service you requested. Message and data rates may apply. Consent
          is not a condition of purchase. You may revoke consent at any
          time by contacting us directly.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain submitted information only as long as needed to fulfill
          your request and for reasonable recordkeeping afterward. You may
          request deletion of your information at any time by contacting us.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on where you live, you may have rights to access,
          correct, or request deletion of your personal information. To
          make a request, contact us using the information below.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not
          knowingly collect information from children under 13.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable steps to protect the information you submit,
          but no method of transmission over the internet is completely
          secure.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be
          posted on this page with an updated date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this policy or want to make a
          request regarding your information, contact us at{" "}
          {siteConfig.phone}.
        </p>
      </div>
    </section>
  );
}
