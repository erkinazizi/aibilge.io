import type { Locale } from "./config";

const en = {
  meta: {
    title: "Aibilge — Decoding the grammar of the human genome",
    description:
      "Aibilge is an AI foundation model that learns the language of DNA — reading regulatory sequence to reveal how genes are switched on, off, and tuned.",
  },
  nav: {
    skip: "Skip to content",
    home: "Aibilge home",
    primary: "Primary",
    links: [
      { href: "#problem", label: "The challenge" },
      { href: "#grammar", label: "Genome grammar" },
      { href: "#approach", label: "Approach" },
      { href: "#applications", label: "Applications" },
    ],
    cta: "Request early access",
    theme: "Switch between day and night mode",
    themeTitle: "Day / night mode",
    language: "Language",
  },
  hero: {
    eyebrow: "In development · Early access opening soon",
    titleBefore: "Decoding the ",
    titleHighlight: "grammar",
    titleAfter: " of the human genome.",
    lead: "Aibilge is an AI foundation model that learns the language of DNA. It reads regulatory sequence the way language models read text, to reveal how genes are switched on, off and tuned.",
    ctaPrimary: "Request early access",
    ctaSecondary: "See how it reads DNA",
  },
  problem: {
    kicker: "01 · The challenge",
    title: "We can read every letter. We still can't read the sentences.",
    lead: "The human genome has been sequenced, but most of it is not genes. It is the regulatory code that decides when, where and how much each gene is used. Most disease-linked variants sit in this code, and its rules are still largely unknown.",
    stats: [
      { value: 3.1, decimals: 1, prefix: "", suffix: "B", unit: "", spoken: "3.1 billion", text: "base pairs in a single human genome" },
      { value: 20000, decimals: 0, prefix: "~", suffix: "", unit: "", spoken: "about 20,000", text: "protein-coding genes, a small fraction of the sequence" },
      { value: 98, decimals: 0, prefix: "~", suffix: "%", unit: "", spoken: "about 98 percent", text: "of the genome does not code for protein, and much of its function is unresolved" },
    ],
  },
  grammar: {
    kicker: "02 · Genome grammar",
    title: "DNA has a language. Aibilge learns its rules.",
    lead: "Short motifs act like words. Their order, spacing and combination act like syntax. Together they form instructions that cells read to control every gene.",
    ticks: [
      "Vocabulary: binding motifs, promoters, splice signals",
      "Syntax: spacing, orientation and combinations of motifs",
      "Context: interactions across thousands of base pairs",
    ],
  },
  parser: {
    parsing: "Parsing…",
    done: "4 elements annotated",
    note: "Illustrative example. Not model output.",
    aria: "Example DNA sequence with annotated regulatory elements",
    features: [
      "TATA box · core promoter",
      "E-box · TF binding motif",
      "CpG island · methylation",
      "5′ splice donor site",
    ],
  },
  approach: {
    kicker: "03 · Approach",
    title: "From sequence to function, in three steps.",
    steps: [
      { title: "Read", body: "Raw DNA is tokenised into the units the genome actually uses, so the model sees sequence the way a linguist sees text." },
      { title: "Learn the grammar", body: "Self-supervised training across genomes teaches the model regulatory vocabulary, syntax and long-range dependencies, without hand-written rules." },
      { title: "Predict", body: "From sequence alone, the model estimates where genes are regulated, how strongly they are expressed, and what a change in a single letter could do." },
    ],
  },
  applications: {
    kicker: "04 · Applications",
    title: "Built for the questions genomics can't yet answer.",
    items: [
      { title: "Variant interpretation", body: "Prioritise non-coding variants of uncertain significance by their predicted effect on gene regulation." },
      { title: "Regulatory discovery", body: "Map enhancers, silencers and binding sites to see how cells switch genes on, off and in between." },
      { title: "Sequence design", body: "Design regulatory DNA with intended activity for gene therapy and synthetic biology." },
      { title: "Target discovery", body: "Connect disease-associated regions to the genes and mechanisms they control." },
    ],
  },
  access: {
    kicker: "Early access",
    title: "Help shape the first model of genome grammar.",
    lead: "We're opening access to a small group of researchers, clinicians and partners. Tell us who you are and we'll be in touch.",
    form: {
      emailLabel: "Work email",
      emailPlaceholder: "name@lab.org",
      roleLabel: "I'm a…",
      optional: "(optional)",
      rolePlaceholder: "Select your field",
      roles: ["Academic researcher", "Clinician / clinical genomics", "Biotech or pharma", "Investor", "Other"],
      submit: "Request early access",
      sending: "Sending…",
      hint: "We'll only email you about Aibilge access. No spam.",
      errEmpty: "Enter your email address so we can reach you.",
      errInvalid: "That email doesn't look right. Check it and try again, e.g. name@lab.org.",
      successTitle: "You're on the list.",
      successBody: "We'll contact you when early access opens.",
    },
  },
  footer: {
    tag: "AI for the language of life.",
    backToTop: "Aibilge, back to top",
    nav: "Footer",
  },
};

export type Dictionary = typeof en;

const tr: Dictionary = {
  meta: {
    title: "Aibilge — İnsan genomunun dilbilgisini çözüyoruz",
    description:
      "Aibilge, DNA'nın dilini öğrenen bir yapay zekâ temel modelidir. Düzenleyici dizileri okuyarak genlerin nasıl açılıp kapandığını ve nasıl ince ayarlandığını ortaya çıkarır.",
  },
  nav: {
    skip: "İçeriğe geç",
    home: "Aibilge ana sayfa",
    primary: "Ana menü",
    links: [
      { href: "#problem", label: "Zorluk" },
      { href: "#grammar", label: "Genom dilbilgisi" },
      { href: "#approach", label: "Yaklaşım" },
      { href: "#applications", label: "Uygulamalar" },
    ],
    cta: "Erken erişim talep et",
    theme: "Gündüz ve gece modu arasında geçiş yap",
    themeTitle: "Gündüz / gece modu",
    language: "Dil",
  },
  hero: {
    eyebrow: "Geliştirme aşamasında · Erken erişim yakında",
    titleBefore: "İnsan genomunun ",
    titleHighlight: "dilbilgisini",
    titleAfter: " çözüyoruz.",
    lead: "Aibilge, DNA'nın dilini öğrenen bir yapay zekâ temel modelidir. Düzenleyici dizileri, dil modellerinin metni okuduğu gibi okur ve genlerin nasıl açılıp kapandığını, nasıl ince ayarlandığını ortaya çıkarır.",
    ctaPrimary: "Erken erişim talep et",
    ctaSecondary: "DNA'yı nasıl okuduğunu görün",
  },
  problem: {
    kicker: "01 · Zorluk",
    title: "Her harfi okuyabiliyoruz. Ama cümleleri hâlâ okuyamıyoruz.",
    lead: "İnsan genomu dizilendi, ancak büyük kısmı gen değil. Bu kısım, her genin ne zaman, nerede ve ne kadar kullanılacağına karar veren düzenleyici koddur. Hastalıkla ilişkili varyantların çoğu bu kodda yer alır ve kurallarının büyük bölümü hâlâ bilinmiyor.",
    stats: [
      { value: 3.1, decimals: 1, prefix: "", suffix: "", unit: "milyar", spoken: "3,1 milyar", text: "tek bir insan genomundaki baz çifti sayısı" },
      { value: 20000, decimals: 0, prefix: "~", suffix: "", unit: "", spoken: "yaklaşık 20.000", text: "protein kodlayan gen; dizinin yalnızca küçük bir bölümü" },
      { value: 98, decimals: 0, prefix: "~%", suffix: "", unit: "", spoken: "yaklaşık yüzde 98", text: "genomun protein kodlamayan kısmı; işlevinin büyük bölümü henüz çözülmedi" },
    ],
  },
  grammar: {
    kicker: "02 · Genom dilbilgisi",
    title: "DNA'nın bir dili var. Aibilge onun kurallarını öğreniyor.",
    lead: "Kısa motifler kelimeler gibi davranır. Sıraları, aralıkları ve birleşimleri ise sözdizimi gibi. Birlikte, hücrelerin her geni kontrol etmek için okuduğu talimatları oluştururlar.",
    ticks: [
      "Sözcük dağarcığı: bağlanma motifleri, promotörler, uçbirleştirme sinyalleri",
      "Sözdizimi: motiflerin aralığı, yönü ve birleşimleri",
      "Bağlam: binlerce baz çifti boyunca uzanan etkileşimler",
    ],
  },
  parser: {
    parsing: "Ayrıştırılıyor…",
    done: "4 öğe işaretlendi",
    note: "Örnek amaçlıdır. Model çıktısı değildir.",
    aria: "Düzenleyici öğeleri işaretlenmiş örnek DNA dizisi",
    features: [
      "TATA kutusu · çekirdek promotör",
      "E-kutusu · TF bağlanma motifi",
      "CpG adası · metilasyon",
      "5′ uçbirleştirme verici bölgesi",
    ],
  },
  approach: {
    kicker: "03 · Yaklaşım",
    title: "Diziden işleve, üç adımda.",
    steps: [
      { title: "Oku", body: "Ham DNA, genomun gerçekten kullandığı birimlere ayrılır; böylece model diziyi bir dilbilimcinin metni gördüğü gibi görür." },
      { title: "Dilbilgisini öğren", body: "Genomlar üzerinde öz denetimli eğitim, modele düzenleyici sözcük dağarcığını, sözdizimini ve uzun mesafeli bağımlılıkları elle yazılmış kurallar olmadan öğretir." },
      { title: "Tahmin et", body: "Model yalnızca diziden yola çıkarak genlerin nerede düzenlendiğini, ne kadar güçlü ifade edildiğini ve tek bir harfteki değişikliğin neye yol açabileceğini tahmin eder." },
    ],
  },
  applications: {
    kicker: "04 · Uygulamalar",
    title: "Genomiğin henüz yanıtlayamadığı sorular için tasarlandı.",
    items: [
      { title: "Varyant yorumlama", body: "Önemi belirsiz kodlamayan varyantları, gen düzenlemesi üzerindeki tahmini etkilerine göre önceliklendirin." },
      { title: "Düzenleyici keşif", body: "Hücrelerin genleri nasıl açıp kapattığını görmek için güçlendiricileri, susturucuları ve bağlanma bölgelerini haritalayın." },
      { title: "Dizi tasarımı", body: "Gen terapisi ve sentetik biyoloji için istenen etkinliğe sahip düzenleyici DNA tasarlayın." },
      { title: "Hedef keşfi", body: "Hastalıkla ilişkili bölgeleri, kontrol ettikleri genlere ve mekanizmalara bağlayın." },
    ],
  },
  access: {
    kicker: "Erken erişim",
    title: "Genom dilbilgisinin ilk modeline yön verin.",
    lead: "Erişimi küçük bir araştırmacı, klinisyen ve iş ortağı grubuna açıyoruz. Bize kendinizden bahsedin, sizinle iletişime geçelim.",
    form: {
      emailLabel: "İş e-postası",
      emailPlaceholder: "ad@laboratuvar.org",
      roleLabel: "Alanınız",
      optional: "(isteğe bağlı)",
      rolePlaceholder: "Alanınızı seçin",
      roles: ["Akademik araştırmacı", "Klinisyen / klinik genomik", "Biyoteknoloji veya ilaç", "Yatırımcı", "Diğer"],
      submit: "Erken erişim talep et",
      sending: "Gönderiliyor…",
      hint: "Size yalnızca Aibilge erişimiyle ilgili e-posta göndereceğiz. Spam yok.",
      errEmpty: "Size ulaşabilmemiz için e-posta adresinizi girin.",
      errInvalid: "Bu e-posta adresi doğru görünmüyor. Kontrol edip tekrar deneyin, ör. ad@laboratuvar.org.",
      successTitle: "Listeye eklendiniz.",
      successBody: "Erken erişim açıldığında sizinle iletişime geçeceğiz.",
    },
  },
  footer: {
    tag: "Yaşamın dili için yapay zekâ.",
    backToTop: "Aibilge, başa dön",
    nav: "Alt menü",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
