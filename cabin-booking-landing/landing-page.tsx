"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  Users,
  Mountain,
  Search,
  ArrowRight,
  Check,
  Heart,
  Share,
  Eye,
  Zap,
  Shield,
  Award,
} from "lucide-react"
import Image from "next/image"
import { DarkModeToggle } from "./components/DarkModeToggle"

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [likedCabins, setLikedCabins] = useState<number[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const categories = [
    { id: "all", name: "All Cabins", count: 120 },
    { id: "luxury", name: "Luxury", count: 45 },
    { id: "family", name: "Family", count: 38 },
    { id: "romantic", name: "Romantic", count: 25 },
    { id: "adventure", name: "Adventure", count: 32 },
  ]

  const cabins = [
    {
      id: 1,
      name: "Aurora Retreat",
      location: "Aspen, Colorado",
      price: 450,
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=300&width=400",
      category: "luxury",
      amenities: ["Hot Tub", "Fireplace", "Mountain View", "WiFi"],
      guests: 8,
    },
    {
      id: 2,
      name: "Wildwood Escape",
      location: "Big Sur, California",
      price: 320,
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      category: "family",
      amenities: ["Kitchen", "Game Room", "Hiking Trails", "Pet Friendly"],
      guests: 6,
    },
    {
      id: 3,
      name: "Moonlight Cabin",
      location: "Lake Tahoe, Nevada",
      price: 280,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=400",
      category: "romantic",
      amenities: ["Lake View", "Private Deck", "Jacuzzi", "Stargazing"],
      guests: 2,
    },
  ]

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Travel Blogger",
      content: "The most seamless booking experience I've ever had. The cabin exceeded all expectations!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Family Traveler",
      content: "Perfect for our family vacation. Kids loved it, parents relaxed. Win-win!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Adventure Seeker",
      content: "Incredible location with amazing hiking trails. Will definitely book again!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const stats = [
    { number: 1200, label: "Happy Guests", suffix: "+" },
    { number: 150, label: "Premium Cabins", suffix: "+" },
    { number: 98, label: "Satisfaction Rate", suffix: "%" },
    { number: 24, label: "Support Available", suffix: "/7" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleLike = (cabinId: number) => {
    setLikedCabins((prev) => (prev.includes(cabinId) ? prev.filter((id) => id !== cabinId) : [...prev, cabinId]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-lg"
      >
        <div className="flex items-center space-x-8">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <Mountain className="w-6 h-6 text-[hsl(var(--brand-primary))]" />
            <span className="font-bold text-foreground">CabinStay</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#explore" className="text-muted-foreground hover:text-foreground transition-colors">
              Explore
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <DarkModeToggle />
            <Button
              size="sm"
              className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-[hsl(var(--brand-primary-foreground))] rounded-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-primary))]/20 via-transparent to-[hsl(var(--brand-accent))]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--brand-primary))_0%,transparent_50%)] opacity-10" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div style={{ y: textY }} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-4 bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-primary))] border-0">
                  ✨ Premium Cabin Rentals
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Find Your
                  <span className="block text-[hsl(var(--brand-primary))]">Perfect</span>
                  <span className="block">Escape</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-muted-foreground max-w-lg"
              >
                Discover handpicked luxury cabins in the world's most breathtaking locations. Your next adventure starts
                here.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-card border border-border rounded-2xl p-4 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Where do you want to go?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-0 bg-transparent focus-visible:ring-0"
                    />
                  </div>
                  <Button className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-[hsl(var(--brand-primary-foreground))] px-8">
                    Search
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center space-x-8 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[hsl(var(--brand-primary))] border-2 border-background"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">1000+ happy guests</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-muted-foreground">average rating</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Cabin Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Card className="overflow-hidden border-0 shadow-2xl">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Featured Cabin"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary-foreground))]">
                        Featured
                      </Badge>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(1)}
                      className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Heart
                        className={`w-5 h-5 ${likedCabins.includes(1) ? "text-red-500 fill-current" : "text-muted-foreground"}`}
                      />
                    </motion.button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Mountain Vista Lodge</h3>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">Whistler, Canada</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">$380</div>
                        <div className="text-sm text-muted-foreground">per night</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>8 guests</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                          <span>4.9 (156)</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-[hsl(var(--brand-primary))] hover:bg-[hsl(var(--brand-accent))] text-[hsl(var(--brand-primary-foreground))]"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                  className="absolute -top-4 -right-4 bg-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary-foreground))] rounded-full p-3 shadow-lg"
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6, type: "spring" }}
                  className="text-4xl lg:text-5xl font-bold text-[hsl(var(--brand-primary))] mb-2"
                >
                  {stat.number}
                  {stat.suffix}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Explore Our Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cozy retreats to luxury lodges, find the perfect cabin for your next adventure
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? "bg-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary-foreground))] border-[hsl(var(--brand-primary))]"
                    : "bg-card text-foreground border-border hover:border-[hsl(var(--brand-primary))]"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Cabin Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabins.map((cabin, index) => (
              <motion.div
                key={cabin.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={cabin.image || "/placeholder.svg"}
                      alt={cabin.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(cabin.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart
                        className={`w-5 h-5 ${likedCabins.includes(cabin.id) ? "text-red-500 fill-current" : "text-muted-foreground"}`}
                      />
                    </motion.button>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {cabin.amenities.slice(0, 2).map((amenity, i) => (
                        <Badge key={i} className="bg-background/80 text-foreground text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-[hsl(var(--brand-primary))] transition-colors">
                          {cabin.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{cabin.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">${cabin.price}</div>
                        <div className="text-sm text-muted-foreground">per night</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{cabin.guests} guests</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                          <span>
                            {cabin.rating} ({cabin.reviews})
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge className="mb-4 bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-primary))]">
                Why Choose CabinStay
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Experience the Difference</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're not just another booking platform. We're your gateway to extraordinary experiences.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Verified Properties",
                    desc: "Every cabin is personally inspected and verified",
                  },
                  { icon: Zap, title: "Instant Booking", desc: "Book instantly with our streamlined process" },
                  { icon: Award, title: "Premium Support", desc: "24/7 concierge service for all your needs" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary-foreground))] rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Luxury cabin interior"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
                  className="absolute top-8 right-8 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold text-foreground">4.9 Rating</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 1 }}
                  className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-foreground">Instant Book</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-primary))]">
              Guest Reviews
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from real travelers</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg bg-card">
                  <CardContent className="p-12">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-foreground text-lg">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-[hsl(var(--brand-primary))] w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-accent))]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--brand-primary-foreground))] mb-6">
              Ready for Your Adventure?
            </h2>
            <p className="text-xl text-[hsl(var(--brand-primary-foreground))]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered their perfect getaway with CabinStay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-[hsl(var(--brand-primary-foreground))] placeholder:text-[hsl(var(--brand-primary-foreground))]/60"
              />
              <Button
                size="lg"
                className="bg-background text-[hsl(var(--brand-primary))] hover:bg-background/90 whitespace-nowrap"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="w-8 h-8 text-[hsl(var(--brand-primary))]" />
                <span className="text-xl font-bold text-foreground">CabinStay</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your gateway to extraordinary cabin experiences in the world's most beautiful destinations.
              </p>
              <div className="flex space-x-4">
                {[Share, Eye, Heart].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </div>

            {[
              { title: "Explore", links: ["All Cabins", "Luxury", "Family", "Romantic", "Adventure"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "Blog", "Partners"] },
              { title: "Support", links: ["Help Center", "Safety", "Cancellation", "Contact Us", "Trust & Safety"] },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 CabinStay. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
