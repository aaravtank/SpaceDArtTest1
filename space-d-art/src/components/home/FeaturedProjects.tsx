"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Placeholder images - in production these would be local assets or Cloudinary URLs
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
    }
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-space-dark">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2 text-sm">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                            Selected Works
                        </h3>
                    </div>
                    <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-white hover:text-neon-blue transition-colors uppercase tracking-widest text-sm">
                        View All Projects <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <h4 className="text-3xl font-bold text-white font-display uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.title}
                                </h4>
                                <p className="text-neon-blue uppercase tracking-widest text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {project.category}
                                </p>
                                <Link
                                    href={`/portfolio`}
                                    className="mt-6 px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-100"
                                >
                                    View Detail
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-white hover:text-neon-blue transition-colors uppercase tracking-widest text-sm">
                        View All Projects <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
