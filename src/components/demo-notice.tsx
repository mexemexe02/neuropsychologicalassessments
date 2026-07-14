"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { Close } from "./icons";
import { site } from "@/lib/site";

export type DemoNoticeContent = {
  title: string;
  body: string;
};

type DemoNoticeContextValue = {
  showDemoNotice: (notice: DemoNoticeContent) => void;
};

const DemoNoticeContext = createContext<DemoNoticeContextValue | null>(null);

export function useDemoNotice() {
  const context = useContext(DemoNoticeContext);
  if (!context) {
    throw new Error("useDemoNotice must be used within DemoNoticeProvider");
  }
  return context;
}

export function DemoNoticeProvider({ children }: { children: ReactNode }) {
  const [notice, setNotice] = useState<DemoNoticeContent | null>(null);
  const titleId = useId();
  const showDemoNotice = useCallback((next: DemoNoticeContent) => {
    setNotice(next);
  }, []);
  const close = useCallback(() => setNotice(null), []);

  useEffect(() => {
    if (!notice) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [notice, close]);

  return (
    <DemoNoticeContext.Provider value={{ showDemoNotice }}>
      {children}
      {notice && (
        <div className="demo-notice" role="presentation">
          <button
            type="button"
            className="demo-notice__backdrop"
            aria-label="Close dialog"
            onClick={close}
          />
          <div
            className="demo-notice__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              type="button"
              className="demo-notice__close"
              aria-label="Close"
              onClick={close}
            >
              <Close />
            </button>
            <p className="eyebrow">Website preview</p>
            <h2 id={titleId}>{notice.title}</h2>
            <p>{notice.body}</p>
            <p className="demo-notice__hint">
              For now, contact the practice directly:
            </p>
            <div className="demo-notice__actions">
              <a className="button" href={site.phoneHref}>
                Call or text {site.phone}
              </a>
              <a className="text-link" href={`mailto:${site.email}`}>
                Email the practice
              </a>
            </div>
            <button type="button" className="text-link" onClick={close}>
              Continue browsing
            </button>
          </div>
        </div>
      )}
    </DemoNoticeContext.Provider>
  );
}
