import { Code, Brain, GraduationCap } from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 ">
          <h1 className="text-5xl font-bold mb-6">🛠️ Skills</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tech & Tools */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 mr-3 text-blue-500" />
              <h2 className="text-3xl font-bold"> Tech & Tools</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">No-code / Low-code</h3>
                <p className="text-muted-foreground">Bubble.io, Xano, Zapier, n8n, Airtable, Softr</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Data & AI</h3>
                <p className="text-muted-foreground">PostgreSQL, SQL, Python, AWS (serverless, Lambdas), AI APIs</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Front-end & Code (Code-literate)</h3>
                <p className="text-muted-foreground">Node.js, TypeScript, React, HTML, CSS</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Design & UX</h3>
                <p className="text-muted-foreground">Figma, Illustrator, UX Research</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 mr-3 text-green-500" />
              <h2 className="text-3xl font-bold">Soft Skills</h2>
            </div>
            
            <div className="space-y-2">
              <p className="text-muted-foreground">• Strategic thinking</p>
              <p className="text-muted-foreground">• Human-centered design</p>
              <p className="text-muted-foreground">• Empathy & collaboration</p>
              <p className="text-muted-foreground">• Systems thinking</p>
              <p className="text-muted-foreground">• Meticulous attention to detail</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 mr-3 text-sidebar-foreground" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Mechanical Engineering</h3>
              <p className="text-muted-foreground">Universidad Pontificia Bolivariana (2013–2018)</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Specialization in Product Design Management</h3>
              <p className="text-muted-foreground">Universidad EAFIT (2019–2020)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}