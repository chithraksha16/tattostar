"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Sarah Johnson",
            feedback:
                "The team delivered a beautiful, high-performing website that exceeded our expectations. The design is modern, responsive, and incredibly fast.",
        },
        {
            id: 2,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "David Miller",
            feedback:
                "Professional from start to finish. Communication was excellent, deadlines were met, and our website now converts visitors into customers.",
        },
        {
            id: 3,
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Emily Carter",
            feedback:
                "Their attention to detail is outstanding. The animations, SEO optimization, and overall user experience have significantly improved our online presence.",
        },
        {
            id: 4,
            image: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Michael Anderson",
            feedback:
                "Working with them was effortless. They understood our vision and transformed it into a stunning website that our clients love.",
        },
        {
            id: 5,
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            name: "Sophia Williams",
            feedback:
                "Our website loads incredibly fast and looks amazing on every device. We've received countless compliments from customers.",
        },
        {
            id: 6,
            image: "https://randomuser.me/api/portraits/men/52.jpg",
            name: "James Wilson",
            feedback:
                "Highly recommended! Their expertise in design and development helped elevate our brand and improve our business credibility online.",
        },
    ];

    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden py-28">
            {/* Background Blur */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-5">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="mb-3 text-cyan-400 font-semibold uppercase tracking-[0.25em]">
                        Testimonials
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        What Our Clients Say
                    </h2>
                </motion.div>

                {/* Card */}

                <div className="relative mx-auto max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonialsData[active].id}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14"
                        >
                            <Quote className="absolute right-10 top-10 h-14 w-14 text-cyan-500/20" />

                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={testimonialsData[active].image}
                                    alt={testimonialsData[active].name}
                                    width={90}
                                    height={90}
                                    className="rounded-full border-4 border-cyan-500 object-cover"
                                />

                                <div className="mt-6 flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            fill="#06b6d4"
                                            className="h-5 w-5 text-cyan-500"
                                        />
                                    ))}
                                </div>

                                <p className="mt-8 text-lg leading-8 text-neutral-300 max-w-2xl">
                                    "{testimonialsData[active].feedback}"
                                </p>

                                <h3 className="mt-8 text-2xl font-bold text-white">
                                    {testimonialsData[active].name}
                                </h3>

                                <p className="text-neutral-500">Verified Client</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Avatars */}

                <div className="mt-14 flex flex-wrap justify-center gap-5">
                    {testimonialsData.map((item, index) => (
                        <motion.button
                            key={item.id}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActive(index)}
                            className={`relative transition-all ${active === index
                                    ? "scale-110"
                                    : "opacity-50 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={60}
                                height={60}
                                className={`rounded-full object-cover border-2 transition-all ${active === index
                                        ? "border-cyan-500"
                                        : "border-white/10"
                                    }`}
                            />

                            {active === index && (
                                <motion.div
                                    layoutId="activeRing"
                                    className="absolute inset-0 rounded-full border-2 border-cyan-500"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Progress */}

                <div className="mt-10 flex justify-center gap-2">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${active === index
                                    ? "w-10 bg-cyan-500"
                                    : "w-2 bg-white/20"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;