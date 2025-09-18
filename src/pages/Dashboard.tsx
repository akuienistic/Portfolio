import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { XCircle, CheckCircle } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    snippet: "",
    date: "",
    author: "",
    category: "",
    readTime: "",
    image: "",
    imageFile: null as File | null,
    imagePreview: "",
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();
  const [blogs, setBlogs] = useState<any[]>([]);
  // Fetch blogs from backend on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch(() => setBlogs([]));
  }, []);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as any;
    if (type === "file" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, imageFile: file, imagePreview: reader.result as string, image: "" }));
      };
      reader.readAsDataURL(file);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate fields
    const requiredFields = ["title", "snippet", "date", "author", "category", "readTime"];
    const newErrors: { [key: string]: boolean } = {};
    requiredFields.forEach((field) => {
      if (!form[field].trim()) newErrors[field] = true;
    });
    if (!form.imageFile && !form.imagePreview) newErrors.image = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> Please fill in all required fields.
          </span>
        ),
      });
      return;
    }
    // Prepare blog data
    const blogData = {
      ...form,
      image: form.imagePreview || form.image,
    };
    try {
      let res, updatedBlog;
      if (editIndex !== null) {
        // Update blog
        const blogId = blogs[editIndex]._id;
        res = await fetch(`http://localhost:5000/api/blogs/${blogId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogData),
        });
        if (!res.ok) throw new Error("Failed to update blog");
        updatedBlog = await res.json();
        setBlogs((prev) => prev.map((b, i) => (i === editIndex ? updatedBlog : b)));
        setEditIndex(null);
        toast({
          title: "Blog updated!",
          description: (
            <span className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" /> Blog updated successfully!
            </span>
          ),
        });
      } else {
        // Create blog
        res = await fetch("http://localhost:5000/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogData),
        });
        if (!res.ok) throw new Error("Failed to create blog");
        const newBlog = await res.json();
        setBlogs((prev) => [newBlog, ...prev]);
        toast({
          title: "Blog created!",
          description: (
            <span className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" /> Blog created successfully!
            </span>
          ),
        });
      }
      setForm({
        title: "",
        snippet: "",
        date: "",
        author: "",
        category: "",
        readTime: "",
        image: "",
        imageFile: null,
        imagePreview: "",
      });
      setErrors({});
    } catch (err) {
      toast({
        title: "Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> Could not save blog. Please try again.
          </span>
        ),
      });
    }
  };

  const handleEdit = (idx: number) => {
    setForm({ ...blogs[idx], imageFile: null, imagePreview: blogs[idx].image });
    setEditIndex(idx);
  };

  const handleDelete = async (idx: number) => {
    const blogId = blogs[idx]._id;
    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${blogId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete blog");
      setBlogs((prev) => prev.filter((_, i) => i !== idx));
      setSuccess("Blog deleted.");
      setTimeout(() => setSuccess(""), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: (
          <span className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" /> Could not delete blog. Please try again.
          </span>
        ),
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 px-4 pt-16 pb-12">
        <div className="w-full max-w-xl bg-card/80 rounded-2xl shadow-xl p-8 mt-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gradient">Create Blog Post</h2>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-destructive text-white hover:bg-destructive/80 transition-colors text-sm font-medium shadow"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              className={errors.title ? "border-red-500" : ""}
            />
            <Textarea
              name="snippet"
              value={form.snippet}
              onChange={handleChange}
              placeholder="Snippet"
              rows={2}
              className={errors.snippet ? "border-red-500" : ""}
            />
            <Input
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="Date (YYYY-MM-DD)"
              type="date"
              className={errors.date ? "border-red-500" : ""}
            />
            <Input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Author"
              className={errors.author ? "border-red-500" : ""}
            />
            <Input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className={errors.category ? "border-red-500" : ""}
            />
            <Input
              name="readTime"
              value={form.readTime}
              onChange={handleChange}
              placeholder="Read Time (e.g. 5 min read)"
              className={errors.readTime ? "border-red-500" : ""}
            />
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Image</label>
              <Input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleChange}
                className={errors.image ? "border-red-500" : ""}
              />
              {form.imagePreview && (
                <img
                  src={form.imagePreview}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded-md border mx-auto"
                />
              )}
            </div>
            <Button type="submit" className="w-full btn-hero group flex items-center justify-center gap-2">
              Create Blog
            </Button>
            {success && <div className="text-green-600 text-center font-semibold mt-2">{success}</div>}
          </form>
          {/* Blog List */}
          {blogs.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 text-center">Your Blog Posts</h3>
              <div className="space-y-6">
                {blogs.map((blog, idx) => (
                  <div
                    key={idx}
                    className="bg-background/80 rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 items-center"
                  >
                    <img src={blog.image} alt={blog.title} className="w-24 h-24 object-cover rounded-md border" />
                    <div className="flex-1 text-left">
                      <h4 className="text-lg font-bold mb-1">{blog.title}</h4>
                      <p className="text-muted-foreground mb-1">{blog.snippet}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-1">
                        <span>Date: {blog.date}</span>
                        <span>Author: {blog.author}</span>
                        <span>Category: {blog.category}</span>
                        <span>Read Time: {blog.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(idx)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(idx)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
