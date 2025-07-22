import Link from "next/link";
import { ArrowLeft, Users, Target, Lightbulb, User, Star, TrendingUp, Code, Database, Award } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
            <h1 className="text-4xl font-bold">AI-Powered Talent Platform 💻</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed and built a modular tool that automates HR workflows, delivers actionable AI insights, and scaled from internal use to a B2B product used by 200+ users.
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
              Manual processes and fragmented tools made it difficult to track employee growth, performance, and feedback. Both internal teams and clients lacked visibility into talent data and spent time manually piecing together insights.
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
              <li>• Built a modular internal tool to centralize HR workflows</li>
              <li>• Integrated DISC analysis, PTOs, growth paths, and feedback</li>
              <li>• Used AI to generate personalized insights for performance reviews and development</li>
              <li>• Scaled into a client-facing product adopted by multiple companies</li>
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
              <li>• <strong>Product Strategy</strong> – Defined modules, roadmap, and user priorities with stakeholders</li>
              <li>• <strong>UX Research</strong> – Interviewed internal users and B2B clients to identify bottlenecks</li>
              <li>• <strong>Low-Code Development</strong> – Prototyped with Softr/Airtable/Zapier; scaled with Bubble, Xano & AWS</li>
              <li>• <strong>Iteration & Scaling</strong> – Incorporated feedback loops and expanded features based on usage data</li>
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
              <p className="text-muted-foreground">✔️ Performance tracking dashboards</p>
              <p className="text-muted-foreground">✔️ AI-generated DISC profile insights</p>
              <p className="text-muted-foreground">✔️ AI-powered growth path recommendations</p>
              <p className="text-muted-foreground">✔️ Data intake & visualization</p>
              <p className="text-muted-foreground">✔️ Notifications, reminders, and exportable reports</p>
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
              <p className="text-muted-foreground">🏆 Awarded Best Internal Tool of 2024</p>
              <p className="text-muted-foreground">🚀 Scaled from MVP to live client platform</p>
              <p className="text-muted-foreground">📊 Saved HR teams hours/week and improved clarity in talent conversations</p>
              <p className="text-muted-foreground">👥 Adopted by 200+ users across multiple departments</p>
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
            <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-400">
                <Award className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Reflection</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground italic">
              &quot;This project taught me how to turn fuzzy user needs into structured, intelligent systems. Even with limited resources, I learned to balance feasibility, empathy, and data strategy — creating a product that&apos;s both loved by users and scalable for business.&quot;
            </p>
          </div>
        </div>
      </div>
      {/* Images Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Screenshots &amp; Data Visuals</h2>
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/pto_blur_data.png" alt="PTO Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">PTO Management</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/performance-review-blur-data.png" alt="Performance Review Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">Performance Review</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/perfromance-mngt-blur-data.png" alt="Performance Management Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">Performance Management</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/my-team-blur-data.png" alt="My Team Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">My Team</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/tech-profile-blur-data.png" alt="Tech Profile Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">Tech Profile</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/disc-employee-blur-data.png" alt="DISC Employee Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">DISC Employee</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/disc-blur-data.png" alt="DISC Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">DISC Overview</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Image src="/images/dashboard-blur-data.png" alt="Dashboard Blur Data" width={600} height={375} className="rounded-lg shadow-md object-cover w-full h-auto" />
                <span className="mt-2 text-sm text-muted-foreground">Dashboard</span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
} 