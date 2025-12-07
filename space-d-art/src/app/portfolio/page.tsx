"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Nebula Residence",
        category: "Residential",
        image: "/assets/project-1.jpg",
    },
    {
        id: 2,
        title: "Orbital Tower",
        category: "Commercial",
        image: "/assets/project-2.jpg",
    },
    {
        id: 3,
        title: "Eco-Hub Alpha",
        category: "Conceptual",
        image: "/assets/project-3.jpg",
    },
    {
        id: 4,
        title: "Lunar Lounge",
        category: "Interior",
        image: "/assets/project-4.jpg",
    },
    {
        id: 5,
        title: "Zenith Complex",
        category: "Commercial",
        image: "/assets/project-5.jpg",
    },
    {
        id: 6,
        title: "Mars Habitat",
        category: "Conceptual",
        image: "/assets/hero-image.jpg",
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">Portfolio</h1>
                    <p className="max-w-xl mx-auto text-zinc-400 text-lg">
                        A selection of our finest work across architectural, interior, and conceptual design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden aspect-video cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <h4 className="text-3xl font-bold text-white font-display uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.title}
                                </h4>
                                <p className="text-neon-blue uppercase tracking-widest text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {project.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
