import type { Metadata } from "next";
import { ownerVisibleChecklist } from "@/lib/google-ranking-checklist";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Owner checklist — show up on Google",
  description:
    "Google Business Profile and review tasks for the practice owner. Not a public service page.",
  robots: { index: false, follow: false },
};

export default function OwnerGoogleRankingPage() {
  const items = ownerVisibleChecklist();

  return (
    <section className="section">
      <div className="shell intro-copy">
        <p className="eyebrow">For the practice owner</p>
        <h1>Owner checklist for Google</h1>
        <p>
          These are the items only you can do, because they need the Google
          Business Profile login and day-to-day contact with clients. Weekly
          items never finish.
        </p>
        <p className="service-note">
          Copy this NAP exactly:
          <br />
          {site.name}
          <br />
          {site.addressLine1}, {site.addressLine2}
          <br />
          {site.phone}
        </p>
        <ol className="owner-checklist">
          {items.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
