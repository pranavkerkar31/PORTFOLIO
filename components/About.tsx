import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">About Me</h2>
        </div>

        {/* Centered Two Column Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center border-t-2 border-primary pt-8">

          {/* About Section - Left */}
          <div className="text-center md:text-left">
            <p className="text-lg mb-4">
            I’m a passionate frontend developer currently expanding my skills into backend development with Firebase and Next.js.
            </p>
            <p className="text-lg">
            Beyond coding, I enjoy exploring new technologies, contributing to open-source projects.
            </p>
          </div>


          {/* Education & Experience - Right */}
          <div>
            <h3 className="text-xl font-semibold text-center md:text-left mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Bhatikar Model High School (SSC)</h4>
                <p className="text-muted-foreground">2010-2020</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Shree Damodar Higher Secondary School of Science (HSSC)</h4>
                <p className="text-muted-foreground">2020-2022</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Don Bosco College of Engineering (Btech)</h4>
                <p className="text-muted-foreground">2022-Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
