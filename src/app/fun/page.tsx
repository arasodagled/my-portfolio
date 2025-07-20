import { Calendar, Activity, ChefHat, BookOpen, Waves, Palette } from "lucide-react";

export default function FunPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">🎉 Fun</h1>
          <p className="text-xl text-muted-foreground">
            Here's what my typical week looks like when I'm not sprinkling magic into tech products:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Weekdays */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 mr-3 text-sidebar-foreground" />
              <h2 className="text-3xl font-bold">Weekdays</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Activity className="w-6 h-6 mr-3 mt-1 text-green-500" />
                <p className="text-muted-foreground">Stretching it out in hot yoga</p>
              </div>
              
              <div className="flex items-start">
                <ChefHat className="w-6 h-6 mr-3 mt-1 text-orange-500" />
                <p className="text-muted-foreground">Cooking something delicious (Jamie Oliver's Mediterranean dishes are my go-to)</p>
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
          </div>

          {/* Weekends */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Waves className="w-8 h-8 mr-3 text-sidebar-foreground" />
              <h2 className="text-3xl font-bold">Weekends</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Waves className="w-6 h-6 mr-3 mt-1 text-blue-500" />
                <p className="text-muted-foreground">Breezy beach trips</p>
              </div>
              
              <div className="flex items-start">
                <Palette className="w-6 h-6 mr-3 mt-1 text-pink-500" />
                <p className="text-muted-foreground">Knitting cozy creations</p>
              </div>
              
              <div className="flex items-start">
                <Palette className="w-6 h-6 mr-3 mt-1 text-purple-500" />
                <p className="text-muted-foreground">Painting (mostly abstract, occasionally accidentally brilliant)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-medium text-muted-foreground">
            That's my creative recharge time! ✨
          </p>
        </div>
      </div>
    </div>
  );
}