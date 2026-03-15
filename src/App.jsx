import Header from './components/Header';
import Hero from './components/Hero';
import SectionDigital from './components/SectionDigital';
import SectionJourney from './components/SectionJourney';
import SectionCtaGreen from './components/SectionCtaGreen';
import SectionBackoffice from './components/SectionBackoffice';
import SectionPricing from './components/SectionPricing';
import SectionCatalogue from './components/SectionCatalogue';
import SectionStats from './components/SectionStats';
import SectionCtaRed from './components/SectionCtaRed';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />        
        <section id="a-propos">
          <SectionDigital />
        </section>
          <SectionJourney />
        <SectionCtaGreen />
        <SectionBackoffice />
        <section id="tarifs">
          <SectionPricing />
        </section>
        <section id="jeux">
        <SectionCatalogue />
        </section>
        <SectionStats />
        <SectionCtaRed />
      </main>
      <Footer />
    </>
  );
}
