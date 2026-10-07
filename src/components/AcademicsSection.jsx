import { Reveal } from './Reveal'
import { ArrowUpRight } from './Icons'

const pillars = [
  ['CBSE curriculum', 'A structured learning journey shaped around reasoning, analytical thinking and holistic growth.'],
  ['Experiential learning', 'Project-based learning, art integration, educational trips and real-world exploration.'],
  ['Technology enabled', 'Digital classrooms, immersive experiences and online assessment tools support student engagement.'],
]

export function AcademicsSection() {
  return (
    <section className="section academics" id="academics">
      <div className="shell">
        <div className="section-heading-row">
          <Reveal><p className="section-kicker">02 / Learning</p></Reveal>
          <Reveal delay={80}><span className="section-number">IV — XII</span></Reveal>
        </div>
        <Reveal delay={100}>
          <div className="academics-heading"><h2>Learning that moves <em>with</em> the child.</h2><p>Our curriculum understands and supports the journey of every child, combining academic rigour with curiosity, creativity and practical knowledge.</p></div>
        </Reveal>
        <div className="pillar-grid">
          {pillars.map(([title, copy], index) => (
            <Reveal key={title} delay={140 + index * 70}>
              <article className="pillar-card" data-cursor><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><a href="#admissions" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
