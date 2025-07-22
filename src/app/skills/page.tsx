import { Code, Brain, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">🛠️ Skills</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Tech & Tools */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 bg-indigo-100 text-indigo-400">
                <Code className="w-5 h-5" />
              </span>
              <h2 className="text-3xl font-bold">Tech & Tools</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-md font-semibold mb-2">No-code / Low-code</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-neutral-50  text-muted-foreground">Bubble.io</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Xano</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Zapier</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">n8n</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Airtable</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Softr</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Data & AI</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-neutral-50  text-muted-foreground">PostgreSQL</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">SQL</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Python</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">AWS (serverless, Lambdas)</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">AI APIs</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Front-end & Code (Code-literate)</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-neutral-50  text-muted-foreground">Git</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Github</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Node.js</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">TypeScript</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Tailwind</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">HTML</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">CSS</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Design & UX</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-neutral-50  text-muted-foreground">Figma</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">Illustrator</Badge>
                  <Badge className="bg-neutral-50  text-muted-foreground">UX Research</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Soft Skills + Education */}
          <div className="space-y-12">
            {/* Soft Skills */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 bg-teal-100 text-teal-400">
                  <Brain className="w-5 h-5" />
                </span>
                <h2 className="text-3xl font-bold">Soft Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-50  text-muted-foreground">Strategic thinking</Badge>
                <Badge className="bg-neutral-50  text-muted-foreground">Human-centered design</Badge>
                <Badge className="bg-neutral-50  text-muted-foreground">Empathy</Badge>
                <Badge className="bg-neutral-50  text-muted-foreground">Collaboration</Badge>
                <Badge className="bg-neutral-50  text-muted-foreground">Systems thinking</Badge>
                <Badge className="bg-neutral-50  text-muted-foreground">Attention to detail</Badge>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 bg-emerald-100 text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold">Mechanical Engineering</h3>
                  <p className="text-muted-foreground">Universidad Pontificia Bolivariana (2013–2018)</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold">Postgraduate diploma in Product Design Management</h3>
                  <p className="text-muted-foreground">Universidad EAFIT (2019–2020)</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold">Machine Learning/AI Engineer (in progress)</h3>
                  <p className="text-muted-foreground">Codecademy (2024–Present)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
