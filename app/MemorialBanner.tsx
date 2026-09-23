import Link from "next/link";

type MemorialBannerProps = {
  destination?: string;
  actionLabel?: string;
};

export default function MemorialBanner({
  destination = "/memorial",
  actionLabel = "Read their story",
}: MemorialBannerProps) {
  return (
    <aside className="memorial-banner" aria-label="Memorial dedication">
      <Link
        className="memorial-banner-link"
        href={destination}
        aria-label={`${actionLabel}: Mark Wood and Matt Van Eaton`}
      >
        <span className="memorial-banner-kicker">In memory of</span>
        <p><strong>Mark Wood</strong> and <strong>Matt Van Eaton</strong></p>
        <span className="memorial-banner-cta">{actionLabel} <span aria-hidden="true">&#8594;</span></span>
      </Link>
    </aside>
  );
}
