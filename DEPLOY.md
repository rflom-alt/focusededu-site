# Deploying FocusedEDU

This is a **Next.js 16 app** (not WordPress) — it cannot run on GreenGeeks shared
hosting. Host it on **Vercel** (free, made by the Next.js team) and point your domain at it.
The whole site is **statically pre-rendered** (49 pages), so it's fast and cheap to serve.

`pnpm build` passes cleanly (verified). No environment variables are required.

---

## 1. Put the code on GitHub
1. Create a free account at https://github.com and click **New repository**
   (name it e.g. `focusededu-site`, keep it **Private**, don't add a README/license).
2. GitHub shows a "…or push an existing repository" box. From this project folder, run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/focusededu-site.git
   git push -u origin main
   ```
   (The repo is already committed locally.)

## 2. Deploy on Vercel
1. Create a free account at https://vercel.com — choose **Continue with GitHub**.
2. Click **Add New… → Project**, select your `focusededu-site` repo, click **Import**.
3. Vercel auto-detects Next.js — leave all defaults — click **Deploy**.
4. In ~2 minutes you get a live URL like `focusededu-site.vercel.app`.
   **Click through everything here first** to confirm it looks right.

## 3. Point your domain (focusedu-staffing.com) at Vercel
1. In your Vercel project → **Settings → Domains** → add `focusedu-staffing.com`
   (and `www.focusedu-staffing.com`).
2. Vercel shows the DNS records to set (an **A record** for the root, a **CNAME** for `www`).
3. Log in wherever your domain's DNS is managed (GreenGeeks or your registrar) and
   update those records to the values Vercel gives you.
4. Propagation usually takes minutes to an hour. Vercel auto-issues HTTPS.

> ⚠️ **Do NOT change your MX records.** Updating the website's A/CNAME records does
> not affect email — as long as the **MX records** (which route `hello@focused-staffing.com`)
> stay pointed at GreenGeeks. Leave those untouched and email keeps working.

> ✅ Keep the old WordPress site running on GreenGeeks until you're 100% happy.
> Flipping DNS is fully reversible.

---

## Making changes later (no re-doing everything)
Once GitHub → Vercel is connected, the loop is:
1. Edit the code (here, or re-open this project in Claude Code).
2. `git add -A && git commit -m "your change" && git push`
3. Vercel automatically rebuilds and deploys — usually live in ~90 seconds.

The **repo is the source of truth**, not any chat session. The code lives on your machine
and on GitHub between sessions.

---

## Pre-launch checklist (recommended before flipping DNS)
- [ ] **Contact form** currently opens the visitor's email app (`mailto`). For a real inbox
      form, wire it to an email service like **Resend** (~30 min) — see `ContactSection.tsx` TODO.
- [ ] **Stats** in the stat band are your real video numbers — confirm you're OK publishing them.
- [ ] **Placeholder photography** (Pexels) — swap for a branded shoot when ready. Filenames stay
      the same, so it's a drop-in replace (see `ASSETS.md`). The founder headshot is already real.
- [ ] **CTA wording** — reconcile against your approved list.
- [ ] Decide whether to add the **Behavioral sibling site** (not built yet) on `focused-staffing.com`.
