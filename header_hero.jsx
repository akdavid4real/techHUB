// Header + Hero + Trusted bar
const { useState, useEffect, useRef } = React;

function TopBar() {
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

function Header({ onLogin }) {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="brand" aria-label="TECHFRONT HUB">
          <span className="brand-mark">TF</span>
          <span className="brand-name">TECHFRONT<span className="dot">.</span>HUB</span>
        </a>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#" className="has-caret">Courses</a>
          <a href="#">Learning</a>
          <a href="#" className="has-caret">Programs</a>
          <a href="#">Corporate</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>
        <div className="header-cta">
          <button className="btn btn-ghost btn-sm" onClick={onLogin}>Login</button>
          <a href="#enroll" className="btn btn-primary btn-sm">Enroll Now <I.Arrow size={14} /></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="pill"><span className="dot-live"/> Live cohort · June 3 intake open</span>
            <h1>Future-ready digital skills for <span className="accent">career, business &amp; innovation.</span></h1>
            <p className="lede">TECHFRONT HUB trains Nigeria's next generation of data analysts, engineers and builders — through cohort-based bootcamps, 1-on-1 coaching and corporate programs designed around real hiring signals.</p>
            <div className="hero-ctas">
              <a href="#courses" className="btn btn-primary btn-lg">Explore Courses <I.Arrow size={16} /></a>
              <a href="#learning" className="btn btn-ghost btn-lg"><I.Play size={14} /> Start Learning</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>12,400+</strong><span>Learners trained</span></div>
              <div className="hero-stat"><strong>48</strong><span>Active courses</span></div>
              <div className="hero-stat"><strong>87%</strong><span>Job placement</span></div>
              <div className="hero-stat"><strong>4.8★</strong><span>Average rating</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="browser">
              <div className="browser-top">
                <span className="browser-dot r"/><span className="browser-dot y"/><span className="browser-dot g"/>
                <span className="browser-url">learn.techfronthub.ng/dashboard</span>
              </div>
              <div className="browser-body">
                <div className="lms-sidebar">
                  <div style={{fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5}}>My Learning</div>
                  <div className="row active"><span className="icn"/> Dashboard</div>
                  <div className="row"><span className="icn"/> My Courses</div>
                  <div className="row"><span className="icn"/> Assignments</div>
                  <div className="row"><span className="icn"/> Live Sessions</div>
                  <div className="row"><span className="icn"/> Certificates</div>
                  <div style={{flex: 1}}/>
                  <div className="row" style={{background: "rgba(37,99,235,0.18)", color: "#dbeafe"}}>
                    <span className="icn" style={{background: "#60a5fa"}}/> Upgrade
                  </div>
                </div>
                <div className="lms-main">
                  <div className="lms-card alt">
                    <h4>Data Analytics — Week 6</h4>
                    <div className="bar"><div style={{width: "62%"}}/></div>
                    <div className="meta"><span>Power BI · Dashboards</span><span>62%</span></div>
                  </div>
                  <div className="lms-card">
                    <h4>Applied AI & Automation</h4>
                    <div className="bar"><div style={{width: "28%"}}/></div>
                    <div className="meta"><span>Prompt engineering</span><span>28%</span></div>
                  </div>
                  <div className="lms-card">
                    <h4>Cloud Fundamentals</h4>
                    <div className="bar"><div style={{width: "84%"}}/></div>
                    <div className="meta"><span>AWS basics</span><span>84%</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-floating cert">
              <div className="ic">✓</div>
              <div>
                <div style={{fontSize: 12, color: "var(--ink-400)"}}>Certificate earned</div>
                <div>Power BI · Level 2</div>
              </div>
            </div>
            <div className="hero-floating score">
              <div className="ic">★</div>
              <div>
                <div style={{fontSize: 12, color: "var(--ink-400)"}}>Cohort average</div>
                <div>92 / 100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <div className="trusted">
      <div className="container">
        <div className="label">Trusted by teams & learners from</div>
        <div className="trusted-row">
          <div className="trusted-logo"><span className="sq"/> Sterling Bank</div>
          <div className="trusted-logo"><span className="sq" style={{borderRadius: "50%"}}/> Flutterwave</div>
          <div className="trusted-logo"><span className="sq" style={{transform: "rotate(45deg)"}}/> MTN</div>
          <div className="trusted-logo"><span className="sq"/> Access Holdings</div>
          <div className="trusted-logo"><span className="sq" style={{borderRadius: "50%"}}/> Paystack</div>
          <div className="trusted-logo"><span className="sq" style={{transform: "rotate(45deg)"}}/> Andela</div>
          <div className="trusted-logo"><span className="sq"/> Interswitch</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TopBar, Header, Hero, Trusted });
