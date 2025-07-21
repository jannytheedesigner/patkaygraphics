import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SubscribeButton() {
  return (
    <div className="relative hidden md:block group">
      {/* Trigger Button */}
      <button className="bg-yellow-500 text-slate-900 px-6 font-semibold py-2.5 rounded-full hover:bg-yellow-300 transition flex items-center gap-2">
        <BellRing className="w-4 h-4" />
        Subscribe
      </button>

      {/* Hoverable Form */}
      <div className="absolute right-0 top-14 w-96 p-6 rounded-2xl overflow-hidden bg-white shadow-lg z-50 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
        <Image
          src="/assets/pattern-hover.svg?height=900&width=550"
          alt="Women in a discussion circle"
          width={900}
          height={900}
          className="mx-auto w-auto h-[10em] top-0 z-20 absolute left-0 object-cover sm:w-full"
        />
        <form className="flex space-x-2 bg-slate-900 p-3 relative z-40 rounded-lg">
          <Input
            className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Enter your email"
            type="email"
            autoComplete="email"
          />
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-center text-slate-900/80 relative z-40 mt-2">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
