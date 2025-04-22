import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Briefcase,
  Code,
  Languages,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Sparkles,
  Star,
  Menu,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-[#2c2c3d] text-white shadow-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl flex items-center">
            <span>YM</span>
            <Sparkles className="h-4 w-4 ml-1 text-[#a8a4d3]" />
          </div>

          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-200 hover:text-white transition-colors">
              About
            </a>
            <a href="#education" className="text-gray-200 hover:text-white transition-colors">
              Education
            </a>
            <a href="#skills" className="text-gray-200 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#portfolio" className="text-gray-200 hover:text-white transition-colors">
              Portfolio
            </a>
          </nav>
          
          

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild className="rounded-md bg-[#a8a4d3] text-[#2c2c3d] hover:bg-[#8c88b1]">
  <a href="/CV-Yeilin.pdf" download target="_blank">
    Download CV
  </a>
</Button>

            <Button asChild className="rounded-md bg-[#a8a4d3] text-[#2c2c3d] hover:bg-[#8c88b1]">
              <a href="#contact">Contact Me</a>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
              <DialogTitle className="sr-only">Main Navigation</DialogTitle>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#about" className="px-4 py-2 hover:bg-secondary rounded-md">
                    About
                  </a>
                  <a href="#education" className="px-4 py-2 hover:bg-secondary rounded-md">
                    Education
                  </a>
                  <a href="#skills" className="px-4 py-2 hover:bg-secondary rounded-md">
                    Skills
                  </a>
                  <a href="#portfolio" className="px-4 py-2 hover:bg-secondary rounded-md">
                    Portfolio
                  </a>
                  <a href="#contact" className="px-4 py-2 hover:bg-secondary rounded-md">
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block bg-secondary px-4 py-1 rounded-full text-secondary-foreground text-sm font-medium">
                  <span className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" /> Engineering Student
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  Yeilin <span className="text-primary">Moya </span>
</h1>
<p className="text-xl text-muted-foreground">Information Systems Engineering Student</p>
<p className="text-muted-foreground max-w-[600px]">
  I am a student of Information Systems Engineering at the National University of Costa Rica. I’m passionate about
  technology and web development, and currently working on academic projects that combine design, functionality, and best practices.
</p>

                <div className="flex gap-4 pt-4">
                  <Button asChild className="rounded-full">
                    <a href="#portfolio" className="flex items-center">
                      View My Work <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-30"></div>
                  <div className="blob-shape bg-gradient-to-br from-primary to-accent w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
                    <div className="absolute inset-3 bg-card rounded-full overflow-hidden">
                      <img
                        src="yeilin.jpg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="education" className="diagonal-section">
          <div className="container py-16">
            <h2 className="text-3xl font-bold mb-12 section-title">
              <GraduationCap className="h-8 w-8 text-primary inline-block mr-2" />
              Education
            </h2>
            <Tabs defaultValue="education" className="w-full">
  <TabsList className="w-full md:w-auto rounded-full p-1 mb-8">
    <TabsTrigger
      value="education"
      className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      Education
    </TabsTrigger>
  </TabsList>

  <TabsContent value="education" className="space-y-6 mt-6">
    {/* Universidad */}
    <Card className="card-hover gradient-border overflow-hidden">
      <CardHeader className="bg-primary/5">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Bachelor’s Degree in Information Systems Engineering</CardTitle>
            <CardDescription>National University of Costa Rica</CardDescription>
          </div>
          <Badge variant="outline" className="bg-accent/20 border-accent text-accent-foreground">
            2022 – Present
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p>Currently enrolled in the Information Systems Engineering .</p>
      </CardContent>
    </Card>

    {/* Diplomado */}
    <Card className="card-hover gradient-border overflow-hidden">
      <CardHeader className="bg-primary/5">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Diploma in Application Programming</CardTitle>
            <CardDescription>Nacional University of Costa Rica </CardDescription>
          </div><Badge variant="outline" className="bg-accent/20 border-accent text-accent-foreground">
            2022 – 2024
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p>Completed a diploma in application programming.</p>
      </CardContent>
    </Card>

    {/* Colegio */}
    <Card className="card-hover gradient-border overflow-hidden">
      <CardHeader className="bg-primary/5">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>High School</CardTitle>
            <CardDescription>Liceo Académico de Belén, Carrillo</CardDescription>
          </div>
          <Badge variant="outline" className="bg-accent/20 border-accent text-accent-foreground">
            2017 – 2021
          </Badge>
        </div>
      </CardHeader>
    </Card>
  </TabsContent>
</Tabs>


          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 section-title">
              <Code className="h-8 w-8 text-primary inline-block mr-2" />
              Skills & Languages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover gradient-border overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" /> Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">HTML & CSS</p>
                      <p className="text-primary">80%</p>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress w-[80%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">JavaScript</p>
                      <p className="text-primary">75%</p>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress w-[75%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">React</p>
                      <p className="text-primary">65%</p>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress w-[65%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">TypeScript</p>
                      <p className="text-primary">65%</p>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress w-[65%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover gradient-border overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5" /> Languages & Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">Spanish (Native)</p>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress w-[100%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">English (Intermediate)</p>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress w-[60%]"></div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="font-medium mb-3">Soft Skills</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/20">
                        Problem Solving
                      </Badge>
                      <Badge className="bg-accent/20 hover:bg-accent/30 text-accent-foreground border-accent/20">
                        Team Collaboration
                      </Badge>
                      <Badge className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/20">
                        Adaptability
                      </Badge>
                      <Badge className="bg-accent/20 hover:bg-accent/30 text-accent-foreground border-accent/20">
                        Creativity
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="diagonal-section">
          <div className="container py-16">
            <h2 className="text-3xl font-bold mb-12 section-title">
              <Briefcase className="h-8 w-8 text-primary inline-block mr-2" />
              Portfolio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
  title="HR Management System"
  description="A web platform for managing human resources in a municipal environment. Includes modules for document requests, user roles, analytics, and more. Built with Next.js and NestJS."
  image="/rrhh-nandayure.png" // guardá la imagen como rrhh-nandayure.png en la carpeta public
  tags={["Next.js", "NestJS", "TypeScript", "Tailwind"]}
  link="https://rrhh-nandayure.vercel.app/"
/>


<ProjectCard
  title="Clinic Appointment System"
  description="A medical appointment system with role-based access and authentication. Built as a university project using React, TypeScript and Tailwind."
  image="/clinic-greys.png" // guardá la imagen como clinic-greys.png en la carpeta public
  tags={["React", "TypeScript", "Tailwind"]}
  link="https://github.com/JosePabloSG/citas-clinica-frontend.git"
/>


<ProjectCard
  title="Theater Seat Reservation"
  description="A simple and intuitive web app to reserve seats for a theater. Features dynamic seating layout and availability. Built with HTML, CSS, and TypeScript."
  image="/theater-reservation.png" // guardá la imagen como theater-reservation.png en la carpeta public
  tags={["TypeScript", "HTML", "CSS"]}
  link="https://parcial1-fundamentos-web.vercel.app/"
/>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 section-title">
              <Mail className="h-8 w-8 text-primary inline-block mr-2" />
              Contact Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover gradient-border overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center space-y-4">
                <Card className="card-hover gradient-border overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>yeilinmoya0208@gmail.com</p>
                      </div>
                    </div>


                    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/yeilin-moya-853869355/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          linkedin.com/in/yeilinmoya
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-[#2c2c3d] text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl flex items-center">
              <span>YM</span>
              <Sparkles className="h-4 w-4 ml-1 text-[#a8a4d3]" />
            </div>
            <p className="text-sm text-gray-300 ml-4">© {new Date().getFullYear()} Yeilin Moya. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <a href="https://github.com/Yeilinnn"
              target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <a href="https://www.linkedin.com/in/yeilin-moya-853869355/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
               target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

