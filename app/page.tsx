import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certificate from '@/components/certification';
import Certification from '@/components/certification';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />

      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">

          <Projects
            title="Pawesome"
            description="A pet adoption and care platform."
            image="data:image/jpeg;base64,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"
            buttonText="View"
            link="https://pawesome.com" // Added link prop
          />

          <Projects
            title="Mini Music Player (Currently Working)"
            description="A simple and lightweight music player app."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pC_ZbzRamXsXBj_IP1S66BO7b-w26OBsI7BOPf043zGOeHe44yFxMh0&s"
            buttonText="View"
            link="" // Added link prop
          />
        </div>
      </div>

      <div className="px-4 py-28">
        <h2 className="text-3xl font-bold text-center mb-6">Certification & ExtraCurriculam</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <Certification title="Python Course"
            platform='NPTEL'
            year='2023' />
          <Certification title="Won 3rd place at Kshitij"
            platform='DBCE'
            year='2024' />
          <Certification title="Participated in InternSpirit Hackathon"
            platform='Trash.Co & FiiRE'
            year='2025' />
              <Certification title="Participated in Snapcode Showdown"
            platform='IIT Goa'
            year='2025' />
             <Certification title="Google Virtual AIML Internship"
            platform='Eduskills'
            year='2024' />
        </div>
      </div>





      <Contact />
      <Footer />
    </main>
  );
}
