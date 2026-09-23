export default function SocialLinks() {
  return (
    <footer className="social-footer">
      <div className="social-footer-inner">
        <div className="social-footer-heading">
          <span>Follow the trail</span>
          <strong>Stay connected with Camp Firewalker.</strong>
        </div>
        <nav className="social-links" aria-label="Camp Firewalker social media">
          <a href="https://www.instagram.com/campfirewalker/" target="_blank" rel="noreferrer" title="Camp Firewalker on Instagram">
            <span className="social-brand-mark social-instagram-mark" aria-hidden="true">IG</span>
            <span><strong>Instagram</strong><small>@campfirewalker</small></span>
          </a>
          <a href="https://www.facebook.com/campfirewalkertx/?fref=ts" target="_blank" rel="noreferrer" title="Camp Firewalker on Facebook">
            <span className="social-brand-mark" aria-hidden="true">f</span>
            <span><strong>Facebook</strong><small>Camp Firewalker TX</small></span>
          </a>
          <a href="https://x.com/campfirewalker" target="_blank" rel="noreferrer" title="Camp Firewalker on X">
            <span className="social-brand-mark" aria-hidden="true">X</span>
            <span><strong>X</strong><small>@campfirewalker</small></span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
