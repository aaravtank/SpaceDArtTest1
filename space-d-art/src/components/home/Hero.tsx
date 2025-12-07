"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/assets/hero-image.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-neon-blue font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                        Premium Architectural Design
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-none">
                        Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">D</span> Art
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                        Where futuristic vision meets architectural reality. We craft spaces that defy convention and define tomorrow.
                    </p>

                    <motion.div
                        className="flex flex-col md:flex-row gap-4 justify-center pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link href="/portfolio">
                            <Button variant="neon" size="lg">
                                View Projects
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="group">
                                Start a Project
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
