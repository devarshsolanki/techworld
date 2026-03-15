import { motion } from 'motion/react';

const blogPosts = [
  {
    title: '1. The Future of AI Automation in Business',
    content: `AI automation is transforming how businesses operate in the modern digital world. Companies are increasingly adopting AI-powered tools to automate repetitive tasks, improve efficiency, and reduce operational costs.

From customer support chatbots to automated marketing systems, AI allows businesses to focus on strategic growth rather than manual processes. Automation systems can analyze large datasets, detect patterns, and make intelligent decisions faster than humans.

For example, AI automation can help companies manage emails, analyze customer behavior, optimize workflows, and generate real-time insights for decision-making.

Businesses that integrate AI automation early gain a competitive advantage by improving productivity and reducing human errors.

As technology continues to evolve, AI automation will become a core part of every digital infrastructure.`,
  },
  {
    title: '2. Why Every Business Needs a Professional Website in 2026',
    content: `In today's digital-first world, a professional website is no longer optional for businesses. It is the central hub where customers learn about your services, trust your brand, and make purchasing decisions.

A well-designed website builds credibility and helps businesses reach global audiences. It also improves customer engagement by providing clear information, contact options, and service details.

Modern websites are built with responsive design, meaning they work seamlessly across desktops, tablets, and mobile devices.

Search engine optimization (SEO) also plays a major role. A properly optimized website helps businesses appear in search results when potential customers look for related services.

Investing in professional web development ensures that your brand stands out in a highly competitive digital marketplace.`,
  },
  {
    title: '3. How Automation Can Save Businesses Hundreds of Hours',
    content: `Automation has become one of the most valuable technologies for modern companies. Many businesses spend countless hours on repetitive tasks such as data entry, email management, reporting, and scheduling.

With automation systems, these tasks can be performed automatically with minimal human intervention.

For example, automated workflows can collect customer data, send follow-up emails, update CRM systems, and generate reports in seconds.

This not only saves time but also reduces errors and increases overall efficiency.

Companies that adopt automation tools often experience faster operations, improved productivity, and better decision-making capabilities.

Automation allows teams to focus on innovation and strategy rather than routine tasks.`,
  },
  {
    title: '4. The Power of Data Visualization for Business Growth',
    content: `Data is one of the most valuable assets for businesses, but raw data alone is difficult to understand. Data visualization transforms complex datasets into clear charts, graphs, and dashboards.

This makes it easier for business leaders to identify trends, patterns, and opportunities.

For example, sales dashboards can show which products perform best, marketing analytics can reveal campaign performance, and financial charts can highlight revenue growth.

When data is visualized effectively, businesses can make faster and more informed decisions.

Modern data visualization tools also allow real-time tracking, helping organizations respond quickly to market changes.

Companies that leverage data visualization gain a strategic advantage by turning information into actionable insights.`,
  },
  {
    title: '5. How AI is Transforming Software Development',
    content: `Artificial intelligence is rapidly changing the way software is developed. AI-powered tools can assist developers in writing code, identifying bugs, and optimizing system performance.

Machine learning models can analyze millions of lines of code to detect vulnerabilities and improve software quality.

AI also helps accelerate development cycles by automating testing, code reviews, and documentation.

With the rise of AI-assisted development environments, developers can focus more on creativity and problem-solving rather than repetitive coding tasks.

As AI technology advances, it will continue to reshape the future of software engineering and digital innovation.`,
  },
];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">TechWorld Blog</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Insights for modern growth and automation</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Explore thought leadership on AI automation, websites, productivity, and business intelligence.</p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{post.title}</h2>
              <p className="text-slate-700 whitespace-pre-line leading-7">{post.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
