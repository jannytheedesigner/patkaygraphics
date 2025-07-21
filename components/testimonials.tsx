import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-full bg-slate-900 text-slate-100 dark:bg-yellow-800/30 border border-slate-700 px-4 py-2 font-semibold text-sm">
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What Our Community Says
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
            Hear from women whose lives have been impacted by HerVoiceMW.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          <Carousel>
            <CarouselContent>
              {[
                {
                  name: "Linda Mwanza",
                  role: "Entrepreneur",
                  fallback: "LM",
                  testimonial:
                    "HerVoiceMW has been instrumental in my entrepreneurial journey. The resources and community support have helped me grow my business and connect with other women entrepreneurs.",
                },
                {
                  name: "Grace Chirwa",
                  role: "Student",
                  fallback: "GC",
                  testimonial:
                    "The stories on HerVoiceMW have inspired me to pursue my dreams despite the challenges. Seeing other women succeed gives me the confidence to believe in myself.",
                },
                {
                  name: "Thoko Nyirenda",
                  role: "Community Leader",
                  fallback: "TN",
                  testimonial:
                    "HerVoiceMW has created a platform where women's voices are not only heard but celebrated. It's changing the narrative about what women can achieve in our society.",
                },
                {
                  name: "Ahmed Daud",
                  role: "Graphic Designer",
                  fallback: "AD",
                  testimonial:
                    "HerVoiceMW has given me a new perspective on the power of shared stories and inclusive design. It’s inspiring to be part of this journey.",
                },
              ].map(({ name, role, fallback, testimonial }, index) => (
                <CarouselItem key={index} className="sm:basis-3/4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-slate-50 dark:bg-yellow-950/10 border-0 h-full">
                    <CardContent className="p-6 h-full flex flex-col justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt={name}
                          />
                          <AvatarFallback>{fallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
                          <p className="text-sm text-muted-foreground">{role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-white/90">"{testimonial}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="absolute -left-5 sm:-left-8 top-1/2 -translate-y-1/2 z-50" />
            <CarouselNext className="absolute -right-5 sm:-right-8 top-1/2 -translate-y-1/2 z-50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
