'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Heart,
  Shield,
  Target,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from 'lucide-react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };
const Button = ({ className = '', children, ...props }: ButtonProps) => (
  <button
    className={`px-5 py-3 rounded-2xl shadow-sm text-sm font-semibold transition hover:shadow-md active:scale-[0.99] ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-2xl p-6 shadow-sm border border-gray-100 bg-white/70 backdrop-blur ${className}`}>
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-[#FAFAFF] to-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center text-xs font-bold">M</div>
            <span className="text-lg font-bold tracking-tight">MTVNAL</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#pillars" className="hover:opacity-70">Pillars</a>
            <a href="#products" className="hover:opacity-70">Products</a>
            <a href="#join" className="hover:opacity-70">Join</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/mtvnalstudio/" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Instagram size={16} /></a>
            <a aria-label="YouTube" href="#" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Youtube size={16} /></a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Linkedin size={16} /></a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Twitter size={16} /></a>
            <Button className="bg-black text-white">Coming Soon</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12 grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-xl border border-gray-200 mb-4">
              <Sparkles size={14} /> Forward minded. Impact driven.
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Build a life you can stand behind
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">
              MTVNAL is a platform for ambition and consistency. Here, we build tools that transform ambition into consistent action, create content that inspires focus and resilience, and design frameworks that turn progress into results. From affirmations that shift mindset to tools that build consistency, MTVNAL exists to move you closer to the life you envision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-black text-white inline-flex items-center gap-2">Start free <ArrowRight size={16} /></Button>
              <Button className="bg-white border border-gray-200">Coming soon</Button>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Aligned action. Daily momentum. Lasting change.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 shadow-inner" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-white shadow-lg border border-gray-100 grid place-items-center">
                <div className="text-center p-4">
                  <div className="text-3xl font-extrabold">30</div>
                  <div className="text-xs text-gray-500">Day streak ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">The MTVNAL approach</h2>
          <p className="mt-2 text-gray-600">Three simple pillars that keep you consistent and kind to yourself.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-start gap-3">
              <Shield className="mt-1" size={20} />
              <div>
                <h3 className="font-semibold">Made to uplift</h3>
                <p className="mt-1 text-sm text-gray-600">Put your vision into motion right away.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Target className="mt-1" size={20} />
              <div>
                <h3 className="font-semibold">Daily momentum</h3>
                <p className="mt-1 text-sm text-gray-600">Micro plans that add up.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Heart className="mt-1" size={20} />
              <div>
                <h3 className="font-semibold">Compassion driven</h3>
                <p className="mt-1 text-sm text-gray-600">Win by growing your compassion. Growth that uplifts you and the people around you.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Tools that help you act</h2>
            <p className="mt-2 text-gray-300 max-w-prose">Templates, planners, and guided sessions that make consistency simple.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md rounded-xl">
              <div className="text-sm text-black">Digital</div>
              <h3 className="mt-1 text-lg font-semibold text-black">30 day Growth Planner</h3>
              <p className="mt-1 text-sm text-black">A focused system for two quick sessions a day. Track habits, energy, and wins.</p>
              <Button className="mt-4 bg-black text-white">Preview</Button>
            </Card>
            <Card className="bg-white shadow-md rounded-xl">
              <div className="text-sm text-black">Guided</div>
              <h3 className="mt-1 text-lg font-semibold text-black">Evening Reset Audio</h3>
              <p className="mt-1 text-sm text-black">A five minute wind down to clear the day and set calm intention for tomorrow.</p>
              <Button className="mt-4 bg-black text-white">Listen</Button>
            </Card>
            <Card className="bg-white shadow-md rounded-xl">
              <div className="text-sm text-gray-300">Community</div>
              <h3 className="mt-1 text-lg font-semibold text-black">MTVNAL Collective</h3>
              <p className="mt-1 text-sm text-black">A friendly space to share micro wins and keep each other accountable.</p>
              <Button className="mt-4 bg-black text-white">Join waitlist</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About MTVNAL</h2>
            <p className="mt-4 text-gray-600">
              MTVNAL exists for people who want to rise higher with clarity, focus, and tools that truly work. It is built on the belief that ambition should feel empowering, not overwhelming, and that growth is strongest when it is done with purpose.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1">•</span> Clear copy that speaks to real goals</li>
              <li className="flex items-start gap-2"><span className="mt-1">•</span> Clean design that feels calm and premium</li>
              <li className="flex items-start gap-2"><span className="mt-1">•</span> Accessible pricing and generous free tier</li>
            </ul>
          </div>
          <Card>
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-1 text-sm text-gray-600">Daily quotes, affirmations, and more to help you become the best you.</p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Connect this form to Beehiiv or ConvertKit');
              }}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Button className="bg-black text-white">Subscribe</Button>
            </form>
            <p className="mt-2 text-xs text-gray-500">By subscribing, you agree to our terms and privacy policy.</p>
          </Card>
        </div>
      </section>

      {/* Quotes */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Quotes</h2>
          <p className="mt-2 text-gray-600">Timeless words that fuel clarity, focus, and daily momentum.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: 'The journey of a thousand miles begins with a single step.', name: 'Lao Tzu' },
            { quote: 'Knowing yourself is the beginning of all wisdom.', name: 'Aristotle' },
            { quote: 'Discipline is the bridge between goals and accomplishment.', name: 'Jim Rohn' },
          ].map((t, i) => (
            <Card key={i}>
              <p className="text-sm">{t.quote}</p>
              <div className="mt-3 text-xs text-gray-500">{t.name}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to start?</h2>
          <p className="mt-2 text-gray-600">Give yourself thirty days. We will guide the rest.</p>
          <div className="mt-6 inline-flex gap-3">
            <Button className="bg-black text-white inline-flex items-center gap-2">
              Coming Soon <ArrowRight size={16} />
            </Button>
            <Button className="bg-white border border-gray-200">See all tools</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-black text-white grid place-items-center text-[10px] font-bold">M</div>
              <span className="text-base font-bold tracking-tight">MTVNAL</span>
            </div>
            <p className="mt-3 text-gray-600">Forward minded growth products and content.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#about" className="hover:opacity-70">About</a></li>
              <li><a href="#products" className="hover:opacity-70">Products</a></li>
              <li><a href="#" className="hover:opacity-70">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#" className="hover:opacity-70">Terms</a></li>
              <li><a href="#" className="hover:opacity-70">Privacy</a></li>
              <li><a href="#" className="hover:opacity-70">Cookies</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Stay in touch</div>
            <p className="mt-3 text-gray-600">Get one thoughtful email each week.</p>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Connect this form to Beehiiv or ConvertKit');
              }}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Button className="bg-black text-white">Join</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-gray-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} MTVNAL</span>
            <span>Built with care</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
