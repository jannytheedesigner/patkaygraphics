import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, ArrowRight } from "lucide-react"
import Image from "next/image";

interface HeroCta {
  text: string
  href: string
}

interface HeroProps {
  title: string
  subtitle: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
      <section className=" text-white py-16 md:py-16 overflow-hidden relative">
        <div className={"bg-gradient-to-t from-brand-primary/60 to-brand-secondary-dark absolute top-0 right-0 left-0 w-full h-full bottom-0 z-30"}></div>
        <Image src="/hero-image.jpg" alt="Patkay Hero" width={1000} height={1000} className={"w-full h-full absolute top-0 right-0 bottom-0 z-20"} quality={100} layout={"responsive"} />
        <div className="container mx-auto px-4 relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={"col-span-2"}>
              <div className="mb-3">
                <div className="promo-badge flex gap-3 py-3 px-6 rounded-full w-fit bg-brand-primary/10">
                  <Zap className="h-5 w-5 text-brand-primary" />
                  <span>Welcome to Patkay Graphics</span>
                </div>
              </div>

              <h1 className="text-4xl max-w-4xl md:text-5xl lg:text-[70px] semibold mb-6 leading-[1] tracking-tight" data-aos={"fade-in"} data-aos-duration={"1000"}>
                {title}
              </h1>

              <p className="text-[18px] mb-10 text-white leading-[1.4] max-w-2xl">{subtitle}</p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild variant={"outline"} className={"border-white"}>
                  <Link href={primaryCta.href} className="flex items-center gap-2">
                    {primaryCta.text}
                  </Link>
                </Button>
                <Button
                    asChild
                    variant={"secondary"}
                >
                  <Link href={secondaryCta.href} className="flex items-center gap-2">
                    {secondaryCta.text}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}
