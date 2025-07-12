import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroHeader } from "./header";
import { ChevronRight, CirclePlay, Star } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="bg-gradient-to-b from-white to-blue-50/50">
          <div className="relative py-48">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="md:w-1/2">
                <div>
                  <Badge className="mb-6 bg-blue-50 text-blue-600 border-blue-100/50 py-1.5 px-3">
                    <Star className="fill-blue-500" size={14} />
                    AI-Powered Newsletter Generation
                  </Badge>

                  <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">
                    <span className="text-gray-900">Automate your</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                      newsletter generation
                    </span>
                    <br />
                    <span className="text-gray-900">using AI</span>
                  </h1>

                  <p className="text-gray-600 my-8 max-w-2xl text-balance text-xl">
                    Cut content costs by{" "}
                    <span className="text-blue-600 font-medium">80%</span>,
                    without cutting quality. Weekly newsletters done in{" "}
                    <span className="text-violet-600 font-medium">
                      5 minutes
                    </span>{" "}
                    — not 5 hours.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild size="lg" className="pr-4.5">
                      <Link href="#link">
                        <span className="text-nowrap">Get Started</span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="outline"
                      className="pl-5"
                    >
                      <Link href="#link">
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">Watch video</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-muted-foreground">Trusted by teams at :</p>
                  <div className="mt-6 grid max-w-sm grid-cols-3 gap-6">
                    <div className="flex">
                      <img
                        className="h-4 w-fit"
                        src="https://html.tailus.io/blocks/customers/column.svg"
                        alt="Column Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-5 w-fit"
                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                        alt="Nvidia Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-4 w-fit"
                        src="https://html.tailus.io/blocks/customers/github.svg"
                        alt="GitHub Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
              <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                  <Image
                    src="/mist/tailark.png"
                    alt="app screen"
                    width="2880"
                    height="1842"
                    className="object-top-left size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
