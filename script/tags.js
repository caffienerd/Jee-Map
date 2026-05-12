// ── TAGS CONFIG ───────────────────────────────────────────────────────────
// Shared tag definitions for all subjects across both JEE and NEET profiles.
// To add a new tag: add it to the array here, then use it in the subject file.

window.TAGS = {
  // ── JEE ──────────────────────────────────────────────────────────────────
  physics: ["Mechanics", "E&M", "Modern", "Thermo", "Optics", "Waves"],
  chemistry: ["OC", "IC", "PC"],
  maths: ["Algebra", "Calculus", "Coord", "Trigo", "Vectors & 3D", "Logic"],

  // ── NEET ─────────────────────────────────────────────────────────────────
  // Physics and Chemistry share the same tag keys as JEE (same subjects,
  // slightly different syllabus weight — same categorisation works fine).
  // Biology is NEET-only.
  biology: [
    "Diversity",
    "StructOrg",
    "Cell",
    "PlantPhysio",
    "HumanPhysio",
    "Reproduction",
    "Genetics",
    "HumanWelfare",
    "Biotech",
    "Ecology",
  ],
};
