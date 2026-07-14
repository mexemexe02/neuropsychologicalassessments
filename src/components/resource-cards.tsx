"use client";

import { Reveal } from "@/components/reveal";
import { useDemoNotice } from "@/components/demo-notice";
import { demoNotices } from "@/lib/demo-notices";

const resources = [
  {
    type: "Assessment guide",
    title: "What happens during a neuropsychological assessment?",
    text: "A plain-language overview of interviews, testing, records, feedback, and the written report.",
  },
  {
    type: "Getting started",
    title: "How to prepare for your first appointment",
    text: "A short guide to gathering questions, relevant records, and the information you would like to discuss.",
  },
  {
    type: "Psychotherapy",
    title: "Finding the right therapeutic fit",
    text: "Helpful considerations when choosing a clinician and deciding what you hope to gain from therapy.",
  },
] as const;

export function ResourceCards() {
  const { showDemoNotice } = useDemoNotice();

  return (
    <div className="resource-grid">
      {resources.map((resource, index) => (
        <Reveal key={resource.title} delay={index * 90}>
          <button
            type="button"
            className="resource-card"
            onClick={() => showDemoNotice(demoNotices.resources)}
          >
            <span>{resource.type}</span>
            <h3>{resource.title}</h3>
            <p>{resource.text}</p>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
