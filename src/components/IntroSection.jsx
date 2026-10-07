import { Reveal } from './Reveal'
import { ArrowUpRight } from './Icons'

export function IntroSection() {
  return (
    <section className="section intro" id="about">
      <div className="shell intro-grid">
        <Reveal><p className="section-kicker">01 / The Tulas way</p></Reveal>
        <Reveal delay={80} className="intro-main">
          <h2>“We feel supported in what we do and nudged further to do more.”</h2>
          <p>At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.</p>
          <a className="text-link" href="#academics" data-cursor>See how we learn <ArrowUpRight size={16} /></a>
        </Reveal>
        <Reveal delay={150} className="intro-visual">
          <div className="image-panel image-panel--green">
            <div className="image-panel-glow" />
            <span className="panel-label">THE MODERN GURUKUL</span>
            <span className="panel-year">EST. 2012</span>
            <div className="panel-symbol">T</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
