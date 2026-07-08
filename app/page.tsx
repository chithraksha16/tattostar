"use client"
import Button from "@/components/ui/Button";
import {
  motion,
  useAnimate,
  stagger,
  useInView,
} from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Custom Tattooing",
      image: "/images/services/custom-tattooing.jpg",
      description:
        "Bring your ideas to life with custom tattoos designed to reflect your personality and style. From minimal designs to full sleeves, our artists create timeless pieces with precision and care.",
      cta: "Read More",
    },
    {
      id: 2,
      title: "Professional Body Piercing",
      image: "/images/services/body-piercing.jpg",
      description:
        "Experience safe and hygienic body piercings performed with premium jewelry and sterilized equipment. We prioritize comfort, precision, and proper aftercare for every client.",
      cta: "Read More",
    },
    {
      id: 3,
      title: "Tattoo Cover-Up",
      image: "/images/services/tattoo-cover-up.jpg",
      description:
        "Turn an old or unwanted tattoo into artwork you'll be proud to wear. Our artists specialize in creative cover-up designs that blend seamlessly with your skin.",
      cta: "Read More",
    },
    {
      id: 4,
      title: "Tattoo Touch-Up",
      image: "/images/services/tattoo-touch-up.jpg",
      description:
        "Restore the beauty of your existing tattoo with professional touch-up services. We enhance faded ink, sharpen details, and revive colors for a fresh new look.",
      cta: "Read More",
    },
    {
      id: 5,
      title: "Permanent Makeup",
      image: "/images/services/permanent-makeup.jpg",
      description:
        "Enhance your natural beauty with long-lasting cosmetic tattooing, including brows, eyeliner, and lip blush, performed with precision and artistic expertise.",
      cta: "Read More",
    },
    {
      id: 6,
      title: "Creative Nail Art",
      image: "/images/services/nail-art.jpg",
      description:
        "Express your style with custom nail designs crafted to suit every occasion. From minimalist elegance to bold artistic creations, we deliver flawless results.",
      cta: "Read More",
    },
    {
      id: 7,
      title: "Henna Art",
      image: "/images/services/henna-art.jpg",
      description:
        "Celebrate special occasions with beautifully handcrafted henna designs. We create traditional and modern patterns perfect for weddings, festivals, and celebrations.",
      cta: "Read More",
    },
    {
      id: 8,
      title: "Tooth Gems",
      image: "/images/services/tooth-gems.jpg",
      description:
        "Add a touch of sparkle to your smile with professionally applied tooth gems. Safe, stylish, and non-invasive, they're the perfect way to express your individuality.",
      cta: "Read More",
    },
  ];

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.5,
  });

  const headingWords = "Expert Services, Crafted Around Your Style".split(" ");

  useEffect(() => {
    if (!isInView) return;

    const animateHeading = async () => {
      await animate(
        ".section-caption",
        {
          opacity: [0, 1],
          y: [20, 0],
          filter: ["blur(8px)", "blur(0px)"],
        },
        {
          duration: 0.6,
          ease: "easeOut",
        }
      );

      await animate(
        ".section-word",
        {
          opacity: [0, 1],
          y: [35, 0],
          filter: ["blur(14px)", "blur(0px)"],
          scale: [0.96, 1],
        },
        {
          duration: 0.8,
          delay: stagger(0.08),
          ease: [0.22, 1, 0.36, 1],
        }
      );
    };

    animateHeading();
  }, [isInView, animate]);

  return (
    <div>
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
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
          />
          <motion.path
            d="M40 100 Q100 40 160 100 Q100 160 40 100 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
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
              className="w-full sm:w-auto text-white bg-[#F97316] hover:bg-[#FB923C] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
            >
              Book Appointment
            </Button>
            <Button
              size="md"
              className="w-full sm:w-auto text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
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

      <div className="w-full sm:px-20 px-5 py-10 bg-white flex sm:flex-row flex-col justify-center sm:gap-10 gap-5">
        <Image
          className="drop-shadow-xl"
          src="/tattoheronext-removebg-preview.png"
          alt="full body tatto image"
          width={368}
          height={433}
        />
        <div className="w-full flex flex-col justify-center py-5 space-y-5 sm:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Since 2015</p>
          <h3 className="sm:text-4xl text-xl font-bold">Professional Artists. Exceptional Tattoo Experiences.</h3>
          <p className="text-[18px] text-gray-900">
            Our experienced tattoo artists combine creativity, precision, and craftsmanship to create custom designs that reflect your personality. Every session is carried out in a safe, hygienic, and welcoming environment, ensuring an experience you'll remember as much as the tattoo itself.
          </p>
          <Button size="md" className="self-start bg-black text-white hover:bg-gray-950 transition-colors hover:scale-105">
            Read more
          </Button>
        </div>
      </div>

      <div className="w-full bg-[#171717] min-h-screen">
        <div ref={scope} className="w-full text-center py-14">
          <span
            className="section-caption inline-block text-sm tracking-[0.25em] font-semibold text-[#F97316] uppercase opacity-0"
            style={{
              transform: "translateY(20px)",
              filter: "blur(8px)",
            }}
          >
            WHAT WE DO
          </span>

          <h3 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            {headingWords.map((word, index) => (
              <span
                key={index}
                className="section-word inline-block mr-3 opacity-0"
                style={{
                  transform: "translateY(35px) scale(0.96)",
                  filter: "blur(14px)",
                }}
              >
                {word}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
}