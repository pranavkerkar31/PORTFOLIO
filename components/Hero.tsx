"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "@/app/profile.jpg";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-black text-white flex justify-center items-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 justify-center">
        
        {/* Left Side: Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/10">
            <Image
              src={profilePic}
              alt="Pranav Kerkar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side: Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left space-y-4 max-w-[700px]"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Hi, I'm Pranav Kerkar
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            A passionate full-stack developer specializing in building exceptional digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
