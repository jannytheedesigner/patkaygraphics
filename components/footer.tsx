import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background text-muted-foreground relative">
      {/* Background Pattern */}
      <Image
        src="/assets/pattern-hover.svg?height=900&width=550"
        alt="Women in a discussion circle"
        width={900}
        height={900}
        className="mx-auto w-auto absolute h-[50em] z-10 bottom-0 object-cover sm:w-full"
      />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-0 py-12 relative z-30 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo & Description */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <Link href="/" className="inline-flex flex-col items-center space-x-2">
            <Image
              src="/assets/brand-logo/main.svg"
              alt="HerVoiceMW Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-[16px] text-slate-800">
            Amplifying the voices of women and girls across Malawi through storytelling, journalism, and community engagement.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-foreground border-yellow-500 border-2 rounded-full p-2"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-foreground border-yellow-500 border-2 rounded-full p-2"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-foreground border-yellow-500 border-2 rounded-full p-2"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:ml-24">
          <h4 className="font-semibold text-slate-900 mb-4">Explore</h4>
          <ul className="space-y-2 text-[16px] text-slate-800">
            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="/stories" className="hover:text-foreground">Stories</Link></li>
            <li><Link href="/categories" className="hover:text-foreground">Topics</Link></li>
          </ul>
        </div>

        <div className="lg:ml-24">
          <h4 className="font-semibold text-slate-900 mb-4">Community</h4>
          <ul className="space-y-2 text-[16px] text-slate-800">
            <li><Link href="/contributors" className="hover:text-foreground">Contributors</Link></li>
            <li><Link href="/events" className="hover:text-foreground">Events</Link></li>
            <li><Link href="/partners" className="hover:text-foreground">Our Partners</Link></li>
            <li><Link href="/support" className="hover:text-foreground">Support Us</Link></li>
          </ul>
        </div>

        <div className="lg:ml-24">
          <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-[16px] text-slate-800">
            <li><Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 relative z-40 bg-slate-900 text-center text-[15px] text-white">
        &copy; {new Date().getFullYear()} HerVoiceMW. All rights reserved.{" "}
        <span className="transition-all duration-250 hover:text-yellow-100 hover:cursor-pointer">
          <Link href="https://coolenterprisesmw.com">Cool Enterprises Limited</Link>
        </span>
      </div>
    </footer>
  );
}
