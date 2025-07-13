"use client";

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const NewsletterProgress = ({
  isGenerating,
}: {
  isGenerating: boolean;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isGenerating) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(timer);
    }
    setProgress(0);
  }, [isGenerating]);

  if (!isGenerating) return null;

  return (
    <div className="space-y-2">
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Generating newsletter...</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};
