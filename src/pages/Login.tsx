import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, CheckCircle, XCircle, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: boolean; password?: boolean }>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: boolean; password?: boolean } = {};
    if (!email.trim()) newErrors.email = true;
    if (!password.trim()) newErrors.password = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> Please fill in all fields.
          </span>
        ),
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Store the JWT token
        localStorage.setItem('token', data.token);
        toast({
          title: "Login Successful!",
          description: (
            <span className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" /> Welcome back, {data.admin.name}!
            </span>
          ),
        });
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        const data = await response.json();
        toast({
          title: "Login Failed",
          description: (
            <span className="flex items-center gap-2 text-red-600">
              <XCircle className="h-5 w-5" /> {data.message || "Invalid credentials."}
            </span>
          ),
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> Unable to connect to server.
          </span>
        ),
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 px-4 pt-16 pb-12">
        <div className="w-full max-w-md bg-card/80 rounded-2xl shadow-xl p-8 mt-8 mb-8">
          <Button variant="outline" className="mb-4" onClick={() => navigate("/")}>
            Back to Home
          </Button>
          <h2 className="text-3xl font-bold mb-3 text-center text-gradient">Admin Login Portal</h2>
          <p className="mb-5 text-sm text-center justify-center">Enter your credentials to log in and manage content</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: false });
                  }}
                  placeholder="example@gmail.com"
                  className={`pl-10 w-full border-border/50 focus:border-primary ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    <AlertCircle className="h-5 w-5" />
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock className="h-5 w-5" />
                </span>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: false });
                  }}
                  placeholder="Your password"
                  className={`pl-10 pr-10 w-full border-border/50 focus:border-primary ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    <AlertCircle className="h-5 w-5" />
                  </span>
                )}
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground focus:outline-none"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full btn-hero group flex items-center justify-center gap-2">
              <LogIn className="h-5 w-5" /> Login
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
