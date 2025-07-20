import Link from "next/link";
import { ArrowLeft, BookOpen, Target, Lightbulb, User, Star, TrendingUp, Code, Award } from "lucide-react";

export default function LanguageTrackerPage() {
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
            <BookOpen className="w-12 h-12 mr-4 text-green-500" />
            <h1 className="text-4xl font-bold">Smart Evaluation Tracker for Language Program Management</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed an app to automate evaluation flows and centralize student tracking, replacing scattered spreadsheets and endless email updates.
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
              The language team used spreadsheets and manual updates to manage progress tracking, evaluations, and communications — resulting in data loss, duplicated effort, and confusion over who needed to evaluate whom.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
              <h2 className="text-2xl font-bold">💡 Solution</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Developed a centralized app that identified who needed evaluation based on business rules</li>
              <li>• Streamlined workflows across teams and automated alerts for evaluators</li>
              <li>• Created dashboards to track KPIs and individual progress in real time</li>
            </ul>
          </div>

          {/* My Role */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 mr-3 text-green-500" />
              <h2 className="text-2xl font-bold">👩‍💻 My Role</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>UX Research</strong> – Mapped existing pain points and process inefficiencies</li>
              <li>• <strong>Product Roadmap</strong> – Prioritized features and coordinated across departments</li>
              <li>• <strong>Low-Code Development</strong> – Built the system using Softr, Airtable, and Google Sheets</li>
              <li>• <strong>Analytics Design</strong> – Built reporting dashboards in Looker to monitor key metrics</li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 mr-3 text-purple-500" />
              <h2 className="text-2xl font-bold">✨ Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-muted-foreground">✔️ Smart evaluator assignment</p>
              <p className="text-muted-foreground">✔️ Evaluation tracking by team and individual</p>
              <p className="text-muted-foreground">✔️ KPI dashboards for department leads</p>
              <p className="text-muted-foreground">✔️ Centralized data intake and visibility</p>
            </div>
          </div>

          {/* Impact */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 mr-3 text-green-500" />
              <h2 className="text-2xl font-bold">📈 Impact</h2>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">📉 Reduced time spent managing evaluation workflows by 60%</p>
              <p className="text-muted-foreground">📊 Enabled real-time KPI tracking for leadership</p>
              <p className="text-muted-foreground">💬 Improved communication and reduced errors in evaluation assignments</p>
            </div>
          </div>

          {/* Tools Used */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 mr-3 text-blue-500" />
              <h2 className="text-2xl font-bold">🛠️ Tools Used</h2>
            </div>
            <p className="text-muted-foreground">Softr, Airtable, Google Sheets, Looker</p>
          </div>

          {/* Reflection */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-3 text-yellow-500" />
              <h2 className="text-2xl font-bold">🧠 Reflection</h2>
            </div>
            <p className="text-muted-foreground italic">
              &quot;This project sharpened my systems thinking — turning an informal, people-heavy workflow into an intelligent, scalable system. It also deepened my experience translating business rules into logic flows for automation.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 