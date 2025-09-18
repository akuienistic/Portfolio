import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, SendIcon, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only allow emails ending with .com
    if (!/^\S+@\S+\.com$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            Please enter a valid email address ending with a .com
          </span>
        ),
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast({
          title: "Subscription Failed",
          description: (
            <span className="flex items-center gap-2 text-red-600">
              {data.message || "Could not subscribe. Please try again."}
            </span>
          ),
        });
      } else {
        toast({
          title: "Subscribed!",
          description: (
            <span className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" /> Thanks for subscribing! You'll be notified about new projects and blog
              posts.
            </span>
          ),
        });
        setEmail("");
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: <span className="flex items-center gap-2 text-red-600">Unable to connect to server.</span>,
      });
    }
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to get notified about new projects, blog posts, and exciting updates from my development journey.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto cursor-not-allowed">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 w-full"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !email}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <SendIcon className="h-5 w-5 transition-colors group-hover:text-primary" />
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
