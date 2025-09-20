import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  User2Icon,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; message?: boolean; subject?: boolean }>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: boolean; email?: boolean; message?: boolean; subject?: boolean } = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    if (!formData.subject.trim()) newErrors.subject = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> Fields marked with an error must be completed.
          </span>
        ),
      });
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: (
            <span className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" /> Thank you for reaching out. I'll get back to you soon.
            </span>
          ),
        });
        setFormData({ name: "", email: "", message: "", subject: "" });
        setErrors({});
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> {error instanceof Error ? error.message : 'Failed to send message. Please try again.'}
          </span>
        ),
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: false });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's <span className="text-gradient">Connect</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:symonstartech@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    symonstartech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href="tel:+251988499136"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    +251 988 499 136
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Available Remotely</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium text-foreground mb-4">Let's Give Each Other a Shout</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/akuienistic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="h-5 w-5 transition-colors group-hover:text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/simon-akuien-atem-710895290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="h-5 w-5 transition-colors group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-gradient">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User2Icon className="h-5 w-5" />
                    </span>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mr. Thanos Snapvoski"
                      className={`border-border/50 focus:border-primary pl-10 ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                    </span>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className={`border-border/50 focus:border-primary pl-10 ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">How did you hear about my work?</Label>
                  <div className="relative">
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`border border-border/50 rounded-md px-3 py-2 focus:outline-none focus:border-primary w-full bg-background text-foreground ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                    >
                      <option value="" disabled>
                        -- Please select an option --
                      </option>
                      <option value="Dr. Mach">Dr. Mach</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Need a service or have an inquiry? Type it in here..."
                      rows={5}
                      className={`border-border/50 focus:border-primary resize-none pr-10 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <span className="absolute right-3 top-4 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full btn-hero group hover:scale-700 transition-transform">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
