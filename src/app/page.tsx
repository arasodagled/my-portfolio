import Image from "next/image";
import Link from "next/link";
import { Smile, Briefcase, Layers, Sparkles, Contact } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <main className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          
          <h1 className="text-5xl font-bold">Hey, I&apos;m Sara!</h1> 
          <Image
            src="/images/profile-picture.jpg"
            alt="Sara Delgado profile picture"
            width={64}
            height={64}
            className="rounded-full object-cover border-2 border-gray-200 shadow-sm"
            priority
          />
        </div>
        <p className="text-xl text-gray-500 dark:text-gray-300 mb-12">
          I turn complexity into clarity — and technology into something that supports and elevates human experience.
        </p>
        {/* The navigation buttons are now in the sidebar, so remove this div */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link href="/about-me" passHref>
            <div className="glass-button flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]">
              <Smile className="w-8 h-8 mb-2 text-rose-400" />
              <span className="text-lg font-medium text-rose-400">About Me</span>
            </div>
          </Link>
          <Link href="/projects" passHref>
            <div className="glass-button flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]">
              <Briefcase className="w-8 h-8 mb-2 text-violet-400" />
              <span className="text-lg font-medium text-violet-400">Projects</span>
            </div>
          </Link>
          <Link href="/skills" passHref>
            <div className="glass-button flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]">
              <Layers className="w-8 h-8 mb-2 text-indigo-400" />
              <span className="text-lg font-medium text-indigo-400">Skills</span>
            </div>
          </Link>
          <Link href="/fun" passHref>
            <div className="glass-button flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]">
              <Sparkles className="w-8 h-8 mb-2 text-teal-400" />
              <span className="text-lg font-medium text-teal-400">Fun</span>
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div className="glass-button flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 min-w-[120px] min-h-[120px]">
              <Contact className="w-8 h-8 mb-2 text-emerald-400" />
              <span className="text-lg font-medium text-emerald-400">Contact</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}