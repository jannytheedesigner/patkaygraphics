import Image from "next/image";

export function MissionAndVision() {
  return (
    <section className="w-full bg-slate-900 dark:bg-yellow-950/10 relative overflow-hidden">
      {/* Decorative Pattern */}
      <Image
        src="/assets/pattern.svg?height=900&width=550"
        alt="Women in a discussion circle"
        width={900}
        height={900}
        className="absolute top-0 right-0 z-10 h-64 sm:h-80 md:h-[20em] w-auto object-cover"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 relative z-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mission Text */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="inline-block rounded-full bg-white/10 text-white border border-white/30 px-4 py-2 text-sm font-semibold">
                Our Mission is to
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Amplify Women's Voices
              </h2>
              <p className="text-sm sm:text-base text-gray-100 max-w-xl">
                HerVoiceMW is dedicated to creating a platform where women's stories,
                achievements, and challenges are shared, celebrated, and used as catalysts for positive change.
              </p>
            </div>
          </div>

          {/* Vision Points */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-4 text-white">
              {[
                "Empower women through storytelling",
                "Highlight achievements across all sectors",
                "Create a supportive community for growth",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100/20 text-white font-medium">
                    {index + 1}
                  </div>
                  <span className="text-sm sm:text-base font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
