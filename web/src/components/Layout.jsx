import React from 'react';
import { I } from './Icons';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="left">
          <span>🇳🇬 Ibadan · Lagos</span>
          <span className="sep">|</span>
          <span>New AI cohort starts June 3 — limited seats</span>
        </div>
        <div className="right">
          <a href="#"><I.Phone size={12} /> +234 810 000 0000</a>
          <a href="#">Support</a>
          <a href="#">Partners</a>
        </div>
      </div>
    </div>
  );
}

export function Header({ onLogin }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="brand" aria-label="TECHFRONT HUB">
          <span className="brand-mark">TF</span>
          <span className="brand-name">TECHFRONT<span className="dot">.</span>HUB</span>
        </a>
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#" className="has-caret">Courses</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Learning</a>
          <a href="#" className="has-caret">Programs</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Corporate</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Resources</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <div className="mobile-only-cta">
             <button className="btn btn-ghost btn-sm" onClick={() => { onLogin(); setIsMenuOpen(false); }}>Login</button>
          </div>
        </nav>
        <div className="header-cta">
          <button className="btn btn-ghost btn-sm hide-mobile" onClick={onLogin}>Login</button>
          <a href="#enroll" className="btn btn-primary btn-sm">Enroll Now <I.Arrow size={14} /></a>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <I.X size={24}/> : <I.Menu size={24}/>}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#" className="brand" style={{color: "#fff"}}>
              <span className="brand-mark">TF</span>
              <span className="brand-name">TECHFRONT<span className="dot">.</span>HUB</span>
            </a>
            <p className="about-copy">Nigeria's career-focused tech academy — cohort bootcamps, 1-on-1 coaching and corporate training for the next wave of builders.</p>
            <div style={{fontSize: 13, display: "flex", flexDirection: "column", gap: 8}}>
              <span style={{display: "flex", gap: 8, alignItems: "center"}}><I.MapPin size={14}/> Bodija, Ibadan · Lekki, Lagos</span>
              <span style={{display: "flex", gap: 8, alignItems: "center"}}><I.Mail size={14}/> hello@techfronthub.ng</span>
              <span style={{display: "flex", gap: 8, alignItems: "center"}}><I.Phone size={14}/> +234 810 000 0000</span>
            </div>
            <div className="socials">
              <a href="#" aria-label="Facebook"><I.FB/></a>
              <a href="#" aria-label="X"><I.TW/></a>
              <a href="#" aria-label="Instagram"><I.IG/></a>
              <a href="#" aria-label="LinkedIn"><I.IN/></a>
              <a href="#" aria-label="YouTube"><I.YT/></a>
            </div>
          </div>
          <div>
            <h5>Learn</h5>
            <ul>
              <li><a href="#">All courses</a></li>
              <li><a href="#">Bootcamps</a></li>
              <li><a href="#">Private lessons</a></li>
              <li><a href="#">Tech for kids</a></li>
              <li><a href="#">Student login</a></li>
            </ul>
          </div>
          <div>
            <h5>Business</h5>
            <ul>
              <li><a href="#">Corporate training</a></li>
              <li><a href="#">Team assessments</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Hire our graduates</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Course catalog</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Free mini-courses</a></li>
              <li><a href="#">Templates & guides</a></li>
              <li><a href="#">Help center</a></li>
            </ul>
          </div>
          <div>
            <h5>Newsletter</h5>
            <p style={{fontSize: 13, margin: "0 0 12px", color: "#9ca3af"}}>Monthly digest of new cohorts, free workshops and scholarship slots.</p>
            <form className="newsletter" onSubmit={e => {e.preventDefault(); alert("Subscribed — check your inbox.")}}>
              <input type="email" placeholder="you@work.com" required/>
              <button type="submit" className="btn btn-primary btn-sm">Join</button>
            </form>
            <div style={{fontSize: 11, color: "#6b7280", marginTop: 10}}>We never share your email. Unsubscribe anytime.</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 TECHFRONT HUB. RC 1234567. All rights reserved.</div>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
