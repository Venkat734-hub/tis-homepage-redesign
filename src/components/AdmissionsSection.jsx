import { useState } from 'react'
import { Reveal } from './Reveal'
import { ArrowUpRight, Plus } from './Icons'

const faqs = [
  ['Which classes can apply?', 'Registrations are open for Classes IV–IX and XI, subject to the school’s current admission cycle and seat availability.'],
  ['How does admission work?', 'The process includes application and registration, supporting documents, assessments and evaluation, followed by enrolment and confirmation.'],
  ['Is TIS a boarding school?', 'Yes. Tulas International School is a co-educational residential and day school in Dehradun.'],
]

export function AdmissionsSection() {
  const [active, setActive] = useState(0)
  return (
    <section className="section admissions" id="admissions">
      <div className="shell admissions-grid">
        <Reveal><div className="admission-intro"><p className="section-kicker">04 / Admissions</p><p className="display-label">Your next chapter starts here.</p><h2>Give curiosity a <em>place to grow.</em></h2><p>Ready to discover Tulas? Explore the admissions journey and connect with the school team.</p><a className="button button--primary" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer" data-cursor>Start your application <ArrowUpRight size={17} /></a></div></Reveal>
        <Reveal delay={120}><div className="faq-list"><p className="faq-label">Questions parents ask</p>{faqs.map(([question, answer], index) => <div className={`faq ${active === index ? 'faq--active' : ''}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)} data-cursor><span>{question}</span><Plus size={17} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></Reveal>
      </div>
    </section>
  )
}
