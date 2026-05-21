---
name: Firecrawl
problem-areas: [ai-web-data, ai-apis, ai-agent-infra]
ring: assess
ring-reasoning: "A 1,000-credit free tier and a $16 per month Hobby plan with self-serve signup make it cheap to try, though credit-based billing means costs need watching at scale."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://firecrawl.dev
pricing: https://firecrawl.dev/pricing
---

# Firecrawl

**What it is:** A web scraping and crawling API that turns websites, including JavaScript-rendered pages and PDFs, into clean markdown and structured JSON ready for LLMs.

**Problem it solves:** Lets a solo developer pull AI-ready web data into an app without running headless browsers, rotating proxies, or maintaining scraper infrastructure.

**When I'd reach for it:**

- Feeding a research agent or chatbot live context scraped from public, lightly protected sites.
- Crawling docs or a content site into clean markdown for a RAG pipeline.
- Quick one-off data gathering where setup speed matters more than scraping the hardest targets.

**When I wouldn't:**

- Scraping Amazon, LinkedIn, or Cloudflare-protected pages, where independent benchmarks put success near 34 percent.
- When predictable flat billing matters, since credit multipliers and a separate Extract charge make costs hard to forecast.

**Pricing posture:** Free tier gives 1,000 credits per month. Hobby is $16/month (billed yearly) for 5,000 credits. Standard is $83/month, Growth $333/month, with no per-seat fee.

**Reality check:** Reviews call the billing a trap: basic scrapes cost 1 credit but JSON extraction is 5x and Agent mode can burn 100 to 1,500 credits per query, while Extract is billed separately on top of the credit plan. Failed requests still consume credits, with users reporting 20 to 30 percent waste on flaky sites. The self-hosted open-source build drops the anti-bot engine, Agent mode, and sandbox. For protected sites, Bright Data or Zyte are stronger; for free crawling, Crawl4AI is an option.

**Links:** [Homepage](https://firecrawl.dev) and [Pricing](https://firecrawl.dev/pricing)

**Last researched:** 2026-05-21
