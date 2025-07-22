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
            <h1 className="text-4xl font-bold">Evaluation Tracker for Language Program Management 💻</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed an app to automate evaluation flows and centralize student tracking, replacing scattered spreadsheets and endless email updates.
          </p>
        </div>

        <div className="space-y-12">
          {/* Problem */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-400">
                <Target className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Problem</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">
              The language team used spreadsheets and manual updates to manage progress tracking, evaluations, and communications — resulting in data loss, duplicated effort, and confusion over who needed to evaluate whom.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-400">
                <Lightbulb className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Solution</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2">
              <li>• Developed a centralized app that identified who needed evaluation based on business rules</li>
              <li>• Streamlined workflows across teams and automated alerts for evaluators</li>
              <li>• Created dashboards to track KPIs and individual progress in real time</li>
            </ul>
          </div>

          {/* My Role */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-400">
                <User className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">My Role</h2>
            </div>
            <ul className="ml-8 text-sm text-muted-foreground space-y-2">
              <li>• <strong>UX Research</strong> – Mapped existing pain points and process inefficiencies</li>
              <li>• <strong>Product Roadmap</strong> – Prioritized features and coordinated across departments</li>
              <li>• <strong>Low-Code Development</strong> – Built the system using Softr, Airtable, and Google Sheets</li>
              <li>• <strong>Analytics Design</strong> – Built reporting dashboards in Looker to monitor key metrics</li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-400">
                <Star className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Key Features</h2>
            </div>
            <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-muted-foreground">✔️ Smart evaluator assignment</p>
              <p className="text-muted-foreground">✔️ Evaluation tracking by team and individual</p>
              <p className="text-muted-foreground">✔️ KPI dashboards for department leads</p>
              <p className="text-muted-foreground">✔️ Centralized data intake and visibility</p>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Impact</h2>
            </div>
            <div className="ml-8 space-y-2">
              <p className="text-muted-foreground">📉 Reduced time spent managing evaluation workflows by 60%</p>
              <p className="text-muted-foreground">📊 Enabled real-time KPI tracking for leadership</p>
              <p className="text-muted-foreground">💬 Improved communication and reduced errors in evaluation assignments</p>
            </div>
          </div>

          {/* Tools Used */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-400">
                <Code className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Tools Used</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">Softr, Airtable, Google Sheets, Looker</p>
          </div>

          {/* Reflection */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-400">
                <Award className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Reflection</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground italic">
              &quot;This project sharpened my systems thinking — turning an informal, people-heavy workflow into an intelligent, scalable system. It also deepened my experience translating business rules into logic flows for automation.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 