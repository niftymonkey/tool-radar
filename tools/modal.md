---
name: Modal
problem-areas: [ai-agent-infra, background-jobs, hosting-deploy]
ring: assess
ring-reasoning: "A free Starter plan with $30 per month in credits, per-second usage billing, and self-serve signup let an individual developer ship GPU workloads without a sales call."
summary: "Serverless cloud compute platform that runs Python code, GPUs, and isolated sandboxes from a decorator, scaling from zero with per-second billing."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://modal.com
pricing: https://modal.com/pricing
---

# Modal

**What it is:** A serverless cloud compute platform that runs Python code, GPUs, and isolated sandboxes from a decorator, scaling from zero to thousands of containers with per-second billing.

**Problem it solves:** Lets a solo developer deploy model inference, batch jobs, or agent sandboxes straight from Python without provisioning servers, writing Dockerfiles, or paying for idle GPUs.

**When I'd reach for it:**

- Running LLM or image-generation inference for a side project that needs a GPU only intermittently.
- Bursty batch work like embeddings or fine-tuning where pay-per-second beats a rented instance.
- Ephemeral sandboxes for executing agent-generated or untrusted code.

**When I wouldn't:**

- Long-running, steady-state workloads, where multipliers make Modal pricier than a dedicated RunPod instance.
- A project not written in Python, since Modal is Python-centric.

**Pricing posture:** Free Starter plan includes $30/month in credits, 3 seats, and 10 GPU concurrency. Team is $250/month plus compute; both bill compute per second, GPUs roughly $0.0002 to $0.0017 per second.

**Reality check:** A competitor analysis claims production workloads can hit 3.75x the advertised base rate once regional and preemption multipliers stack, and notes that Volume storage and egress are not publicly priced; treat the exact figures as vendor-adjacent but the structure as real. Reviews more broadly flag preemptible GPU instances interrupting long jobs and multi-second container delays that hurt real-time agent calls. Strong for experimentation and bursty work, weaker for persistent, high-utilization production.

**Links:** [Homepage](https://modal.com) and [Pricing](https://modal.com/pricing)

**Last researched:** 2026-05-21
