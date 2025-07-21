import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {ArrowRight, BookOpen, Calendar, Heart, Share2} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

export function Events() {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div
                  className="inline-block rounded-full text-slate-600 bg-slate-500/10 px-4 py-2 border-slate-500/30 border-[1.5px] font-semibold text-sm dark:bg-yellow-800/30">
                Events & Workshops
              </div>
              <h2 className="text-3xl font-bold tracking-normal md:text-4xl/tight">Join Our Community
                Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect, learn, and grow with like-minded women at our upcoming events and workshops.
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card
                className={"group relative transition-all rounded-xl overflow-hidden hover:bg-slate-900"}>
              <Image
                  src="/assets/card.svg?height=900&width=550"
                  alt="Women in a discussion circle"
                  width={900}
                  height={900}
                  className="mx-auto w-auto absolute h-[20em] right-0 z-20 bottom-0 transition-all opacity-100 group-hover:opacity-0 overflow-hidden object-cover sm:w-full"
              />
              <Image
                  src="/assets/card-hover.svg?height=900&width=550"
                  alt="Women in a discussion circle"
                  width={900}
                  height={900}
                  className="mx-auto w-auto absolute h-[20em] transition-all opacity-0 group-hover:opacity-100 right-0 z-20 bottom-0 overflow-hidden object-cover sm:w-full"
              />
              <CardContent className="p-6 relative z-40">

                <div className="flex items-center relative z-50 gap-4 mb-4">
                  <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 group-hover:bg-white/20 group-hover:text-white/60 text-yellow-100 dark:bg-yellow-800/20 dark:text-yellow-400">
                    <Calendar className="h-6 w-6"/>

                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">August 28, 2025</p>
                    <p className="text-sm text-muted-foreground">12:30 PM - 05:00
                      PM</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 transition group-hover:text-white">Women in Leadership
                  Workshop</h3>
                <p className="text-muted-foreground mb-4 transition group-hover:text-white/80">
                  A hands-on workshop focused on developing leadership skills and strategies for
                  career advancement.
                </p>
                <Badge
                    className="bg-slate-100 text-black hover:bg-yellow-200 dark:bg-yellow-800/30 dark:text-yellow-400">
                  In-Person
                </Badge>
              </CardContent>
              <CardFooter className="px-6 pb-6 relative z-30 pt-0 bg-transparent mt-16">
                <Button
                    className="w-full bg-slate-900 transition-all hover:text-slate-900 group-hover:text-slate-900 hover:bg-yellow-600 group-hover:bg-yellow-500">Register
                  Now</Button>
              </CardFooter>
            </Card>

            <Card className={"group relative transition-all rounded-xl overflow-hidden hover:bg-slate-900"}>
              <Image
                  src="/assets/virtual.svg?height=900&width=550"
                  alt="Women in a discussion circle"
                  width={900}
                  height={900}
                  className="mx-auto w-auto absolute h-[20em] right-0 z-20 bottom-0 transition-all opacity-100 group-hover:opacity-0 overflow-hidden object-cover sm:w-full"
              />
              <Image
                  src="/assets/virtual-hover.svg?height=900&width=550"
                  alt="Women in a discussion circle"
                  width={900}
                  height={900}
                  className="mx-auto w-auto absolute h-[20em] transition-all opacity-0 group-hover:opacity-100 right-0 z-20 bottom-0 overflow-hidden object-cover sm:w-full"
              />
              <CardContent className="p-6 relative z-40">

                <div className="flex items-center relative z-50 gap-4 mb-4">
                  <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 group-hover:bg-white/20 group-hover:text-white/60 text-yellow-100 dark:bg-yellow-800/20 dark:text-yellow-400">
                    <Calendar className="h-6 w-6"/>

                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">October 15, 2025</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 1:00
                      PM</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 transition group-hover:text-white">Financial Literacy Webinar</h3>
                <p className="text-muted-foreground mb-4 transition group-hover:text-white/80">
                  Learn essential financial skills from expert advisors to help you build wealth and secure your
                  future.
                </p>
                <Badge
                    className="bg-slate-100 text-black hover:bg-yellow-200 dark:bg-yellow-800/30 dark:text-yellow-400">
                  Virtual
                </Badge>
              </CardContent>
              <CardFooter className="px-6 pb-6 relative z-30 pt-0 bg-transparent mt-16">
                <Button
                    className="w-full bg-slate-900 transition-all hover:text-slate-900 group-hover:text-slate-900 hover:bg-yellow-600 group-hover:bg-yellow-500">Register
                  Now</Button>
              </CardFooter>
            </Card>

          </div>
          <div className="flex justify-center">
            <Link href="/events">
              <Button variant="outline" className="gap-1">
                View All Events
                <ArrowRight className="h-4 w-4"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}
