import Link from "next/link";
import { ArrowLeft, Users, Target, Lightbulb, User, Star, TrendingUp, Code, Database, Award } from "lucide-react";

export default function TalentPlatformPage() {
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
            <h1 className="text-4xl font-bold">AI-Powered Talent Platform for HR + B2B Clients</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed and built a modular tool that automates HR workflows, delivers actionable AI insights, and scaled from internal use to a B2B product used by 200+ users.
          </p>
        </div>

        <div className="space-y-12">
          {/* Problem */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">🎯 Problem</h2>
            </div>
            <p className="text-muted-foreground">
              Manual processes and fragmented tools made it difficult to track employee growth, performance, and feedback. Both internal teams and clients lacked visibility into talent data and spent time manually piecing together insights.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">💡 Solution</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Built a modular internal tool to centralize HR workflows</li>
              <li>• Integrated DISC analysis, PTOs, growth paths, and feedback</li>
              <li>• Used AI to generate personalized insights for performance reviews and development</li>
              <li>• Scaled into a client-facing product adopted by multiple companies</li>
            </ul>
          </div>

          {/* My Role */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">👩‍💻 My Role</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Product Strategy</strong> – Defined modules, roadmap, and user priorities with stakeholders</li>
              <li>• <strong>UX Research</strong> – Interviewed internal users and B2B clients to identify bottlenecks</li>
              <li>• <strong>Low-Code Development</strong> – Prototyped with Softr/Airtable/Zapier; scaled with Bubble, Xano & AWS</li>
              <li>• <strong>Iteration & Scaling</strong> – Incorporated feedback loops and expanded features based on usage data</li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">✨ Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-muted-foreground">✔️ Performance tracking dashboards</p>
              <p className="text-muted-foreground">✔️ AI-generated DISC profile insights</p>
              <p className="text-muted-foreground">✔️ AI-powered growth path recommendations</p>
              <p className="text-muted-foreground">✔️ Data intake & visualization</p>
              <p className="text-muted-foreground">✔️ Notifications, reminders, and exportable reports</p>
            </div>
          </div>

          {/* Impact */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">📈 Impact</h2>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">🏆 Awarded Best Internal Tool of 2024</p>
              <p className="text-muted-foreground">🚀 Scaled from MVP to live client platform</p>
              <p className="text-muted-foreground">📊 Saved HR teams hours/week and improved clarity in talent conversations</p>
              <p className="text-muted-foreground">👥 Adopted by 200+ users across multiple departments</p>
            </div>
          </div>

          {/* Tools Used */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">🛠️ Tools Used</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Prototyping & MVP:</h3>
                <p className="text-muted-foreground">Airtable, Softr, Google Sheets, Zapier</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scaling:</h3>
                <p className="text-muted-foreground">Bubble.io, Xano, PostgreSQL, AWS Lambdas, AWS SES</p>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">🧠 Reflection</h2>
            </div>
            <p className="text-muted-foreground italic">
              "This project taught me how to turn fuzzy user needs into structured, intelligent systems. Even with limited resources, I learned to balance feasibility, empathy, and data strategy — creating a product that's both loved by users and scalable for business."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 