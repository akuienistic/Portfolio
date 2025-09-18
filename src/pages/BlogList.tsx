import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch(() => setBlogs([]));
  }, []);

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">All Blog Posts</h2>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {blogs.length === 0 && <p className="col-span-3 text-center text-muted-foreground">No blogs found.</p>}
          {blogs.map((post, index) => (
            <Card
              key={index}
              className="group card-hover bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/blogs/${post._id}`)}
            >
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{post.snippet}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
