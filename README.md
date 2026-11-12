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
> (the build prompt and starter repo the Info panel offers for download).
> The original source project that produces this bundle is not included,
> so this repo is for hosting and archiving the finished app, not for
> rebuilding it from source. To build your own, use the starter pack
> below.

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
  in-scene trigger for the built-in sound player; its waveform animates
  while music plays

---

## The starter pack

This app was built from **House App Starter 0.1.0**, and the starter is
yours to build with. Download it from the app's Info panel (**Download
starter pack**), or straight from this repo at
[`house-app-starter/artifacts/house-app-starter-0.1.0.zip`](house-app-starter/artifacts/house-app-starter-0.1.0.zip);
the prompt below is also kept at
[`house-app-starter/BUILD_PROMPT.txt`](house-app-starter/BUILD_PROMPT.txt)
— the same text the panel's **Copy prompt** button copies. Hand the
prompt, the starter, and your own house plan to your agent, and it
rebuilds the app around your house.

Inside the zip (115 files):

- `BUILD_PROMPT.txt` — the build prompt itself (also in the zip as
  `docs/BUILD_PROMPT.md`)
- `README.md`, `AGENTS.md` — the starter's overview and its instructions
  for agents
- `docs/` — the working documents the prompt runs on: `GUIDE.md`,
  `WORKFLOW.md`, `INPUTS.md`, `APP_SPEC.md`, `SCENE_CONTRACT.md`,
  `VALIDATION.md`, plus third-party notices
- `src/` — the viewer source (scene, products, interactions, styling)
  whose behaviour the prompt tells the agent to preserve
- `runtime/` — the prebuilt viewers (the house viewer and the product
  library) with their build manifest; preview them by running
  `python3 scripts/serve.py` from the starter root and opening
  http://127.0.0.1:4175/
- `project/` — the intake records the agent maintains while building:
  input, sources, decisions and progress templates, plus the demo brief
- `references/` — the demo house's plan (SVG) and axonometric (PNG)
  geometry references, with render evidence
- `assets/` — the demo house's media: gallery photos, material
  swatches, product thumbnails, ambient audio and day/night video
- `scripts/`, `tests/` — build, packaging, serving and verification
  scripts, and the test suite

### The build prompt

```text
Build an interactive house app for my own project using the attached or checked-out House App Starter version 0.1.0.

Read README.md, docs/GUIDE.md, docs/WORKFLOW.md, docs/INPUTS.md, docs/APP_SPEC.md, docs/SCENE_CONTRACT.md and docs/VALIDATION.md. Confirm the package version and inspect the working demo. If the starter files are inaccessible, ask me for the ZIP, checkout or supplied repository link. Use the actual package as your implementation reference. Preview the shipped prebuilt viewers by running python3 scripts/serve.py from the starter root, then open http://127.0.0.1:4175/ and http://127.0.0.1:4175/runtime/products.html. Source files live under src/, project records under project/, guides under docs/, and generated browser outputs plus their build manifest under runtime/. Use Node/npm for source changes and automated checks.

Preserve the starter's viewer, UI styling, responsive layouts and feature behavior while replacing its fictional house and selections with mine. Follow its scene and product interfaces. Use information and corrections I have already supplied before requesting anything else. I can provide files, screenshots, plain notes and product names; you maintain the technical records and data files.

Work through these six stages:

1. START AND CRITICAL INTAKE
Inventory my files and identify the latest plan and corrections. Start with only missing critical house information: layout/number of levels, readable plan or usable measured export, units and reliable scale in both plan directions, ceiling heights, floor-level changes and important dimension interpretations. Ask concise grouped questions. A measured model may already establish scale. Explain additional implementation needed for angled walls, stairs or multiple levels; the current starter is a single-level orthogonal cutaway.

Run the starter and capture its desktop/phone UI baseline when browser tools work. The bundled plan and axon are geometry references, not UI screenshots. Record supplied facts, estimates and unresolved questions in project/input.json and project/sources.json. Keep project/decisions.json and project/progress.json current using the provided templates. Those intake records require your transcription into runtime scene/config data; they are not an automatic house generator.

2. MEASURED HOUSE SHELL
Establish meters, Y up and the X/Z ground plane. Resolve critical scale/height conflicts with me; keep measured wall faces and inferred details explicit. Create the footprint, rooms, partitions, openings, ceiling datum and fixed built-ins from my information. Show a dimensioned Plan and several 3D views with uncertainties labeled. Ask for corrections to specific unclear areas, and apply my latest corrections without undoing earlier confirmed choices.

3. PRODUCT AND MATERIAL RESEARCH + MODELING
A product name is enough to start. Find manufacturer and reliable retailer pages, identify the exact variant, inspect useful photos/drawings, and retrieve published dimensions, materials and finishes. Ask about genuine variant or finish ambiguities. Record URLs/files, checked date, original units, converted dimensions and the evidence for each fact. Keep image-derived dimensions and appearance estimates distinguishable from published specifications.

Create procedural 3D models from those references, representing the selected product's distinctive shape and construction. User-provided 3D files are optional. Add each product's catalog entry and registered builder; metadata alone does not generate geometry. Preserve fresh owned groups/materials, W/D/H meter envelopes, footprint center X/Z zero, body bottom Y zero, +Z front and separate pendant body/suspension. Show front/side/3D product previews in sensible batches, refine them and regenerate matching thumbnails. Research material swatches, physical repeat/slab sizes, grain direction and surface assignments. If public references are unavailable, request the missing photos/specifications and keep the related facts open.

4. FURNISHED INTEGRATION AND REVIEW
Place objects at supplied quantities, positions, orientations and heights. When placement is unspecified, propose a labeled arrangement for review. Check clearances and supporting surfaces; mount the TV and other wall objects to actual host walls, and anchor lights to their fixtures. Keep room finishes as the sole interior floor surfaces. Update movement, catalog, focus, lighting and Gallery/media bindings for my data.

Collect project title/description, display units, Gallery photos/captions, optional audio/video/landscape and the intended Share URL at this stage if still missing. Connect features appropriate to actual objects in my house and record any inapplicable feature. Show furnished Plan/3D views, installation heights, clearances and remaining proposals. Recompute camera framing from my model instead of retaining demo coordinates.

5. VERIFICATION AND CORRECTIONS
Follow docs/VALIDATION.md. Adapt demo-specific expectations to my confirmed input while retaining generic contracts. Run meaningful dimension, geometry, product and mounting checks; rebuild both viewers and verify the deployment. Inspect desktop, phone portrait and phone landscape. Exercise 3D/Plan, layers/cutaway, Night, catalog focus/live previews, Rearrange with rotate/duplicate/delete/undo/redo/reset, snapshot/save/share, Gallery and applicable sound/TV/fireplace/mirror behavior. Capture actual browser evidence and review transitions in normal motion. Fix issues found during my review.

If browser automation is unavailable, continue independent build/geometry work, give me the exact local preview URL and a short manual checklist, and record the unperformed checks. A software geometry render is model evidence. A passing build is not proof of working browser interactions. Record the scope of any manual review accurately.

6. DELIVERY
Provide runnable source without node_modules, package.json/package-lock.json, a verified dist folder or deployment ZIP, completed input/source/decision/progress records, previews and available UI evidence, a concise verification report, remaining estimates, and exact run/update/rebuild/deploy instructions. Verify a clean extraction. Deliver review evidence separately if the source packager excludes it. If I request publication, use the destination and authorization I have provided; keep the local result usable independently of hosting.

At every checkpoint, show concrete work and ask about unresolved facts or corrections. Continue confirmed and independent work while feedback is pending. Reviews can be batched, and my standing instructions count. Silence does not resolve a critical measurement or choose a variant. Save decisions and next actions so another session can resume from the files.

The baseline materials catalog inspects installed finishes, arrangement edits use session memory, Save image exports a PNG and Share sends the configured project URL. Implement and verify any requested additions before describing them as supported.

After reading the available files, your first response should briefly summarize what you found and ask only for the missing plan, scale, units, height or level information needed for the first measured preview. Research any product names already supplied while independent house questions remain open.
```
