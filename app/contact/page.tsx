// pages/contact.tsx
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/pageHero";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <PageHero
            title="Get in Touch"
            subtitle="We'd love to hear from you! Whether you have a question, feedback, or collaboration idea—drop us a message."
            backgroundImage="/assets/contact.jpg"
            height="min-h-[60vh]"
        />
        {/* Contact Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-0 relative z-40 w-full gap-16 py-24">
          {/* Form */}
          <div className="bg-white w-full dark:bg-slate-800 lg:p-12 p-8 rounded-3xl border-[1px] border-slate-200">
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <Input type="text" className="py-3 px-4" placeholder="Your full name" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Input type="email" className="py-3 px-4" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <Textarea rows={5} className="py-3 px-4" placeholder="Write your message here..." />
              </div>
              <Button type="submit" className="w-full md:w-auto py-3.5 flex">
                Send Message
                <SendHorizontal />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 w-full lg:p-12 p-8 border-slate-200 border-[1px] bg-slate-900 group-hover:bg-yellow-500 relative rounded-3xl">
            <Image
                src="/assets/website-assets/send-pattern.svg?height=900&width=550"
                alt="Women in a discussion circle"
                width={900}
                height={900}
                className="mx-auto w-auto absolute h-[20em] opacity-10 z-20 overflow-visible left-32 object-cover sm:w-full"
            />
            <div className="flex items-start group gap-4">
              <MapPin className="text-yellow-500 w-16 h-16 my-auto stroke-[1px]" />
              <div className="my-auto flex flex-col h-fit">
                <h4 className="font-semibold text-yellow-100">Our Address</h4>
                <p className="text-slate-100 dark:text-slate-100">
                  Lilongwe, Malawi<br />Area 10, HerVoiceMW HQ
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-yellow-500 my-auto text-yellow-500 w-16 h-16 mt-1 stroke-[1px]" />
              <div className="my-auto flex h-fit flex-col">
                <h4 className="text-yellow-100 font-semibold">Phone</h4>
                <p className="text-slate-100 dark:text-slate-100">+265 999 000 111</p>
                <p className="text-slate-100 dark:text-slate-100">+265 888 000 111</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-yellow-500 my-auto text-yellow-500 w-16 h-16 mt-1 stroke-[1px]" />
              <div className="my-auto flex h-fit flex-col">
                <h4 className=" text-yellow-100 font-semibold">Email</h4>
                <p className="text-slate-100 dark:text-slate-100">hello@hervoicemw.org</p>
              </div>
            </div>
            <div className="py-6 px-8 bg-white dark:bg-slate-800 rounded-xl">
              <h4 className="font-semibold text-slate-900">Working Hours</h4>
              <p className="text-slate-800 dark:text-slate-100">Monday to Friday: 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
