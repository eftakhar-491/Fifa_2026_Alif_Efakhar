import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/helpers/authOptions";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Trophy, Users, Globe, Calendar, Award, Star, Mail, Phone, MapPin } from "lucide-react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Welcome to{" "}
                <span className="text-primary">FIFA World Cup 2026</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                Experience the world&apos;s greatest football tournament. Join millions of fans
                in celebrating the beautiful game.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {session ? (
                  <Button size="lg" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                ) : (
                  <>
                    <Button size="lg" asChild>
                      <Link href="/register">Get Started</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/login">Sign In</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About FIFA 2026
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The FIFA World Cup 2026 will be the 23rd FIFA World Cup, the quadrennial
                international men&apos;s football championship.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">A Tournament Like No Other</h3>
                <p className="text-muted-foreground mb-4">
                  This historic tournament will bring together the best teams from around the
                  world to compete for the most prestigious trophy in football.
                </p>
                <p className="text-muted-foreground">
                  With expanded participation and world-class venues, FIFA 2026 promises to be
                  the most inclusive and exciting World Cup in history.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg border bg-card">
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold mb-2">World Class</h4>
                  <p className="text-sm text-muted-foreground">
                    The ultimate football competition
                  </p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold mb-2">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">
                    Teams from every continent
                  </p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold mb-2">Millions of Fans</h4>
                  <p className="text-sm text-muted-foreground">
                    Join the global celebration
                  </p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold mb-2">2026</h4>
                  <p className="text-sm text-muted-foreground">
                    Mark your calendars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Key Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes FIFA 2026 special
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
                <p className="text-muted-foreground">
                  Enjoy world-class stadiums and state-of-the-art facilities designed for the
                  ultimate football experience.
                </p>
              </div>
              <div className="p-8 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fan Engagement</h3>
                <p className="text-muted-foreground">
                  Connect with fans from around the world and be part of the global football
                  community.
                </p>
              </div>
              <div className="p-8 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Watch every match live with comprehensive coverage and real-time updates from
                  anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Services */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for the perfect World Cup experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ticket Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Secure your tickets for all matches with our easy booking system.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Match Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated with the complete match schedule and timings.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Team Information</h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed information about all participating teams and players.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time scores, news, and updates from the tournament.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tournament by Numbers
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">48</div>
                <div className="text-sm opacity-90">Participating Teams</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">104</div>
                <div className="text-sm opacity-90">Matches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">16</div>
                <div className="text-sm opacity-90">Host Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-sm opacity-90">Host Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Fans Are Saying
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from football enthusiasts around the world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;The best football experience I&apos;ve ever had. The atmosphere is
                  incredible!&quot;
                </p>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-muted-foreground">Football Fan</div>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;Amazing organization and world-class facilities. A tournament to
                  remember!&quot;
                </p>
                <div className="font-semibold">Jane Smith</div>
                <div className="text-sm text-muted-foreground">Sports Enthusiast</div>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;The passion and energy from fans worldwide is truly inspiring. Can&apos;t
                  wait for 2026!&quot;
                </p>
                <div className="font-semibold">Mike Johnson</div>
                <div className="text-sm text-muted-foreground">World Cup Veteran</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Contact */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
                respond as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">
                          info@fifa2026.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          FIFA Headquarters, Zurich, Switzerland
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
