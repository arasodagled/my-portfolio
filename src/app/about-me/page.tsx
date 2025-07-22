import { Sparkles, BookOpen, Briefcase, Star, TrendingUp } from "lucide-react";

export default function AboutMePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Hi, I&apos;m Sara 👋</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Product Developer · Curious Mind · Creative Thinker · Continuous Learner
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed">
          {/* New Profile Summary Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-400">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">What I Do</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">I build digital tools that make work easier, smarter, and more human — one thoughtful iteration at a time.</p>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-400">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">My Background</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">Mechanical Engineering + Product Design = a blend of technical precision and intuitive user experience.</p>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Current Role</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground mb-2">Product Developer on a Data Science team, creating tools for:</p>
            <ul className="ml-12 list-disc text-sm text-muted-foreground space-y-1">
              <li>Data intake</li>
              <li>Automation</li>
              <li>Decision-making</li>
              <li>Transforming messy processes into clean, efficient systems</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-400">
                <Star className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">Experience Highlights</h2>
            </div>
            <ul className="ml-8 list-disc text-sm text-muted-foreground space-y-1">
              <li>3+ years delivering low-code/no-code solutions in HR tech, logistics, and education</li>
              <li>Applying AI thoughtfully, focusing on real user value</li>
              <li>Iterating continuously based on user feedback for simplicity, clarity, and impact</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-semibold">My Approach</h2>
            </div>
            <p className="ml-8 text-sm text-muted-foreground">I stay updated with the latest tools and trends, always choosing the right tech for the problem — never flashy tech just for the sake of it.</p>
          </div>

        </div>
      </div>
    </div>
  );
}