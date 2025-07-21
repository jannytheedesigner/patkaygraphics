import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {ArrowRight, Award, BookOpen, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export function Resources() {
  return (
      <section className="w-full bg-slate-50 py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div
                  className="inline-block rounded-full text-yellow-100 bg-yellow-500 px-4 py-2 font-semibold text-sm dark:bg-yellow-800/30">
                Resources
              </div>
              <h2 className="text-3xl font-bold tracking-normal md:text-4xl/tight">Helpful
                Resources</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access tools and information to support your personal and professional growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-yellow-800/20 dark:text-yellow-400">
                    <BookOpen className="h-6 w-6"/>
                  </div>
                  <h3 className="text-xl font-bold">Career Development</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Access guides, templates, and advice for advancing your career and developing
                  professional skills.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Resume & CV Templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Interview Preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Negotiation Skills</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="outline" className="w-full">
                  Access Resources
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-yellow-800/20 dark:text-yellow-400">
                    <Users className="h-6 w-6"/>
                  </div>
                  <h3 className="text-xl font-bold">Entrepreneurship</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Resources for women starting or growing their own businesses, from planning to
                  funding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Business Plan Templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Funding Opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Marketing Strategies</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="outline" className="w-full">
                  Access Resources
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-yellow-800/20 dark:text-yellow-400">
                    <Award className="h-6 w-6"/>
                  </div>
                  <h3 className="text-xl font-bold">Personal Growth</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Tools and guides for personal development, well-being, and building confidence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Self-Care Practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Confidence Building</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-yellow-600"/>
                    <span>Goal Setting Worksheets</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="outline" className="w-full">
                  Access Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="">
              <Button variant="outline" className="gap-1">
                View All Resources
                <ArrowRight className="h-4 w-4"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}
