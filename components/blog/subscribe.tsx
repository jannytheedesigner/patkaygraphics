import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";

export function Subscribe() {
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden z-50 lg:py-32 dark:bg-yellow-950/10">

      <div className="max-w-7xl mx-auto px-4 relative z-40 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
              Stay Updated for the Latest News and Updates
              <span className="text-yellow-500 dark:text-yellow-400">.</span>
            </h1>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2 bg-slate-900 p-3 rounded-xl">
              <Input
                className="max-w-lg flex-1 my-auto border-[1px] border-white/0"
                placeholder="Enter your email"
                type="email"
                autoComplete="email"
              />
              <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-white/80">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}
