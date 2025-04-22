"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg gradient-border card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent transition-opacity duration-300 flex items-end justify-center p-4 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="rounded-full">
                <Eye className="h-4 w-4 mr-2" /> Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>Project Details</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover rounded-md" />
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="rounded-full">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Project <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardHeader className="bg-primary/5">
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="pt-4">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 border-t pt-4 mt-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/20">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 w-full">
          <Button asChild variant="outline" className="flex-1 rounded-full">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View Project <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

