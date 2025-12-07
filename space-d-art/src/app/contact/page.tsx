"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">Contact Us</h1>
                    <p className="max-w-xl mx-auto text-zinc-400 text-lg">
                        Ready to start your journey? Reach out to us for a consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-8 border border-white/10 rounded-sm"
                    >
                        <h3 className="text-2xl font-bold font-display uppercase mb-8">Send a Transmission</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500">First Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500">Last Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors text-white" placeholder="Tell us about your project..." />
                            </div>

                            <Button type="submit" variant="neon" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-2xl font-bold font-display uppercase mb-8">Coordinates</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-neon-blue">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-1">Office</h4>
                                        <p className="text-zinc-400">123 Nebula Boulevard, Sector 7<br />San Francisco, CA 94103</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-neon-blue">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-1">Phone</h4>
                                        <p className="text-zinc-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-neon-blue">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-1">Email</h4>
                                        <p className="text-zinc-400">contact@spacedart.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video w-full bg-zinc-800 rounded-sm overflow-hidden relative border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                                fill
                                alt="Map Location"
                                className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="bg-black/80 px-4 py-2 text-xs uppercase tracking-widest text-white border border-neon-blue">View on Google Maps</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
