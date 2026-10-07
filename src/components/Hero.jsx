import { Reveal } from './Reveal'
import { ArrowDown, ArrowUpRight } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-grid" />
      <div className="hero-content shell">
        <Reveal>
          <p className="eyebrow">Dehradun · CBSE · Residential & Day School</p>
        </Reveal>
        <Reveal delay={80}>
          <h1>Where curiosity becomes <em>character.</em></h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="hero-copy">TIS is one of India’s top boarding and day schools in Dehradun. A modern gurukul where academic excellence, holistic development and leadership grow together.</p>
        </Reveal>
        <Reveal delay={220}>
          <div className="hero-actions">
            <a className="button button--primary" href="#admissions" data-cursor>Explore admissions <ArrowUpRight size={17} /></a>
            <a className="button button--ghost" href="#about" data-cursor>Discover Tulas <ArrowDown size={17} /></a>
          </div>
        </Reveal>
      </div>
      <div className="hero-side-note"><span>Scroll to explore</span><ArrowDown size={16} /></div>
      <div className="hero-image-card" data-cursor>
        <img src="https://tis.edu.in/_next/static/media/ladyInPink.c358aa8f.png" alt="Tula's International School student" />
        <div className="hero-image-caption"><span>Learning beyond classrooms</span><strong>01 / 04</strong></div>
      </div>
    </section>
  )
}
