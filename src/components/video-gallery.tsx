import { Reveal } from "@/components/reveal";
import { YoutubeVideoCard } from "@/components/youtube-video-card";
import type { PracticeVideo } from "@/lib/videos";

type VideoGalleryProps = {
  videos: readonly PracticeVideo[];
  /** Home uses a portrait + landscape split; clinicians use a simple list. */
  layout?: "home" | "stack" | "pair";
  headingLevel?: "h3" | "h4";
  className?: string;
};

/**
 * Renders practice video cards. Home layout keeps the Short portrait
 * intentional beside the two landscape explainers.
 */
export function VideoGallery({
  videos,
  layout = "stack",
  headingLevel = "h3",
  className = "",
}: VideoGalleryProps) {
  if (layout === "home") {
    const portrait = videos.find((video) => video.orientation === "portrait");
    const landscape = videos.filter((video) => video.orientation === "landscape");

    return (
      <div className={`video-gallery video-gallery--home ${className}`.trim()}>
        {portrait ? (
          <Reveal className="video-gallery__portrait">
            <YoutubeVideoCard video={portrait} headingLevel={headingLevel} />
          </Reveal>
        ) : null}
        <div className="video-gallery__landscape">
          {landscape.map((video, index) => (
            <Reveal key={video.id} delay={100 + index * 80}>
              <YoutubeVideoCard video={video} headingLevel={headingLevel} />
            </Reveal>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`video-gallery video-gallery--${layout} ${className}`.trim()}
    >
      {videos.map((video, index) => (
        <Reveal key={video.id} delay={index * 80}>
          <YoutubeVideoCard video={video} headingLevel={headingLevel} />
        </Reveal>
      ))}
    </div>
  );
}
