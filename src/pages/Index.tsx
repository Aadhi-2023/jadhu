import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Award, Star, PawPrint } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const featuredBreeds = [
  { name: "Golden Retriever", trait: "Friendly & Loyal", img: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=300&fit=crop" },
  { name: "French Bulldog", trait: "Playful & Compact", img: "https://images.unsplash.com/photo-1583337130417-13104dec14a3?w=400&h=300&fit=crop" },
  { name: "Labrador", trait: "Energetic & Gentle", img: "https://images.unsplash.com/photo-1579213838058-4a43b9761547?w=400&h=300&fit=crop" },
  { name: "Cavalier Spaniel", trait: "Affectionate & Calm", img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=300&fit=crop" },
];

const testimonials = [
  { name: "Sarah M.", text: "PawsElite matched us with the perfect puppy. Our Golden Retriever has been an absolute joy!", rating: 5 },
  { name: "James T.", text: "Professional, caring, and genuinely passionate about their breeds. Couldn't ask for a better experience.", rating: 5 },
  { name: "Emily R.", text: "From the first visit to bringing our puppy home, every step was handled with such care. Highly recommend!", rating: 5 },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-24 text-center md:py-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <PawPrint className="mx-auto mb-4 h-12 w-12 text-primary" />
        </motion.div>
        <motion.h1
          className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
          initial="hidden" animate="visible" variants={fadeUp} custom={1}
        >
          Where Every Paw Finds Its <span className="text-primary">Perfect Home</span>
        </motion.h1>
        <motion.p
          className="max-w-xl text-lg text-muted-foreground"
          initial="hidden" animate="visible" variants={fadeUp} custom={2}
        >
          With over 15 years of responsible breeding, we raise healthy, happy companions you'll love for a lifetime.
        </motion.p>
        <motion.div className="flex gap-3" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/breeds">Explore Breeds</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* About */}
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">Why Choose PawsElite?</h2>
        <p className="text-muted-foreground">Dedicated to excellence in every wag and purr.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { icon: Heart, title: "Raised With Love", desc: "Every puppy grows in a nurturing home environment with daily socialisation and care." },
          { icon: Shield, title: "Health Guaranteed", desc: "Comprehensive health screenings and veterinary checks ensure your pet arrives healthy." },
          { icon: Award, title: "15+ Years Experience", desc: "Our expertise and passion has earned the trust of hundreds of happy families." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
            <Card className="h-full border-none bg-secondary/50 text-center transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center gap-3 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Featured Breeds */}
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Featured Breeds</h2>
          <p className="text-muted-foreground">Meet some of our beloved companions.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBreeds.map((breed, i) => (
            <motion.div key={breed.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link to="/breeds">
                <Card className="group overflow-hidden border-none transition-shadow hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={breed.img} alt={breed.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold">{breed.name}</h3>
                    <p className="text-sm text-muted-foreground">{breed.trait}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">Happy Families</h2>
        <p className="text-muted-foreground">Hear from our wonderful pet owners.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
            <Card className="h-full border-none bg-secondary/50">
              <CardContent className="flex flex-col gap-3 p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <p className="mt-auto text-sm font-semibold">— {t.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Index;
