"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, BookOpen, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { PageHero } from "@/components/pageHero"
import { Subscribe } from "@/components/blog/subscribe"

const blogPosts = [
  {
    id: 1,
    title: "Breaking Barriers in Tech",
    slug: "breaking-barriers-in-tech",
    category: "Career",
    excerpt:
      "How women are reshaping the technology landscape and creating more inclusive spaces for innovation.",
    image: "/assets/values/transparency.png",
    likes: 24,
    readTime: "5 min read",
  }
]

const categories = ["All", "Career", "Health & Wellness", "Awareness", "Lifestyle & Beauty"]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div>
      <PageHero
        title="HerVoice Blog"
        subtitle="Explore stories that inspire, empower, and inform."
        backgroundImage="/assets/values/voice.jpg"
        height="min-h-[60vh]"
      />

      <section className="px-4 py-16 bg-slate-100 space-y-12">
        {/* Tabs */}
        <div className="flex max-w-7xl mx-auto justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="bg-slate-100 pb-24">
        <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 relative z-40">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow bg-white">
              <Link href={`/blog/article-name`} className="block">
                <CardHeader className="p-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={350}
                    height={250}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="px-6 pt-2">
                  <div className="inline-block font-medium rounded-lg bg-gray-100 px-3 py-1 text-xs dark:bg-yellow-800/30">
                    {post.category}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Link>
              <CardFooter className="flex items-center px-6 pb-4 pt-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto py-2 gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Subscribe />
    </div>
  )
}
