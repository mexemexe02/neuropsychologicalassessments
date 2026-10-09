"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Play } from "@/components/icons";
import type { PracticeVideo } from "@/lib/videos";

type YoutubeVideoCardProps = {
  video: PracticeVideo;
  /** Optional heading level override — clinicians page uses h3 under bios. */
  headingLevel?: "h3" | "h4";
  className?: string;
};

/**
 * Privacy-friendly video card: thumbnail + play until click, then a
 * youtube-nocookie iframe. Nothing loads from YouTube before interaction.
 */
export function YoutubeVideoCard({
  video,
  headingLevel = "h3",
  className = "",
}: YoutubeVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const titleId = useId();
  const Heading = headingLevel;

  return (
    <article
      className={`video-card video-card--${video.orientation} ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <div className="video-card__media">
        {isPlaying ? (
          <iframe
            className="video-card__iframe"
            src={`${video.embedUrl}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            // Load only after click — keeps the static export fast.
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className="video-card__trigger"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${video.title}`}
          >
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes={
                video.orientation === "portrait"
                  ? "(max-width: 960px) 70vw, 22rem"
                  : "(max-width: 960px) 100vw, 36rem"
              }
              className="video-card__thumb"
            />
            <span className="video-card__veil" aria-hidden="true" />
            <span className="video-card__play" aria-hidden="true">
              <Play />
            </span>
          </button>
        )}
      </div>

      <div className="video-card__body">
        <p className="video-card__meta">
          <span>{video.durationLabel}</span>
          <span aria-hidden="true">·</span>
          <span
            className={
              video.inLanguage === "fr"
                ? "video-card__lang video-card__lang--fr"
                : "video-card__lang"
            }
          >
            {video.languageLabel}
          </span>
        </p>
        <Heading id={titleId} className="video-card__title">
          {video.title}
        </Heading>
        <p className="video-card__summary">{video.summary}</p>
        <a
          className="video-card__youtube-link"
          href={video.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}
