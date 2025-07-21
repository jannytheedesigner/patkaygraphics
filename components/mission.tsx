import Image from "next/image";

export function Mission() {
  return (
      <section className="w-full bg-slate-900 dark:bg-yellow-950/10 relative">
        <Image
            src="/assets/pattern.svg?height=900&width=550"
            alt="Women in a discussion circle"
            width={900}
            height={900}
            className="mx-auto w-auto absolute h-[28em] z-20 overflow-hidden object-cover sm:w-full"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-40">

          <Image
                src="/assets/website-assets/amplify.png"
                alt="Women in a discussion circle"
                width={900}
                height={900}
                className="left-[-13em] absolute w-fit h-[35em] overflow-visible bottom-0"
                data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">

            <div className="h-full">

            </div>

            <div className="flex flex-col py-24 justify-center space-y-4">
              <div className="space-y-2">
                <div
                    className="inline-block rounded-full text-white bg-white/10 px-4 py-2 border-white/30 border-[1.5px] font-semibold text-sm"
                    data-aos="fade-in" data-aos-duration="500" data-aos-delay="100">
                  Our Mission is to
                </div>
                <h2 className="text-3xl text-white font-bold tracking-normal md:text-4xl/tight"
                data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Amplify
                  Women's Voices</h2>
                <p className="max-w-[600px] text-gray-100 text-[16px]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                  HerVoiceMW is dedicated to creating a platform where women's stories,
                  achievements, and challenges
                  are shared, celebrated, and used as catalysts for positive change.
                </p>
              </div>
              <ul className="grid gap-2 text-white">
                <li className="flex items-center gap-2 text-white" data-aos="fade-in" data-aos-duration="500" data-aos-delay="300">
                  <div
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100/20 text-white">
                    1
                  </div>
                  <span className="font-medium">Empower women through storytelling</span>
                </li>
                <li className="flex items-center gap-2" data-aos="fade-in" data-aos-duration="500" data-aos-delay="400">
                  <div
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100/20 text-white">
                    2
                  </div>
                  <span className="font-medium" >Highlight achievements across all sectors</span>
                </li>
                <li className="flex items-center gap-2" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">
                  <div
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100/20 text-white">
                    3
                  </div>
                  <span className="font-medium">Create a supportive community for growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
