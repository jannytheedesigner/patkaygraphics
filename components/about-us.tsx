import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutUs() {
  return (
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image column */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                    src="/hero.jpg"
                    alt="IT professionals working together"
                    className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content column */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-blue-600 font-medium">IT Support For Business</span>
              </div>

              <h1 className="text-5xl md:text-5xl font-bold max-w-[80%] text-brand-secondary-dark leading-[1.1]">
                Ensuring Your Success Trusted IT Services Source
              </h1>

              <p className="text-gray-700 text-[16px]">
                The firm was brought to inception on the 18th of September 2007. With the driving factors of quality and
                creativity, Parkay Graphics boasts some of the best graphics, web designs and software packages on its
                ever increasing portfolio of products and services.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-0.5 size-5 flex-shrink-0" />
                  <span className="text-gray-700 text-[16px]">Get customized solutions for your businesses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-0.5 size-5 flex-shrink-0" />
                  <span className="text-gray-700 text-[16px]">IT Solutions that boost your businesses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-0.5 size-5 flex-shrink-0" />
                  <span className="text-gray-700 text-[16px]">Boost your brand with our creative team</span>
                </div>
              </div>

              <div className="pt-4">
                <Button >
                  More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
