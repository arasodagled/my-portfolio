import { Mail, Linkedin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">📬 Let&apos;s Build Something Meaningful</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Want to turn a complex idea or inefficient process into something smart, useful, and beautifully human?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-button p-6 rounded-xl">
            <Mail className="w-8 h-8 mx-auto mb-4 text-sidebar-foreground" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:saradelgado95@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              saradelgado95@gmail.com
            </a>
          </div>

          <div className="glass-button p-6 rounded-xl">
            <Linkedin className="w-8 h-8 mx-auto mb-4 text-sidebar-foreground" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect with me
            </a>
          </div>

          <div className="glass-button p-6 rounded-xl">
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-sidebar-foreground" />
            <h3 className="text-lg font-semibold mb-2">Let&apos;s Chat</h3>
            <p className="text-muted-foreground">
              Ready to discuss your project?
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Looking forward to creating something amazing together! ✨
          </p>
        </div>
      </div>
    </div>
  );
}