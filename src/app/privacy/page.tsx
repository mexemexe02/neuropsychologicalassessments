import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Website privacy information for Neuropsychological Assessments.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={<>Your information deserves careful treatment.</>}
        intro="This page is a draft summary of how the public website is intended to handle information. The practice will review and approve the final wording before launch."
      />

      <section className="section section--soft">
        <div className="shell privacy-copy">
          <aside>
            <strong>Draft — practice review before launch</strong>
            <p>
              This is not legal advice. The final privacy notice will be updated
              once booking, hosting, and any analytics tools are confirmed.
            </p>
          </aside>
          <article>
            <section>
              <h2>Website information</h2>
              <p>
                This website is intended to provide general information about
                the practice and its services. It is not designed to provide
                medical advice, diagnosis, emergency support, or a substitute
                for professional care.
              </p>
            </section>
            <section>
              <h2>Contact and consultation requests</h2>
              <p>
                When the live booking system is selected, this section will
                explain what information is collected, why it is needed, where
                it is stored, and which service providers process it.
              </p>
              <p>
                Please do not send sensitive health information through regular
                email, text message, or the preview form.
              </p>
            </section>
            <section>
              <h2>Cookies and analytics</h2>
              <p>
                No analytics provider has been selected for this preview. If
                analytics or non-essential cookies are added before launch,
                this policy and any required consent controls must be updated.
              </p>
            </section>
            <section>
              <h2>Questions</h2>
              <p>
                Questions about the practice’s privacy approach may be directed
                to <a href={`mailto:${site.email}`}>{site.email}</a> or by phone
                at <a href={site.phoneHref}>{site.phone}</a>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
