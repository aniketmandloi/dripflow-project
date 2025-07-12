
import React, { useState } from 'react';
import { X, Upload, Globe, FileText, Image, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'url' | 'file' | 'image'>('url');
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Generating newsletter with:', { activeTab, url, prompt, files, images });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">AI Newsletter Generator</h2>
              <p className="text-sm text-muted-foreground">Transform any content into a newsletter</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-accent"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Input Type Selector */}
          <div>
            <Label className="text-sm font-medium text-foreground mb-3 block">
              Choose your input source
            </Label>
            <div className="flex space-x-2">
              <Button
                type="button"
                variant={activeTab === 'url' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('url')}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>Website URL</span>
              </Button>
              <Button
                type="button"
                variant={activeTab === 'file' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('file')}
                className="flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Files</span>
              </Button>
              <Button
                type="button"
                variant={activeTab === 'image' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('image')}
                className="flex items-center space-x-2"
              >
                <Image className="w-4 h-4" />
                <span>Images</span>
              </Button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {activeTab === 'url' && (
              <div>
                <Label htmlFor="url" className="text-sm font-medium text-foreground">
                  Website URL
                </Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="e.g. https://techcrunch.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="mt-2 bg-background/50 border-border/50 focus:border-purple-500"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Powered by advanced AI • Takes less than 30 seconds
                </p>
              </div>
            )}

            {activeTab === 'file' && (
              <div>
                <Label htmlFor="files" className="text-sm font-medium text-foreground">
                  Upload Files
                </Label>
                <div className="mt-2 border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <Input
                    id="files"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.md"
                    onChange={(e) => setFiles(e.target.files)}
                    className="hidden"
                  />
                  <Label
                    htmlFor="files"
                    className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
                  >
                    Drop files here or click to browse
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supports PDF, DOC, TXT, MD files
                  </p>
                </div>
                {files && files.length > 0 && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    Selected: {Array.from(files).map(f => f.name).join(', ')}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'image' && (
              <div>
                <Label htmlFor="images" className="text-sm font-medium text-foreground">
                  Upload Images
                </Label>
                <div className="mt-2 border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors">
                  <Image className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setImages(e.target.files)}
                    className="hidden"
                  />
                  <Label
                    htmlFor="images"
                    className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
                  >
                    Drop images here or click to browse
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supports JPG, PNG, GIF, WebP
                  </p>
                </div>
                {images && images.length > 0 && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    Selected: {Array.from(images).map(f => f.name).join(', ')}
                  </div>
                )}
              </div>
            )}

            {/* Optional Prompt */}
            <div>
              <Label htmlFor="prompt" className="text-sm font-medium text-foreground">
                Optional: Describe your newsletter style
              </Label>
              <Textarea
                id="prompt"
                placeholder="e.g. Create a tech-focused newsletter with a professional tone, include key highlights and actionable insights..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mt-2 bg-background/50 border-border/50 focus:border-purple-500 min-h-[80px]"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Help AI understand what type of newsletter you want to create
              </p>
            </div>
          </div>

          {/* Pro/Enterprise Notice */}
          <div className="bg-accent/30 rounded-lg p-4 border border-border/30">
            <p className="text-sm text-muted-foreground text-center">
              Multiple sources available for <span className="text-purple-400 font-medium">Pro</span> and <span className="text-purple-400 font-medium">Enterprise</span> plans
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              Pro: Up to 3 sources • Enterprise: Up to 5 sources
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Generate newsletter
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center space-x-1 text-sm">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-muted-foreground ml-2">5.0 from 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};
