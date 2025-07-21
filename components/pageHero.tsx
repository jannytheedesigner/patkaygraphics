import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string; // e.g., 'h-96' or 'min-h-[60vh]'
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className={`relative w-full h-[20em] overflow-hidden mt-16 flex flex-col z-10`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text Content */}
      <div className="max-w-7xl relative z-40 flex flex-col mx-auto h-full px-4 text-white">
        <div className="flex flex-col my-auto text-center w-fit h-fit">
            <h1 className="text-5xl font-bold">{title}</h1>
            {subtitle && (
            <p className="mt-2 text-[16px] md:text-[lg] text-white/80 max-w-xl">
                {subtitle}
            </p>
            )}
        </div>
      </div>
    </section>
  );
}
