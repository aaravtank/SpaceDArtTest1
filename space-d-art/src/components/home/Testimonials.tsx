"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Elena G.",
        role: "CEO, TechVision",
        content: "Space D Art transformed our headquarters into a visionary masterpiece. The team's attention to futuristic detail is unmatched.",
        rating: 5,
    },
    {
        name: "Marcus T.",
        role: "Private Homeowner",
        content: "Living in a Space D Art home feels like living in the future. The minimalism and lighting design are simply breathtaking.",
        rating: 5,
    },
    {
        name: "Sarah L.",
        role: "Director, ArtEx",
        content: "They understood our need for a gallery that feels like a spacecraft. The result is an award-winning space that draws crowds.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2 text-sm">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                        Client signals
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900/30 border border-white/5 p-8 rounded-sm backdrop-blur-sm"
                        >
                            <div className="flex gap-1 mb-4 text-neon-blue">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-zinc-300 italic mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                            <div>
                                <h4 className="text-white font-bold font-display uppercase">{testimonial.name}</h4>
                                <p className="text-zinc-500 text-xs uppercase tracking-widest">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
