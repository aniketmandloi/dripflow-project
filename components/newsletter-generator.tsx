"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Star,
  Upload,
  Link as LinkIcon,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type InputType = "url" | "file" | "image" | "text";

export default function NewsletterGenerator() {
  const [activeInput, setActiveInput] = React.useState<InputType>("url");
  const [inputValue, setInputValue] = React.useState("");
  const [promptValue, setPromptValue] = React.useState("");

  const inputTypes = [
    { type: "url", icon: LinkIcon, label: "Website URL" },
    { type: "file", icon: FileText, label: "Document" },
    { type: "image", icon: ImageIcon, label: "Image" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div className="rounded-[calc(var(--radius)+1rem)] border bg-white/80 shadow-xl shadow-blue-900/5 backdrop-blur-sm p-8 ring-1 ring-black/5">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-50 text-blue-600 border-blue-100/50 py-1.5 px-3">
              <Zap className="size-4 text-blue-500" />
              AI Newsletter Generator
            </Badge>
          </div>

          <h2 className="text-3xl font-medium text-gray-900 mb-3">
            Transform any website into a newsletter
          </h2>

          <div className="text-gray-600 space-y-2 mb-8">
            <p className="text-lg">
              Powered by advanced AI • Takes less than 30 seconds
            </p>
            <p className="text-sm text-gray-500">
              Multiple URL generation is available for Pro and Enterprise plans
              <span className="block mt-1 text-gray-400">
                Pro: Up to 3 URLs • Enterprise: Up to 5 URLs
              </span>
            </p>
          </div>

          {/* Input Type Selector */}
          <div className="flex gap-2 mb-6">
            {inputTypes.map(({ type, icon: Icon, label }) => (
              <Button
                key={type}
                variant={activeInput === type ? "default" : "outline"}
                size="lg"
                className={cn(
                  "gap-2 px-6",
                  activeInput === type
                    ? "bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white"
                    : "border-gray-200 hover:bg-gray-50"
                )}
                onClick={() => setActiveInput(type)}
              >
                <Icon className="size-4" />
                {label}
              </Button>
            ))}
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            <div className="relative">
              {activeInput === "url" && (
                <input
                  type="url"
                  placeholder="Paste website URL (e.g. https://techcrunch.com)"
                  className="w-full px-6 py-4 rounded-xl text-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              )}
              {activeInput === "file" && (
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center bg-gray-50/50">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Upload className="size-4" />
                    Upload Document
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    Supports PDF, DOCX, TXT (max 10MB)
                  </p>
                </div>
              )}
              {activeInput === "image" && (
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center bg-gray-50/50">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Upload className="size-4" />
                    Upload Image
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    Supports JPG, PNG, WebP (max 5MB)
                  </p>
                </div>
              )}
            </div>

            {/* Optional Prompt */}
            <div className="relative">
              <div className="flex items-start gap-2 mb-3">
                <MessageSquare className="size-4 text-gray-400 mt-1" />
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Optional Prompt
                  </label>
                  <p className="text-sm text-gray-500">
                    Describe the type of newsletter you want to create
                  </p>
                </div>
              </div>
              <textarea
                placeholder="E.g. Create a tech newsletter focusing on AI and startup news with a casual tone"
                className="w-full px-6 py-4 rounded-xl text-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all min-h-[120px] resize-none"
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
              />
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="w-1/2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-lg h-12 rounded-xl gap-2 font-medium self-center"
            >
              Generate newsletter
              <ChevronRight className="size-4 opacity-50" />
            </Button>
          </div>

          {/* Reviews */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
            </div>
            <span className="text-gray-600">5.0 from 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
