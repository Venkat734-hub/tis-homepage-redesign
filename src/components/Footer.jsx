import { ArrowUpRight } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top"><div><p className="section-kicker">TULA'S INTERNATIONAL SCHOOL</p><h2>Let's do it<br /><em>with Tulas.</em></h2></div><a className="footer-circle" href="https://tis.edu.in/contact-us" target="_blank" rel="noreferrer" data-cursor>Talk to us <ArrowUpRight size={20} /></a></div>
        <div className="footer-bottom"><div><strong>Tula's International School</strong><span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand</span></div><div><span>+91-9837983791</span><span>info@tis.edu.in</span></div><div><span>© 2026 Tula's International School</span><span>Designed as a frontend assessment concept</span></div></div>
      </div>
    </footer>
  )
}
