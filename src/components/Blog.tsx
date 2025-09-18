import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Lock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch(() => setBlogPosts([]));
  }, []);

  // Show only latest 3 blogs on homepage, all blogs on /blogs
  const isAllBlogsPage = location.pathname === "/blogs";
  const postsToShow = isAllBlogsPage ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest <span className="text-gradient">Blog</span> Insights
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Thoughts, tutorials, and insights on web development and design. See to it that you subscribe with your
            email address so as to always get notified About latest insights or update.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {postsToShow.map((post, index) => (
            <Card
              key={index}
              className="group card-hover bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/blogs/${post._id}`)}
            >
              {/* Post Image */}
              <div
                className="relative h-48 overflow-hidden flex items-center justify-center bg-muted"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blogs/${post._id}`);
                }}
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
              >
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
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-white group"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blogs/${post._id}`);
                    }}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Login Section */}
        <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Admin Portal</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Login to manage blog posts and content</p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Note carefully that this portal is only for the web administrator to manage blog posts and contents of
              this site.
            </p>
            <Button
              variant="outline"
              className="w-full border-primary/20 hover:text-white hover:border-primary hover:bg-primary/50"
              onClick={() => navigate("/login")}
            >
              Procede to Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* View All Posts */}
        {!isAllBlogsPage && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary hover:text-white"
              onClick={() => navigate("/blogs")}
            >
              View All Posts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
