import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Feather,
  HeartPulse,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Thermometer,
  Truck,
} from "lucide-react";

const quickFacts = [
  {
    label: "Relieves Morning Stiffness",
    value: "97% of readers reported relief within the first week",
  },
  {
    label: "Support Sleeper Count",
    value: "2.1M+ Derila pillows delivered worldwide",
  },
  {
    label: "Expert Approved",
    value: "Backed by physiotherapists for cervical alignment",
  },
  {
    label: "Risk-Free Trial",
    value: "30-day comfort guarantee with free exchanges",
  },
];

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Testimonial = {
  quote: string;
  name: string;
  age: string;
  location: string;
  highlight: string;
  image: string;
};

const benefits: Benefit[] = [
  {
    title: "Adaptive Cervical Cradle",
    description:
      "An elevated butterfly contour guides your head into the ideal neutral position, dissolving pressure from neck and shoulder joints.",
    icon: Feather,
  },
  {
    title: "Cooling Memory Gel",
    description:
      "Breathable open-cell foam infused with cooling gel beads disperses heat so you stay comfortable through the night.",
    icon: Thermometer,
  },
  {
    title: "Active Spine Alignment",
    description:
      "Strategically placed side rails prevent rolling, keeping the spine aligned even when you change sleeping positions.",
    icon: HeartPulse,
  },
];

const steps: Step[] = [
  {
    title: "Place the pillow with the higher curve under your neck",
    description:
      "The ergonomic ridge gently elevates your cervical spine, letting tense muscles finally relax.",
    icon: Sparkles,
  },
  {
    title: "Allow the responsive foam to adapt",
    description:
      "Within seconds the adaptive foam maps the contours of your jaw, shoulders, and spine to eliminate pressure points.",
    icon: Moon,
  },
  {
    title: "Wake up aligned and energized",
    description:
      "Rest without morning headaches, stiffness, or numbness and glide into your day supported and refreshed.",
    icon: Sun,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "After 20 years of chiropractic visits, this is the first time I woke up with zero neck pain. Two nights in and I cancelled my next appointment.",
    name: "Evelyn R.",
    age: "62",
    location: "Tampa, FL",
    highlight: "Verified 5-star review",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    quote:
      "I was skeptical a pillow could change anything. My snoring dropped, and I finally sleep through the night without tossing around.",
    name: "Marcus T.",
    age: "48",
    location: "Santa Fe, NM",
    highlight: "Side sleeper",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    quote:
      "Hot flashes kept me up for years. The cooling layer keeps the pillow comfortable and I no longer wake drenched in sweat.",
    name: "Gina L.",
    age: "54",
    location: "Madison, WI",
    highlight: "Cooling relief",
    image:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=600&q=80",
  },
];

const comparisonRows = [
  {
    feature: "Adaptive memory foam",
    derila: "Contours to your unique neck and shoulder structure",
    regular: "Flattens overnight and locks your neck in place",
  },
  {
    feature: "Cooling airflow",
    derila: "Ventilated channels and gel infusion regulate temperature",
    regular: "Traps heat and moisture against your skin",
  },
  {
    feature: "Neck support wings",
    derila: "Side bolsters keep the spine aligned for back & side sleepers",
    regular: "No guidance—spine collapses forward as you rotate",
  },
  {
    feature: "Washable cover",
    derila: "Hypoallergenic, removable, and machine washable",
    regular: "Non-removable or loses shape after one wash",
  },
  {
    feature: "Trial & guarantee",
    derila: "30-night risk-free sleep trial + 3-year warranty",
    regular: "No guarantee once you remove the tags",
  },
];

const offerBenefits: Benefit[] = [
  {
    title: "Clinically aligned cervical support",
    description: "Engineered for neutral spine alignment and relaxed muscles.",
    icon: CheckCircle2,
  },
  {
    title: "Ships from local fulfilment",
    description: "Fast delivery with tracking from US & EU warehouses.",
    icon: Truck,
  },
  {
    title: "Protected by 30-night guarantee",
    description: "No-hassle exchanges if you do not wake up pain-free.",
    icon: ShieldCheck,
  },
];

const headlineImage =
  "https://images.unsplash.com/photo-1484981184820-2e84ea0b2707?auto=format&fit=crop&w=1600&q=80";

const supportImage =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80";

const alignmentImage =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80";

const scienceImage =
  "https://images.unsplash.com/photo-1582719478254-0c6071409dba?auto=format&fit=crop&w=1200&q=80";

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const BenefitCard = ({ title, description, icon: Icon }: CardProps) => (
  <div className="flex gap-4 rounded-2xl bg-white/90 p-6 shadow-xl shadow-primary/5 ring-1 ring-border/60">
    <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-6 w-6" />
    </span>
    <div className="space-y-2">
      <h3 className="font-display text-xl text-foreground">{title}</h3>
      <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </div>
);

const StepCard = ({ title, description, icon: Icon }: CardProps) => (
  <div className="flex h-full flex-col gap-4 rounded-3xl bg-secondary/60 p-6 ring-1 ring-border/60">
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40">
      <Icon className="h-6 w-6" />
    </span>
    <div className="space-y-2">
      <h3 className="font-display text-lg text-foreground">{title}</h3>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({
  quote,
  name,
  age,
  location,
  highlight,
  image,
}: Testimonial) => (
  <figure className="flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-primary/5 ring-1 ring-border/70">
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={`${name} from ${location}`}
        className="h-14 w-14 rounded-full object-cover"
      />
      <div>
        <figcaption className="font-semibold text-foreground">
          {name} • {age}
        </figcaption>
        <p className="text-sm text-muted-foreground">{location}</p>
        <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          <Star className="h-3.5 w-3.5" /> {highlight}
        </p>
      </div>
    </div>
    <blockquote className="text-base leading-relaxed text-foreground">
      “{quote}”
    </blockquote>
  </figure>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/40 to-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-16">
          <article className="space-y-16">
            <section className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Advertorial • Health & Wellness
              </div>
              <header className="space-y-6">
                <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
                  I Woke Up Refreshed With No Neck Pain—Doctors Are Shocked After Seeing
                  <span className="relative block text-primary">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-1 hidden h-3 rounded-full bg-accent/40 sm:block"
                    />
                    <span className="relative">
                      The Person Behind The Cervical Pillow Everyone Loves
                    </span>
                  </span>
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  When a 62-year-old grandmother revealed the sleep trick she designed with a
                  team of physiotherapists, chronic pain sufferers across the globe rushed to
                  secure their own Derila cervical pillow—and the relief has been immediate.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-semibold text-foreground">
                    <Clock className="h-4 w-4 text-primary" /> Updated: Today
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-semibold text-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Medically Reviewed
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-semibold text-foreground">
                    <Truck className="h-4 w-4 text-primary" /> Sponsored by Derila™
                  </span>
                </div>
              </header>
              <figure className="overflow-hidden rounded-[2.5rem] bg-black/5 shadow-2xl">
                <img
                  src={headlineImage}
                  alt="Rested woman sleeping comfortably on cervical pillow"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="grid gap-4 rounded-3xl bg-white/90 p-6 shadow-lg shadow-primary/5 ring-1 ring-border/60 sm:grid-cols-2 md:grid-cols-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {fact.label}
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="rounded-3xl border-l-4 border-primary bg-primary/5 p-6 shadow-sm">
                <h2 className="font-display text-2xl text-primary sm:text-3xl">
                  “This Is Incredible… But They Are Running Out!”
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Overnight, a simple redesign of the average pillow sold out three production
                  runs. Derila’s unique cervical cradle is crafted to keep the vertebrae floating in
                  their neutral position so nerves can finally calm. Doctors who reviewed the
                  scans were stunned—patients who had suffered for decades woke up without the
                  tension that triggered migraines, numb fingers, and jaw tightness.
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div className="space-y-6">
                  <h2 className="font-display text-3xl text-foreground">
                    How a Retired Flight Attendant Solved Her Pain Puzzle
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    After years of redeye flights, Linda developed debilitating neck pain. Sleep
                    clinics gave her rigid braces, painkillers, and advice she had heard a hundred
                    times. Nothing worked until she collaborated with a team of sleep scientists to
                    sculpt a pillow that mimics the natural curvature of the neck and shoulders.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    By combining supportive memory foam, cooling ventilation, and ergonomic
                    side wings, she created a pillow that actively supports you while you sleep.
                    That prototype became Derila—and it is changing hundreds of thousands of
                    mornings.
                  </p>
                  <ul className="space-y-4 text-base text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-primary" />
                      Designed with physiotherapists to maintain cervical lordosis while you lay
                      down.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-primary" />
                      Breathable memory foam keeps you cool, preventing nighttime overheating
                      and sweat.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-primary" />
                      Side bolsters stop your head from collapsing forward when you roll over,
                      preserving airways and alignment.
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-[2.5rem]">
                  <img
                    src={supportImage}
                    alt="Cervical pillow providing elevated support"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="font-display text-3xl text-foreground sm:text-[2.5rem]">
                Why Experts Are Calling Derila the Gold Standard for Cervical Support
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {benefits.map((benefit) => (
                  <BenefitCard key={benefit.title} {...benefit} />
                ))}
              </div>
              <div className="grid gap-8 rounded-[2.5rem] bg-white/90 p-8 shadow-xl shadow-primary/10 ring-1 ring-border/60 lg:grid-cols-2">
                <div className="space-y-5">
                  <h3 className="font-display text-2xl text-foreground">
                    The Science: Neutral Alignment Eliminates Morning Damage
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    MRI imaging shows that when the neck dips below its neutral curve, nerves in
                    the cervical spine become compressed. Derila’s sculpted design fills the
                    negative space between the mattress and your neck, reducing pressure on
                    discs and joints by up to 91%.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    That alignment is the secret to waking up refreshed: improved oxygen flow,
                    relaxed muscles, and a calm nervous system. It is the closest feeling to being
                    weightless while you rest.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[2rem] bg-black/10">
                  <img
                    src={alignmentImage}
                    alt="Diagram demonstrating cervical alignment"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="font-display text-3xl text-foreground sm:text-[2.5rem]">
                How to Use Derila for the Deepest Sleep of Your Life
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {steps.map((step) => (
                  <StepCard key={step.title} {...step} />
                ))}
              </div>
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src={scienceImage}
                  alt="Woman stretching after restful sleep"
                  className="h-full w-full object-cover"
                />
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="font-display text-3xl text-foreground sm:text-[2.5rem]">
                Real People, Real Relief
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Thousands of readers sent in photos to show what waking up without pain looks
                like. Here are just a few of the stories landing in our inbox every morning.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="font-display text-3xl text-foreground sm:text-[2.5rem]">
                Derila vs. Traditional Pillows
              </h2>
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/95 shadow-xl">
                <table className="w-full divide-y divide-border/60 text-left text-base">
                  <thead className="bg-secondary/80">
                    <tr>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wide text-muted-foreground">
                        Feature
                      </th>
                      <th className="px-6 py-4 font-semibold text-primary">Derila Cervical Pillow</th>
                      <th className="px-6 py-4 font-semibold text-muted-foreground">
                        Regular Pillow
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {comparisonRows.map((row) => (
                      <tr key={row.feature} className="bg-white/70">
                        <td className="px-6 py-5 font-semibold text-foreground">{row.feature}</td>
                        <td className="px-6 py-5 text-foreground">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                            <span>{row.derila}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-destructive" />
                            <span>{row.regular}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6 rounded-[2.5rem] bg-primary/95 px-8 py-10 text-primary-foreground shadow-2xl" id="order">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-3">
                  <h2 className="font-display text-3xl sm:text-4xl">
                    Wake Up Without Pain—Guaranteed
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed">
                    Reserve your Derila today and lock in up to 70% off plus free shipping on
                    bundles. You have 30 nights to experience the difference or send it back for a
                    full refund—no questions asked.
                  </p>
                </div>
                <a
                  href="https://derila.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-base font-semibold text-primary shadow-lg shadow-black/10 transition hover:bg-accent hover:text-white"
                >
                  Claim My Exclusive Offer
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <ul className="grid gap-2 text-sm sm:grid-cols-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Free express shipping on 2+
                  pillow bundles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> 30-night comfort guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Live support from sleep coaches
                </li>
              </ul>
              <p className="text-xs text-primary-foreground/80">
                *Savings based on manufacturer’s suggested retail price. Limited quantities
                available. Results may vary; consult your physician if you have a medical condition.
              </p>
            </section>
          </article>

          <aside className="space-y-6 xl:sticky xl:top-12">
            <div className="space-y-6 rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-primary/10 ring-1 ring-border/70">
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Limited-Time Offer
              </p>
              <div>
                <h2 className="font-display text-3xl text-foreground">Try Derila Risk-Free</h2>
                <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">
                  Exclusive for health journal readers
                </p>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">$39</span>
                <span className="text-sm font-semibold text-muted-foreground line-through">
                  $129
                </span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  Save 70%
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current text-accent" />
                ))}
                <span>4.9/5 from 11,500+ reviews</span>
              </div>
              <a
                href="#order"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Get My Discount
                <ArrowRight className="h-5 w-5" />
              </a>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  Orthopedic support that keeps the neck in its natural curve all night long.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  Cooling, hypoallergenic cover you can toss in the wash every week.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  Delivered in eco-friendly packaging with fast, trackable shipping.
                </li>
              </ul>
              <div className="flex items-center gap-3 rounded-2xl bg-secondary/80 px-5 py-4 text-sm text-foreground">
                <ShieldCheck className="h-10 w-10 text-primary" />
                30-night money-back guarantee plus 3-year limited warranty.
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-secondary/80 px-5 py-4 text-sm text-foreground">
                <Truck className="h-10 w-10 text-primary" />
                Ships within 24 hours from local warehouses.
              </div>
            </div>

            <div className="space-y-4 rounded-[2.5rem] border border-dashed border-primary/60 bg-primary/5 p-6 text-sm text-muted-foreground">
              <p className="text-base font-semibold text-foreground">
                Here’s why readers are switching today:
              </p>
              {offerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <benefit.icon className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{benefit.title}</p>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
              <p className="rounded-2xl bg-white px-4 py-3 text-xs text-muted-foreground">
                Supplies are limited due to high demand. If this page is live, your discount is still
                available.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-white/80 p-6 text-sm text-muted-foreground ring-1 ring-border/60">
              <p className="font-semibold text-foreground">As seen in</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/70">
                <span>HealthLine</span>
                <span>Better Sleep Daily</span>
                <span>Wellness Weekly</span>
                <span>The Sunrise Post</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
