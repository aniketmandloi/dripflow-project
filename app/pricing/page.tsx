"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include
            unlimited access to our AI newsletter generator.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="relative bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Starter</CardTitle>
              <CardDescription className="text-muted-foreground">
                Perfect for small businesses
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 5,000 subscribers</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>5 email templates</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full mt-8">Get Started</Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-purple-500 bg-card">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-600">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-foreground">Pro</CardTitle>
              <CardDescription className="text-muted-foreground">
                For growing businesses
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">$79</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 25,000 subscribers</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>20 email templates</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>A/B testing</span>
                </li>
              </ul>
              <Button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-blue-600">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Enterprise</CardTitle>
              <CardDescription className="text-muted-foreground">
                For large organizations
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">
                  Custom
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited subscribers</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom analytics</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-8">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
