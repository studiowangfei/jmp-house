# JM+P House

An interactive 3D reconstruction of an old house I spent a year designing
and renovating — a home accompanied by Japanese maple and Japanese persimmon
trees. Give it a spin to explore its design, materials, and
furnishing.

**Live:** https://jmp-house.vercel.app

> \*"This is a 3D visualization of an old house I spent over a year
> renovating. Give it a spin to see its design, materials, and furnishing.
> You can download the starter repo and give the prompt to your agent to
> build with your own house plan and interior design."\*
> — the in-app project description

> **What this repository contains:** the deployable build only — `index.html`,
> `styles.css`, and a single pre-bundled `app.bundle.js` (Three.js included),
> plus the audio/video assets it loads and the `house-app-starter/` pack
(the build prompt and starter repo the Info panel offers for download). The original source project that
> produces this bundle is not included, so this repo is for hosting and
> archiving the finished app, not for rebuilding it from source. See
> [Editing / rebuilding](#editing--rebuilding) below.

---

## What you can do in it

### Explore the house

- **Drag to orbit, scroll / pinch to zoom.** The model opens in an
  axonometric 3D view; a loading screen with a progress meter tracks the
  (large, mostly inlined) scene as it prepares.
- **3D | Plan toggle** — switch between the axonometric view and a top-down
  plan view (orthographic camera).
- **Rotate 90°** — step the view around the house in quarter turns.
- **Reset** — restore the default view, all layers on, day mode, and the
  original arrangement.
- **Rearrange** — turn on Rearrange mode and almost everything placed in the house —
  furniture, floor and pendant lighting, plants, wall frames, even the
  persimmons on the counter — becomes selectable and draggable, with
  rotate, duplicate, delete, undo / redo, and a snapshot of your version
  to keep. The full rules (what can move, where it can go, and what it
  can't do) are in [Rearrange mode](#rearrange-mode) below.
- **Day / Night** — night mode re-lights the scene (fixture glows, top-down
  washes on cabinetry, backsplash, and wall frames) and even swaps the video
  playing on the media display: `HOG-2-web.mp4` by day, `LIT-web.mp4` by
  night.
- **Scene details** — a stone fireplace with an animated, illustrated flame
  (a shader-warped texture, not a video), a working media display, mirrors,
  and three trees rendered as crossed elevation billboards with plan
  textures: two Japanese maples (*Acer palmatum*, JM1 / JM2) and a Japanese
  persimmon (*Diospyros kaki*, JP) — plus two Fuyu persimmons on the kitchen
  counter.

### Layers

Toggle whole systems of the model on and off from the layer panel:

| Layer | What it controls |
| --- | --- |
| Structure | The architecture itself (walls, floors, openings) |
| Cutaway walls | Cuts the walls away for a dollhouse-style view into the rooms |
| Cabinetry | Built-ins — see the catalogue below |
| Furniture | All movable furniture and objects |
| Lighting | Pendant and lamp fixtures |
| Trees | The maples and persimmon |

The built-in cabinetry is modelled as twelve numbered pieces, traced from
the supplied floor plan: bedroom bed base and headboard in flooring oak,
living and bedroom window cabinets, staggered public and bedroom bookcases,
the entry's four-niche cabinet, slatted screen and window bench, the stone
fireplace, and walnut cabinetry for the north bedroom, south bedroom, and
the suite's U-shaped run.

### Rearrange mode

Enter **Rearrange** mode (the four-arrows toggle in the toolbar; on touch
devices it becomes a native switch, with a short haptic tap) and the study
becomes a sandbox. Entering it tidies up first: the gallery, catalog, and
other open panels close, and the trees are hidden for the duration — the
Trees layer is unchecked for you and comes back when you exit.

**What can move.** Every placed product in the Furniture and Lighting
groups is registered as a movable item — sofas, tables, and chairs, but
also the floor lamp, the pendant lights, the plants, the wooden wall
frames and the TOGO frame grid, the entry mirror and Hang-It-All, and
small surface pieces like the OB-4 and the kitchen persimmons.
Architecture and built-in cabinetry never move. Each item carries one of
four constraints, and the constraint decides how it drags:

| Constraint | Items | How they move |
| --- | --- | --- |
| `floor` | Most furniture, floor lamp, plants | Freely across the floor — but not outside the house: a drag that would cross the floor-plan boundary is refused and the item stays put |
| `wall` | Wall frames, frame grid, mirror, Hang-It-All | Slides along its own wall only, within that wall's bounds; it can't jump to another wall, and rotation is disabled for wall pieces |
| `surface` | OB-4 (on the living window cabinet), persimmon pair (on the counter) | Slides on its host surface, clamped to that surface's edges |
| `ceiling` | Pendant lights | Slides in plan at ceiling height, inside the same floor-plan boundary |

**Working with a selection.**

- Click an item to select it: a blue outline box appears around it, with
  its width, depth, and height labelled in inches, and a small floating
  toolbar (rotate left / right, duplicate, delete) that follows the
  selection on screen. Items hidden behind architecture or cabinetry
  can't be picked through the wall — picking is occlusion-aware.
- Drag to move; the camera controls are disabled while you drag, and a
  blue **4-inch grid** is drawn over the floors and walls as a visual
  reference. Dragging itself is continuous — it does *not* snap to the
  grid. Let go to commit the move; cancel the drag (e.g. pointer-cancel)
  and the item returns to exactly where it started.
- **Rotate** turns the selection in exact 15° steps (except wall pieces,
  above). **Duplicate** places a copy right next to the original — the
  first adjacent spot that stays inside the boundary — and selects the
  copy; a duplicated mirror is a static, non-reflective version of the
  original. **Delete** removes the item. Every one of these is a history
  step.
- **Undo / redo** buttons appear next to the Rearrange toggle once you've
  changed something. Keyboard works too: `Ctrl/⌘+Z` undo,
  `Ctrl/⌘+Shift+Z` or `Ctrl+Y` redo, `Delete` / `Backspace` deletes the
  selection, and `Esc` deselects — or, with nothing selected, exits
  Rearrange mode.

**Snapshot.** The camera button in the Rearrange controls renders a
clean, centred view of your arrangement — selection outline and grid
hidden — cropped to 4:3 landscape (3:4 portrait on touch devices).
**Save image** downloads it as `jmp-house-arrangement-YYYY-MM-DD.png`;
**Share** shares / copies the link to the live site (it shares the app,
not the picture).

**Nothing is saved.** An arrangement lives only in memory for the
session: it isn't written to local or session storage, so reloading the
page restores the house as designed. The **Reset** button does the same
on demand — originals return to their exact starting position, rotation,
and scale, and any duplicates are removed entirely.

### Product and material libraries

Two catalog strips run along the bottom of the viewer. Clicking an entry
flies the camera to that object in the scene (`product-focus`).

**Materials (8)** — each with the surface it is used for:

| Material | Used for |
| --- | --- |
| Bottega Caliza | Public flooring tile |
| Silver Galaxy | Kitchen island · countertop · backsplash · fireplace |
| Taranto Travertine | Bathroom tile |
| Terrazo Trento | Bathroom tile |
| White Oak | Cabinetry · doors (procedural wood grain) |
| Black Oak | Kitchen cabinetry |
| Natural Oak | Private flooring panels |
| Walnut | Bedroom cabinetry (procedural wood grain) |

**Products (24)** — real furniture and lighting, modelled to the linked
manufacturer/retailer references, with finish and dimensions recorded in
the bundle data:

- *Furniture:* SUNDAYS Frame Dining Table (solid oak) · Knoll Perron Pillo
  Sectional · Eames Rocker Armchair (Herman Miller) · Cesca Armless Chair
  (Marcel Breuer) · Fritz Hansen Series 7 Bar Stool · Ligne Roset TOGO®
  Three-Seater · Eames LCW Lounge Chair · IKEA DYVLINGE Swivel Chair ·
  sliding-top coffee table (walnut) · Crate & Barrel Spoke glass coffee
  table and Spoke marble end table · MUJI Body Fit Cushion · 32″ round
  framed mirror (cherry walnut) · Eames Hang-It-All · Yamazaki Tower
  Leaning Ladder · Primrue Marazi faux rubber tree
- *Lighting:* GUBI Semi Pendant (in two finishes — Roasted Pumpkin gloss
  and Fennel Seed gloss) · Santa & Cole Lámina 45 · Louis Poulsen PH 5 ·
  Louis Poulsen PH Snowball · Verner Panton Flowerpot VP1 (&Tradition) ·
  Santa & Cole TMM Floor Lamp
- *Objects:* teenage engineering OB-4 Magic Radio — which doubles as the
  in-scene trigger for the sound player (below), its waveform animating
  while music plays

### Photo gallery

15 photographs of the real house. Open the gallery from the toolbar, or
click a framed photo on the wall in the 3D scene — the picture morphs out
of its frame into the full-screen gallery (with a classic-morph fallback),
with a thumbnail strip for browsing.

### Sound

A built-in 7-track playlist, in order:

| # | Track | Artist |
| --- | --- | --- |
| 1 | Spring 1 | Max Richter, Daniel Hope, Konzerthaus Kammerorchester Berlin |
| 2 | Just Like Honey | The Jesus and Mary Chain |
| 3 | Ba Bu Duan | Dou Wei |
| 4 | Force of Life | Daniel Lopatin |
| 5 | Alone in Kyoto | Air |
| 6 | Tian Liang Hao Ge Qiu | Wan Xiaoli |
| 7 | When The Tigers Broke Free | Pink Floyd |

Play / pause, previous / next, a progress line, a scrolling track label,
and a repeat toggle (repeat the whole playlist, or repeat one song). An
animated waveform icon shows playback state.

---

## Running it locally

There is no build step and nothing to install. Serve the folder with any
static file server — opening `index.html` directly from disk is not the
supported path:

```bash
# from the folder containing index.html
python3 -m http.server 8000
# then open http://localhost:8000
```

or

```bash
npx serve .
```

Requirements: a modern browser with WebGL. The first load is heavy —
`app.bundle.js` is \~15.9 MB because the Three.js engine, the procedural
textures, the product thumbnails, and all 15 gallery photographs (full-size
and thumbnail) are inlined into it as data URIs.

Troubleshooting: appending `?performance=legacy` to the URL disables the
performance-optimised rendering path (on-demand shadow updates,
visibility/idle-driven rendering) and falls back to a continuous render
loop — useful for diagnosing rendering issues on unusual hardware.

## Deploying

Copy the folder contents, unchanged, to any static host (Vercel, Netlify,
GitHub Pages, S3, nginx, …). Two things to know:

1. **Integrity / cache-busting.** `index.html` loads its CSS and JS with a
   content-hash query (`styles.css?v=sha256-…`, `app.bundle.js?v=sha256-…`),
   and `deployment-manifest.json` (schema v1) lists the SHA-256 and byte
   size of every file in the build. If you replace any file, update both —
   or simply replace the whole folder with a newer build as a unit.
2. **Hard-coded share URL.** The share action shares
   `https://jmp-house.vercel.app` — this site's own URL — regardless of
   where a copy is hosted. That is how the bundle is built; change it in
   the bundle data if a fork should share a different URL. (Builds before
   the site separation shared `https://studiowangfei.com/house`, the app's
   former home inside the portfolio site; that URL now redirects here.)

Current build in this repo: the **dist_2 build, 8 November 2026**;
`app.bundle.js` SHA-256
`940fb17d31dfee1f4de0e178a583c60b023a0981ad58a5b499e79fcf584c6490`.
It builds in the share URL above and the Info cell's behaviour (expands
on click instead of hover, Gallery-style hover state and "Info" tooltip,
hover state suppressed while the panel is open) that the previous build
carried as patches, and it extends the Info panel: refreshed description
copy plus three resource actions — **Download starter pack** (the
`house-app-starter` zip in this repo), **Copy prompt** (the build prompt
text, with an on-screen fallback), and a **GitHub repo** link.

### Embedding

The app previously ran embedded in an iframe on studiowangfei.com; since
the separation it runs standalone and the portfolio site links here
instead. From its embedded days it retains a small `postMessage` bridge
(inlined in the bundle) for talking to a parent page:

- `{ type: "jmp-house:child-view", open: boolean }` — reports when a modal
  view (gallery, snapshot) opens or closes, so the host can react
- `"jmp-house:close"` — asks the host to close the viewer

Standalone, with no parent frame, the bridge simply does nothing.

## File structure

```text
.
├── index.html                 # App shell: loader, toolbar, layer / audio /
│                              #   gallery / snapshot UI (274 lines)
├── styles.css                 # All UI styling, incl. the additive Night
│                              #   theme layer (2,629 lines)
├── app.bundle.js              # Everything else: Three.js r185 + the whole
│                              #   house scene, in one minified IIFE
│                              #   (~15.9 MB, no sourcemap)
├── deployment-manifest.json   # SHA-256 + size for every file (schema v1)
└── assets/
    ├── HOG-2-web.mp4          # Media-display video, day mode (480×200, ~22 s, looped, muted)
    ├── LIT-web.mp4            # Media-display video, night mode (480×256, ~23 s, looped, muted)
    └── audio/                 # The 7 playlist tracks, as MP3
        ├── Spring 1 - Max Richter, Daniel Hope, Konzerthaus Kammerorchester Berlin.mp3
        ├── Just Like Honey - The Jesus and Mary Chain.mp3
        ├── Ba Bu Duan - Dou Wei.mp3
        ├── Daniel Lopatin - Force of Life.mp3
        ├── Alone in Kyoto - Air.mp3
        ├── Tian Liang Hao Ge Qiu - Wan Xiaoli.mp3
        └── When The Tigers Broke Free - Pink Floyd.mp3
```

Everything else — geometry, materials, textures (wood grain is largely
procedural; stone/ tile textures are inlined WebPs), gallery photos,
product thumbnails, and the fireplace flame — lives inside
`app.bundle.js`.

## How it is built (from the bundle)

Since only the bundle ships, this is read from the bundle itself:

- **Engine:** Three.js **r185**, bundled inline (`WebGLRenderer`,
  `MeshStandardMaterial`, PCF shadows). Perspective camera for the 3D
  view; orthographic camera for Plan view and snapshots. Custom
  orbit-style controls (no stock `OrbitControls`), raycaster picking
  throughout — for products, gallery frames, and rearrange selection.
- **Performance path (default):** rendering is demand-driven — shadow maps
  update on change rather than every frame, animation runs at capped
  rates (15 fps for the fireplace flame and the OB-4 waveform), video
  texture frames are followed with `requestVideoFrameCallback` (with a
  \~66 ms timer fallback), and rendering pauses when the viewer is
  off-screen (`IntersectionObserver`), the tab is hidden
  (`visibilitychange`), or the app signals idle. WebGL context loss /
  restore is handled. `?performance=legacy` turns all of this off.
- **UI:** vanilla HTML/CSS/JS in `index.html` + `styles.css` — Libre
  Baskerville / Georgia serif, a strict 44 px control-cell grid, hard-
  cornered square-cap icons, full ARIA labelling, `prefers-reduced-motion`
  support, and dedicated touch / coarse-pointer layouts (breakpoints at
  900 px / 720 px, and short-height screens).
- **Night mode** is deliberately an additive CSS theme layer plus a
  lighting state in the scene — remove that CSS block and the controller
  hook and the original day presentation is restored unchanged.

## Editing / rebuilding

You can't, from this repo alone — and that's by design. The workflow is:

1. Make changes in the original source project (not included here).
2. Export a new build (new `app.bundle.js`, `index.html`, `styles.css`,
   assets, and a regenerated `deployment-manifest.json`).
3. Replace the files in this repo / on the host with the new build as a
   complete unit, and verify the manifest hashes match the files on disk.

Small, safe edits that *are* possible here: none are recommended in
`app.bundle.js` (minified, 4,353 very long lines), but `index.html` copy
(e.g. the project description) and `styles.css` values are readable and
editable — just remember to refresh the `?v=sha256-…` query strings and
the manifest afterwards, or browsers may keep serving the cached copy.

## Notes and caveats

- **Music copyright.** The seven MP3s in `assets/audio/` are commercial
  recordings included for the author's own presentation of the project.
  Keep this repository **private**, or remove / replace the audio files
  (and expect the player to have nothing to play) before making it public.
  The same caution applies, to a lesser degree, to the gallery photographs.
- **No licence is specified yet.** Until a `LICENSE` file is added, treat
  the code and assets as all rights reserved. <!-- TODO: choose a licence -->
- The macOS housekeeping files in the original zip archive (`.DS_Store`,
  `__MACOSX/`) are not part of the app and should not be committed.
- The folder name in the original archive, `JM+P House`, contains a space
  and a `+`; for hosting, the *contents* of that folder are the site root —
  the folder name itself doesn't matter.

## Acknowledgements

Product models reference their makers' published pages (linked in the
bundle data for each product); the Japanese maple tree imagery references
a Sketchfab model (linked in the bundle); the persimmon tree imagery was
user-supplied. Furniture, finishes, and dimensions are reconstructions for
study purposes — where a finish or dimension was estimated rather than
published, the bundle's product notes say so.

---

\*Draft README — prepared from the 26 October 2026 build. Sections marked
TODO (licence) need the author's decision before this repo is published.\*