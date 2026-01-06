'use client';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { userData } from "@/data/userData";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding SEBI Research Analyst Regulations",
      excerpt: "A comprehensive guide to SEBI regulations governing Research Analysts in India and what investors should know.",
      category: "Regulatory Updates",
      date: "Jan 15, 2024",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 2,
      title: "Technology Sector Outlook 2024: Key Trends & Opportunities",
      excerpt: "Analysis of emerging technology trends and investment opportunities in the Indian market.",
      category: "Sector Research",
      date: "Jan 10, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Rebalancing Strategies for Long-term Investors",
      excerpt: "When and how to rebalance your investment portfolio for optimal returns and risk management.",
      category: "Portfolio Management",
      date: "Jan 5, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 4,
      title: "Banking Sector Q4 Analysis: Performance & Outlook",
      excerpt: "Quarterly performance review and outlook for the banking sector with key metrics and trends.",
      category: "Sector Research",
      date: "Dec 28, 2023",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Risk Management Strategies in Volatile Markets",
      excerpt: "Proven strategies to protect your portfolio during market volatility and uncertain times.",
      category: "Risk Management",
      date: "Dec 20, 2023",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 6,
      title: "ESG Investing: Beyond the Hype",
      excerpt: "Practical guide to incorporating Environmental, Social, and Governance factors in investment decisions.",
      category: "Sustainable Investing",
      date: "Dec 15, 2023",
      readTime: "7 min read",
      featured: false
    }
  ];

  const categories = [
    "Sector Research",
    "Regulatory Updates",
    "Portfolio Management",
    "Risk Management",
    "Market Analysis",
    "Investment Education",
    "Sustainable Investing"
  ];

  return (
    <>
      <Header userData={userData} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Research <span className="text-blue-600">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, analysis, and educational content on equity markets and investment strategies
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured <span className="text-blue-600">Articles</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Latest insights and analysis from our research team
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read Article →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts & Sidebar */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                </div>

                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Categories */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Insights</h3>
                  <p className="text-blue-100 mb-6">
                    Get the latest research insights and market analysis delivered to your inbox
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  
                  <p className="text-xs text-blue-200 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Equity", "SEBI", "Analysis", "Portfolio", "Risk", "Technology", "Banking", "ESG"].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Market Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Subscribe to our newsletter for regular research updates and investment insights
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </section>
      </main>
      <Footer userData={userData} />
    </>
  );
}