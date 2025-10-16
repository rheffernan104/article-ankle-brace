import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold text-primary">Derila</div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary">
              Pillow
            </a>
            <a href="#" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary">
              Contact
            </a>
            <a href="#" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary">
              Discount
            </a>
            <a href="#" className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary">
              Reviews
            </a>
          </nav>
          <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Shop
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-16">
          {/* Main Content */}
          <article className="space-y-12">
            {/* Hero Section */}
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Advertorial
              </div>

              <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                I Wake Up Refreshed With No Neck Tension Headaches — Here's How Over 50s Can Experience The Same
              </h1>

              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span>Updated Today</span>
                <span>•</span>
                <span>Medically Reviewed</span>
                <span>•</span>
                <span>Sponsored by Derila™</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl text-foreground">All The Pillows That Cost More...</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    ...Still Can't Support Your Neck Like This Does
                  </p>
                </div>
                <div className="aspect-square rounded-2xl bg-gray-200" />
              </div>
            </section>

            {/* Quick Facts */}
            <section className="grid gap-4 rounded-2xl bg-secondary p-6 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">91% Relief</p>
                <p className="mt-2 text-base font-semibold text-foreground">Of readers reported reduced neck pain within first week</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Over 50s</p>
                <p className="mt-2 text-base font-semibold text-foreground">See the biggest improvement in morning stiffness</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Neck & Back Pain</p>
                <p className="mt-2 text-base font-semibold text-foreground">Relief for all sleeping positions</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Clinical Study</p>
                <p className="mt-2 text-base font-semibold text-foreground">Proven to reduce tension headaches by 89%</p>
              </div>
            </section>

            {/* Intro Section */}
            <section className="space-y-6 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
              <p className="font-display text-2xl text-foreground">This is shocking but true...</p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Most over 50s wake up with neck stiffness, shoulder tension, and morning headaches—not from sleep itself, but from inadequate cervical support during the night. When your neck isn't properly supported, your spine compresses, trapping nerves and triggering pain.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The most common sleep disruption older adults experience includes tension headaches, stiffness in the neck and upper back, and a feeling of not being truly rested despite 8 hours in bed. Sound familiar?
              </p>
            </section>

            {/* Main Content Image */}
            <div className="overflow-hidden rounded-2xl">
              <div className="aspect-video bg-gray-300" />
            </div>

            {/* Managing Sleep Section */}
            <section className="space-y-6">
              <h2 className="font-display text-3xl text-foreground">Managing the way you sleep can be the most effective way to avoid these problems.</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                A reported 60% of individuals aged 50 years and over receiving some form of chiropractic or spinal-related care suffer a relapse of their original symptoms within 2 weeks.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Most (80%) - the most effective way to reduce sleep problems and increase energy comes throughout the day.
              </p>
            </section>

            {/* Sleep and Derila Section */}
            <section className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="overflow-hidden rounded-2xl">
                  <div className="aspect-square bg-gray-300" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">Finally wake up well rested and refreshed.</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    We researched every sleep position and profile to engineer the pillow that provides support where it matters most—your neck and upper back.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    It is perfect for back, side, and stomach sleepers.
                  </p>
                </div>
              </div>
            </section>

            {/* Derila Design Section */}
            <section className="space-y-6">
              <h2 className="font-display text-3xl text-foreground">This is why people designed Derila to work as well</h2>
              <div className="overflow-hidden rounded-2xl">
                <div className="aspect-video bg-blue-900" />
              </div>
            </section>

            {/* Derila Support Section */}
            <section className="space-y-6">
              <h2 className="font-display text-3xl text-foreground">Undo the damage done by poor-quality sleep</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="aspect-square rounded-2xl bg-gray-300" />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Memory Foam Support</p>
                    <p className="text-sm text-muted-foreground">Contours to your exact neck shape</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Cooling Gel Layer</p>
                    <p className="text-sm text-muted-foreground">Temperature regulation throughout the night</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Ergonomic Design</p>
                    <p className="text-sm text-muted-foreground">Perfect for all sleeping positions</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Derila Works Section */}
            <section className="space-y-8">
              <h2 className="font-display text-3xl text-foreground">What is memory foam?</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Memory foam is a type of polyurethane that goes softens when exposed to heat and molds to the shape of whatever is pressing into it. It then retains that shape until it cools down and returns to its original form.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                There is a lot of difference that goes by name from the fact that there is an exceptional change under pressure but support in one weight of pillow when you remove your weight.
              </p>
            </section>

            {/* One of the Biggest Mistakes Section */}
            <section className="space-y-8">
              <h2 className="font-display text-3xl text-foreground">
                One of the biggest mistakes people make with their sleeping arrangements is not thinking about neck support
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="aspect-square rounded-2xl bg-gray-300" />
                <div className="overflow-hidden rounded-2xl">
                  <div className="aspect-square bg-gray-400" />
                </div>
              </div>
            </section>

            {/* 3D Diagram Section */}
            <section className="space-y-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                It is said that your sleep is the most important part of your routine. And to create your home space to match the quality of your rest is imperative. Aligning the head with the spine is a productive thing that you can do.
              </p>
              <div className="aspect-video rounded-2xl bg-gray-300" />
            </section>

            {/* Memory Foam Details Section */}
            <section className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Derila provides cervical support in layers to reduce muscle ache and headaches caused by your pillow.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Sleep Studies</span> work as a guide:
              </p>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Align the head and neck</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Support needs vary based on sleeping position, pillow height and arch support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Neck support is great at strengthening and supporting your joints</span>
                </li>
              </ul>
            </section>

            {/* Testimonials Section */}
            <section className="space-y-8">
              <h2 className="font-display text-3xl text-foreground">Here's Why Customers Love Derila</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl bg-secondary p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "This pillow changed my life. I wake up feeling refreshed and my neck pain is completely gone."
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">Customer {i}</p>
                      <p className="text-xs text-muted-foreground">Verified Purchase</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial Photos Section */}
            <section className="space-y-6">
              <h2 className="font-display text-2xl text-foreground">Real People, Real Results</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gray-300" />
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="space-y-6 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
              <h2 className="font-display text-3xl">Stop Waking Up In Pain</h2>
              <p className="text-base leading-relaxed">
                Join thousands who've discovered better sleep and relief from neck pain. Get your Derila cervical pillow today.
              </p>
              <a
                href="#order"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary hover:bg-secondary"
              >
                Claim Your Pillow
                <ArrowRight className="h-5 w-5" />
              </a>
            </section>
          </article>

          {/* Sticky Sidebar */}
          <aside className="space-y-6 xl:sticky xl:top-24">
            <div className="space-y-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-border/60">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">LIMITED TIME</p>
                <h3 className="mt-2 font-display text-2xl text-foreground">Try Derila Risk-Free</h3>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">$39</span>
                <span className="text-sm font-semibold text-muted-foreground line-through">$129</span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">70% OFF</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
                <span>4.9/5 (11,500+ reviews)</span>
              </div>

              <a
                href="#order"
                className="block w-full rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Get Discount Now
              </a>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-none" />
                  <span>30-night money-back guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-none" />
                  <span>Free shipping on orders over $50</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-none" />
                  <span>Expert sleep support included</span>
                </li>
              </ul>

              <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4 text-center text-xs text-muted-foreground">
                <p className="font-semibold text-foreground">Limited stock available</p>
                <p className="mt-1">Order now to secure your discount</p>
              </div>
            </div>

            <div className="rounded-2xl bg-secondary p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-3">As Featured In:</p>
              <div className="space-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
                <p>Health Daily</p>
                <p>Sleep Science Today</p>
                <p>Wellness Magazine</p>
                <p>Over 50s Health</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
