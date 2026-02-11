import React, { useState, useEffect } from 'react';
import {
    Terminal, Calendar, Users, Download, ChevronLeft, ChevronRight, Github, Instagram, Mail, ExternalLink, Code,
    Database, Cpu, Zap, Activity
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const EVENTS_DATA = [
    {
        id: 1,
        title: "Tech-Hunt 2024",
        date: "15 Oct 2024",
        description: "A coding treasure hunt where participants used logic and algorithms to solve complex clues.",
        driveLink: "https://drive.google.com",
        images: [
            "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Workshop on AI/ML",
        date: "20 Nov 2024",
        description: "Introductory session on Python and Neural Networks for beginners, covering real-world applications.",
        driveLink: "https://drive.google.com",
        images: [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop"
        ]
    }
];

const COORDINATORS = [
    { name: "Aman Kumar", role: "Club Lead", branch: "CSE '25" },
    { name: "Priya Singh", role: "Tech Lead", branch: "ECE '25" },
    { name: "Rahul Verma", role: "Event Manager", branch: "CSE '26" },
    { name: "Sneha Gupta", role: "Content Head", branch: "IT '26" },
];

// --- COMPONENTS ---

// 1. Image Slider
const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full h-64 md:h-80 group overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
            <div style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full bg-center bg-cover duration-500 ease-in-out transition-all transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-4 z-10 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-green-500 hover:text-black transition-all backdrop-blur-sm"
                onClick={prevSlide}>
                <ChevronLeft size={24} />
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-4 z-10 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-green-500 hover:text-black transition-all backdrop-blur-sm"
                onClick={nextSlide}>
                <ChevronRight size={24} />
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center py-2 gap-2 z-10">
                {images.map((_, slideIndex) => (
                    <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)}
                        className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'w-8 bg-green-500' : 'w-2 bg-slate-500/50'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

// 2. Navbar
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-slate-950/95 backdrop-blur-lg border-b border-green-500/20 py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="relative">
                            <div
                                className="absolute -inset-1 bg-green-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200">
                            </div>
                            <Terminal className="relative text-green-500 w-8 h-8" />
                        </div>
                        <span
                            className="text-white font-mono text-xl font-bold tracking-wider group-hover:text-green-400 transition-colors">
                            dBuggerz<span className="text-green-500 animate-pulse">_</span>
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Home', 'About', 'Events', 'Team', 'Contact'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`}
                                    className="relative text-slate-300 hover:text-green-400 px-3 py-2 text-sm font-medium font-mono group overflow-hidden">
                                    <span className="relative z-10">&lt;{item} /&gt;</span>
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="bg-slate-900/50 inline-flex items-center justify-center p-2 rounded-md text-slate-400
                    hover:text-white hover:bg-slate-800 focus:outline-none border border-slate-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <div className="text-xl font-bold">✕</div> : <div className="text-xl font-bold">☰</div>}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-950 border-b border-green-500/20 animate-in slide-in-from-top-5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Home', 'About', 'Events', 'Team', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-green-400 hover:bg-slate-900 block px-3 py-2 rounded-md text-base
                font-medium font-mono"
                            >
                                &lt;{item} /&gt;
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

// 3. Advanced Hero Section (Infinite Typing & Scanning Line)
const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "Initialize. Debug. Deploy.",
        "Code. Create. Innovate.",
        "BCE Bhagalpur's Finest.",
        "Turning Coffee into Code."
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            // Typing speeds
            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <div id="home" className="relative h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div
                className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
            </div>

            {/* Grid */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            </div>

            {/* Scanning Line Effect */}
            <div
                className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(34,197,94,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_4s_linear_infinite]">
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-700">
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
                <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-md animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 font-mono text-xs md:text-sm tracking-wide">BCE Bhagalpur's Official Coding
                        Club</span>
                </div>

                <h1
                    className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    dBuggerz<span className="text-green-500">.</span>
                </h1>

                <div className="h-20 mb-8 flex items-center justify-center">
                    <p className="text-xl md:text-4xl text-slate-300 font-mono">
                        <span className="text-green-500 mr-2">&gt;</span>
                        {text}
                        <span
                            className="inline-block w-3 h-8 md:h-10 ml-1 bg-green-500 animate-[blink_1s_infinite] align-middle"></span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <a href="#events"
                        className="group relative px-8 py-4 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12">
                        </div>
                        <span className="relative flex items-center gap-2">
                            Explore Events
                            <ChevronRight size={18} />
                        </span>
                    </a>
                    <a href="#contact"
                        className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:border-green-500 hover:text-green-500 transition-all hover:bg-slate-900/50 backdrop-blur-sm">
                        Join Community
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full p-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto animate-scroll-down"></div>
                </div>
            </div>
        </div>
    );
};

// 4. About Section
const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="text-green-500 font-mono text-2xl">01.</span> Who We Are
                            </h2>
                            <div className="h-1 w-20 bg-green-500 rounded-full"></div>
                        </div>

                        <p className="text-slate-300 leading-relaxed text-lg">
                            We are the <strong className="text-white">premier technical club</strong> of BCE Bhagalpur. We don't
                            just write code; we solve problems. Our aim is to build a strong coding culture on campus.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Regular Hackathons & Coding Contests",
                                "Hands-on Workshops (Web, App, AI/ML)",
                                "Open Source Contribution Guidance",
                                "Industry Expert Sessions"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-400">
                                    <span className="text-green-500">▹</span> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 pt-4">
                            <div
                                className="flex-1 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors group">
                                <Code className="text-green-500 mb-2 group-hover:scale-110 transition-transform" />
                                <h4 className="text-white font-bold">Development</h4>
                                <p className="text-xs text-slate-500 mt-1">Web, App & Blockchain</p>
                            </div>
                            <div
                                className="flex-1 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors group">
                                <Database className="text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                                <h4 className="text-white font-bold">DSA & CP</h4>
                                <p className="text-xs text-slate-500 mt-1">Logic Building</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                        </div>
                        <div
                            className="relative bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm text-slate-300 shadow-2xl">
                            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-xs text-slate-500">main.js</span>
                            </div>

                            <div className="space-y-1 overflow-hidden">
                                <p><span className="text-purple-400">const</span> <span
                                    className="text-yellow-200">dBuggerz</span> = <span
                                        className="text-purple-400">new</span> <span className="text-blue-400">Club</span>({'{'}
                                </p>
                                <p className="pl-4"><span className="text-blue-300">college</span>: <span
                                    className="text-green-300">'BCE Bhagalpur'</span>,</p>
                                <p className="pl-4"><span className="text-blue-300">founded</span>: <span
                                    className="text-orange-300">2023</span>,</p>
                                <p className="pl-4"><span className="text-blue-300">skills</span>: [</p>
                                <p className="pl-8 text-green-300">'C++', 'Python', 'React', 'Cloud'</p>
                                <p className="pl-4">],</p>
                                <p className="pl-4"><span className="text-blue-300">status</span>: <span
                                    className="text-green-400">'Active & Hiring'</span></p>
                                <p>{'});'}</p>
                                <br />
                                <p><span className="text-purple-400">function</span> <span
                                    className="text-blue-400">innovate</span>() {'{'}</p>
                                <p className="pl-4"><span className="text-purple-400">while</span>(<span
                                    className="text-yellow-200">true</span>) {'{'}</p>
                                <p className="pl-8 text-slate-400">// Keep building cool stuff</p>
                                <p className="pl-8">dBuggerz.<span className="text-blue-400">buildFuture</span>();</p>
                                <p className="pl-4">{'}'}</p>
                                <p>{'}'}</p>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div
                            className="absolute -right-6 top-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl hidden md:block animate-bounce delay-700">
                            <Zap className="text-yellow-400 w-6 h-6" />
                        </div>
                        <div
                            className="absolute -left-6 bottom-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl hidden md:block animate-bounce">
                            <Activity className="text-green-400 w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 5. Events Section
const Events = () => {
    return (
        <section id="events" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-green-500">02.</span> Recent Events
                    </h2>
                    <p className="text-slate-400">
                        Where code meets creativity. Check out what we've been up to recently.
                    </p>
                </div>

                <div className="space-y-20">
                    {EVENTS_DATA.map((event, index) => (
                        <div key={event.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                gap-10 items-start`}>

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                                    <div
                                        className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none">
                                    </div>
                                    <ImageSlider images={event.images} />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 pt-4">
                                <div className="flex items-center gap-2 text-green-500 font-mono text-sm mb-2">
                                    <Calendar size={16} />
                                    <span>{event.date}</span>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    {event.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span
                                        className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 font-mono">#BCEBhagalpur</span>
                                    <span
                                        className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 font-mono">#CodingClub</span>
                                    <span
                                        className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300 font-mono">#Tech</span>
                                </div>

                                <a href={event.driveLink} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-green-600 hover:text-black transition-all font-semibold group">
                                    <Download size={18} className="group-hover:animate-bounce" />
                                    Download Resources / Photos
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 6. Team Section
const Team = () => {
    return (
        <section id="team" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-green-500">03.</span> The Core Team
                    </h2>
                    <p className="text-slate-400">The brains behind the bugs.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {COORDINATORS.map((member, index) => (
                        <div key={index}
                            className="group relative bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                            </div>

                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <div
                                    className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity">
                                </div>
                                <div
                                    className="relative w-full h-full bg-slate-800 rounded-full flex items-center justify-center text-slate-400 overflow-hidden border-2 border-slate-700 group-hover:border-green-500 transition-colors">
                                    <Users size={40} />
                                </div>
                            </div>

                            <div className="text-center relative z-10">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                                    {member.name}</h3>
                                <p className="text-green-500 font-mono text-xs uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-slate-500 text-sm mb-6">{member.branch}</p>

                                <div className="flex justify-center gap-4 border-t border-slate-800 pt-4">
                                    <a href="#"
                                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                                        <Github size={18} />
                                    </a>
                                    <a href="#"
                                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                                        <Mail size={18} />
                                    </a>
                                    <a href="#"
                                        className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 7. Footer
const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
            {/* Footer background gradient */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-green-500/10 blur-[100px] pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Terminal className="text-green-500 w-8 h-8" />
                    <span className="text-white font-mono text-2xl font-bold">dBuggerz Club</span>
                </div>

                <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg">
                    Bhagalpur College of Engineering, Bhagalpur. <br />
                    <span className="text-sm opacity-75">Connect with us to stay updated with latest tech events.</span>
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="#"
                        className="group p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-green-500 transition-all hover:-translate-y-1">
                        <Instagram size={24} className="text-slate-400 group-hover:text-pink-500 transition-colors" />
                    </a>
                    <a href="#"
                        className="group p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-green-500 transition-all hover:-translate-y-1">
                        <Github size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                    <a href="#"
                        className="group p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-green-500 transition-all hover:-translate-y-1">
                        <Mail size={24} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </a>
                </div>

                <div
                    className="text-slate-600 text-sm font-mono border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2024 dBuggerz Club, BCE Bhagalpur.</p>
                    <p className="flex items-center gap-1">
                        Made with <Code size={14} /> by Club Members
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Main App Component with Global Styles for animations
const App = () => {
    return (
        <>
            <div
                className="bg-slate-950 min-h-screen text-slate-200 selection:bg-green-500 selection:text-black scroll-smooth font-sans">
                <Navbar />
                <Hero />
                <About />
                <Events />
                <Team />
                <Footer />
            </div>
        </>
    );
};

export default App;
