# GitHub Pages Deployment Guide for Your Personal Website

## Overview

This guide will walk you through deploying your personal portfolio website to GitHub Pages, making it accessible at `https://zahta.github.io`.

## Prerequisites

- A GitHub account (you already have this: https://github.com/zahta)
- Git installed on your local machine
- The website files provided

## Step-by-Step Deployment Instructions

### Step 1: Create a New Repository

1. Go to GitHub.com and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository exactly: `zahta.github.io` (this is important for GitHub Pages to work automatically)
4. Make sure the repository is set to "Public"
5. Do NOT initialize with README, .gitignore, or license (we'll add our own files)
6. Click "Create repository"

### Step 2: Prepare Your Local Files

1. Download and extract the website files I've provided
2. Open a terminal/command prompt
3. Navigate to the extracted folder containing your website files

### Step 3: Initialize Git and Upload Files

Run the following commands in your terminal:

```bash
# Initialize a new Git repository
git init

# Add all files to the repository
git add .

# Make your first commit
git commit -m "Initial commit: Add personal portfolio website"

# Add your GitHub repository as the remote origin
git remote add origin https://github.com/zahta/zahta.github.io.git

# Push your files to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub: https://github.com/zahta/zahta.github.io
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### Step 5: Access Your Website

After a few minutes, your website will be available at:
**https://zahta.github.io**

## Important Notes

### File Structure
Your website uses the following structure:
```
zahta.github.io/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].css # Compiled CSS
│   ├── index-[hash].js  # Compiled JavaScript
│   └── profile-photo-[hash].png # Your profile image
└── README.md           # Optional documentation
```

### Updating Your Website

To make changes to your website:

1. Edit the source files in your local React project
2. Run `pnpm run build` to create new production files
3. Copy the contents of the `dist/` folder to your GitHub repository
4. Commit and push the changes:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

### Custom Domain (Optional)

If you want to use a custom domain instead of zahta.github.io:

1. Purchase a domain from a domain registrar
2. In your repository settings, go to Pages > Custom domain
3. Enter your domain name
4. Configure your domain's DNS settings to point to GitHub Pages

## Troubleshooting

### Common Issues:

1. **Website not loading**: Wait 5-10 minutes after pushing changes
2. **404 Error**: Make sure your repository is named exactly `zahta.github.io`
3. **Images not showing**: Check that image paths are correct and files are in the assets folder
4. **CSS not applying**: Ensure the CSS file is properly linked in index.html

### Getting Help:

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com/

## Website Features

Your personal website includes:

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth scrolling and hover effects
- **Professional Sections**:
  - Hero section with your photo and introduction
  - About section highlighting your achievements
  - Professional experience with detailed descriptions
  - Technical skills showcase
  - Featured projects from your GitHub
  - Contact section with links to your profiles

- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code

## Maintenance

- Update your experience and projects regularly
- Keep your GitHub repositories active to showcase ongoing work
- Consider adding a blog section for technical articles
- Update your profile photo periodically

Your website is now ready for deployment! Follow these steps, and you'll have a professional online presence at https://zahta.github.io.

