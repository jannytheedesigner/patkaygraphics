import Image from "next/image";

export function CoreValues() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
      {/* Section Heading */}
      <div className="flex flex-col items-center space-y-2 mb-10 text-center">
        <div className="inline-block rounded-full text-slate-900 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 font-semibold text-sm">
          Our Core Values
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          What We Stand For
        </h2>
      </div>

      {/* Value Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Empowerment",
            description: "We uplift and amplify the voices of women and girls across Malawi.",
            image: "/assets/values/empowerment.jpg",
          },
          {
            title: "Voice",
            description: "We provide a safe platform for unheard stories to be shared and celebrated.",
            image: "/assets/values/voice.jpg",
          },
          {
            title: "Transparency",
            description: "We operate with openness, honesty, and accountability.",
            image: "/assets/values/transparency.png",
          },
          {
            title: "Community",
            description: "We build meaningful relationships and empower collective action.",
            image: "/assets/values/community.jpg",
          },
        ].map((value, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden h-[20em] sm:h-[22em] shadow-lg group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={value.image}
                alt={value.title}
                className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Overlay Text */}
            <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-1">
                <div className="h-[2px] w-4 bg-yellow-500 rounded-full" />
                <h3 className="text-lg sm:text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-[16px] sm:text-[16.5px] text-white/90">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
