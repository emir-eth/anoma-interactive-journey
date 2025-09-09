'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { dict, Lang } from '@/app/i18n/dict';

export default function AnomaJourney() {
  const [lang, setLang] = useState<Lang>('en');
  const t = dict[lang];

  return (
    <div className="min-h-screen selection:bg-red-600/40 selection:text-white">
      <Header lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Intro t={t} />
      <HowItWorks t={t} />
      <Journey t={t} />
      <WhyAnoma t={t} />
      <Roadmap t={t} />
      <NamadaRelation t={t} />
      <CTA t={t} />
      <Footer t={t} />
    </div>
  );
}

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40 bg-zinc-900/30 border-b border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/assets/anoma-logo.svg" alt="Anoma Logo" width={36} height={36} />
          <span className="font-semibold">Anoma</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#how" className="hover:text-zinc-100">{dict[lang].ctaHow}</a>
          <a href="#why" className="hover:text-zinc-100">{dict[lang].ctaWhy}</a>
          <a href="#roadmap" className="hover:text-zinc-100">Roadmap</a>
          <Link href="https://x.com/anoma" className="hover:text-zinc-100" target="_blank" rel="noopener noreferrer">X</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang)=>void }) {
  return (
    <div className="inline-flex items-center rounded-2xl border border-zinc-700 bg-zinc-800/60 overflow-hidden">
      <button onClick={()=>setLang('tr')} className={`px-3 py-1 text-sm ${lang==='tr'?'bg-red-600 text-white':'text-zinc-200 hover:bg-zinc-700'}`}>TR</button>
      <button onClick={()=>setLang('en')} className={`px-3 py-1 text-sm ${lang==='en'?'bg-red-600 text-white':'text-zinc-200 hover:bg-zinc-700'}`}>EN</button>
    </div>
  );
}

function Hero({ t }: { t: typeof dict[keyof typeof dict] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 opacity-20 pointer-events-none">
        <GridGlow />
      </motion.div>
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        <motion.h1 initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
          className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {t.heroTitle}
        </motion.h1>
        <motion.p initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}}
          className="mt-4 text-lg md:text-xl text-zinc-300 max-w-3xl">
          {t.heroDesc}
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#how" className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold">{t.ctaHow}</a>
          <a href="#why" className="px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition font-semibold">{t.ctaWhy}</a>
        </div>
      </div>
      <motion.div style={{ y }} className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-tr from-red-600/30 via-fuchsia-500/20 to-pink-500/30 blur-3xl" />
    </section>
  );
}

function Intro({ t }: { t: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{t.introTitle}</h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">{t.introP1}</p>
          <p className="mt-3 text-zinc-300 leading-relaxed">{t.introP2}</p>
        </div>
        <Card>
          <p className="text-sm text-zinc-400">{t.example}</p>
          <p className="mt-2 text-lg text-zinc-100 font-semibold">{t.exampleText}</p>
          <p className="mt-3 text-zinc-400">Anoma, uygun karşı tarafları ve yolları bulup işlemi çözümler.</p>
        </Card>
      </div>
    </section>
  );
}

function HowItWorks({ t }: { t: any }) {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">{t.howTitle}</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {t.steps.map((s: any, i: number) => (
          <motion.div key={s.title} initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.4}} transition={{delay:i*0.05, duration:0.5}}
            className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <div className="text-sm uppercase tracking-wide text-zinc-400">Step {i+1}</div>
            <div className="mt-2 text-xl font-semibold">{s.title}</div>
            <p className="mt-3 text-zinc-300 leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Journey({ t }: { t: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">{t.journeyTitle}</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {t.journeyBlocks.map((b: any, i: number) => (
          <motion.div key={b.h} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.3}} transition={{delay:i*0.05, duration:0.5}}
            className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6">
            <div className="text-lg font-semibold">{b.h}</div>
            <p className="mt-2 text-zinc-300">{b.p}</p>
            <ul className="mt-4 text-sm text-zinc-400 space-y-1">
              <li>• Hedef & kısıtlar</li>
              <li>• Köprüler & likidite</li>
              <li>• Zincirler arası uyum</li>
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyAnoma({ t }: { t: any }) {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{t.whyTitle}</h2>
          <p className="mt-4 text-zinc-300">Web2 benzeri akıcı deneyim ile merkeziyetsiz mimari birleşir.</p>
          <ul className="mt-6 space-y-3">
            {t.whyPoints.map((p: any) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-zinc-300">{p.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Card>
          <h3 className="text-lg font-semibold">For Developers</h3>
          <p className="mt-2 text-zinc-300">Anoma; intent discovery, solving, and settlement building blocks. Focus on your app.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Intent Discovery</Tag>
            <Tag>Solver Network</Tag>
            <Tag>Settlement</Tag>
            <Tag>Interoperability</Tag>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Roadmap({ t }: { t: any }) {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-bold">{t.roadmapTitle}</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {t.roadmap.map((it: any, i: number) => (
          <motion.div key={it.phase} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.4}} transition={{delay:i*0.05, duration:0.5}}
            className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6">
            <div className="text-sm text-zinc-400">{it.phase}</div>
            <div className="mt-1 text-xl font-semibold">{it.title}</div>
            <p className="mt-2 text-zinc-300">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NamadaRelation({ t }: { t: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{t.namadaTitle}</h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">{t.namadaP}</p>
          <p className="mt-3 text-zinc-400 text-sm">Not/Note: This is a community-built explainer based on public info.</p>
        </div>
        <Card>
          <h3 className="text-lg font-semibold">Quick Summary</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>• Anoma: intent-centric OS & protocol</li>
            <li>• Namada: privacy-focused network with close ties</li>
            <li>• Shared research & interoperability outlook</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function CTA({ t }: { t: any }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-zinc-800/60 bg-gradient-to-r from-zinc-900/60 to-zinc-900/20 p-8 md:p-12 text-center shadow-[0_0_40px_-20px_rgba(244,63,94,0.35)]">
        <h3 className="text-2xl md:text-3xl font-bold">{t.ctaHeadline}</h3>
        <p className="mt-3 text-zinc-300">{t.ctaSub}</p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <Link href="https://anoma.net/build" target="_blank" className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold">{
            t.ctaStart
          }</Link>
          <Link href="https://anoma.net/learn" target="_blank" className="px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition font-semibold">Learn</Link>
          <Link href="https://x.com/anoma" target="_blank" className="px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition font-semibold" rel="noopener noreferrer">X</Link>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: any }) {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-16">
      <div className="border-t border-zinc-800/60 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-zinc-400">
        <div className="text-sm flex items-center gap-2">
          © {new Date().getFullYear()}
          <span className="flex items-center gap-1">
	  <span>powered by</span>
            <Image
              src="/icons/x-logo.png"
              alt="X logo"
              width={14}
              height={14}
              className="inline-block"
            />
            <Link
              href="https://x.com/emir_ethh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 font-medium"
            >
              {t.footerLeft}
            </Link>
          </span>
        </div>
        <div className="flex gap-4 text-sm">
          <a className="hover:text-zinc-200" href="#roadmap">Roadmap</a>
          <a className="hover:text-zinc-200" href="#how">How it works</a>
          <a className="hover:text-zinc-200" href="#">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm shadow-[0_0_40px_-20px_rgba(244,63,94,0.35)]">
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-xl bg-zinc-800 px-3 py-1 text-sm">
      {children}
    </span>
  );
}

function GridGlow() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#ef4444" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="url(#g)" />
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.2">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={"v"+i} x1={(i + 1) * 5} y1="0" x2={(i + 1) * 5} y2="100" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={"h"+i} x1="0" y1={(i + 1) * 5} x2="100" y2={(i + 1) * 5} />
        ))}
      </g>
    </svg>
  );
}
