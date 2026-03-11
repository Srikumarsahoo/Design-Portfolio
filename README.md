# 🎨 UI/UX Designer Portfolio

A clean, responsive, and fully customizable portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** — ready to deploy on Vercel in minutes.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout (fonts, metadata)
│   └── page.js            # Main page (assembles all sections)
├── components/
│   ├── Navbar.js          # Sticky navigation
│   ├── Hero.js            # Hero section
│   ├── Brands.js          # Scrolling brand marquee
│   ├── About.js           # About + skills section
│   ├── Process.js         # Design process (Discover/Design/Deliver)
│   ├── Testimonials.js    # Client testimonials
│   ├── Projects.js        # Selected works grid
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer
├── config/
│   └── portfolio.js       ← ✏️ EDIT THIS FILE TO CUSTOMIZE EVERYTHING
├── styles/
│   └── globals.css        # Global styles + CSS variables
└── public/
    └── images/
        ├── hero.png               ← Your profile photo
        ├── testimonial-1.jpg      ← Testimonial avatar 1
        ├── testimonial-2.jpg      ← Testimonial avatar 2
        └── projects/
            ├── project-1.png      ← Project screenshots
            ├── project-2.png
            ├── project-3.png
            └── project-4.png
```

---

## ✏️ How to Customize

**All customization happens in ONE file: `config/portfolio.js`**

Just open it and update:
- Your name, role, tagline, email
- Hero profile image path
- Social media links
- Client/tool brands for the marquee
- Skills list
- Process steps
- Testimonials (quotes, names, avatars)
- Projects (title, description, tags, cover images, links)

---

## 🖼️ Adding Your Images

1. **Profile photo** → Save as `/public/images/hero.png`
2. **Project screenshots** → Save in `/public/images/projects/`
   - `project-1.png`, `project-2.png`, etc.
   - Recommended size: **800×500px** or 16:10 ratio
3. **Testimonial avatars** → `/public/images/testimonial-1.jpg`, etc.

The website will automatically show your images once added.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- npm or yarn

### Steps

```bash
# 1. Clone or download the project
git clone <your-repo-url>
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

---

## 📤 Deploying to Vercel (Recommended — Free)

### Option 1: Via GitHub + Vercel (Easiest)

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"New Project"**
3. Select your `portfolio` repository
4. Click **"Deploy"** — Vercel auto-detects Next.js ✅
5. Your site is live at `https://srikumar-sahoo.vercel.app/` 🎉

**Step 3: Custom Domain (Optional)**
1. In Vercel dashboard → Project Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Update DNS records at your registrar as instructed

> **Auto-deploy**: Every `git push` to `main` automatically redeploys your site!

---

### Option 2: Netlify

```bash
npm run build
# Upload the `.next` folder OR connect GitHub repo at netlify.com
```

---

### Option 3: GitHub Pages (Static Export)

Add to `next.config.js`:
```js
output: 'export'
```

Then:
```bash
npm run build
# Deploy the `out/` folder to GitHub Pages
```

---

## 🎨 Changing Colors & Fonts

Edit `styles/globals.css`:
```css
:root {
  --lime: #b5f23d;     /* ← Primary accent color */
  --bg: #f5f5f0;       /* ← Background color */
  --text-primary: #0d0d0d;
}
```

---

## 📬 Contact Form

The form currently opens the user's email client with pre-filled content. To use a real form backend:

**Option 1: [Formspree](https://formspree.io)** (free, easy)
- Sign up → Create a form → Get your endpoint
- In `Contact.js`, replace the `handleSubmit` with:
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
})
```

**Option 2: [EmailJS](https://emailjs.com)** — sends emails directly from the browser.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations (add as needed) |
| Vercel | Deployment |

---

## 🙋 Support

Edit `config/portfolio.js` for 95% of changes. For layout edits, modify the relevant component in `/components/`.
