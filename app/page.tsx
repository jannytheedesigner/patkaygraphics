// pages/index.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Newsletter } from "@/components/newsletter"
import { Badge } from "@/components/ui/badge"
import {ImpactStats} from "@/components/impact-stats";
import {Resources} from "@/components/resources";
import {Testimonials} from "@/components/testimonials";
import {Mission} from "@/components/mission";
import {AboutUs} from "@/components/about-us";
import {Events} from "@/components/events";
import Hero from "@/components/hero";
import { CallToAction } from "@/components/call-to-action";



const Home = () => {
  return (
      <div>
          <main className="flex-1">
              {/* Hero Section with Background Image */}
              <Hero
                  title="Clean, Modern, Efficient Web Design & Software Development."
                  subtitle="Patkay Graphics is a full-service Malawian graphic design, web and software development firm with a unique drive to yield top results at affordable prices."
                  primaryCta={{
                      text: "Get Free Quote",
                      href: "/hosting",
                  }}
                  secondaryCta={{
                      text: "Get Started Now",
                      href: "/get-started",
                  }}
              />

              {/* Featured AboutUs Section */}
              <AboutUs />

              {/* Our Mission Section */}
              <Mission />

              {/* Upcoming Events */}
              <Events />

              {/* Impact Statistics */}
              <ImpactStats />

              {/* Testimonials */}
              <Testimonials />

              {/* Resources */}
              <Resources />

              <Newsletter/>

              <CallToAction />
          </main>
      </div>
  );
};

export default Home;
