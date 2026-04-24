import React, { useState, useEffect } from 'react';
import { I } from './Icons';
import { DATA } from '../constants/data';

function flyerBg(hue) {
  return {
    background: `linear-gradient(135deg, oklch(0.96 0.03 ${hue}), oklch(0.88 0.08 ${hue}))`,
  };
}

export function CourseCard({ c }) {
  return (
    <div className="course-card">
      <div className="course-flyer" style={flyerBg(c.hue)}>
        <span className={"flyer-tag" + (c.tagHot ? " hot" : "")}>{c.tag}</span>
        <span className="flyer-badge">{c.code}</span>
        <div className="flyer-title">{c.title}</div>
      </div>
      <div className="course-body">
        <p>{c.desc}</p>
        <div className="course-meta">
          <span>{c.duration}</span><span className="sep"/>
          <span>{c.lessons} lessons</span><span className="sep"/>
          <span>{c.level}</span>
        </div>
      </div>
      <div className="course-foot">
        <div className="course-price">
          {c.old && <span className="old">{c.old}</span>}
          {c.price}
        </div>
        <a href="#" className="btn btn-dark btn-sm">Enroll Now <I.Arrow size={12}/></a>
      </div>
    </div>
  );
}

export function CourseSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = DATA.COURSES.length;
  const visible = 3.4;
  const maxIdx = Math.max(0, total - Math.floor(visible));

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx(i => (i + 1) > maxIdx ? 0 : i + 1);
    }, 4000);
    return () => clearInterval(t);
  }, [paused, maxIdx]);

  const step = (dir) => {
    setIdx(i => Math.max(0, Math.min(maxIdx, i + dir)));
  };

  return (
    <section id="courses">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Featured courses</div>
            <h2>Cohorts shipping this quarter</h2>
            <p>Hand-picked programs starting in the next 8 weeks. Each cohort is capped at 30 learners to keep instruction tight.</p>
          </div>
          <a href="#" className="btn btn-ghost">View all courses <I.Arrow size={14}/></a>
        </div>
        <div className="slider-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="slider-nav">
            <button onClick={() => step(-1)} aria-label="Previous"><I.Chev dir="left"/></button>
            <button onClick={() => step(1)} aria-label="Next"><I.Chev dir="right"/></button>
          </div>
          <div className="slider-viewport">
            <div className="slider-track" style={{ transform: `translateX(calc(${-idx} * (320px + 20px)))` }}>
              {DATA.COURSES.map((c, i) => <CourseCard key={i} c={c} />)}
            </div>
          </div>
          <div className="slider-dots">
            {Array.from({length: maxIdx + 1}).map((_, i) => (
              <button key={i} className={i === idx ? "active" : ""} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-card">
          <div>
            <div className="eyebrow" style={{color: "var(--brand-200)"}}>Course catalog · 2026</div>
            <h2>Every course, syllabus and price in one PDF.</h2>
            <p>48 active courses across 8 tracks, with outcomes, project lists, duration and pricing. Share it with your team or HR for approval.</p>
            <div style={{display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap"}}>
              <a href="#" className="btn btn-primary btn-lg"><I.Download size={16}/> Download Full Brochure (PDF)</a>
              <a href="#" className="btn btn-ghost btn-lg" style={{background: "transparent", borderColor: "rgba(255,255,255,0.18)", color: "#fff"}}>Email it to me</a>
            </div>
            <div className="catalog-meta">
              <span>📄 42 pages</span>
              <span>⬇ 3.8 MB</span>
              <span>🔄 Updated April 2026</span>
            </div>
          </div>
          <div className="catalog-pdf">
            <span className="tag">PDF · 42 pages</span>
            <h4>TECHFRONT HUB — Course Catalog 2026</h4>
            <div style={{fontSize: 12, color: "var(--ink-400)"}}>Outcomes · Schedules · Pricing</div>
            <div className="rows">
              <div className="pdf-row"><span>01 · AI & Automation</span><b>12 courses</b></div>
              <div className="pdf-row"><span>02 · Data Analytics</span><b>18 courses</b></div>
              <div className="pdf-row"><span>03 · DevOps</span><b>9 courses</b></div>
              <div className="pdf-row"><span>04 · Web Development</span><b>16 courses</b></div>
              <div className="pdf-row"><span>05 · Digital Marketing</span><b>11 courses</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UdemyGrid() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Also on Udemy</div>
            <h2>Self-paced courses, globally</h2>
            <p>Prefer learning on your own time? Our instructors also publish on Udemy — grab a course and keep lifetime access.</p>
          </div>
          <a href="#" className="btn btn-ghost">Our Udemy profile <I.ArrowUpRight size={14}/></a>
        </div>
        <div className="udemy-grid">
          {DATA.UDEMY.map((u, i) => (
            <div key={i} className="u-card">
              <div className="u-thumb" style={flyerBg(u.hue)}>
                <div className="play"></div>
                <span className="lbl">{u.hours}</span>
              </div>
              <div className="u-body">
                <h4>{u.title}</h4>
                <div className="u-author">{u.author}</div>
                <div className="u-rating">
                  <b>{u.rating}</b>
                  <span className="u-stars">★★★★★</span>
                  <span className="count">({u.count})</span>
                </div>
                <div className="u-foot">
                  <span className="u-price">{u.price}</span>
                  <a href="#" className="btn-link" style={{fontSize: 13, fontWeight: 600}}>View on Udemy <I.ArrowUpRight size={12}/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="section-head" style={{textAlign: "center", flexDirection: "column", alignItems: "center"}}>
          <div>
            <div className="eyebrow">Why TECHFRONT HUB</div>
            <h2 style={{textAlign: "center"}}>Built for outcomes, not just completion.</h2>
            <p style={{margin: "0 auto"}}>We're measured by what our learners go on to do — promotions, placements, products shipped.</p>
          </div>
        </div>
        <div className="why-grid">
          {DATA.WHY.map((w, i) => {
            const Ic = I[w.icon];
            return (
              <div key={i} className="why-card">
                <div className="why-icn"><Ic size={22}/></div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Categories() {
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

export function Packages() {
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

export function Testimonials() {
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

export function FinalCTA() {
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
