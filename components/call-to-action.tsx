import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function CallToAction() {
  return (
    <section className="text-center py-20 px-4 w-full bg-slate-100/5 dark:bg-yellow-950/10 relative z-50 overflow-hidden">
      <div className="mx-auto w-fit relative z-40">
        <h2 className="text-5xl max-w-2xl mx-auto font-bold text-slate-900 mb-4">Join the Movement</h2>
        <p className="text-gray-700 dark:text-white/80 mb-6">
          Explore powerful stories, amplify your voice, or contribute to the cause.
        </p>
        <Link href="/blog" className="cursor-pointer">
          <Button className="border-2 border-yellow-500 bg-white transition-all duration-200 hover:cursor-pointer hover:bg-yellow-500 text-slate-900 text-base px-6 py-3 rounded-full">
            Read the Blog
          </Button>
        </Link>
      </div>

    </section>
  )
}
