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
            image="https://media.istockphoto.com/id/1497909628/photo/cat-and-dog-sitting-together-on-meadow.jpg?s=612x612&w=0&k=20&c=zpZE3_h5u8pnkml1qPyX31KXuIodY8KQ1bwkH7BWc_Q="
            buttonText="View"
            link="https://github.com/706ash/Dmqp_Pawesome"
          />
          <Projects
            title="StrayNet"
            description="A platform to help stray animals."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-PQjs13MrTgM_6ltN6CQy6BqsOqYCDkXbw&s"
            buttonText="View"
            link="https://github.com/706ash/Internspirit-Kryptonauts"
          />
          <Projects
            title="Mini Music Player (Currently Working)"
            description="A simple and lightweight music player app."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBn8s7aQJ0SRQEMbmrszpgvLT32Y67pcpoA&s"

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
