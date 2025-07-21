"use client"

import React, { useState } from "react"
import Link from "next/link"
import { DownloadCloud, ExternalLink } from "lucide-react"

import { PageHero } from "@/components/pageHero"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const resources = [
  {
    title: "Gender Advocacy Toolkit",
    description: "A practical guide for grassroots advocacy around gender equity.",
    link: "/assets/resources/gender-advocacy-toolkit.pdf",
    type: "download",
    category: "Awareness",
  },
  {
    title: "Mental Health Support Guide",
    description: "Access local organizations providing free mental health support.",
    link: "https://www.malawimentalhealth.org",
    type: "link",
    category: "Health & Wellness",
  },
  {
    title: "Safe Spaces for Girls - Directory",
    description: "A directory of safe spaces and support centers across Malawi.",
    link: "/assets/resources/safe-spaces-directory.pdf",
    type: "download",
    category: "Awareness",
  },
  {
    title: "Digital Skills for Women",
    description: "Learn how to access online digital training opportunities.",
    link: "https://digital-skills.africa",
    type: "link",
    category: "Career",
  },
  {
    title: "Everyday Skincare Tips",
    description: "Simple and safe skincare tips for Malawian women.",
    link: "/assets/resources/skincare-tips.pdf",
    type: "download",
    category: "Lifestyle & Beauty",
  },
]

const categories = ["All", "Career", "Health & Wellness", "Awareness", "Lifestyle & Beauty"]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((res) => res.category === activeCategory)

  return (
    <div>
      <PageHero
        title="Resources"
        subtitle="Access guides, toolkits, and programs to support and empower women and girls."
        backgroundImage="/assets/values/community.jpg"
        height="min-h-[60vh]"
      />

      {/* Tabs */}
      <section className="px-4 pt-16 bg-white relative z-50">
        <div className="flex max-w-7xl mx-auto justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full capitalize text-[15px]"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Resource Cards */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((res, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow py-6 gap-2">
              <CardHeader>
                <h3 className="text-xl font-bold text-slate-900 leading-[110%]">{res.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-[15px]">{res.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="gap-2" variant="outline">
                  <Link
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {res.type === "download" ? (
                      <>
                        <DownloadCloud className="h-4 w-4" />
                        Download PDF
                      </>
                    ) : (
                      <>
                        <ExternalLink className="h-4 w-4" />
                        Visit Link
                      </>
                    )}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
