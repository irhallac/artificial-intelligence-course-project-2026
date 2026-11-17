# SEC 401.2 project website

This directory contains a dependency-free static course website prepared for GitHub Pages.

## Editing routine

- Project descriptions and query examples: edit `projects.html`.
- Test-case generation and StepGame explanation: edit `method.html`.
- Project plan and grading table: edit `plan.html`.
- Announcements and frequently asked questions: edit `content/site-content.js`.
- Course information, experiment requirements, deadline text, submission requirements, and reading links: edit `index.html`.
- Visual design: edit `assets/styles.css`.

New announcement and FAQ entries should follow the existing JavaScript object format. Announcement dates use `YYYY-MM-DD`.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000 --directory docs
```

Then open `http://localhost:8000`. The pages can also be opened directly from the `docs` folder.

## GitHub Pages

The site contains a `.nojekyll` marker and needs no build step. If these files are the root of the public repository, publish from the `main` branch and `/(root)`. If the full course workspace is kept private and published separately, use the `docs/` directory as the source.

## License

Original course-project text and diagrams are licensed under [CC BY 4.0](LICENSE.md). Third-party materials retain their respective rights and licenses.
