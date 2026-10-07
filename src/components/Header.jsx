import { useState } from 'react'
import { navItems } from '../data/siteData'
import { ArrowUpRight, Menu, Moon, Sun, X } from './Icons'

export function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Tula's International School home">
        <img src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" alt="Tula's International School" />
      </a>

      <nav className={`desktop-nav ${open ? 'desktop-nav--open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>

      <div className="header-actions">
        <button className="icon-button theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} data-cursor>
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
        <a className="header-cta" href="#admissions" data-cursor>Apply now <ArrowUpRight size={16} /></a>
        <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} data-cursor>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
