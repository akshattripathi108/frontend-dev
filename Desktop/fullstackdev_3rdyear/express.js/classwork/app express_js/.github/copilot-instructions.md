# Copilot / AI Agent Instructions

This repository is a minimal Express.js app (single-file) using ES modules. Keep guidance concise and actionable for quick edits and small feature additions.

## Big picture
- Single HTTP service: entrypoint is `server.js` (root). It creates an `express` app and registers routes directly.
- `package.json` uses `"type": "module"` so files use ESM `import` syntax.
- No build step or separate server folder; edits to `server.js` are the primary code changes.

## Key files to inspect
- `server.js` — main app and route handlers (example: `app.get('/', ...)`).
- `package.json` — project metadata; currently no `start` script or dependencies listed.

## How to run (developer workflows)
1. Install runtime dependency if missing: `npm install express`
2. Start locally: `node server.js` (process listens on `process.env.PORT` or `3000`).
3. Debug with Node inspector: `node --inspect server.js` or use a VS Code launch configuration pointing to `server.js`.

If you add scripts, prefer adding a `start` script in `package.json`:

```
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## Repo-specific patterns & conventions
- ESM imports (do not convert to CommonJS). Keep `type: "module"` in `package.json` unless intentionally migrating.
- Single-file route registration: add new routes in `server.js` for quick tasks; for larger refactors create a `routes/` folder and export/import app router.
- Environment configuration: the server respects `PORT` only. For other config, prefer standard `process.env` keys and document them in `README.md`.

## Integration points & external dependencies
- The app expects `express` as the main dependency. There are no database, auth, or external service integrations present now.

## Examples to follow
- To add a JSON endpoint, follow existing style in `server.js`:

```js
app.get('/health', (req, res) => res.json({ status: 'ok' }));
```

## When modifying repository files
- If you add dependencies, update `package.json` and commit `package-lock.json`.
- Keep changes minimal and focused (this is a tiny demo app). If adding multiple routes, consider moving to `routes/` and keeping `server.js` as the bootstrapper.

## What AI agents should not assume
- There are no tests or CI configured — do not add assumptions about test runners or pipelines.
- Do not change module type silently; converting from ESM to CommonJS impacts imports.

---
If anything in these instructions is unclear or you want additional agent rules (linting, CI, or example refactors), say which area to expand. 
