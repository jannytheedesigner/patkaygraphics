import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Story() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Image and Biography Block */}
        <div className="relative w-full h-[24em] sm:h-[28em] md:h-[30em] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/phone_reading.png?height=1080&width=1920"
            alt="Women empowerment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 p-6 sm:p-8 md:p-12 text-white flex flex-col justify-end h-full">
            <Badge className="bg-yellow-500 text-black w-fit mb-3">Biography</Badge>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Faith Kaunde</h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Faith Kaunde is a dedicated freelance journalist and correspondent reporter for Nation Publications Limited.
              She is the visionary founder behind HerVoice Blog, passionate about empowering women and advocating for gender equality.
            </p>
          </div>
        </div>

        {/* Background Story Block */}
        <div className="relative bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl flex flex-col justify-center overflow-hidden">
          <Image
            src="/assets/pattern-hover.svg?height=1080&width=1920"
            alt="Background Pattern"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="relative z-10">
            <Badge className="bg-yellow-500 text-black w-fit mb-3">Background</Badge>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">The Story Behind HerVoice</h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
              Faith established HerVoice as a platform to amplify the voices of women and young girls who are often silenced.
              Through this platform, HerVoice aims to shed light on the untold stories of women facing various challenges,
              ultimately striving for a more equitable society in Malawi.
            </p>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              With a commitment to sparking meaningful dialogue and creating awareness around important issues affecting women,
              HerVoice is dedicated to making a difference through her work both on and off the pages of the HerVoice Blog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
