import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { therapyApproaches, therapyConcerns } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psychotherapy",
  description:
    "Evidence-based psychotherapy for anxiety, depression, trauma, PTSD, grief, stress, burnout, relationship difficulties, and life transitions.",
  alternates: { canonical: "/psychotherapy" },
};

export default function PsychotherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Psychotherapy"
        title={<>Change can begin with being understood.</>}
        intro="Evidence-based psychotherapy for adults — a private, collaborative space to make sense of difficult experiences, strengthen coping, and move toward a life that feels more manageable and meaningful."
        tone="blue"
      />

      <section className="section">
        <div className="shell content-header">
          <Reveal>
            <p className="eyebrow">What we can address</p>
            <h2>Support for complex, human experiences.</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="lead">
              Therapy is adapted to your goals, history, culture, and pace.
              Concerns do not need to fit neatly into one category before you
              reach out.
            </p>
            <div className="tag-list">
              {therapyConcerns.map((concern) => (
                <span key={concern}>{concern}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Our approach</p>
            <h2>Evidence-based. Individualized. Collaborative.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>
              Sebastian Jose draws from established therapeutic approaches
              based on each client’s concerns and goals. The work is practical
              and compassionate, with attention to the whole person.
            </p>
            <ul className="detail-list">
              {therapyApproaches.map((approach) => (
                <li key={approach}>{approach}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--blue">
        <div className="shell">
          <Reveal>
            <p className="eyebrow eyebrow--light">The experience</p>
            <p className="statement">
              Therapy is not about fixing a person. It is about making room for
              understanding, skill, and choice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">What to expect</p>
              <h2>A pace shaped around you.</h2>
            </div>
            <div>
              <p className="lead">
                Your first appointment is an opportunity to explore what brings
                you to therapy, what you hope will change, and what kind of
                support may feel most useful.
              </p>
              <p>
                Together, you and your clinician develop a plan that can evolve
                as your understanding and needs change.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow="Finding the right fit matters"
        title="Start with a conversation."
        text="A free 15-minute consultation is a chance to ask questions, discuss what you are looking for, and consider whether working together feels right."
      />
    </>
  );
}
