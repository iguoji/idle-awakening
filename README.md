# Idle Awakening

## Development architecture

The development tree is bundle-free. `index.html` starts the Vite application from `src/ui/index.js`, which talks to the game worker through `GameWorkerClient` and `GameAdapter`.

The legacy webpack bundles are no longer runtime dependencies. The game/worker modules now live under `src/game` as native source modules and can be cleaned up one module at a time.

### Layers

```text
UI components / features
        ↓
GameAdapter
        ↓
Engine / Worker client
        ↓
Domain modules
        ↓
Persistence / runtime services
```

### Commands

```bash
npm install
npm run dev
npm run build
npm run check:architecture
```

`check:architecture` fails if the new application reintroduces a legacy bundle dependency under `index.html` or `src/`.
