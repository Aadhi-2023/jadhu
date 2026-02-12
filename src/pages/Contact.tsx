import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you as soon as possible." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Get In Touch</h1>
        <p className="text-muted-foreground">We'd love to hear from you. Reach out any time!</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <motion.div className="space-y-6" initial="hidden" animate="visible" variants={fadeUp}>
          {[
            { icon: Mail, label: "Email", value: "hello@pawselite.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Address", value: "123 Breeder Lane, Petsville, CA 90210" },
            { icon: Clock, label: "Business Hours", value: "Mon – Sat: 9am – 6pm" },
          ].map(({ icon: Icon, label, value }) => (
            <Card key={label} className="border-none bg-secondary/50">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Map placeholder */}
          <div className="aspect-video overflow-hidden rounded-xl bg-secondary">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <MapPin className="mr-2 h-5 w-5" /> Map placeholder
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Card className="border-none bg-secondary/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <Input
                  placeholder="Subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
