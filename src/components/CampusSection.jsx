import { Reveal } from './Reveal'
import { sports, stats } from '../data/siteData'

export function CampusSection() {
  return (
    <section className="section campus" id="campus">
      <div className="shell">
        <div className="section-heading-row light-row"><Reveal><p className="section-kicker">03 / Campus life</p></Reveal><Reveal delay={70}><span className="section-number">PLAY · CREATE · LEAD</span></Reveal></div>
        <div className="campus-feature">
          <Reveal className="campus-copy"><p className="display-label">Beyond academics</p><h2>School should feel like an <em>adventure.</em></h2><p>At Tulas, curiosity leads, creativity thrives, and every day brings something new to discover. Students grow through sport, culture, collaboration and experiences that shape confidence.</p></Reveal>
          <Reveal delay={120} className="campus-art"><div className="campus-photo"><div className="photo-shape photo-shape--a" /><div className="photo-shape photo-shape--b" /><div className="photo-center">16<span>+</span><small>sports</small></div></div></Reveal>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => <Reveal key={stat.label} delay={100 + index * 60}><div className="stat"><strong>{stat.value}</strong><span>{stat.label}</span></div></Reveal>)}
        </div>
        <Reveal className="sports-strip" delay={120}><div><span className="sports-title">Explore the playground</span><p>{sports.join('  ·  ')}</p></div><div className="sports-badge">16+<span>sports</span></div></Reveal>
      </div>
    </section>
  )
}
