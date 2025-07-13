"use client";

import {
  ArrowRight,
  Check,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  Globe,
  Clock,
  Award,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterModal } from "@/components/NewsletterModal";
import { useState } from "react";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent" />
        <div className="container mx-auto px-6 text-center relative">
          <Badge className="mb-8 bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20 transition-colors">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Email Automation Platform
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
            <br />
            <span className="text-foreground">With Smart Email Flows</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your email marketing with AI-powered automation that
            converts visitors into customers. Build, optimize, and scale your
            campaigns effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Try AI Newsletter Generator
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-border/50 hover:bg-accent"
            >
              Watch Demo
            </Button>
          </div>

          {/* Newsletter Generator Preview Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div
              className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-purple-400">
                  AI Newsletter Generator
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Transform any website into a newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Powered by advanced AI • Takes less than 30 seconds
              </p>
              <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                <input
                  type="text"
                  placeholder="Paste website URL (e.g. https://techcrunch.com)"
                  className="w-full bg-transparent text-muted-foreground text-sm outline-none"
                  readOnly
                />
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white">
                Generate newsletter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                10K+
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                3.2x
              </div>
              <div className="text-muted-foreground">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
              <Target className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of tools helps you create, automate, and
              optimize your email campaigns for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">
                  AI-Powered Automation
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Let AI optimize your email sequences automatically. Smart
                  triggers, personalized content, and perfect timing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">
                  Advanced Analytics
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Track every metric that matters. Real-time insights,
                  conversion tracking, and detailed performance reports.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">
                  Enterprise Security
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Bank-level encryption and compliance with SOC2, GDPR, and
                  CAN-SPAM regulations for complete peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">Global Delivery</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Reach customers worldwide with our global infrastructure.
                  99.9% uptime and lightning-fast delivery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">
                  Real-Time Personalization
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Dynamic content that adapts to each subscriber. Behavioral
                  triggers and smart segmentation included.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">
                  Team Collaboration
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Work together seamlessly. Role-based permissions, approval
                  workflows, and team templates.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" className="py-20 md:py-32 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20">
              <Award className="w-4 h-4 mr-2" />
              Trusted Worldwide
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Loved by 50,000+ Businesses
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-muted-foreground ml-3 text-lg">
                4.9/5 from 12,000+ reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">John Smith</p>
                    <p className="text-sm text-muted-foreground">
                      CEO, TechCorp
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;DripFlow transformed our email marketing completely. We
                  saw a 300% increase in conversions within the first month. The
                  AI automation is incredible.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">
                      Sarah Johnson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Marketing Director, StartupXYZ
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;The personalization features are game-changing. Our
                  email engagement rates doubled, and customer lifetime value
                  increased by 150%.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">Mike Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Growth Manager, ScaleUp
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;Best investment we&apos;ve made for our marketing stack.
                  The ROI was positive from day one. Customer support is
                  exceptional too.&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Logos */}
          <div className="text-center">
            <p className="text-muted-foreground mb-8 text-lg">
              Trusted by leading companies worldwide
            </p>
            <div className="flex items-center justify-center space-x-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-2xl font-bold">TechCorp</div>
              <div className="text-2xl font-bold">StartupXYZ</div>
              <div className="text-2xl font-bold">ScaleUp</div>
              <div className="text-2xl font-bold">InnovateCo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">
              <Star className="w-4 h-4 mr-2" />
              Simple Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free, scale as you grow. No setup fees, no long-term
              contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-4">Starter</CardTitle>
                <div className="text-5xl font-bold mb-4">
                  <span className="text-foreground">$29</span>
                  <span className="text-xl text-muted-foreground font-normal">
                    /month
                  </span>
                </div>
                <CardDescription className="text-lg">
                  Perfect for small businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Up to 5,000 contacts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>50,000 emails/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Basic automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 relative hover:border-purple-400 transition-all duration-300 shadow-2xl bg-card/80 backdrop-blur-sm scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-4">Professional</CardTitle>
                <div className="text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                    $99
                  </span>
                  <span className="text-xl text-muted-foreground font-normal">
                    /month
                  </span>
                </div>
                <CardDescription className="text-lg">
                  For growing businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Up to 50,000 contacts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>500,000 emails/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Advanced AI automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 shadow-lg">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-4">Enterprise</CardTitle>
                <div className="text-5xl font-bold mb-4">
                  <span className="text-foreground">Custom</span>
                </div>
                <CardDescription className="text-lg">
                  For large organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Unlimited contacts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Unlimited emails</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Dedicated success manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90" />
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that have already automated their
            success with DripFlow. Start your free trial today - no credit card
            required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                  DripFlow
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The most powerful email marketing platform built for modern
                businesses. Automate, personalize, and scale your campaigns
                effortlessly.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 DripFlow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Page;
