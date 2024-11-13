import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Mastering Go Structs ",
      excerpt: "How Learning Go Structs Finally Made Me Love Coding.",
      date: "7th october",
      readTime: "8 min read",
      link: "https://dev.to/githaiga22/how-learning-go-structs-finally-made-me-love-coding-2pp0",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc1paoz7c0ap881hm5bhi.jpeg"
    },
    {
      title: "The Art of Lean Coding",
      excerpt: "How Go’s Memory Management Keeps Your Code Fit and Fast 🧠⚡ .",
      date: "31st October",
      readTime: "6 min read",
      link: "https://dev.to/githaiga22/the-art-of-lean-coding-how-gos-memory-management-keeps-your-code-fit-and-fast-5ggi",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiehkcvrsohyezkh8j713.jpg"
    },
    {
      title: "From Zero to Hero",
      excerpt: "Dockerizing My Go App and Hosting It on Render like a Pro 🚀 .",
      date: "6th November",
      readTime: "6 min read",
      link: "https://dev.to/githaiga22/from-zero-to-hero-dockerizing-my-go-app-and-hosting-it-on-render-like-a-pro-1nk9",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Faeqpprgmtovcwtbraum1.png"
    },
    {
      title: "Mastering Go Interfaces 🚀",
      excerpt: "How I Stopped Worrying and Learned to Love Go Interfaces 🚀 .",
      date: "6th November",
      readTime: "6 min read",
      link: "https://dev.to/githaiga22/how-i-stopped-worrying-and-learned-to-love-go-interfaces-3m7p",
      image: "blog-post-2.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/30" id="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-md
                         border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;