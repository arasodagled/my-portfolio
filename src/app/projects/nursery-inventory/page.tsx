import Link from "next/link";
import { ArrowLeft, Package, Target, Lightbulb, User, Star, TrendingUp, Code, Award } from "lucide-react";

export default function NurseryInventoryPage() {
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
            <Package className="w-12 h-12 mr-4 text-orange-500" />
            <h1 className="text-4xl font-bold">Nursery Inventory Tool</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            App that makes the process of inventory quality and quantity checking.
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
              Nursery staff needed a streamlined way to track inventory quality and quantity for snack management.
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
            <p className="ml-8 text-sm text-muted-foreground">
              Built a mobile-friendly app that simplified inventory tracking and quality assessment processes.
            </p>
          </div>

          {/* My Role */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-400">
                <User className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">My Role</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">
              End-to-end product development including user research, design, and implementation using low-code platforms.
            </p>
          </div>

          {/* Tools Used */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-400">
                <Code className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Tools Used</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">
              Low-code platforms, Mobile-first design, Database management
            </p>
          </div>

          {/* Reflection */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-400">
                <Award className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Reflection</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground italic">
              &quot;Even simple tools can have a big impact on daily workflows. This project reinforced the value of understanding user needs in context.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 