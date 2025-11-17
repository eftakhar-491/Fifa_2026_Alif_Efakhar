import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BlogCardVarticalProps {
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  tag?: string;
  date?: string;
  author?: string;
  featured?: boolean;
  href?: string;
}

const BlogCardVartical: React.FC<BlogCardVarticalProps> = ({
  imageUrl = "https://a-static.besthdwallpaper.com/fifa-world-cup-with-soccer-ball-on-green-field-in-stadium-wallpaper-1680x1050-95465_5.jpg",
  title = "FIFA World Updates: Breaking News!",
  subtitle = "Matchday 5 - Argentina vs France",
  description = "Catch up on the latest scores, highlights and team insights from the world of FIFA. Don't miss any update from this sporting extravaganza.",
  tag = "Football",
  date = "June 12, 2024",
  author = "FIFA News Desk",
  featured = false,
  href = "#",
}) => {
  return (
    <a href={href} className="block group">
      <Card
        className={`w-full bg-background border-none shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl rounded-xl overflow-hidden`}
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {featured && (
            <Badge variant="secondary" className="absolute top-4 right-4 z-10">
              Featured
            </Badge>
          )}
          <Badge
            variant="outline"
            className="absolute top-4 left-4 z-10 font-semibold text-xs"
          >
            {tag}
          </Badge>
        </div>

        <CardHeader className=" px-4">
          <CardTitle className="text-lg md:text-lg font-extrabold leading-tight text-primary group-hover:text-accent-foreground transition">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground font-medium truncate">
            {subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4">
          <p className="text-base text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between px-5 pb-5 pt-2">
          <div className="text-xs text-muted-foreground">
            <span>{author}</span>
            <span className="inline-block w-1 h-1 bg-muted-foreground rounded-full" />
            <span>{date}</span>
          </div>
          <Button size="sm" variant="ghost">
            Read more
          </Button>
        </CardFooter>
      </Card>
    </a>
  );
};

export default BlogCardVartical;
