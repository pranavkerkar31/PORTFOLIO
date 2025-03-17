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
            image="./catdog.jpg"
            buttonText="View"
            link="https://youtu.be/6vkLMbO0dBc?si=03tq9deIskdSS2CN"
          />

          <Projects
            title="StrayNet"
            description="A platform to help stray animals."
            image="straynet.jpg"
            buttonText="View"
            link="http://pawsnet.vercel.app"
          />
          <Projects
            title="Mini Music Player (Currently Working)"
            description="A simple and lightweight music player app."
            image="./logo.jpg"

            buttonText="View"
            link=""
          />
        </div>
      </div>

      <div className="px-4 py-28">
        <h2 className="text-3xl font-bold text-center mb-6">Certification & Extracurriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <Certification title="Python Course" platform="NPTEL" year="2023" />
          <Certification title="Won 3rd place at Kshitij" platform="DBCE" year="2024" />
          <Certification title="Participated in InternSpirit Hackathon" platform="Trash.Co & FiiRE" year="2025" />
          <Certification title="Participated in Snapcode Showdown" platform="IIT Goa" year="2025" />
          <Certification title="Google Virtual AIML Internship" platform="Eduskills" year="2024" />
          <Certification title="Participated in HackIndia" platform="CSharp | SingularityNet" year="2025" />
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
