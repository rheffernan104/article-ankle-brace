import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Index() {
  const testimonials = [
    {
      quote:
        "I'm a nurse. I'm on my feet for 12+ hours, and by the end of my shift, I used to be limping to my car. I've tried everything—insoles, compression socks, even custom orthotics. Nothing helped. I put on Orthos for my next shift and by hour 4, I realized… my feet didn't hurt. Not even a little. I've been wearing them for three months now and I can honestly say they've changed my life.",
      author: "Jennifer K., RN",
      location: "Phoenix, AZ",
      highlight: "WALKS 12-HOUR SHIFTS PAIN-FREE",
    },
    {
      quote:
        "I've had plantar fasciitis for 18 months. That morning pain where it feels like you're stepping on glass? I had it every. single. day. Tried stretches, ice, a night splint—nothing worked long-term. I was skeptical about Orthos because I've been burned before, but I figured the guarantee meant I had nothing to lose. Within ONE WEEK, my morning pain was 80% gone. I can walk my dog again. I can stand in the kitchen and cook dinner. I feel like myself again.",
      author: "David R., 58",
      location: "Portland, OR",
      highlight: "FINALLY RELIEF FROM PLANTAR FASCIITIS",
    },
    {
      quote:
        "I sprained my ankle badly last year and it never felt stable after that. I was terrified to run because I could feel it wanting to roll with every step. My PT recommended taping, but that's such a hassle every day. Orthos gives me the same stability without the tape. I'm back to running 5Ks and I don't even think about my ankle anymore. It just… works.",
      author: "Maria S., 34",
      location: "Austin, TX",
      highlight: "BACK TO RUNNING AFTER ANKLE SPRAIN",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-lg sm:text-2xl font-bold text-primary">
            ORTHOS
          </div>
          <a
            href="https://orthos.store/products/ankle-brace"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 inline-block"
          >
            Order Now
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-16 pb-24 md:pb-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          {/* Main Content */}
          <article className="space-y-12">
            {/* Hero Section */}
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                Advertorial • Engineered Support
              </div>

              <h1 className="text-3xl leading-tight font-bold text-foreground sm:text-4xl md:text-6xl">
                "I Work 12-Hour Shifts Without Limping Anymore" - Here's How
                Nurses, Teachers & Workers Over 40 Are Finally Ending Foot Pain
              </h1>

              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm font-semibold text-foreground">
                  4.7 / 5 stars
                </span>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span>By Sarah Mitchell</span>
                <span>•</span>
                <span>Last Updated: October 15, 2025</span>
              </div>

              <div
                className="overflow-hidden rounded-3xl shadow-xl max-w-2xl mx-auto"
                style={{ aspectRatio: "3/2" }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F9760aa02bbff40bb8f5fbc96e1165bc0?format=webp&width=800"
                  alt="Anatomical illustration of foot and heel pain"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "42% 45%" }}
                />
              </div>
            </section>

            {/* Intro Section */}
            <section className="space-y-6 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
              <p className="text-2xl font-bold text-foreground">
                This is shocking but true…
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you're dealing with stabbing heel pain in the morning, an
                ankle that feels like it might give out on uneven ground, or
                feet so swollen by evening you can barely get your shoes off…
                you're not alone, and it's not in your head.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                In reality, foot and ankle pain has quietly become one of the
                most common—and ignored—health conditions affecting active
                adults today.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Nearly 1 in 10 people will experience plantar fasciitis in their
                lifetime. And chronic ankle instability? It affects up to 40% of
                people who've ever had a sprain—meaning millions are walking
                around on a "wobbly" ankle that could give way at any moment.
              </p>
            </section>

            {/* Quick Stats */}
            <section className="grid gap-4 rounded-2xl bg-secondary p-6 sm:grid-cols-2 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  70% Failure Rate
                </p>
                <p className="mt-2 text-base font-semibold text-foreground">
                  Of people using standard compression-only sleeves report
                  incomplete pain relief
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Root Cause Problem
                </p>
                <p className="mt-2 text-base font-semibold text-foreground">
                  Most supports do only ONE job when feet need THREE
                </p>
              </div>
            </section>

            {/* Why Most Braces Fail */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                The Real Reason Most Braces, Sleeves & Inserts Fail (And Keep
                You in Pain)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Managing foot pain the right way can be the most effective
                strategy to avoid injections, surgery, and a life spent
                calculating every step.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Here's what most people don't realize:
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Your foot and ankle work as a unified biomechanical system. The
                plantar fascia (the thick band running along your heel and
                arch), your ankle ligaments, and the surrounding muscles all
                depend on each other for stability, circulation, and pain-free
                movement.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                But here's the problem:
              </p>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />
                  <span>
                    <span className="font-semibold text-foreground">
                      Compression-only sleeves
                    </span>{" "}
                    squeeze your foot to reduce swelling—but they don't
                    stabilize your ankle or support your arch. So your ligaments
                    keep straining with every step. You get temporary relief,
                    then the pain comes right back.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />
                  <span>
                    <span className="font-semibold text-foreground">
                      Rigid ankle braces
                    </span>{" "}
                    lock your joint in place for stability—but they're so bulky
                    you can't wear them in normal shoes. Plus, they restrict
                    circulation, which slows healing and makes swelling worse.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />
                  <span>
                    <span className="font-semibold text-foreground">
                      Arch support insoles
                    </span>{" "}
                    lift your foot—but they do nothing for ankle wobble or
                    evening swelling. And if your ankle rolls even slightly,
                    that "supported" arch collapses right back into
                    misalignment.
                  </span>
                </li>
              </ul>
            </section>

            {/* Expert Medical Professional */}
            <div className="overflow-hidden rounded-3xl shadow-xl max-w-2xl mx-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F019ebb33ed2b43f6a61611a1a07992b5?format=webp&width=800"
                alt="X-ray illustration of foot and heel pain"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Expert Quote */}
            <section className="space-y-6 rounded-2xl border border-border bg-primary/5 p-6 md:p-8">
              <blockquote className="text-base italic leading-relaxed text-muted-foreground">
                "The biggest mistake people make is treating foot pain and ankle
                instability as separate problems. In reality, they're connected.
                If you only compress without stabilizing��or stabilize without
                improving circulation—you're only addressing half the issue.
                That's why so many patients say 'nothing works.'"
              </blockquote>
              <p className="text-sm font-semibold text-foreground">
                — Dr. Michael Chen, Physical Therapist
              </p>
            </section>

            {/* Three Things Your Body Needs */}
            <section className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                Translation? Your body needs three things simultaneously to heal
                and feel better:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-secondary p-6">
                  <p className="text-xl font-bold text-primary mb-2">
                    Stabilization
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To prevent risky ankle roll and keep your joints aligned
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-6">
                  <p className="text-xl font-bold text-primary mb-2">
                    Compression
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To boost circulation, reduce inflammation, and calm swelling
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-6">
                  <p className="text-xl font-bold text-primary mb-2">
                    Arch Support
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To take pressure off the plantar fascia and distribute
                    weight evenly
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Most products give you one. Maybe two. But never all three. And
                that's exactly why you've tried "everything" and still wake up
                wincing—or why you're scanning the pavement for cracks before
                every step—or why your feet throb so badly by 3 PM you want to
                sit down and cry.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                It's not you. It's the products.
              </p>
            </section>

            {/* Product Feature Image - ORTHOS in Use */}
            <div className="overflow-hidden rounded-3xl shadow-xl max-w-2xl mx-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F6147b49a2290431586e92589150e6a4e?format=webp&width=800"
                alt="ORTHOS ankle brace in daily use"
                className="w-full h-full object-cover"
              />
            </div>

            {/* The Solution */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Finally, Walk Without Calculating Every Step…
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                What if you could slip on one simple sleeve in the morning—no
                laces, no complicated wrapping—and feel immediate support where
                you need it most?
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                What if that same sleeve kept your ankle stable on stairs,
                reduced swelling during long shifts, and fit inside your normal
                work shoes without adding bulk?
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                That's exactly what the ORTHOS Foot Sleeve & Ankle Support Strap
                was designed to do.
              </p>
            </section>

            {/* About ORTHOS */}
            <section className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                This isn't another generic compression sock. And it's not one of
                those clunky sports braces that only athletes can tolerate.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                ORTHOS wasn't born in a lab—it was born from frustration.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                After watching patient after patient fail with braces that only
                did half the job, our founder—a physical therapist and former
                college athlete who'd dealt with his own chronic ankle
                instability—partnered with orthopedic engineers to ask one
                simple question: "What if we could finally give people
                everything their foot needs… in one sleeve?"
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                After 18 months of prototyping with real patients, testing
                dozens of fabric grades and strap configurations, and working
                directly with podiatrists and athletic trainers, the answer
                emerged: The Orthos Dual Support System™.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The first support system to combine medical-grade 360°
                compression with adjustable figure-8 stabilization
                straps—creating a unified support network that works with your
                body's natural structure, not against it.
              </p>
            </section>

            {/* Who This Is For */}
            <section className="space-y-6 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                Look, you're not the type to sit around complaining. You're here
                because you refuse to let foot pain steal your life. You've
                tried solutions before—you're proactive, you're committed, you
                take action—you just need something that actually works.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                That's what ORTHOS is for: people like you who have high
                standards and demand real results.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                In other words: This doesn't just squeeze your foot. It doesn't
                just lock your ankle. It does what your ligaments and tendons
                are supposed to do—but can't anymore because of injury, strain,
                or years of wear.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Think of it like this: if your ankle's natural "support cables"
                are frayed and weak, Orthos becomes a second set of
                tendons—holding everything in the right position so your body
                can finally heal instead of re-injure.
              </p>
            </section>

            {/* How ORTHOS Works */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">
                How ORTHOS Restores Natural Foot Function (When Everything Else
                Failed)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Here's what makes the ORTHOS Dual Support System™ completely
                different:
              </p>

              {/* Product Showcase - Ankle Brace */}
              <div className="overflow-hidden rounded-3xl shadow-xl max-w-sm mx-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F7670250287474421a3fedab995952ce4?format=webp&width=800"
                  alt="ORTHOS dual support compression system"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      The 360° Compression Weave
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      Unlike cheap drugstore sleeves that only squeeze in one
                      direction (often cutting off circulation or sliding down
                      your heel), Orthos uses a medical-grade compression fabric
                      that applies graduated pressure across your entire foot
                      and ankle.
                    </p>
                    <p className="text-base font-semibold text-foreground mb-4">
                      What that means for you:
                    </p>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                        <span>
                          Boosts circulation by up to 30%—bringing fresh oxygen
                          to injured tissues so they can heal faster
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                        <span>
                          Reduces inflammation and swelling throughout the day
                          (not just for an hour after you put it on)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                        <span>
                          Provides proprioceptive feedback—your brain gets
                          better signals from your foot, so you feel more stable
                          and confident
                        </span>
                      </li>
                    </ul>
                    <p className="text-base leading-relaxed text-muted-foreground mt-4">
                      The result? Less morning stiffness. Less evening swelling.
                      And that constant throbbing ache? It fades.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl max-w-sm mx-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F89474dd364344b518f6f310a644e91f6?format=webp&width=800"
                      alt="360 degree compression weave technology"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 md:items-center md:grid-flow-dense">
                  <div className="md:order-2 overflow-hidden rounded-2xl max-w-sm">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F697cfe2c7fb2422c81541f08ee6bc20a?format=webp&width=800"
                      alt="Adjustable X-strap ankle stabilizers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:order-1">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      The Adjustable X-Strap Stabilizers
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      This is the breakthrough most other products completely
                      miss. The X-Strap system wraps around your ankle and
                      midfoot in a figure-8 pattern��the exact same technique
                      athletic trainers use to prevent sprains in professional
                      athletes.
                    </p>
                    <p className="text-base font-semibold text-foreground mb-4">
                      Here's why it works:
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      Your ankle has ligaments on both sides that prevent it
                      from rolling inward or outward. When those ligaments are
                      weak, strained, or injured, your ankle becomes unstable.
                      You hesitate on curbs. You avoid uneven ground. You're
                      always one wrong step away from twisting it again. The
                      X-Straps mimic those ligaments.
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      They apply lateral stabilization—which means your ankle
                      stays centered and aligned with every step, preventing the
                      risky inversion and eversion movements that cause
                      re-injury. And because the straps are adjustable, you
                      control the level of support. Tighten them for a long
                      shift or a hike. Loosen them slightly for casual wear.
                      It's like having a sports brace and a compression sock in
                      one—without the bulk.
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Integrated Arch Lift & Heel Cushioning
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      The third piece of the puzzle: targeted arch support built
                      into the sleeve itself. The compression weave is denser
                      along your arch, creating a gentle lifting effect that
                      takes pressure off your plantar fascia (that's the band of
                      tissue that gets inflamed and causes that "knife in your
                      heel" pain every morning).
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground mb-4">
                      At the same time, the sleeve's heel zone uses a softer,
                      more cushioned knit to absorb impact with every step.
                    </p>
                    <p className="text-base font-semibold text-foreground mb-4">
                      The result?
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Your weight distributes evenly across your foot—instead of
                      slamming into your heel or collapsing your arch. That
                      stabbing pain? It stops being triggered. And your foot can
                      finally start healing instead of re-straining.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl max-w-sm mx-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F547b2bca37b347f7963ecf72ebb75fa8?format=webp&width=800"
                      alt="Integrated arch lift and heel cushioning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* What This Means For You */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                What This Means for You (In Plain English)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Let's say you're a nurse doing a 12-hour shift. Or a teacher on
                your feet all day. Or a parent who just wants to walk through
                the grocery store without limping. Here's what happens when you
                put on Orthos:
              </p>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">
                    In the first 60 seconds:
                  </p>
                  <p>
                    The compression hugs your foot. Your ankle feels held—not
                    restricted, but supported. You notice it, but it's not
                    uncomfortable. It's like… your foot just got a confidence
                    boost.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    After 10 minutes:
                  </p>
                  <p>
                    You realize you're not thinking about your ankle anymore.
                    You take the stairs without checking for the railing first.
                    You step off a curb without that split-second hesitation.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">By hour 4:</p>
                  <p>
                    Your feet don't hurt. Not even a little. You're standing,
                    walking, moving—and it's just… automatic. No throbbing. No
                    swelling creeping in. No mental checklist of "where can I
                    sit down?"
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    By the end of the day:
                  </p>
                  <p>
                    You get home, take off your shoes, and your feet don't look
                    like swollen balloons. There's no angry red marks from tight
                    elastic. No numbness. No relief-followed-by-regret. You
                    just… feel normal. Like your feet work the way they're
                    supposed to. Like you're not stuck with "bad feet." Like
                    you're just… you. Moving. Living. Not limping.
                  </p>
                </div>
              </div>
            </section>

            {/* Undo The Damage */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Undo The Damage Done By Failed Braces & Unsupportive Footwear
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you've been wearing cheap compression socks that roll down,
                or bulky braces that dig into your skin, or nothing at all
                because "nothing works anyway"… your foot has been re-injuring
                itself every single day.
              </p>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />
                  <span>
                    Every time your ankle wobbles on uneven ground, those
                    ligaments strain a little more.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />
                  <span>
                    Every time your arch collapses because there's no support,
                    that plantar fascia pulls and tears at a microscopic level.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-none" />
                  <span>
                    Every time circulation gets restricted by too-tight elastic,
                    inflammation builds up instead of flushing out.
                  </span>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                It's not dramatic. It's not sudden. But it's cumulative. And
                after months or years of this? Your "mild ankle issue" becomes
                chronic instability. Your "occasional heel pain" becomes plantar
                fasciitis that won't quit. Your "a little swelling by evening"
                becomes painful edema that makes you want to elevate your feet
                the second you get home.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                Here's the good news:
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Your body wants to heal. It's designed to heal. But it can't do
                that while it's being re-injured. Orthos stops the cycle. By
                stabilizing your ankle, supporting your arch, and improving
                circulation all at once, it creates the conditions your body
                needs to actually recover—not just mask symptoms.
              </p>
            </section>

            {/* Customer Story with Image */}
            <div className="grid gap-8 md:grid-cols-2 md:items-center rounded-3xl overflow-hidden shadow-lg">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F93b34031aeb748da9b81a001a2b7a731?format=webp&width=800"
                  alt="Linda M, 52-year-old retail manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <section className="space-y-4 p-6 md:p-8 bg-primary/5 rounded-2xl">
                <p className="text-base leading-relaxed text-muted-foreground">
                  One user, Linda M., a 52-year-old retail manager, put it this
                  way: "I'd been dealing with plantar fasciitis for over a year.
                  Tried stretches, ice, a night splint I couldn't sleep in.
                  Nothing worked. I was about to schedule a cortisone shot. Then
                  I tried Orthos. Within three days, I could walk to my car
                  without limping. Within two weeks, that morning 'knife in my
                  heel' was just… gone. I don't know how else to say it—this
                  thing gave me my life back."
                </p>
              </section>
            </div>

            {/* Why ORTHOS Works Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">
                Why Does ORTHOS Work When Others Failed?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Let's break it down piece by piece, so you can see exactly why
                this is different from everything else you've tried:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    ① Medical-Grade Compression Fabric (Not Cheap Elastic)
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    Most drugstore sleeves use basic spandex or nylon that loses
                    elasticity after a few washes. The "compression" fades
                    within weeks, and you're left with a loose sock that does
                    nothing.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Orthos uses a multi-layer knit engineered to maintain
                    consistent compression over hundreds of wears. It's the same
                    fabric grade used in clinical compression garments
                    prescribed by vascular specialists.{" "}
                    <span className="font-semibold text-foreground">
                      What that means:
                    </span>{" "}
                    The support doesn't fade. The sleeve doesn't stretch out. It
                    works the same on Day 1 and Day 100.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    ② Breathable, Moisture-Wicking Design (No Sweat, No Smell)
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    You know that awful feeling when your foot gets hot and
                    clammy inside a neoprene brace? That's not just
                    uncomfortable—it's unhealthy. Trapped moisture creates
                    friction, blisters, and bacterial growth.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Orthos is made with a breathable open-weave mesh on the top
                    of the foot and ankle, with moisture-wicking channels that
                    pull sweat away from your skin.{" "}
                    <span className="font-semibold text-foreground">
                      What that means:
                    </span>{" "}
                    You can wear it all day—through a 12-hour shift, a long
                    flight, a full day of errands—and your foot stays dry, cool,
                    and comfortable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    ③ Slim, Low-Profile Fit (Works With Any Shoe)
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    One of the biggest complaints about rigid ankle braces? "I
                    can't get my shoe on over it."
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Orthos is designed to be thin enough to fit inside dress
                    shoes, sneakers, work boots—even flats. The compression
                    sleeve hugs your foot like a second skin, and the straps sit
                    flat against your ankle (no bulky buckles or hard plastic
                    stays).{" "}
                    <span className="font-semibold text-foreground">
                      What that means:
                    </span>{" "}
                    You're not stuck wearing one pair of oversized shoes. You
                    can wear Orthos with the footwear you already own—and no one
                    even knows it's there.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    ④ Adjustable Tension = Customized Support
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    Most "one size fits most" braces either cut off your
                    circulation or provide zero stability. There's no
                    in-between.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    With Orthos, you control the fit. The figure-8 straps use
                    industrial-strength Velcro that holds exactly where you
                    position it—so you can dial in the perfect amount of support
                    for your activity level and pain severity. Need maximum
                    stability for a long hike? Tighten the straps. Just want
                    gentle support for a casual walk? Loosen them slightly. It's
                    like having a sports brace and a compression sock in
                    one—without the bulk.{" "}
                    <span className="font-semibold text-foreground">
                      What that means:
                    </span>{" "}
                    You're not stuck with a "medium" that's too tight or too
                    loose. You get your perfect fit, every single time.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Not sure about sizing? We include a detailed fit guide with
                    every order—and if you're between sizes or need an exchange,
                    our 30-day guarantee makes it effortless. No hassle. No
                    fees. Just the right fit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    ⑤ Left OR Right Foot (Universal Design)
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Unlike some braces that are "left foot only" or "right foot
                    only," forcing you to buy two separate products, Orthos is
                    ambidextrous. One sleeve. Either foot. Total flexibility.{" "}
                    <span className="font-semibold text-foreground">
                      What that means:
                    </span>{" "}
                    Lower cost. Simpler ordering. And if both feet hurt (like
                    they do for many people with plantar fasciitis or general
                    swelling), you can order a pair and be fully supported.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    ⑥ Stays In Place (No Constant Re-Adjusting)
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-3">
                    Here's a complaint we heard over and over in our research:
                    "I spend half my day pulling my sleeve back up."
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    That's because most compression sleeves have a smooth
                    interior that slides against your skin—especially when you
                    sweat. Orthos has silicone grip strips at the top cuff and
                    heel cup. These tiny, soft ridges create just enough
                    friction to keep the sleeve anchored—without digging in or
                    feeling sticky.{" "}
                    <span className="font-semibold text-foreground">
                      What that means:
                    </span>{" "}
                    You put it on once in the morning. It stays put. You're not
                    yanking it up every 20 minutes or feeling it bunch under
                    your heel.
                  </p>
                </div>
              </div>
            </section>

            {/* Biggest Mistakes */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                One of the Biggest Mistakes People Make With Foot Pain Is Not
                Thinking About Joint Position & Alignment
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Memory foam insoles can cushion your heel. Compression socks can
                reduce swelling. Rigid braces can prevent twisting. But none of
                them address the root biomechanical issue: When your ankle isn't
                properly aligned, your entire kinetic chain—ankle, knee, hip,
                even lower back—compensates. You start walking differently to
                avoid pain. That uneven gait creates new problems in other
                joints.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                This is why so many people with chronic foot pain also develop
                knee pain or hip discomfort. It's not separate issues. It's a
                cascade effect from one misaligned joint.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Orthos restores neutral alignment. The X-Straps guide your ankle
                into the position it's supposed to be in—the position where
                ligaments, tendons, and muscles can function optimally. And when
                your ankle is aligned? Your knee tracks correctly. Your hip
                doesn't overcompensate. Your gait normalizes.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                You're not just fixing your foot. You're protecting your whole
                body.
              </p>
            </section>

            {/* Testimonials */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">
                But Don't Just Take Our Word For It…
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                When we launched Orthos, we weren't sure how people would
                respond. After all, the market is flooded with "miracle braces"
                that overpromise and underdeliver. But here's what happened:
                Within the first 90 days, over 12,000 customers ordered Orthos.
                And the reviews started pouring in. Not fake reviews. Not
                incentivized testimonials. Just real people, sharing what
                happened when they finally found something that worked.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white overflow-hidden shadow-lg ring-1 ring-border/60 flex flex-col"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={
                          index === 0
                            ? "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F6a144f49f2ac4274b120251dedfc9d05?format=webp&width=800"
                            : index === 1
                              ? "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F6205e190168149d79460bfec4147b7e9?format=webp&width=800"
                              : "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F9762d70010314abd8a92318fa6be30e8?format=webp&width=800"
                        }
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 bg-secondary flex flex-col justify-between flex-grow">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                          {testimonial.highlight}
                        </p>
                        <blockquote className="text-base leading-relaxed text-muted-foreground mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="space-y-8 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Want Support That Actually Works?
              </h2>
              <p className="text-base leading-relaxed max-w-2xl">
                If you've read this far, you probably see yourself in one of
                those stories. Maybe you're the nurse who's tired of limping to
                the car. Maybe you're the parent who wants to play with your
                kids without wincing. Maybe you're the athlete who just wants to
                trust your ankle again. Maybe you're the traveler who's sick of
                swollen feet ruining every trip.
              </p>
              <p className="text-base leading-relaxed max-w-2xl">
                Here's what we know: You've tried other solutions. They didn't
                work—or they worked for a week and then stopped. You're
                skeptical. You're frustrated. And you're probably thinking,
                "Yeah, this sounds good, but how do I know it'll work for ME?"
              </p>
              <p className="text-base leading-relaxed max-w-2xl font-semibold">
                Fair question. That's why we're backing ORTHOS with a 30-Day
                Pain-Free Guarantee.
              </p>
            </section>

            {/* How The Guarantee Works */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Here's how it works:
              </h3>
              <ol className="space-y-3 text-base text-muted-foreground list-decimal list-inside">
                <li>
                  Order Orthos today. Wear it for a full 30 days—through your
                  work shifts, your morning walks, your daily routine. Put it to
                  the test in your real life.
                </li>
                <li>
                  If you don't feel a significant reduction in pain… if your
                  ankle doesn't feel more stable… if your feet are still swollen
                  and throbbing by evening… Just send it back. We'll refund
                  every penny. No questions. No hassle.
                </li>
                <li>
                  We're not interested in keeping your money if Orthos doesn't
                  help you. We only win if you win. And if you need to exchange
                  sizes? That's covered too. We want you to have the right
                  fit—not just a fit.
                </li>
              </ol>
            </section>

            {/* Limited Stock */}
            <section className="space-y-6 rounded-2xl border-2 border-accent bg-accent/10 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-accent">
                Limited Stock Notice
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Here's something you should know: Orthos isn't mass-produced in
                some overseas warehouse. We manufacture in limited batches to
                maintain quality control—and right now, we're running low on
                inventory.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our last restock sold out in 11 days. And based on current order
                volume, we're projecting this batch will be gone within the next
                7-10 days.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We're not saying this to create fake urgency. We're saying it
                because we don't want you to come back next week and see "Out of
                Stock" on the page.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you're ready to stop calculating every step… if you're ready
                to walk without that constant background throb… if you're ready
                to feel like yourself again… Now is the time.
              </p>
            </section>

            {/* Final Decision */}
            <section className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Because here's the truth: You can keep doing what you've been
                doing. Keep hoping the pain goes away on its own. Keep buying
                cheap sleeves that slide down or rigid braces you can't actually
                wear.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Or you can try something different. Something built specifically
                for people who've tried everything else. Something backed by a
                guarantee that removes all the risk.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                The choice is yours. But the window is closing.
              </p>
            </section>

            {/* CTA Final */}
            <section className="space-y-6 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
              <a
                href="https://orthos.store/products/ankle-brace"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-secondary transition"
              >
                See How Orthos Can Work For You
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-sm">
                30-Day Money-Back Guarantee | Free Shipping | Secure Checkout
              </p>
            </section>

            {/* Lifestyle Grid - Real People Stories */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">
                See the Difference ORTHOS Makes
              </h2>
              <div className="grid gap-3 md:grid-cols-2 max-w-2xl mx-auto">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={
                        i === 1
                          ? "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F03415596f7dd4b6d8c33987f3dcf7b2f?format=webp&width=800"
                          : i === 2
                            ? "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2Fb017d59f33da4b85b66b0e6a4d25e8d4?format=webp&width=800"
                            : i === 3
                              ? "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2Fe205f8bb6f1340d4bcabf6ec68cbc0d3?format=webp&width=800"
                              : "https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F74a466897ddd4a5b8bbc5d591b7cdb70?format=webp&width=800"
                      }
                      alt="Orthos customer success story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Checklist */}
            <section className="space-y-6">
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                  <span>Fits in any shoe—dress shoes, boots, sneakers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                  <span>
                    Adjustable for your perfect fit (with sizing guide included)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                  <span>Breathable, moisture-wicking, all-day comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                  <span>
                    Works for plantar fasciitis, ankle instability, and swelling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                  <span>Trusted by over 12,000 customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-none" />
                  <span>30-day guarantee + free size exchanges</span>
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Still have questions?
              </h2>

              <div className="space-y-6">
                <div className="rounded-2xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    "Will this work for my specific condition?"
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Orthos is designed for plantar fasciitis, ankle instability,
                    general swelling, and recovery from sprains. If you're
                    unsure, consult your healthcare provider—and remember, you
                    have 30 days to test it risk-free.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    "How do I know what size to order?"
                  </h3>
                  <p className="text-base text-muted-foreground">
                    We include a detailed sizing guide, and if you need to
                    exchange, it's completely hassle-free under our guarantee.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    "Can I wear this during exercise?"
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Yes. Many customers wear Orthos during workouts, runs, and
                    sports. The adjustable straps let you dial in the support
                    level you need.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    "How long until I feel the results?"
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Many users report feeling more stable and supported within
                    the first hour. Pain reduction varies—some notice
                    improvement within days, others within 1-2 weeks of
                    consistent wear.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="text-xs text-muted-foreground italic">
              <p>
                This article is for informational purposes only and is not
                intended as medical advice. Always consult your healthcare
                provider before starting any new treatment. Individual results
                may vary.
              </p>
            </section>
          </article>

          {/* Sticky Sidebar */}
          <aside className="space-y-4 h-fit sticky top-24 hidden lg:block">
            <div
              className="space-y-4 rounded-3xl bg-white p-6 shadow-2xl border border-border/40"
              id="order"
            >
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  LIMITED TIME
                </p>
                <h3 className="text-xl font-bold text-primary leading-snug">
                  ORTHOS FOOT SLEEVE AND ANKLE SUPPORT STRAP
                </h3>
              </div>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-4xl font-bold text-primary">$39</span>
                <span className="text-sm font-semibold text-muted-foreground line-through">
                  $79
                </span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  50% OFF
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-xs">4.7 / 5 stars</span>
              </div>

              <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 p-4 flex justify-center -mx-6 px-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbdd0323bbd62433fb2b19a5850550dd6%2F8df822dd30f045b6bd3f3d062c917255?format=webp&width=800"
                  alt="ORTHOS Ankle Brace Product"
                  className="w-2/3 h-auto object-contain"
                />
              </div>

              <a
                href="https://orthos.store/products/ankle-brace"
                className="block w-full rounded-full bg-accent py-3 text-center font-semibold text-white hover:bg-accent/90 transition mt-2 shadow-md"
              >
                Get Orthos Now
              </a>

              <ul className="space-y-2 text-sm text-muted-foreground pt-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-none flex-shrink-0" />
                  <span className="text-xs">Free shipping on all orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-none flex-shrink-0" />
                  <span className="text-xs">Fits any shoe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-none flex-shrink-0" />
                  <span className="text-xs">All day comfort</span>
                </li>
              </ul>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center text-xs text-muted-foreground">
                <p className="font-semibold text-foreground text-xs">
                  Limited stock available
                </p>
                <p className="mt-0.5 text-xs">
                  Projected to sell out in 7-10 days
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-secondary p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-3">Benefits:</p>
              <ul className="space-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
                <li>✓ Fits any shoe</li>
                <li>✓ Adjustable straps</li>
                <li>✓ All-day comfort</li>
                <li>✓ Plantar fasciitis relief</li>
                <li>✓ Ankle stabilization</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Sticky Check Availability Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-2xl">
        <a
          href="https://orthos.store/products/ankle-brace"
          className="block w-full bg-accent text-center py-4 text-lg font-semibold text-white hover:bg-accent/90 transition"
        >
          Check Availability
        </a>
      </div>
    </div>
  );
}
