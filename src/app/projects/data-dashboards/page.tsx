import Link from "next/link";
import { ArrowLeft, BarChart3, Target, Lightbulb, User, Star, TrendingUp, Code, Award } from "lucide-react";

export default function DataDashboardsPage() {
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
            <BarChart3 className="w-12 h-12 mr-4 text-red-500" />
            <h1 className="text-4xl font-bold">Data Automation Dashboards</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automating intake and transformation of messy data for decision-making in operations.
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
              Operations teams struggled with manual data processing and lacked real-time insights for decision-making.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
              <h2 className="text-2xl font-bold">💡 Solution</h2>
            </div>
            <p className="text-muted-foreground">
              Built automated data pipelines and interactive dashboards that transformed raw data into actionable insights.
            </p>
          </div>

          {/* My Role */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 mr-3 text-green-500" />
              <h2 className="text-2xl font-bold">👩‍💻 My Role</h2>
            </div>
            <p className="text-muted-foreground">
              Data pipeline design, dashboard development, and automation implementation using various data tools and platforms.
            </p>
          </div>

          {/* Tools Used */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 mr-3 text-blue-500" />
              <h2 className="text-2xl font-bold">🛠️ Tools Used</h2>
            </div>
            <p className="text-muted-foreground">
              Data visualization tools, ETL processes, Automation platforms, SQL, Python
            </p>
          </div>

          {/* Reflection */}
          <div className="glass-button p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-3 text-yellow-500" />
              <h2 className="text-2xl font-bold">🧠 Reflection</h2>
            </div>
            <p className="text-muted-foreground italic">
              &quot;Data automation projects taught me the importance of clean data pipelines and user-friendly visualizations for effective decision-making.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 