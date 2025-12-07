"use client";

import { motion } from "framer-motion";
import { Layout, PenTool, Monitor, Box } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Layout,
        title: "Architectural Design",
        description: "Futuristic and minimal architectural concepts tailored to your vision.",
    },
    {
        icon: Box,
        title: "Interior Design",
        description: "Immersive interior spaces that blend aesthetics with functionality.",
    },
    {
        icon: Monitor,
        title: "3D Modelling",
        description: "High-fidelity 3D renderings and walkthroughs of your future space.",
    },
    {
        icon: PenTool,
        title: "Conceptual Art",
        description: "Space-themed conceptual designs pushing the boundaries of imagination.",
    },
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-space-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2 text-sm">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                            Designing the <br /> Future
                        </h3>
                    </div>
                    <p className="text-zinc-400 max-w-md text-right md:text-left">
                        We specialize in creating bespoke environments that merge art, technology, and architecture using cutting-edge design principles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-neon-blue/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-colors duration-300">
                                <service.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-display uppercase">{service.title}</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link
                                href="/services"
                                className="text-white text-xs uppercase tracking-widest border-b border-neon-blue pb-1 hover:text-neon-blue transition-colors"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
