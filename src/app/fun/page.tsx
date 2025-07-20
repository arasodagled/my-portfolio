import { Calendar, Activity, ChefHat, BookOpen, Waves, Palette } from "lucide-react";

export default function FunPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Fun &amp; Hobbies</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Here&apos;s what I do when I&apos;m not building products:
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <Activity className="w-6 h-6 mr-3 mt-1 text-green-500" />
            <p className="text-muted-foreground">Stretching it out in hot yoga</p>
          </div>
          <div className="flex items-start">
            <ChefHat className="w-6 h-6 mr-3 mt-1 text-orange-500" />
            <p className="text-muted-foreground">Cooking something delicious (Jamie Oliver&apos;s Mediterranean dishes are my go-to)</p>
          </div>
          <div className="flex items-start">
            <BookOpen className="w-6 h-6 mr-3 mt-1 text-blue-500" />
            <p className="text-muted-foreground">Diving into something fascinating like AI, design thinking, or coding</p>
          </div>
          <div className="flex items-start">
            <BookOpen className="w-6 h-6 mr-3 mt-1 text-purple-500" />
            <p className="text-muted-foreground">Listening to inspiring podcasts or diving into self-growth books on my daily park runs</p>
          </div>
        </div>
        {/* Weekends */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Weekends</h2>
          <p className="text-lg text-muted-foreground">
            On weekends, you&apos;ll find me exploring new places, hiking, or catching up with friends over brunch.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Favorite Quote</h2>
          <p className="text-lg text-muted-foreground italic">
            &quot;The best way to predict the future is to invent it.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}