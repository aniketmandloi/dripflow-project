"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <span>Command Palette</span>
            <kbd className="px-2 py-1 bg-muted rounded">⌘K</kbd>
          </div>
          <div className="flex justify-between">
            <span>Show Shortcuts</span>
            <kbd className="px-2 py-1 bg-muted rounded">⌘/</kbd>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
