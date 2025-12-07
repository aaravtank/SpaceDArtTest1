"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

const team = [
    {
        name: "Alex Vance",
        role: "Principal Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Sarah Chen",
        role: "Lead Interior Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Marcus Neo",
        role: "3D Visualization Expert",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8">About Us</h1>
                    <p className="text-xl text-zinc-300 leading-relaxed mb-12">
                        Space D Art is where architectural precision meets artistic chaos. We believe that the spaces of tomorrow should not just be built, but curated with a vision that extends beyond the horizon.
                    </p>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0">
                            <Image
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop"
                                fill
                                alt="Our Philosophy"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 -z-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-4 text-sm">Our Philosophy</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6">Designing for the Void</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            We draw inspiration from the cosmos—vast, mysterious, and infinitely beautiful. Our designs strip away the unnecessary, leaving behind only what is essential and impactful.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            Whether it&apos;s a minimal residential pod or a sprawling commercial complex, we apply the same rigorous standards of functional aesthetics.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 container mx-auto px-6">
                <h2 className="text-4xl font-display font-bold uppercase text-center mb-16">The Crew</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-blue transition-colors duration-300">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="text-xl font-bold font-display uppercase">{member.name}</h4>
                            <p className="text-neon-blue text-sm uppercase tracking-widest mt-2">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
