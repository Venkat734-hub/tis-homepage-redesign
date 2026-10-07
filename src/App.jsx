import { useTheme } from './hooks/useTheme'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { IntroSection } from './components/IntroSection'
import { AcademicsSection } from './components/AcademicsSection'
import { CampusSection } from './components/CampusSection'
import { AdmissionsSection } from './components/AdmissionsSection'
import { TestimonialSection } from './components/TestimonialSection'
import { Footer } from './components/Footer'
import './styles.css'

export default function App() {
  const [theme, setTheme] = useTheme()
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <IntroSection />
        <AcademicsSection />
        <CampusSection />
        <AdmissionsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  )
}
