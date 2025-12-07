"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Layout, PenTool, Monitor, Box, Rocket, Layers } from "lucide-react";

const allServices = [
    {
        icon: Layout,
        title: "Architectural Design",
        description: "From concept sketches to full-scale construction drawings, we design structures that stand the test of time and style. Our approach is deeply rooted in modernism and futuristic aesthetics.",
    },
    {
        icon: Box,
        title: "Interior Design",
        description: "We curate interiors that reflect your personality while maximizing space and functionality. Our designs are minimal, clean, and accented with futuristic elements.",
    },
    {
        icon: Monitor,
        title: "3D Modelling & Visualization",
        description: "Experience your project before it's built. We provide hyper-realistic 3D renders using the latest ray-tracing technology.",
    },
    {
        icon: PenTool,
        title: "Conceptual Art",
        description: "Need a vision for a sci-fi movie set or a futuristic city block? Our concept art team pushes the boundaries of imagination.",
    },
    {
        icon: Rocket,
        title: "Space Planning",
        description: "Efficient use of space is critical. We optimize layouts for residential and commercial properties to ensuring seamless flow.",
    },
    {
        icon: Layers,
        title: "Exterior Modifications",
        description: "Revamp your existing facade with a modern facelift. We specialize in transforming dated exteriors into contemporary masterpieces.",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">Our Services</h1>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
                        Comprehensive design solutions for the built environment. We handle everything from the first sketch to the final polish.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-neon-blue/50 hover:bg-white/10 transition-all duration-300 rounded-sm"
                        >
                            <div className="text-neon-blue mb-6">
                                <service.icon size={40} />
                            </div>
                            <h3 className="text-2xl font-bold font-display uppercase mb-4">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
