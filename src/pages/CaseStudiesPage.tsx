const caseStudies = [
  {
    title: '1️⃣ Tuli Enterprises — Industrial Business Website',
    industry: 'Manufacturing',
    projectType: 'Corporate Website Development',
    duration: '2 Months',
    problem: 'The client needed a professional online presence to showcase their bolt manufacturing products and allow potential buyers to easily explore product categories and submit inquiries. Their previous online visibility was minimal and not optimized for SEO or mobile users.',
    solution: 'I built a full-stack industrial product website with a scalable backend and modern responsive UI. The platform allows customers to browse product categories, view detailed product information, and submit inquiries directly to the company.',
    features: ['Category-based product catalog', 'Product detail pages', 'Inquiry form with backend API integration', 'SEO optimized structure', 'Fully responsive design for mobile & desktop', 'Secure backend APIs for product management'],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    results: ['Professional digital presence for manufacturing business', 'Improved product discoverability online', 'Streamlined customer inquiry process'],
  },
  {
    title: '2️⃣ Mahadev Grocery — Full Stack E-Commerce Platform',
    industry: 'Retail / Grocery',
    projectType: 'MERN E-commerce System',
    duration: '3 Months',
    problem: 'The grocery business required a complete online ordering system with user accounts, order tracking, and a smooth checkout experience.',
    solution: 'I developed a scalable MERN-based e-commerce system with a full shopping workflow including user authentication, cart management, wallet balance handling, and order tracking.',
    features: ['User authentication system', 'Product browsing by categories', 'Add-to-cart functionality', 'Wallet balance system', 'Secure checkout workflow', 'Order history & tracking', 'Cloud deployment with REST APIs'],
    techStack: ['MongoDB', 'Mongoose', 'Express.js', 'React', 'Node.js', 'REST API', 'Render'],
    results: ['Complete online grocery ordering system', 'Efficient order management workflow', 'Cloud-based scalable backend'],
  },
  {
    title: '3️⃣ Kyraa Jewelz — Jewellery E-commerce Platform',
    industry: 'Jewellery Retail',
    projectType: 'Custom E-commerce Website',
    duration: '2.5 Months',
    problem: 'The jewellery brand required a visually appealing online store where customers could browse collections, search products, and manage wishlists.',
    solution: 'I built a modern MERN stack e-commerce platform with elegant UI design and advanced shopping features optimized for jewellery product browsing.',
    features: ['Product search functionality', 'Collection filtering system', 'Wishlist feature', 'Shopping cart management', 'Order workflow', 'Admin panel for product management', 'Fully responsive UI'],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    results: ['Smooth customer shopping experience', 'Efficient product management for admin', 'Mobile-optimized e-commerce platform'],
  },
  {
    title: '4️⃣ TradingView Webhook Automated Trading Bot',
    industry: 'FinTech / Algorithmic Trading',
    projectType: 'Automated Trading System',
    duration: '2 Months',
    problem: 'Traders needed a way to automatically execute trades based on TradingView signals without manually placing orders.',
    solution: 'I developed an automated trading bot that connects TradingView alerts to Delta Exchange using webhooks. The system receives real-time signals and executes trades automatically via API.',
    features: ['TradingView webhook integration', 'Automatic trade execution', 'Market buy/sell order placement', 'Position management logic', 'Duplicate trade prevention', 'Cloud deployment for 24x7 uptime'],
    techStack: ['Python', 'Pine Script', 'TradingView Webhooks', 'Delta Exchange API', 'Flask', 'Render'],
    results: ['Fully automated trading workflow', 'Real-time order execution', 'Reduced manual trading effort'],
  },
  {
    title: '5️⃣ Multi-Year Seasonal Market Analysis Tool',
    industry: 'FinTech / Data Analysis',
    projectType: 'Data Visualization Tool',
    duration: '2 Months',
    problem: 'Traders often struggle to identify repeating seasonal market patterns across historical data.',
    solution: 'I created a seasonal market analysis dashboard that analyzes historical price behavior across multiple years and visualizes patterns with statistical accuracy.',
    features: ['Multi-year historical analysis', 'Seasonal pattern detection', 'Interactive chart visualization', 'Statistical trade targets', 'Accuracy metrics for past cycles', 'Data tables summarizing market behavior'],
    techStack: ['Python', 'D3.js', 'Chart.js'],
    results: ['Clear visualization of seasonal market trends', 'Data-driven trading insights', 'Improved decision-making for traders'],
  },
  {
    title: '6️⃣ EMA + VWAP Momentum Stock Scanner (AI Trading Tool)',
    industry: 'FinTech / AI Trading Tools',
    projectType: 'Trading Signal Scanner',
    duration: '1 Month',
    problem: 'Traders waste time manually scanning multiple stock charts to find valid trading signals.',
    solution: 'I built a real-time multi-stock scanner dashboard that automatically detects trading signals using EMA crossover, VWAP positioning, and RSI momentum filtering.',
    features: ['EMA 20 & EMA 50 crossover detection', 'VWAP trend filtering', 'RSI momentum confirmation', 'Real-time multi-stock scanner', 'Centralized signal dashboard', 'Instant signal alerts with timestamp'],
    techStack: ['Python', 'OpenAI', 'LangChain', 'TradingView', 'Pine Script'],
    results: ['Faster trade signal discovery', 'Centralized monitoring of multiple stocks', 'Systematic intraday trading analysis'],
  },
];

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">Case Studies</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Real results from our client projects</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto leading-relaxed">Explore real-world digital transformations, automation systems, and business growth stories from our portfolio.</p>
        </div>

        <div className="space-y-5">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="rounded-xl bg-blue-50 border border-blue-100 p-6 shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold h-7 w-7">{index + 1}</span>
                  <h2 className="text-2xl font-bold text-slate-900 leading-tight">{study.title}</h2>
                </div>
                <span className="rounded-full bg-slate-200 text-slate-700 px-3 py-1 text-xs font-semibold">{study.duration}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">{study.industry}</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">{study.projectType}</span>
              </div>

              <div className="mt-5 space-y-4 text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Problem</h3>
                  <p className="text-sm">{study.problem}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Solution</h3>
                  <p className="text-sm">{study.solution}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    {study.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">Tech Stack</h3>
                  <p className="text-sm text-slate-700">{study.techStack.join(' • ')}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">Results</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    {study.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
