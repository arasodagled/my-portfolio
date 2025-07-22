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
          <h1 className="text-4xl font-bold mb-6">AI-Powered Voice Assistant for Logistics🔉</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed and developed an AI-driven voice platform that automates package tracking calls, improves communication between drivers and stakeholders, and scales operational efficiency by enabling simultaneous multi-call management with minimal human intervention.
          </p>
        </div>

        <div className="space-y-10">
          {/* Problem */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-400">
                <Target className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Problem</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">
              Logistics teams faced inefficiencies due to manual outbound calls to drivers for package status updates. Human agents were overwhelmed handling repetitive, non-complex calls, causing delays and reduced visibility on package tracking for clients and internal teams.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-400">
                <Lightbulb className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Solution</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2 list-disc">
              <li>Conducted discovery sessions with logistics personnel and clients to identify pain points and data needs.</li>
              <li>Designed an AI voice assistant capable of handling multiple concurrent calls to drivers for real-time status updates.</li>
              <li>Enabled seamless handoff to human agents only for complex or exceptional cases, reducing unnecessary human workload.</li>
              <li>Built an iterative platform using BlandAI for AI voice interactions, Xano for backend automation, and WeWeb for front-end delivery.</li>
              <li>Developed a modular architecture to allow easy scaling and deployment for multiple clients with similar logistics communication needs.</li>
            </ul>
          </div>

          {/* My Role */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-400">
                <User className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">My Role</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2 list-disc">
              <li><strong>User Research &amp; Discovery</strong> – Led interviews with drivers, dispatchers, and clients to gather requirements and identify automation opportunities.</li>
              <li><strong>Product Strategy &amp; Design</strong> – Defined platform scope, AI interaction flows, and escalation criteria for human agent involvement.</li>
              <li><strong>Prototyping &amp; Development</strong> – Created initial iterations with BlandAI, Xano, and WeWeb to validate core functionalities and user experience.</li>
              <li><strong>Iteration &amp; Scaling</strong> – Incorporated user feedback and usage data to refine AI conversations and platform reliability for wider client adoption.</li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-400">
                <Star className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Key Features</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2 list-disc">
              <li>AI voice assistant capable of simultaneous multi-driver calls</li>
              <li>Real-time package status collection and automated update distribution</li>
              <li>Intelligent human escalation for non-standard queries</li>
              <li>Dashboard for monitoring call progress and status summaries</li>
              <li>Integration with existing logistics data systems for seamless tracking</li>
            </ul>
          </div>

          {/* Impact */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Impact</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2 list-disc">
              <li>🚀 Reduced manual calling workload and operational overhead for logistics teams</li>
              <li>📈 Increased visibility and real-time updates for clients and stakeholders</li>
              <li>👥 Enabled scalable solution deployable across multiple logistics providers</li>
              <li>⏱️ Improved on-time delivery rates through proactive status tracking and issue resolution</li>
            </ul>
          </div>

          {/* Tools Used */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-400">
                <Code className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Tools Used</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2 list-disc">
              <li><strong>Prototype &amp; AI voice:</strong> BlandAI</li>
              <li><strong>Backend automation:</strong> Xano</li>
              <li><strong>Front-end &amp; dashboard:</strong> WeWeb</li>
            </ul>
          </div>

          {/* Reflection */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-400">
                <Award className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Reflection</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground italic">
              This project deepened my ability to translate complex, multi-stakeholder logistics workflows into efficient AI-powered communication systems. It reinforced the importance of user-centered discovery and iterative development to balance automation benefits with human-in-the-loop flexibility — all while building a scalable, modular product adaptable to diverse client needs.
            </p>
          </div>
        </div>
      </div>

      {/* Video Demo */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Demo: Handling Exceptions with AI Voice Assistant</h2>
        <video
          src="/videos/ai_voice_handle_exceptions.webm"
          controls
          className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
} 