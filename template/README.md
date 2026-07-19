# Shared template bundle

This folder is a **reference copy** of the shared HTML template and Global CSS, kept
together so the team can grab both files at once. It is not part of the live site.

## How to use this

1. Copy `template.html` and `style.css` out of this folder into your own working
   folder, at the same level as the shared `images/` folder (i.e. the project root,
   next to `home.html`, `gallery.html`, etc.).
2. Rename your copy of `template.html` to your page's file name (e.g. `feedback.html`,
   `team.html`) per the naming table in the coursework spec.
3. Do not edit the header, nav, or footer structure — only add your content inside
   `<main>`.
4. Update the footer's Page Editor / Validation links and student details to your own.
5. Add `class="active"` to your own page's nav link.

`style.css` at the project root is the one actually wired into the live site — this
folder exists only so the starting `template.html` is easy to find and hand out.
`template.html` itself is not a live page (no other page links to it); it's the
master copy every page's header/nav/footer was originally copied from.
