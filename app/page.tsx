import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certification from '@/components/certification'; // Removed duplicate import
import logo from '@app/logo.png'; // 
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      
      <div>
        <Skills />
      </div>

      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Projects
            title="Pawesome"
            description="A pet adoption and care platform."
            image="https://api.deepai.org/job-view-file/f766e233-e176-4d37-aba3-d23b1251e868/outputs/output.jpg"
            buttonText="View"
            link="https://github.com/706ash/Dmqp_Pawesome"
          />
          <Projects
            title="StrayNet"
            description="A platform to help stray animals."
            image="https://api.deepai.org/job-view-file/2ea56f5f-941e-40e0-b816-0422485e17c0/outputs/output.jpg"
            buttonText="View"
            link="https://github.com/706ash/Internspirit-Kryptonauts"
          />
          <Projects
            title="Mini Music Player (Currently Working)"
            description="A simple and lightweight music player app."
            image="https://api.deepai.org/job-view-file/135533b5-b532-4228-a62c-d36d9256f4b0/outputs/output.jpg"

            buttonText="View"
            link=""
          />
        </div>
      </div>

      <div className="px-4 py-28">
        <h2 className="text-3xl font-bold text-center mb-6">Certification & Extracurricular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <Certification title="Python Course" platform="NPTEL" year="2023" />
          <Certification title="Won 3rd place at Kshitij" platform="DBCE" year="2024" />
          <Certification title="Participated in InternSpirit Hackathon" platform="Trash.Co & FiiRE" year="2025" />
          <Certification title="Participated in Snapcode Showdown" platform="IIT Goa" year="2025" />
          <Certification title="Google Virtual AIML Internship" platform="Eduskills" year="2024" />
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
