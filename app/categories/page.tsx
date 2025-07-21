// pages/index.tsx
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import {ArrowRight, Heart, Share2, BookOpen, Calendar} from "lucide-react"

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



const Home = () => {
  return (
      <div>
        <MainNav />
          <main className="flex-1">
              {/* Hero Section with Background Image */}
              <section
                  className="relative w-full min-h-[600px] flex items-center justify-center py-12 md:py-24 lg:pt-48 lg:py-32">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                      <Image
                          src="/assets/hero.jpg?height=1080&width=1920"
                          alt="Women empowerment"
                          fill
                          className="object-cover"
                          priority
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/50"></div>
                  </div>

                  {/* Centered Content */}
                  <div className="max-w-7xl mx-auto relative py-4 z-10 px-4 md:px-6 text-center">
                      <div className=" space-y-6">
                          <div className="space-y-4">
                              <h1 className="text-6xl font-bold lg:w-[70%] text-left tracking-normal text-white sm:text-5xl xl:text-7xl/none">
                                  Your Gateway to the World of <span className="text-yellow-400">Inspiration</span>
                              </h1>
                              <p className="max-w-[600px] text-gray-300 text-left md:text-xl">
                                  Empower Yourself. Inspire Others. This is{" "}
                                  <span className="text-yellow-400 font-semibold">HerVoice</span>.
                              </p>
                          </div>
                          <div className="flex flex-col gap-3 sm:flex-row">
                              <Link href="/blog">
                                  <Button className="text-[16px] bg-yellow-500 hover:bg-yellow-600 text-black min-w-[160px]">
                                      Read Our Stories <ArrowRight className="ml-2 h-4 w-4"/>
                                  </Button>
                              </Link>
                              <Link href="/about">
                                  <Button variant="outline"
                                          className=" text-[16px] text-white bg-white/0 border-white hover:bg-white hover:text-black min-w-[160px]">
                                      Learn More
                                  </Button>
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>

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
          </main>
          <Footer/>
      </div>
  );
};

export default Home;
