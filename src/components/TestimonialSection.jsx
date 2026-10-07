import { Reveal } from './Reveal'
import { testimonials } from '../data/siteData'

export function TestimonialSection() {
  return (
    <section className="section testimonials">
      <div className="shell">
        <Reveal><p className="section-kicker">05 / From the parents</p></Reveal>
        <Reveal delay={80}><h2 className="testimonial-title">A school is a place to <em>belong.</em></h2></Reveal>
        <div className="testimonial-grid">{testimonials.map((item, index) => <Reveal key={item.name} delay={120 + index * 60}><blockquote className="testimonial-card"><span className="quote-mark">“</span><p>{item.quote}</p><footer><strong>{item.name}</strong><span>{item.relation}</span></footer></blockquote></Reveal>)}</div>
      </div>
    </section>
  )
}
