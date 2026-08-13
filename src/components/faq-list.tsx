type FaqItem = {
  question: string;
  answer: string;
};

/** Visible HTML Q&A. Closed details still expose the question in the source. */
export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details key={faq.question} open>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
