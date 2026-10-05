# ⚡ FINOPS FREE-TIER BUDGET MATRIX
## LawRJ Web Platform & Legal Tech Infrastructure (`SUB-014`)
**Document Reference:** `FINOPS-PRJ02-001`  
**High Systems Architect:** Dr. Richard Daystrom [Agent 04]  
**Fiscal Baseline:** Spark Plan Free Tier ($0.00 Fixed Cost)  
**Monthly Cloud Budget:** `$0.00 USD / ₹0.00 INR`  

---

## 1. Cloud Resource Free-Tier Allocation Table

| Service Component | Cloud Provider | Free-Tier Allowance (Monthly) | Projected Monthly Usage | Quota Utilization % | Monthly Cost |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **Firebase Hosting Storage** | Google Cloud / Firebase | `10 GB` Storage | `~45 MB` (Static HTML/CSS/JS/WebP) | **0.45%** | **$0.00** |
| **Firebase CDN Data Transfer** | Google Cloud / Firebase | `360 MB / day` (`~10.8 GB / mo`) | `~2.1 GB / mo` (High-traffic target) | **19.4%** | **$0.00** |
| **Custom Domains & SSL** | Google Cloud / Firebase | Unlimited free SSL certs | 2 Custom Domains (`apex` + `www`) | N/A | **$0.00** |
| **Serverless Email Intake** | EmailJS Platform | `200 emails / mo` free tier | `~40-60 briefings / mo` | **30.0%** | **$0.00** |
| **Direct Advisory Channel** | WhatsApp Business Cloud | Free unlimited inbound clicks | Direct URI redirect (P2P E2EE) | N/A | **$0.00** |
| **GitHub Actions CI/CD** | GitHub Enterprise/Public | `2,000 min / mo` free compute | `~45 min / mo` (Static builds) | **2.25%** | **$0.00** |
| **TOTAL PROJECTED COST** | — | — | — | — | **$0.00 / mo** |

---

## 2. Hard Quota Safeguards & Leakage Defenses

1. **Zero Dynamic Compute Costs:** Bypassing Cloud Run / SSR ensures zero compute instances running in the background. If traffic spikes to 500,000 visitors during a PR campaign, Firebase Hosting edge nodes absorb 100% of the load without spinning up billable compute containers.
2. **Immutable Caching Shield:** Static assets (`_next/static/**`) with `max-age=31536000, immutable` reduce repetitive client requests to origin by $\ge 85\%$.
3. **No Database Write Exposure:** Disallowing public direct Firestore writes prevents malicious attackers from exhausting database write quotas (capped at 20,000 writes/day free tier).

---

*Compiled by Dr. Richard Daystrom [Agent 04].*
