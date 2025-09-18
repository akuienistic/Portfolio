import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<any>(null);
  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch(() => setBlog(null));
  }, [id]);

  if (!blog) return <div className="container mx-auto py-16 text-center">Blog not found.</div>;

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto max-w-3xl">
        <Button variant="outline" className="mb-6" onClick={() => navigate("/blogs")}>
          Back to All Blogs
        </Button>
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-fade-in">
          <div className="relative h-64 overflow-hidden flex items-center justify-center bg-muted">
            <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{blog.category}</Badge>
          </div>
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(blog.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {blog.author}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold leading-tight">{blog.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">{blog.snippet}</p>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogDetail;
