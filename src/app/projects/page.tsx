import Link from "next/link";
import { ExternalLink, Users, BookOpen, Mic, Package, BarChart3 } from "lucide-react";

const projects = [
  {
    id: "talent-platform",
    title: "AI-Powered Talent Platform for HR + B2B Client",
    description: "Streamlining employee management through simple, intuitive flows.",
    icon: Users,
    color: "text-blue-500"
  },
  {
    id: "language-tracker",
    title: "Language Program Tracker",
    description: "Managing tests, interviews, and learner progress.",
    icon: BookOpen,
    color: "text-green-500"
  },
  {
    id: "voice-assistant",
    title: "AI Voice Assistant (MVP)",
    description: "Hands-free logistics data entry using voice and AI.",
    icon: Mic,
    color: "text-purple-500"
  },
  {
    id: "nursery-inventory",
    title: "Nursery Inventory Tool",
    description: "App that makes the process of inventory quality and quantity checking.",
    icon: Package,
    color: "text-orange-500"
  },
  {
    id: "data-dashboards",
    title: "Data Automation Dashboards",
    description: "Automating intake and transformation of messy data for decision-making in operations.",
    icon: BarChart3,
    color: "text-red-500"
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">💼 Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each of these projects was built with care, curiosity, and intention — using the right blend of empathy, systems thinking, and automation to solve problems that matter.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            (Click through each project to explore the story, tools, and real-life outcomes.)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="glass-button p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 h-full">
                <div className="flex items-center mb-4">
                  <project.icon className={`w-8 h-8 mr-3 ${project.color}`} />
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}