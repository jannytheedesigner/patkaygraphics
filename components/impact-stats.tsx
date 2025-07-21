"use client"

import { Users, BookOpen, CalendarCheck2 } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
      <section

          className="w-full py-12 md:py-24 relative overflow-hidden lg:py-32 bg-slate-900 dark:bg-yellow-950/10"
      >
        <Image
            src="/assets/pattern-hover.svg"
            alt="Women in a discussion circle"
            width={900}
            height={900}
            className="mx-auto w-auto absolute h-[50em] top-2 z-20 overflow-hidden object-cover sm:w-full"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full text-white bg-white/10 px-4 py-2 border-white/30 border-[1.5px] font-semibold text-sm"
              data-aos="fade-in" data-aos-duration="500">
                Impact in Numbers
              </div>
              <h2 ref={ref} className="text-3xl text-white font-bold tracking-normal md:text-4xl/tight"
              data-aos="fade-in" data-aos-duration="600" data-aos-delay="100">
                Making a Difference
              </h2>
              <p className="max-w-[900px] text-slate-100 text-[16px] w-[70%] mx-auto"
              data-aos="fade-in" data-aos-duration="700" data-aos-delay="200">
                Since our founding, we've been committed to empowering women and creating positive change.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, value: 13600, label: "Women Reached", },
              { icon: BookOpen, value: 34, label: "AboutUs Published", suffix: "+" },
              { icon: CalendarCheck2, value: 34, label: "Events Hosted and Made", suffix: "" },
              { icon: Users, value: 560, label: "Connection Made", suffix: "+" },
            ].map(({ icon: Icon, value, label, suffix }, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500 dark:bg-yellow-200" data-aos="fade-in" data-aos-duration="500">
                    <Icon className="h-10 w-10 text-yellow-200 dark:text-yellow-400 stroke-[1.2px]" />
                  </div>
                  <h3 className="text-4xl text-white font-bold">
                    {startCount && <CountUp end={value} duration={3} />} {suffix}
                  </h3>
                  <p className="text-slate-100">{label}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
