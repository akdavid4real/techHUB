// Categories, Packages, Testimonials, Final CTA, Footer
function Categories() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Course categories</div>
            <h2>Pick a track, ship real work.</h2>
            <p>Each category maps to a career outcome, not just a topic list.</p>
          </div>
          <a href="#" className="btn btn-ghost">See all tracks <I.Arrow size={14}/></a>
        </div>
        <div className="cats-grid">
          {DATA.CATS.map((c, i) => {
            const Ic = I[c.icon];
            return (
              <a key={i} href="#" className="cat-card" style={{textDecoration: "none", color: "inherit"}}>
                <div className="top">
                  <div style={{width: 40, height: 40, borderRadius: 10, background: "var(--brand-50)", color: "var(--brand-600)", display: "grid", placeItems: "center", border: "1px solid var(--brand-100)"}}>
                    <Ic size={20}/>
                  </div>
                  <span className="num">{c.n}</span>
                </div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="bar">
                  <span>{c.count}</span>
                  <span className="arrow"><I.Arrow size={14}/></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="packages" id="enroll">
      <div className="container">
        <div className="section-head" style={{flexDirection: "column", textAlign: "center", alignItems: "center"}}>
          <div>
            <div className="eyebrow">Training packages</div>
            <h2 style={{textAlign: "center"}}>Four ways to learn with us.</h2>
            <p style={{margin: "0 auto"}}>From cohort-based bootcamps to full-team corporate programs — pick the format that fits your goal.</p>
          </div>
        </div>
        <div className="pkg-grid">
          {DATA.PACKAGES.map((p, i) => {
            const Ic = I[p.icon];
            return (
              <div key={i} className={"pkg" + (p.featured ? " featured" : "")}>
                {p.badge && <span className="pkg-badge">{p.badge}</span>}
                <div className="pkg-ic"><Ic size={22}/></div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="pkg-price">
                  <strong>{p.price}</strong>
                  <span className="per">{p.per}</span>
                </div>
                <ul>
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#" className={"btn " + (p.featured ? "btn-primary" : "btn-ghost")} style={{marginTop: "auto", justifyContent: "center"}}>
                  {p.featured ? "Book a session" : "Learn more"} <I.Arrow size={14}/>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Student stories</div>
            <h2>Careers built in months, not years.</h2>
            <p>A few alumni, in their own words.</p>
          </div>
          <a href="#" className="btn btn-ghost">Read all stories <I.Arrow size={14}/></a>
        </div>
        <div className="t-grid">
          {DATA.TESTIMONIALS.map((t, i) => (
            <div key={i} className="t-card">
              <div className="t-stars">★★★★★</div>
              <div className="quote">"{t.quote}"</div>
              <div className="person">
                <div className="avatar">{t.initials}</div>
                <div><b>{t.name}</b><span>{t.role}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="eyebrow" style={{color: "var(--brand-200)"}}>Ready when you are</div>
        <h2>Start your tech journey today.</h2>
        <p>Join 12,400+ learners who traded uncertain futures for working careers in data, engineering and AI.</p>
        <div className="btns">
          <a href="#" className="btn btn-primary btn-lg">Enroll Now <I.Arrow size={16}/></a>
          <a href="#" className="btn btn-lg" style={{background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff"}}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

Object.assign(window, { Categories, Packages, Testimonials, FinalCTA, Footer });
