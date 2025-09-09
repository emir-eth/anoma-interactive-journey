export type Lang = 'tr' | 'en';

export const dict = {
  tr: {
    heroTitle: "Web3'ün Niyet-Merkezli OS'i: Anoma",
    heroDesc: "Anoma, farklı blokzincirlerini tek bir geliştirme ortamında birleştirerek niyet-merkezli uygulamalar için dağınık bir işletim sistemi sunar. Kullanıcı sonuç niyetini söyler, çözücüler gerisini halleder.",
    ctaHow: "Nasıl Çalışır?",
    ctaWhy: "Neden Anoma?",
    ctaStart: "Başla",
    introTitle: "Kısaca Anoma",
    introP1: "Anoma; niyet (intent) kavramını merkeze alan mimarisiyle, dApp'lerde kullanıcıların tek tek işlem adımları yerine ulaşmak istedikleri sonucu ifade etmelerini sağlar.",
    introP2: "Dağıtık çözücü ağı, farklı zincir ve protokoller arasında eşleştirme, çözüm ve tasfiye (settlement) süreçlerini üstlenir.",
    example: "Örnek niyet",
    exampleText: "100 USDC'yi ETH'ye çevir ve cüzdanımda en az ücretle sonuçlansın. Ethereum veya başka bir zincirde olabilir.",
    howTitle: "Nasıl Çalışır?",
    steps: [
      {title: "1) Niyet Oluşturma & Yayma", body: "Kullanıcı uygulamada hedefini ve tercihlerinin sınırlarını belirtir. Niyet ağı (gossip) aracılığıyla çözücülere ulaşır."},
      {title: "2) Çözücü Ağı & Eşleştirme", body: "Merkeziyetsiz çözücüler; likidite, köprüler ve servisler arasında en uygun eşleşmeyi arar, çok-zincirli planı oluşturur."},
      {title: "3) Tasfiye (Settlement)", body: "Seçilen yol, bağlı blokzincir(ler) üzerinde sonuçlandırılır. Uygulama karmaşıklığı gizler ve kullanıcı sonucu görür."}
    ],
    whyTitle: "Neden Anoma?",
    whyPoints: [
      {title: "Her Yerde Niyet", body: "Genelleştirilmiş niyet standardı ile tek uygulama, çok zincir: dApp'ler kullanıcıya zincir karmaşıklığını hissettirmez."},
      {title: "Birleşik Geliştirme Ortamı", body: "Geliştiriciler, farklı zincir ve servisleri tek bir OS altında kullanır; entegrasyon ve bakım maliyetleri azalır."},
      {title: "İnsan-Merkezli Deneyim", body: "Kullanıcılar işlem detayları yerine hedefi söyler; çözücüler en iyi yolu bulur."}
    ],
    journeyTitle: "Anoma'ya Yolculuk",
    journeyBlocks: [
      {h: "Niyetini Söyle", p: "İşlemin teknik ayrıntılarıyla uğraşmadan amacını tanımla. Limitler, süre, ücret, zincir tercihi gibi sınırları ekleyebilirsin."},
      {h: "Keşif & Eşleşme", p: "Anoma’nın çözümleyicileri, çoklu kaynaklar arasında senin niyetinle uyumlu en iyi yolu araştırır."},
      {h: "Uygulama & Tasfiye", p: "Belirlenen plan bir veya birden fazla zincirde sonuçlandırılır. Sen sadece sonucu görürsün."},
      {h: "Geri Bildirim Döngüsü", p: "Sonuç sonrası ölçümler, gelecek çözümlerin kalitesini artırmak için sisteme geri beslenir."}
    ],
    roadmapTitle: "Yol Haritası",
    roadmap: [
      {phase: "Faz 1", title: "Ethereum Ekosistemi Odaklı Başlangıç", text: "Niyet-merkezli uygulama çerçevesi, servis/likidite entegrasyonları ve geliştirici arayüzleri."},
      {phase: "Faz 2", title: "Çok-Zincir Yayılım", text: "Ekosistem genişlemesi; daha fazla L1/L2 bağlantısı, geliştirici araçları ve solver çeşitliliği."},
      {phase: "Faz 3", title: "Ana Ağ ve Ötesi", text: "Topluluk odaklı yönetişim; niyet makineleri için yeni uygulama sınıfları."}
    ],
    namadaTitle: "Namada ile İlişki",
    namadaP: "Namada; veri gizliliğine odaklanan ayrı bir ağ olmakla birlikte, Anoma topluluğu ile yakın ekosistem ilişkisine sahiptir.",
    ctaHeadline: "Anoma ile niyetini söyle, sonucu al.",
    ctaSub: "Geliştiriciler için dökümantasyon, topluluk ve örnekler.",
    footerLeft: "emir_ethh"
  },
  en: {
    heroTitle: "The Intent-Centric OS for Web3: Anoma",
    heroDesc: "Anoma unifies multiple blockchains under a single development environment to enable intent-centric applications. Users express desired outcomes; solvers handle the rest.",
    ctaHow: "How it works",
    ctaWhy: "Why Anoma",
    ctaStart: "Get started",
    introTitle: "What is Anoma?",
    introP1: "Centered around intents, Anoma lets users express outcomes instead of per-step transactions in dApps.",
    introP2: "A decentralized solver network handles discovery, matching, and settlement across chains and protocols.",
    example: "Example intent",
    exampleText: "Swap 100 USDC to ETH with the lowest fees and settle to my wallet — on Ethereum or elsewhere.",
    howTitle: "How it works",
    steps: [
      {title: "1) Intent Creation & Broadcast", body: "Users declare goals and constraints. Intents propagate (gossip) to solvers."},
      {title: "2) Solver Network & Matching", body: "Decentralized solvers search liquidity, bridges, and services to construct a cross-chain plan."},
      {title: "3) Settlement", body: "The selected route is executed on the target chain(s). The app hides complexity; the user sees the outcome."}
    ],
    whyTitle: "Why Anoma",
    whyPoints: [
      {title: "Intents Everywhere", body: "A generalized intent standard: one app, many chains. Users don’t feel cross-chain complexity."},
      {title: "Unified Dev Environment", body: "Developers leverage multiple chains/services under one OS; integration and maintenance costs drop."},
      {title: "Human-Centric UX", body: "Users state the goal; solvers find the best route."}
    ],
    journeyTitle: "Journey to Anoma",
    journeyBlocks: [
      {h: "State Your Intent", p: "Describe the outcome without battling technical steps. Add constraints like limits, duration, fees, and chain preferences."},
      {h: "Discovery & Match", p: "Anoma’s solvers explore multi-sourced paths that best satisfy your intent."},
      {h: "Execute & Settle", p: "The plan finalizes on one or multiple chains; you only see the outcome."},
      {h: "Feedback Loop", p: "Post-result metrics improve future solutions via continuous learning."}
    ],
    roadmapTitle: "Roadmap",
    roadmap: [
      {phase: "Phase 1", title: "Launch within Ethereum Ecosystem", text: "Intent-centric app framework, integrations with services/liquidity, and developer interfaces."},
      {phase: "Phase 2", title: "Multi-Chain Expansion", text: "Broader ecosystem reach; more L1/L2 connections, dev tooling, and solver diversity."},
      {phase: "Phase 3", title: "Mainnet & Beyond", text: "Community-driven governance and new classes of intent machines."}
    ],
    namadaTitle: "Relation to Namada",
    namadaP: "Namada is a separate privacy-focused network with close community ties to Anoma’s broader ecosystem.",
    ctaHeadline: "Say your intent. Get the outcome.",
    ctaSub: "Docs, community, and examples for developers.",
    footerLeft: "emir_ethh"
  }
} as const;
