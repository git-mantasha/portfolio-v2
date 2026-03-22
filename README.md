# My Portfolio Website

This is my college project - a personal portfolio website I made to showcase my skills, education, hobbies and other stuff about me.

## Live Demo
[Click here to view the website](https://portfolio-mantashanafis.vercel.app/)

## What this project is about

I built a portfolio website where anyone can visit and learn about me. It has multiple pages like skills, education, gallery, hobbies, career and a contact form. The contact form is connected to a real database so when someone sends me a message it actually gets saved.

## Pages included

- Home
- Skills
- Education
- Gallery
- Hobbies
- Career
- Testimonials
- Contact

## Tech I used

**Frontend**
- HTML, CSS, JavaScript

**Backend**
- Node.js with Express

**Database**
- MySQL (hosted on Railway)

**Hosting**
- Frontend is hosted on Vercel
- Backend is hosted on Render

**Version Control**
- Git and GitHub

## How the contact form works

When someone fills the contact form on the website, the data goes to the Node.js backend running on Render, and then it gets saved in a MySQL database on Railway. Pretty cool for a beginner project I think.

## Project structure

Portfolio/
├── Assets/          (images and icons)
├── SRC/
│   ├── pages/       (all HTML pages)
│   ├── script/      (JavaScript file)
│   └── style/       (CSS file)
├── database/        (SQL file to create the database table)
├── server.js        (backend server)
├── vercel.json      (Vercel config)
└── .gitignore

## Note

The `.env` file is not included in this repo for security reasons. It contains the database credentials. The backend is already live on Render with the environment variables configured there.

## Made by

**Mantasha Nafis**
Kristu Jayanti University
