import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-space-dark border-t border-white/5 py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-display tracking-widest uppercase">
                            Space<span className="text-neon-blue">D</span>Art
                        </h2>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Premium architectural & interior design studio crafting futuristic spaces for tomorrow&apos;s living.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Explore</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Services</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li>Architectural Design</li>
                            <li>Interior Design</li>
                            <li>3D Modelling</li>
                            <li>Conceptual Art</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Connect</h3>
                        <div className="flex items-center gap-4 text-zinc-400">
                            <Link href="#" className="hover:text-neon-blue transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-neon-blue transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-neon-blue transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-neon-blue transition-colors"><Linkedin size={20} /></Link>
                        </div>
                        <div className="mt-6 text-sm text-zinc-500">
                            <p>hello@spacedart.com</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Space D Art. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-zinc-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-zinc-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
