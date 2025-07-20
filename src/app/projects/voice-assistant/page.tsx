import Link from "next/link";
import { ArrowLeft, Mic, Target, Lightbulb, User, Star, TrendingUp, Code, Award } from "lucide-react";

export default function VoiceAssistantPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Mic className="w-12 h-12 mr-4 text-purple-500" />
            <h1 className="text-4xl font-bold">AI Voice Assistant (MVP)</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-free logistics data entry using voice and AI.
          </p>
        </div>

        <div className="space-y-12">
          {/* Problem */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 mr-3 text-red-500" />
              <h2 className="text-2xl font-bold">🎯 Problem</h2>
            </div>
            <p className="text-muted-foreground">
              Logistics teams needed a hands-free solution for data entry while working in warehouse environments.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
              <h2 className="text-2xl font-bold">💡 Solution</h2>
            </div>
            <p className="text-muted-foreground">
              Developed an MVP voice assistant that could understand and process logistics data through natural language.
            </p>
          </div>

          {/* My Role */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 mr-3 text-green-500" />
              <h2 className="text-2xl font-bold">👩‍💻 My Role</h2>
            </div>
            <p className="text-muted-foreground">
              Product strategy, UX research, and MVP development using AI APIs and voice processing technologies.
            </p>
          </div>

          {/* Tools Used */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 mr-3 text-blue-500" />
              <h2 className="text-2xl font-bold">🛠️ Tools Used</h2>
            </div>
            <p className="text-muted-foreground">
              AI APIs, Voice Processing, Low-code platforms
            </p>
          </div>

          {/* Reflection */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-3 text-yellow-500" />
              <h2 className="text-2xl font-bold">🧠 Reflection</h2>
            </div>
            <p className="text-muted-foreground italic">
              "This MVP taught me the importance of rapid prototyping and user testing in emerging technology spaces."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 