"use client"
import Button from "@/components/ui/Button";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative bg-[#171717] overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.08),transparent_60%)]" />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Animated tattoo linework accent — centered behind content */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 sm:w-105 sm:h-105 md:w-140 md:h-140 lg:w-170 lg:h-170 opacity-[0.07] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity,repeatType:"reverse" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType:"reverse", delay: 0.4 }}
        />
        <motion.path
          d="M40 100 Q100 40 160 100 Q100 160 40 100 Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity,repeatType:"reverse", delay: 0.8 }}
        />
      </svg>

      <motion.main
        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-screen flex justify-center items-center flex-col max-w-4xl mx-auto px-6 py-24 sm:py-0 space-y-5 sm:space-y-6"
      >
        <span className="flex items-center gap-2 px-4 sm:px-5 py-1.5 border border-[#FB923C] rounded-full text-white text-xs sm:text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FB923C]" />
          Premium Tattoo Art
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-black leading-tight text-center">
          From Fine Line To Full Sleeves, We Create Tattoos That Are{" "}
          <span className="text-[#FB923C]">Uniquely Yours.</span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base text-center max-w-2xl">
          Transform your ideas into timeless works of art. Our experienced
          tattoo artists specialize in creating custom designs that reflect
          your personality, style, and story—all in a safe, professional, and
          welcoming environment.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Button
            size="md"
            className="w-full sm:w-auto bg-[#F97316] hover:bg-[#FB923C] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
          >
            Book Appointment
          </Button>
          <Button
            size="md"
            className="w-full sm:w-auto border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Tatto
          </Button>
        </div>

        {/* Stat row */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-6 pt-6 sm:pt-8 text-gray-400 text-xs sm:text-sm text-center">
          <span>500+ Tattoos</span>
          <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
          <span>10+ Years Experience</span>
          <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
          <span>4.9★ Rated</span>
        </div>
      </motion.main>
    </div>
  );
}