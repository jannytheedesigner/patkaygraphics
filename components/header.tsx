"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Phone, Mail, User, MessageSquare, Menu, Facebook, Twitter, Instagram, Search} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import Image from "next/image"
import HexagonButton from "@/components/ui/hexagon-button";

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
      return (
          <li>
            <NavigationMenuLink asChild>
              <a
                  ref={ref}
                  className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      className,
                  )}
                  {...props}
              >
                <div className="text-[16px] borna font-medium leading-none text-brand-primary-dark">{title}</div>
                <p className="line-clamp-2 text-[16px] leading-snug text-muted-foreground">{children}</p>
              </a>
            </NavigationMenuLink>
          </li>
      )
    },
)
ListItem.displayName = "ListItem"

export default function Header() {
  const isMobile = useMobile()

  return (
      <>
        <div className="notification-bar mx-auto flex items-center justify-center bg-brand-primary text-white text-sm py-2 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@coolenterprisesmw.com</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+265 999 362 633</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="font-medium">Hosting Flash Sale: Starting at MWK 150,000/yr for a limited time</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="hover:underline flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden md:inline">Live Chat</span>
                </Link>
                <Link href="/login" className="hover:underline flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <header className="sticky top-0 py-3 z-50 w-full bg-brand-secondary-dark">
          <div className="container mx-auto flex h-16 items-center justify-center">
            <div className="flex items-center mx-auto w-full">
              <Link href="/" className="font-bold text-xl mr-6 text-brand-secondary">
                <Image src={"/logos/1. Primary Logo/PNG/Multi Color Primary Logo.png"} alt={"Logo Cool Enteprises Limited"} width={500} height={500} className={"w-auto h-18"} />
              </Link>

              {!isMobile && (
                  <NavigationMenu className={"mx-auto flex w-fit"}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}><span className={"text-white/20 mr-2"}>01</span>Home</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}><span className={"text-white/20 mr-2"}>02</span>About Us</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger><span className={"text-white/20 mr-2"}>03</span>Our Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[55vw] lg:grid-cols-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* Creative Services */}
                              <div className={"h-full bg-brand-primary w-full"}>

                              </div>

                              {/* Development Services */}
                              <div>
                                <ListItem href="/services/web-development" title="Web Development">
                                  We develop professional, modern and fully customizable websites where you, the client, can easily update the web content with no expert skills required.
                                </ListItem>
                                <ListItem href="/services/software-development" title="Software Development">
                                  With a team of highly skilled developers, we build software applications that are affordable and tailored to your exact needs.
                                </ListItem>
                                <ListItem href="/services/mobile-app-development" title="Mobile App Development">
                                  We build mobile applications from the ground up and make sure that they are as clean and intuitively easy to use as possible.
                                </ListItem>
                                <ListItem href="/services/hosting" title="Website and Email Hosting">
                                  You can count on us for the most reliable web hosting and email hosting services. We offer attractive rates and various-sizes of hosting space of your choice on our full time running Linux servers.
                                </ListItem>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className={"h-full bg-brand-primary w-full"}>

                              </div>

                              {/* Creative Services */}
                              <div>
                                <ListItem href="/services/graphics-design" title="Graphics Design">
                                  With excellent talent at hand, we have quality graphic designers who produce some of the most outstanding works on the market.
                                </ListItem>
                                <ListItem href="/services/ui-web-design" title="UI & Web Design">
                                  We craft intuitive and visually engaging UI designs and web layouts to ensure the best user experience across all devices.
                                </ListItem>
                                <ListItem href="/services/brand-strategy" title="Brand Strategy & Design">
                                  From naming and logo design to full visual systems, we help build brands that leave a lasting impression.
                                </ListItem>
                                <ListItem href="/services/domain-registration" title="Domain Registration">
                                  We register domain names in the format yourname.com/.biz/.net/.org. Get the most affordable rates for a domain name that is registered for 2 years.
                                </ListItem>
                              </div>
                            </div>


                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}><span className={"text-white/20 mr-2"}>04</span>Portfolio</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}><span className={"text-white/20 mr-2"}>05</span>Contact</NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
              )}
            </div>

            {!isMobile ? (
                <div className="flex items-center mx-auto gap-10">
                  <Popover>
                    <PopoverTrigger className={"flex gap-4"}><Search className={"w-5 h-5 text-brand-compliment my-auto"}/><p className={"text-white text-[16.5px] my-auto font-semibold"}>Search</p></PopoverTrigger>
                    <PopoverContent className={"w-[100vh] z-40 h-fit mx-auto text-center justify-center items-center bg-brand-secondary-light"}>This is the content for the popover</PopoverContent>
                  </Popover>
                  <div className="flex gap-4 bg-brand-compliment p-2 text-brand-secondary-dark">
                    <Link
                        href="#"
                        aria-label="Facebook"
                        className="hover:text-foreground p-2"
                    >
                      <Facebook className="w-5 h-5 stroke-[1.5px]" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Twitter"
                        className="hover:text-foreground  p-2"
                    >
                      <Twitter className="w-5 h-5 stroke-[1.5px]" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Instagram"
                        className="hover:text-foreground  p-2"
                    >
                      <Instagram className="w-5 h-5 stroke-[1.5px]" />
                    </Link>
                  </div>
                </div>
            ) : (
                <div className="flex items-center mx-auto">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <nav className="flex flex-col gap-4 mt-8">
                        <Link href="/" className="text-lg font-medium">
                          Home
                        </Link>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Hosting Plans</h3>
                          <div className="pl-4 flex flex-col gap-2">
                            <Link href="/hosting" className="text-sm">
                              Web Hosting
                            </Link>
                            <Link href="/hosting#shared" className="text-sm">
                              Shared Hosting
                            </Link>
                            <Link href="/hosting#business" className="text-sm">
                              Business Hosting
                            </Link>
                            <Link href="/hosting#wordpress" className="text-sm">
                              WordPress Hosting
                            </Link>
                            <Link href="/hosting/compare" className="text-sm">
                              Compare Plans
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Domain</h3>
                          <div className="pl-4 flex flex-col gap-2">
                            <Link href="/register-domain" className="text-sm">
                              Register Domain
                            </Link>
                            <Link href="/domain-transfer" className="text-sm">
                              Transfer Domain
                            </Link>
                            <Link href="/domain-extensions" className="text-sm">
                              Domain Extensions
                            </Link>
                            <Link href="/domain-pricing" className="text-sm">
                              Domain Pricing
                            </Link>
                          </div>
                        </div>
                        <Link href="/blog" className="text-lg font-medium">
                          Blog
                        </Link>
                        <div className="flex items-center mt-4">
                          <Phone className="h-4 w-4 mr-2" />
                          <span className="text-sm">Call: +265 999 362 633</span>
                        </div>
                        <Button asChild className="mt-4">
                          <Link href="/get-started">Client Area</Link>
                        </Button>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
            )}
          </div>
        </header>
      </>
  )
}
