// ── CHEMISTRY DATA  ·  NEET UG 2026 ──────────────────────────────────────
window.NEET_CHEM_DATA = [
  // ── PHYSICAL CHEMISTRY ────────────────────────────────────────────────────
  {
    chapter: "Some Basic Concepts of Chemistry",
    tag: "PC",
    class: "11",
    topics: [
      {
        name: "Matter & Dalton's Atomic Theory",
        subtopics: [
          "States of matter: solid, liquid, gas; physical & chemical properties",
          "Dalton's atomic theory: atoms are indivisible; atoms of same element are identical",
          "Laws of chemical combination: conservation of mass, definite proportions, multiple proportions, reciprocal proportions, Gay-Lussac's law of gaseous volumes",
          "Atom, molecule, element, compound",
        ],
      },
      {
        name: "Atomic & Molecular Mass",
        subtopics: [
          "Atomic mass unit (amu / u): 1 u = 1/12 mass of ¹²C",
          "Average atomic mass (weighted by isotope abundance)",
          "Molecular mass = sum of atomic masses",
          "Formula mass (for ionic compounds)",
        ],
      },
      {
        name: "Mole Concept",
        subtopics: [
          "Avogadro's number: N_A = 6.022 × 10²³ mol⁻¹",
          "1 mole = 6.022 × 10²³ particles = molar mass in grams = 22.4 L at STP (gas)",
          "Mole ↔ mass ↔ number ↔ volume conversions",
          "Mole fraction: x_A = n_A / (n_A + n_B)",
        ],
      },
      {
        name: "Percentage Composition & Empirical Formula",
        subtopics: [
          "% by mass = (mass of element / molar mass) × 100",
          "Empirical formula from % composition: divide by smallest mole ratio",
          "Molecular formula from empirical formula & molar mass: n = M / E_f_mass",
        ],
      },
      {
        name: "Stoichiometry & Chemical Equations",
        subtopics: [
          "Balancing chemical equations (by inspection & NCERT examples)",
          "Stoichiometric calculations: mole-mole, mass-mass, mass-volume",
          "Limiting reagent: determines max product",
          "Percent yield = (actual yield / theoretical yield) × 100",
        ],
      },
      {
        name: "Concentration Terms",
        subtopics: [
          "Molarity M = moles of solute / litres of solution",
          "Molality m = moles of solute / kg of solvent",
          "Normality N = gram equivalents / litres of solution",
          "Mass percent (w/w), volume percent (v/v)",
          "Parts per million (ppm)",
        ],
      },
    ],
  },

  {
    chapter: "Atomic Structure",
    tag: "PC",
    class: "11",
    topics: [
      {
        name: "Subatomic Particles & Early Models",
        subtopics: [
          "Electron: cathode ray experiment; e/m ratio (Thomson); Millikan oil-drop for charge",
          "Proton: Goldstein canal rays",
          "Neutron: Chadwick experiment",
          "Thomson model (plum pudding)",
          "Rutherford α-scattering experiment → nuclear model; nucleus is tiny, dense, positive",
          "Rutherford's limitations: unstable orbits, no explanation of spectra",
        ],
      },
      {
        name: "Electromagnetic Radiation & Spectra",
        subtopics: [
          "Wave nature of radiation: frequency ν, wavelength λ, speed c = νλ",
          "Particle nature: photon, E = hν = hc/λ; h = 6.626 × 10⁻³⁴ J·s",
          "Photoelectric effect: threshold frequency, work function, Einstein's equation",
          "Hydrogen emission spectrum: Lyman (UV), Balmer (visible), Paschen, Brackett, Pfund (IR)",
          "Rydberg equation: 1/λ = R_H(1/n₁² − 1/n₂²); R_H = 1.097 × 10⁷ m⁻¹",
        ],
      },
      {
        name: "Bohr's Model",
        subtopics: [
          "Postulates: electrons in stationary orbits; angular momentum L = nh/2π; energy change = hν",
          "Energy: E_n = −13.6/n² eV (hydrogen)",
          "Radius: r_n = 0.529n² Å",
          "Velocity: v_n = 2.18 × 10⁶/n m/s",
          "Limitations: fails for multi-electron atoms; no explanation for Zeeman & Stark effects",
        ],
      },
      {
        name: "Quantum Mechanical Model",
        subtopics: [
          "Dual nature of matter: de Broglie relation λ = h/mv",
          "Heisenberg uncertainty principle: Δx·Δp ≥ h/4π",
          "Schrödinger wave equation (conceptual form): Ĥψ = Eψ",
          "Wave function ψ: mathematical description of electron",
          "ψ² = probability density; radial probability distribution",
          "Variation of ψ & ψ² with r for 1s & 2s orbitals (NCERT graphs)",
        ],
      },
      {
        name: "Quantum Numbers & Shapes of Orbitals",
        subtopics: [
          "Principal quantum number n: shell, size & energy",
          "Azimuthal quantum number l (0 to n−1): subshell & shape (s, p, d, f)",
          "Magnetic quantum number m_l (−l to +l): spatial orientation",
          "Spin quantum number m_s: ±½; electron has two spin states",
          "Shapes: s (sphere), p (dumbbell, 3 orientations), d (clover, 5 orientations)",
          "Nodes: radial = n − l − 1; angular = l; total = n − 1",
        ],
      },
      {
        name: "Electronic Configuration",
        subtopics: [
          "Aufbau principle: fill lowest energy first; n+l rule for filling order",
          "Pauli's exclusion principle: no two electrons with same four quantum numbers",
          "Hund's rule of maximum multiplicity: fill orbitals singly before pairing",
          "Electronic configurations of elements Z = 1 to 30 (NCERT table)",
          "Extra stability of half-filled (d⁵) & fully-filled (d¹⁰) subshells: Cr & Cu anomalies",
        ],
      },
    ],
  },

  {
    chapter: "Chemical Bonding & Molecular Structure",
    tag: "PC",
    class: "11",
    topics: [
      {
        name: "Ionic Bond",
        subtopics: [
          "Kossel-Lewis approach: electron transfer to achieve noble gas configuration",
          "Factors affecting ionic bond formation: ionisation enthalpy, electron gain enthalpy, lattice enthalpy",
          "Lattice enthalpy & Born-Haber cycle",
          "Properties of ionic compounds: high MP, crystalline, conduct in molten/solution",
          "Fajan's rules: conditions for covalent character in ionic bonds (size & charge)",
        ],
      },
      {
        name: "Covalent Bond & Lewis Structures",
        subtopics: [
          "Electron pair sharing: single, double, triple bonds",
          "Lewis structures: lone pairs & bond pairs; octet rule",
          "Formal charge = valence e⁻ − lone pair e⁻ − ½ bonding e⁻",
          "Exceptions to octet rule: odd-electron (NO, NO₂), incomplete (BF₃, BeCl₂), expanded octet (PCl₅, SF₆)",
          "Resonance: structures & resonance hybrid; examples CO₃²⁻, SO₃, benzene",
          "Electronegativity concept (Pauling scale); dipole moment μ = q × d",
        ],
      },
      {
        name: "VSEPR Theory",
        subtopics: [
          "Electron pair repulsion: lone pair-lone pair > lone pair-bond pair > bond pair-bond pair",
          "Geometries: 2 (linear), 3 (trigonal planar), 4 (tetrahedral), 5 (trigonal bipyramidal), 6 (octahedral)",
          "Effect of lone pairs on shape: H₂O (bent), NH₃ (pyramidal), SF₄ (see-saw), ClF₃ (T-shape), XeF₂ (linear), XeF₄ (square planar)",
          "Bond angle trends: lone pairs reduce bond angles",
        ],
      },
      {
        name: "Valence Bond Theory & Hybridisation",
        subtopics: [
          "VBT: overlap of half-filled orbitals; orbital overlap concept",
          "σ bond: head-on (axial) overlap; stronger",
          "π bond: lateral (sidewise) overlap; weaker",
          "Hybridisation: sp (linear, 180°), sp² (trigonal planar, 120°), sp³ (tetrahedral, 109.5°)",
          "sp³d (trigonal bipyramidal, 90°/120°), sp³d² (octahedral, 90°)",
          "Examples: BeCl₂ (sp), BF₃ (sp²), CH₄/NH₃/H₂O (sp³), PCl₅ (sp³d), SF₆ (sp³d²)",
        ],
      },
      {
        name: "Molecular Orbital Theory",
        subtopics: [
          "LCAO method: atomic orbitals combine → bonding MO (lower energy) & antibonding MO (*)",
          "σ and π bonding/antibonding MOs",
          "MO energy diagram for homonuclear diatomics: H₂, He₂, Li₂, B₂, C₂, N₂, O₂, F₂, Ne₂",
          "Bond order = (N_b − N_a)/2; bond order 0 → molecule unstable",
          "Predicting magnetic properties: O₂ (paramagnetic, 2 unpaired), N₂ (diamagnetic)",
        ],
      },
      {
        name: "Hydrogen Bond & Metallic Bond",
        subtopics: [
          "H-bond conditions: H bonded to highly electronegative small atom (F, O, N)",
          "Intermolecular H-bond: between molecules (e.g. H₂O, HF)",
          "Intramolecular H-bond: within same molecule (e.g. o-nitrophenol, salicylaldehyde)",
          "Effect on properties: high BP, viscosity, solubility in water",
          "Elementary idea of metallic bonding: sea of electrons model",
          "London dispersion forces, dipole-dipole, dipole-induced dipole interactions",
        ],
      },
    ],
  },

  {
    chapter: "Chemical Thermodynamics",
    tag: "PC",
    class: "11",
    topics: [
      {
        name: "Basic Concepts",
        subtopics: [
          "System & surroundings; open, closed, isolated systems",
          "State functions (T, P, V, H, U, G, S) vs path functions (q, w)",
          "Extensive (V, H, U) vs intensive (T, P, density) properties",
          "Types of processes: isothermal, adiabatic, isochoric, isobaric, reversible, irreversible",
        ],
      },
      {
        name: "First Law & Enthalpy",
        subtopics: [
          "Internal energy U; ΔU = q + w",
          "Work: w = −P_ext ΔV; for reversible isothermal: w = −nRT ln(V₂/V₁)",
          "Enthalpy: H = U + PV; ΔH = q_p (at constant pressure)",
          "Relation: ΔH = ΔU + ΔnRT; Δn = moles of gaseous products − reactants",
          "Heat capacity: C_p & C_v; C_p − C_v = R (ideal gas)",
          "Molar heat capacity",
        ],
      },
      {
        name: "Thermochemistry",
        subtopics: [
          "Standard state & standard enthalpy of reaction ΔH°",
          "Enthalpy of formation ΔH°_f; standard enthalpy of combustion ΔH°_c",
          "Enthalpy of neutralisation (strong acid-strong base ≈ −57.3 kJ/mol)",
          "Enthalpy of atomisation, sublimation, ionisation, hydration, solution",
          "Hess's law of constant heat summation: ΔH independent of path",
          "Bond enthalpy method: ΔH_rxn = Σ(bonds broken) − Σ(bonds formed)",
          "Experimental: enthalpy of solution of CuSO₄; enthalpy of neutralisation",
        ],
      },
      {
        name: "Second Law & Gibbs Energy",
        subtopics: [
          "Entropy S: measure of randomness/disorder; ΔS = q_rev/T",
          "Second law: ΔS_universe ≥ 0 for spontaneous process",
          "Standard entropy change ΔS°",
          "Gibbs free energy: G = H − TS; ΔG = ΔH − TΔS",
          "Spontaneity: ΔG < 0 spontaneous; ΔG = 0 equilibrium; ΔG > 0 non-spontaneous",
          "ΔG° = −RT ln K = −nFE°_cell",
          "Temperature of equilibrium (when ΔG = 0): T = ΔH/ΔS",
        ],
      },
    ],
  },

  {
    chapter: "Solutions",
    tag: "PC",
    class: "12",
    topics: [
      {
        name: "Types of Solutions & Concentration",
        subtopics: [
          "Types of solutions: solid-solid, gas-liquid, liquid-liquid, gas-gas, etc.",
          "Molarity M, molality m, mole fraction x, mass percent, volume percent",
          "Interconversion of concentration units",
          "Henry's law: p = K_H · x (solubility of gas in liquid)",
          "Applications of Henry's law: carbonated drinks, scuba diving, bends",
        ],
      },
      {
        name: "Raoult's Law & Ideal Solutions",
        subtopics: [
          "Raoult's law: p_A = x_A · p°_A",
          "Total vapour pressure: P = p_A + p_B = x_A p°_A + x_B p°_B",
          "Ideal solutions: obey Raoult's law; ΔH_mix = 0, ΔV_mix = 0",
          "Non-ideal solutions: positive deviation (A-B weaker; e.g. ethanol-acetone) → minimum BP azeotrope",
          "Non-ideal solutions: negative deviation (A-B stronger; e.g. CHCl₃-acetone) → maximum BP azeotrope",
          "Azeotropes: constant boiling mixtures; cannot be separated by simple distillation",
        ],
      },
      {
        name: "Colligative Properties",
        subtopics: [
          "Colligative properties depend on number of solute particles, not nature",
          "Relative lowering of vapour pressure: ΔP/P°_A = x_B (for dilute solutions)",
          "Elevation of boiling point: ΔT_b = K_b · m; K_b (ebullioscopic constant)",
          "Depression of freezing point: ΔT_f = K_f · m; K_f (cryoscopic constant)",
          "Osmosis & osmotic pressure: π = CRT = (n/V)RT (van't Hoff equation)",
          "Isotonic, hypertonic & hypotonic solutions",
          "Reverse osmosis: applied pressure > osmotic pressure; desalination",
          "Abnormal molar mass: van't Hoff factor i = observed colligative property / calculated",
          "i for association (i < 1, e.g. acetic acid in benzene) & dissociation (i > 1, e.g. NaCl → 2)",
        ],
      },
    ],
  },

  {
    chapter: "Chemical Equilibrium & Ionic Equilibrium",
    tag: "PC",
    class: "11",
    topics: [
      {
        name: "Nature & Law of Equilibrium",
        subtopics: [
          "Dynamic equilibrium: rate of forward = rate of reverse reaction",
          "Law of mass action: K_c = [products]^p/[reactants]^r",
          "Equilibrium constant K_c & K_p; relation: K_p = K_c(RT)^Δn",
          "Homogeneous & heterogeneous equilibria",
          "Significance of K: K >> 1 → favours products; K << 1 → favours reactants",
          "Reaction quotient Q: Q < K forward; Q > K reverse; Q = K at equilibrium",
        ],
      },
      {
        name: "Le Chatelier's Principle",
        subtopics: [
          "Effect of concentration change: system shifts to consume added substance",
          "Effect of pressure/volume: shift towards fewer moles of gas if P increases",
          "Effect of temperature: exothermic reaction: high T shifts reverse; endothermic: shifts forward",
          "Effect of catalyst: lowers activation energy; equilibrium reached faster; K unchanged",
          "Industrial applications: Haber process (N₂ + H₂ → NH₃), Contact process (SO₂ → SO₃)",
        ],
      },
      {
        name: "Ionic Equilibrium — Acids & Bases",
        subtopics: [
          "Arrhenius concept: acid gives H⁺; base gives OH⁻ in water",
          "Brønsted-Lowry: acid = H⁺ donor; base = H⁺ acceptor; conjugate acid-base pairs",
          "Lewis concept: acid = e⁻ pair acceptor; base = e⁻ pair donor",
          "Ionic product of water: K_w = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C",
          "pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14",
          "Degree of ionisation & ionisation constant K_a & K_b",
          "Ostwald's dilution law: K_a = Cα²/(1−α) ≈ Cα² for weak acid",
          "Relation: K_a × K_b = K_w; pK_a + pK_b = pK_w = 14",
        ],
      },
      {
        name: "Buffer, Hydrolysis & Solubility",
        subtopics: [
          "Buffer solutions: resist change in pH; acidic buffer (weak acid + its salt) & basic buffer",
          "Henderson-Hasselbalch: pH = pK_a + log([A⁻]/[HA])",
          "Buffer capacity",
          "Hydrolysis of salts: SA-SB (neutral), SA-WB (acidic), WA-SB (basic), WA-WB (depend on K_a vs K_b)",
          "Solubility product K_sp: condition for precipitation Q_ip > K_sp",
          "Common ion effect: suppresses solubility",
          "Selective precipitation",
        ],
      },
    ],
  },

  {
    chapter: "Redox Reactions & Electrochemistry",
    tag: "PC",
    class: "12",
    topics: [
      {
        name: "Redox Reactions",
        subtopics: [
          "Oxidation: loss of e⁻ / increase in oxidation number",
          "Reduction: gain of e⁻ / decrease in oxidation number",
          "Oxidation number rules: H (+1/−1), O (−2/−1), halogens, group rules",
          "Balancing redox reactions: oxidation state method & half-reaction (ion-electron) method",
          "Types: combination, decomposition, displacement, disproportionation",
        ],
      },
      {
        name: "Conductance",
        subtopics: [
          "Electrolytic vs metallic conduction",
          "Resistance R; conductance G = 1/R; conductivity κ = G × l/A",
          "Molar conductivity Λ_m = κ/C (C in mol/m³)",
          "Variation with concentration: strong electrolytes (Debye-Hückel-Onsager): Λ_m = Λ°_m − b√C",
          "Kohlrausch's law: Λ°_m = λ°_+ + λ°_−; application to weak electrolytes",
          "Applications: finding degree of dissociation α & K_a from conductance",
        ],
      },
      {
        name: "Electrochemical Cells",
        subtopics: [
          "Galvanic (voltaic) cell: spontaneous redox → electrical energy; Daniell cell example",
          "Anode (−): oxidation; cathode (+): reduction",
          "Cell notation: anode | anode solution || cathode solution | cathode",
          "Standard electrode potential E°; standard hydrogen electrode (SHE): E° = 0 V",
          "E°_cell = E°_cathode − E°_anode",
          "Electrochemical series: predicting feasibility & comparing reducing power",
          "Relationship: ΔG° = −nFE°_cell = −RT ln K",
        ],
      },
      {
        name: "Nernst Equation",
        subtopics: [
          "E = E° − (RT/nF) ln Q",
          "At 25°C: E = E° − (0.0592/n) log Q",
          "Equilibrium: E° = (0.0592/n) log K",
          "EMF of concentration cell",
        ],
      },
      {
        name: "Electrolysis & Batteries",
        subtopics: [
          "Electrolytic cell: anode (+) oxidation; cathode (−) reduction",
          "Faraday's 1st law: m = ZIt = (M/nF)It",
          "Faraday's 2nd law: m ∝ equivalent mass; 1 Faraday = 96500 C mol⁻¹",
          "Products of electrolysis: discharge potential, overvoltage, concentration effects",
          "Dry cell (Leclanche): Zn anode, MnO₂/C cathode; ~1.5 V",
          "Lead-acid battery: rechargeable, 2 V per cell, 6 cells → 12 V; uses during car start",
          "Fuel cell: H₂-O₂ fuel cell; continuous supply; efficient, eco-friendly",
          "Corrosion: electrochemical mechanism; galvanic corrosion; prevention: galvanising, alloying, sacrificial anode, paint",
        ],
      },
    ],
  },

  {
    chapter: "Chemical Kinetics",
    tag: "PC",
    class: "12",
    topics: [
      {
        name: "Rate of Reaction",
        subtopics: [
          "Average rate & instantaneous rate: r = −d[A]/dt = d[B]/dt",
          "Factors affecting rate: concentration, temperature, pressure, catalyst, surface area",
          "Rate law: r = k[A]^m[B]^n; m & n determined experimentally",
          "Order vs molecularity: order is experimental, molecularity is theoretical (elementary steps only)",
          "Units of rate constant k: (mol L⁻¹)^(1−n) s⁻¹",
        ],
      },
      {
        name: "Integrated Rate Laws",
        subtopics: [
          "Zero order: [A] = [A]₀ − kt; t½ = [A]₀/2k; units of k: mol L⁻¹ s⁻¹",
          "First order: ln[A] = ln[A]₀ − kt; t½ = 0.693/k; k is independent of concentration; units s⁻¹",
          "Characteristics of first-order reactions; examples: radioactive decay, decomposition of N₂O₅",
          "Graphical method: [A] vs t (zero order); ln[A] vs t (first order)",
          "Pseudo-first-order reactions (e.g. acid hydrolysis of ester in excess water)",
        ],
      },
      {
        name: "Temperature & Activation Energy",
        subtopics: [
          "Rate roughly doubles every 10°C rise",
          "Arrhenius equation: k = Ae^(−Ea/RT)",
          "ln k = ln A − Ea/RT; slope of ln k vs 1/T gives −Ea/R",
          "Activation energy Ea: minimum energy for reaction; calculated from two temperatures",
          "Frequency factor A: related to frequency & orientation of collisions",
          "Collision theory: effective collisions need correct energy & orientation",
          "Experimental: kinetic study of I⁻ + H₂O₂ at room temperature",
        ],
      },
    ],
  },

  // ── INORGANIC CHEMISTRY ───────────────────────────────────────────────────
  {
    chapter: "Classification of Elements & Periodicity",
    tag: "IC",
    class: "11",
    topics: [
      {
        name: "Modern Periodic Table",
        subtopics: [
          "Modern periodic law: properties are periodic functions of atomic number",
          "Structure of periodic table: periods (1-7), groups (1-18)",
          "s-block (Groups 1-2), p-block (Groups 13-18), d-block (3-12), f-block (lanthanoids & actinoids)",
          "Dobereiner's triads, Newlands' octaves, Mendeleev's table (historical context)",
        ],
      },
      {
        name: "Periodic Trends",
        subtopics: [
          "Atomic radius: decreases across period (Z_eff increases); increases down group (new shells)",
          "Ionic radius: cation < parent atom; anion > parent atom; isoelectronic series: radius ∝ 1/Z",
          "Ionisation enthalpy (IE): increases across period; decreases down group; anomalies: Be > B; N > O",
          "Electron gain enthalpy (EGA): generally more negative across period; O has less than F; Cl most negative",
          "Electronegativity: increases across period; decreases down group; Pauling scale",
          "Valence, oxidation states & chemical reactivity trends",
        ],
      },
    ],
  },

  {
    chapter: "Hydrogen",
    tag: "IC",
    class: "11",
    topics: [
      {
        name: "Position, Occurrence & Isotopes",
        subtopics: [
          "Position in periodic table: resembles both alkali metals (Group 1) & halogens (Group 17)",
          "Isotopes: protium (¹H), deuterium (²H/D), tritium (³H/T)",
          "Occurrence: most abundant element in universe; found as H₂O, hydrocarbons, etc.",
        ],
      },
      {
        name: "Preparation & Properties",
        subtopics: [
          "Preparation: from water (electrolysis), steam reforming of methane (industrial), reaction of metals with acid",
          "Properties: colourless, odourless, lightest gas; highly flammable",
          "Hydrides: ionic (saline), covalent (molecular), metallic (non-stoichiometric)",
          "Water: structure, properties (anomalous), hard & soft water, water of crystallisation",
          "Hydrogen peroxide H₂O₂: preparation, structure (non-planar), properties, oxidising & reducing agent, uses",
          "Heavy water D₂O: properties & uses (moderator in nuclear reactor)",
          "Hydrogen as future fuel: fuel cells, advantages & challenges",
        ],
      },
    ],
  },

  {
    chapter: "s-Block Elements",
    tag: "IC",
    class: "11",
    topics: [
      {
        name: "Alkali Metals (Group 1)",
        subtopics: [
          "Electronic config: ns¹; largest atoms in their periods; lowest IE",
          "General properties: soft metals, low MP & BP, good conductors, highly reactive",
          "Reactivity with water: Li < Na < K < Rb < Cs (increases down group)",
          "Reaction with O₂: Li→Li₂O, Na→Na₂O₂, K/Rb/Cs→superoxides MO₂",
          "Flame colours: Li (red), Na (yellow), K (violet), Rb (red-violet), Cs (blue)",
          "Anomalous properties of Li vs other alkali metals; diagonal relationship with Mg",
          "Important compounds of Na: NaOH (Castner-Kellner process), Na₂CO₃·10H₂O (washing soda), NaHCO₃ (baking soda), NaCl",
        ],
      },
      {
        name: "Alkaline Earth Metals (Group 2)",
        subtopics: [
          "Electronic config: ns²; smaller than Group 1; higher IE, MP, BP",
          "Reactivity: generally less reactive than alkali metals; Mg reacts slowly with water",
          "Flame colours: Ca (brick red), Sr (crimson), Ba (apple green)",
          "Anomalous properties of Be; diagonal relationship with Al",
          "Important compounds of Ca: CaO (quicklime), Ca(OH)₂ (slaked lime), CaCO₃ (limestone, marble), CaSO₄·2H₂O (gypsum), Plaster of Paris",
          "Mg compounds: MgSO₄·7H₂O (Epsom salt), MgCO₃",
          "Biological role: Na⁺/K⁺ (nerve impulse), Ca²⁺ (bones, clotting), Mg²⁺ (chlorophyll)",
        ],
      },
    ],
  },

  {
    chapter: "p-Block Elements",
    tag: "IC",
    class: "11",
    topics: [
      {
        name: "Group 13 — Boron Family",
        subtopics: [
          "Electronic config: ns²np¹; boron is a metalloid; rest are metals",
          "General trends: increase in metallic character down group",
          "Anomalous behaviour of B: small size, high electronegativity, forms covalent compounds",
          "Boron: allotropes, borax Na₂B₄O₇·10H₂O, boron trifluoride (Lewis acid), diborane",
          "Aluminium: extraction (Hall-Heroult), reactions, Al₂O₃ (amphoteric), alum",
        ],
      },
      {
        name: "Group 14 — Carbon Family",
        subtopics: [
          "Electronic config: ns²np²; C forms 4 covalent bonds; inert pair effect in Sn, Pb",
          "Allotropes of carbon: diamond (sp³, hardest), graphite (sp², conductor), fullerene (C₆₀)",
          "Oxides of carbon: CO (toxic, reducing agent), CO₂ (greenhouse gas, acidic oxide)",
          "Silicon: SiO₂ (macromolecular, acidic), silicones, silicates",
          "Anomalous properties of C vs Si; catenation & multiple bond formation",
        ],
      },
      {
        name: "Group 15 — Nitrogen Family",
        subtopics: [
          "Electronic config: ns²np³; half-filled p subshell → extra stability",
          "N₂: triple bond, inert; preparation (fractional distillation of liquid air)",
          "Allotropes of phosphorus: white (P₄, reactive), red (polymeric), black (stable)",
          "Oxides of nitrogen: N₂O, NO, N₂O₃, NO₂, N₂O₄, N₂O₅; structure & properties",
          "Oxoacids of nitrogen: HNO₂ (nitrous), HNO₃ (nitric); preparation & properties",
          "HNO₃: dilute (H₂ not evolved) vs conc (NO₂); passivity with Fe, Al, Cr",
          "Oxoacids of phosphorus: H₃PO₃ (phosphorous), H₃PO₄ (phosphoric); basicity",
          "NH₃: preparation (Haber process), properties, uses; structure (pyramidal sp³)",
        ],
      },
      {
        name: "Group 16 — Oxygen Family",
        subtopics: [
          "Electronic config: ns²np⁴",
          "Allotropes of O: O₂ (dioxygen) & O₃ (ozone); ozone as oxidising agent",
          "Allotropes of S: rhombic (stable at RT), monoclinic, plastic sulphur",
          "Oxides of sulphur: SO₂ (acidic, reducing/oxidising, used in Contact process), SO₃",
          "Oxoacids of sulphur: H₂SO₄ (sulphuric — Contact process), H₂SO₃, H₂S₂O₇ (oleum)",
          "H₂SO₄: dilute vs concentrated properties; dehydrating, oxidising agent; reactions",
          "H₂S: preparation, acidic nature, reducing agent, detection",
        ],
      },
      {
        name: "Group 17 — Halogens",
        subtopics: [
          "Electronic config: ns²np⁵; one e⁻ short of noble gas",
          "Oxidising power: F₂ > Cl₂ > Br₂ > I₂",
          "Reactivity & properties: F₂ (most reactive, attacks glass), Cl₂ (yellowish green gas)",
          "Preparation of Cl₂: MnO₂ + HCl; industrial by electrolysis (chlor-alkali)",
          "Properties of HX: HF (weak acid, H-bonding), HCl/HBr/HI (strong acids; reducing power: HI > HBr > HCl)",
          "Interhalogen compounds: ClF, BrF₃, IF₅, IF₇; structures",
          "Oxoacids of halogens: HOCl, HClO₂, HClO₃, HClO₄; oxidising power increases",
          "Bleaching powder: Ca(OCl)Cl; chloramine T; uses of Cl₂",
        ],
      },
      {
        name: "Group 18 — Noble Gases",
        subtopics: [
          "Electronic config: ns²np⁶ (He: 1s²)",
          "General properties: monoatomic, chemically inert, colourless, very low BP",
          "Occurrence: Ar (most abundant in air), He (from natural gas wells)",
          "Compounds: XeF₂ (linear), XeF₄ (square planar), XeF₆ (distorted octahedral), XeOF₄, XeO₃",
          "Uses: He (airships, cryogenics), Ne (neon signs), Ar (filling bulbs), Kr/Xe (lighting), Rn (radiotherapy)",
        ],
      },
    ],
  },

  {
    chapter: "p-Block Elements (Class 12 — Groups 15-18 focus)",
    tag: "IC",
    class: "12",
    topics: [
      {
        name: "Trends across p-Block (Class 12 revision)",
        subtopics: [
          "Inert pair effect: heavier elements of Groups 13-16 prefer lower oxidation state",
          "Anomalous properties of first member of each group (size, electronegativity, multiple bond formation)",
          "Nitrogen vs phosphorus comparison",
          "Oxygen vs sulphur comparison",
          "Fluorine vs other halogens: F₂ can't exhibit positive oxidation states; no d-orbitals",
          "Diagonal relationships in p-block",
        ],
      },
    ],
  },

  {
    chapter: "d & f Block Elements",
    tag: "IC",
    class: "12",
    topics: [
      {
        name: "d-Block — General Properties",
        subtopics: [
          "Electronic config: (n-1)d¹⁻¹⁰ ns⁰⁻²; exceptions: Cr ([Ar]3d⁵4s¹), Cu ([Ar]3d¹⁰4s¹)",
          "Variable oxidation states: due to involvement of (n-1)d & ns electrons; common states for Sc-Zn",
          "Metallic character, high MP & BP (except Zn, Cd, Hg)",
          "Paramagnetism: unpaired d-electrons; μ = √(n(n+2)) BM",
          "Catalytic activity: variable oxidation states & ability to adsorb gases (e.g. Fe in Haber, V₂O₅ in Contact, Pt in catalytic converter)",
          "Coloured ions: d-d transitions absorb visible light (e.g. Cu²⁺ blue, Cr³⁺ green, Mn²⁺ light pink)",
          "Complex formation: due to small size, high charge density & empty d-orbitals",
          "Interstitial compounds with C, H, N (hard, high MP, chemically inert)",
          "Alloy formation",
        ],
      },
      {
        name: "Important Compounds",
        subtopics: [
          "KMnO₄: deep purple; preparation: MnO₂ → K₂MnO₄ → KMnO₄ (by Cl₂/electrolysis)",
          "KMnO₄ as oxidising agent: acidic (Mn²⁺, light pink), neutral/faintly alkaline (MnO₂), strongly alkaline (MnO₄²⁻)",
          "Reactions of KMnO₄: with Fe²⁺, I⁻, oxalic acid, H₂O₂; titrations",
          "K₂Cr₂O₇: orange; dichromate ⇌ chromate equilibrium: Cr₂O₇²⁻ + H₂O ⇌ 2CrO₄²⁻ + 2H⁺",
          "K₂Cr₂O₇ as oxidising agent: in acidic medium → Cr³⁺ (green)",
          "Preparation of K₂Cr₂O₇ from chromite ore: FeCr₂O₄ → Na₂CrO₄ → Na₂Cr₂O₇ → K₂Cr₂O₇",
        ],
      },
      {
        name: "f-Block Elements",
        subtopics: [
          "Lanthanoids (4f¹⁻¹⁴): Ce to Lu; mainly +3 oxidation state (Ce also +4, Eu also +2)",
          "Lanthanoid contraction: 4f electrons have poor shielding → Z_eff increases steadily → ionic radii decrease from La to Lu",
          "Consequences of lanthanoid contraction: similar sizes of 4d & 5d elements, Zr ≈ Hf",
          "Actinoids (5f¹⁻¹⁴): Th to Lr; radioactive; variable oxidation states; actinoid contraction",
          "Transuranic elements (Z > 92): man-made",
          "Comparison: lanthanoids vs actinoids (magnetic properties, colour, complex formation, radioactivity)",
        ],
      },
    ],
  },

  {
    chapter: "Coordination Compounds",
    tag: "IC",
    class: "12",
    topics: [
      {
        name: "Basic Concepts & Terminology",
        subtopics: [
          "Werner's theory: primary valence (ionisable, oxidation state) & secondary valence (non-ionisable, coordination number)",
          "Central atom/ion & ligands",
          "Ligand types: monodentate (Cl⁻, NH₃, H₂O), bidentate (en, ox²⁻), polydentate (EDTA: hexadentate), ambidentate (SCN⁻ via S or N)",
          "Chelate: ring formed by bidentate/polydentate ligands; chelate effect",
          "Coordination number",
          "Charge of complex & oxidation state of central metal",
        ],
      },
      {
        name: "IUPAC Nomenclature",
        subtopics: [
          "Ligands named first (alphabetically), then metal with oxidation state in Roman numerals",
          "Anionic ligands: -o suffix (chloro, nitro, cyano, oxalato, sulphato)",
          "Neutral ligands: aqua (H₂O), ammine (NH₃), carbonyl (CO), nitrosyl (NO)",
          "Cationic complex: metal name (IUPAC); anionic complex: metal name + -ate suffix",
          "Examples: [Co(NH₃)₆]³⁺, [Fe(CN)₆]⁴⁻, [CrCl₂(en)₂]⁺, [Pt(NH₃)₂Cl₂]",
        ],
      },
      {
        name: "Isomerism",
        subtopics: [
          "Structural isomerism: ionisation (same formula, different ions in solution), linkage (ambidentate ligand), coordination, solvate/hydrate",
          "Stereoisomerism: geometrical (cis-trans) in square planar (MA₂B₂) & octahedral (MA₄B₂, MA₃B₃)",
          "Optical isomerism: non-superimposable mirror images; chiral complexes (e.g. [Co(en)₃]³⁺)",
          "Mer (meridional) & fac (facial) isomers in octahedral MA₃B₃",
        ],
      },
      {
        name: "Bonding in Complexes",
        subtopics: [
          "VBT: ligands donate e⁻ pairs to empty hybrid orbitals of metal; inner (d²sp³) & outer (sp³d²) orbital complexes",
          "Crystal Field Theory (CFT): electrostatic model; ligands as point charges",
          "Octahedral splitting: t₂g (dxy, dyz, dxz) lower; eg (dz², dx²-y²) higher; Δ_o = 10Dq",
          "Tetrahedral splitting: Δ_t = (4/9)Δ_o (smaller, so usually high-spin)",
          "High spin vs low spin: P (pairing energy) vs Δ_o; strong field → low spin",
          "Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO",
          "CFSE calculation & magnetic properties prediction",
          "Colour of complexes: d-d transition absorbs complementary colour",
        ],
      },
      {
        name: "Importance & Applications",
        subtopics: [
          "Qualitative analysis: group reagents (NH₄OH, H₂S) use complex formation",
          "Extraction of metals: Ag & Au by cyanide process (forms [Ag(CN)₂]⁻)",
          "Biological systems: haemoglobin [Fe-porphyrin] (O₂ transport), chlorophyll [Mg-porphyrin] (photosynthesis), vitamin B₁₂ [Co]",
          "EDTA chelation therapy: removing heavy metal poisoning",
          "Anticancer: cisplatin cis-[Pt(NH₃)₂Cl₂]",
        ],
      },
    ],
  },

  // ── ORGANIC CHEMISTRY ─────────────────────────────────────────────────────
  {
    chapter: "Purification & Characterisation of Organic Compounds",
    tag: "OC",
    class: "11",
    topics: [
      {
        name: "Purification Methods",
        subtopics: [
          "Crystallisation: dissolve in hot solvent, cool slowly; used for solids with temperature-dependent solubility",
          "Sublimation: solid → vapour → solid; for volatile solids (iodine, camphor, naphthalene)",
          "Simple distillation: liquids with different BP (difference > 25°C)",
          "Fractional distillation: liquids with close BP; fractionating column",
          "Vacuum/steam distillation: for liquids with high BP or that decompose; immiscible liquid mixtures",
          "Differential extraction: different solubility in two immiscible solvents",
          "Chromatography: separation based on differential adsorption; TLC, column, paper chromatography",
        ],
      },
      {
        name: "Qualitative & Quantitative Analysis",
        subtopics: [
          "Detection of C & H: combustion; CO₂ turns Ca(OH)₂ milky; H₂O turns anhydrous CuSO₄ blue",
          "Detection of N: Lassaigne's test → Prussian blue (FeFe[Fe(CN)₆]) from Na + N compound",
          "Detection of S: sodium nitroprusside → purple colour; or BaSO₄ precipitate",
          "Detection of P: molybdate test → yellow precipitate",
          "Detection of halogens: AgNO₃ test after Lassaigne extract acidification (white/pale yellow/yellow ppt)",
          "Estimation of C, H (combustion analysis), N (Dumas: N₂ collected; Kjeldahl: NH₃→HCl titration)",
          "Estimation of halogens (Carius), sulphur (Carius), phosphorus",
          "Calculation of empirical & molecular formula from combustion data",
        ],
      },
    ],
  },

  {
    chapter: "Some Basic Principles of Organic Chemistry",
    tag: "OC",
    class: "11",
    topics: [
      {
        name: "Classification & Nomenclature",
        subtopics: [
          "Tetravalency of carbon; catenation",
          "Shapes: sp³ (tetrahedral, 109.5°), sp² (trigonal planar, 120°), sp (linear, 180°)",
          "Classification by functional group: -OH, -CHO, -CO-, -COOH, -NH₂, -X, etc.",
          "Homologous series: same functional group, general formula, differ by CH₂",
          "Structural isomerism: chain, position, functional group, metamerism",
          "Stereoisomerism: geometric (cis-trans) & optical (enantiomers, chiral centre)",
          "IUPAC nomenclature: longest chain, lowest locants, alphabetical substituents",
          "Trivial (common) names for NCERT compounds",
        ],
      },
      {
        name: "Electronic Effects & Reactive Intermediates",
        subtopics: [
          "Covalent bond fission: homolytic (free radicals) & heterolytic (carbocations/carbanions)",
          "Carbocation stability: 3° > 2° > 1° > methyl; resonance stabilised (allyl, benzyl)",
          "Carbanion stability: 1° > 2° > 3°",
          "Free radical stability: 3° > 2° > 1°",
          "Electrophile: e⁻ deficient (H⁺, Br⁺, NO₂⁺, carbocations, BF₃, AlCl₃)",
          "Nucleophile: e⁻ rich (OH⁻, CN⁻, NH₃, I⁻, water)",
          "Inductive effect: −I (electron withdrawing: F, Cl, NO₂, COOH); +I (electron donating: alkyl groups)",
          "Electromeric effect: temporary shift under reagent influence (+E or −E)",
          "Resonance (mesomeric) effect: delocalization of π electrons; +M (−OH, −NH₂) and −M (−NO₂, −CN, −CHO)",
          "Hyperconjugation: delocalization involving C−H σ bonds adjacent to π system; explains alkene stability",
        ],
      },
      {
        name: "Types of Organic Reactions",
        subtopics: [
          "Substitution (S_N1, S_N2, free radical halogenation, EAS, EAlS)",
          "Addition (electrophilic to alkenes, nucleophilic to carbonyl)",
          "Elimination (E1, E2): forms alkene from halide/alcohol",
          "Rearrangement: carbocation rearrangements (1,2-hydride & 1,2-methyl shifts)",
        ],
      },
    ],
  },

  {
    chapter: "Hydrocarbons",
    tag: "OC",
    class: "11",
    topics: [
      {
        name: "Alkanes",
        subtopics: [
          "General formula CₙH₂ₙ₊₂; sp³ hybridisation",
          "Conformations of ethane: staggered (stable) vs eclipsed; Sawhorse & Newman projections",
          "Preparation: Wurtz reaction, Corey-House, hydrogenation, decarboxylation",
          "Properties: combustion, halogenation (free radical mechanism)",
          "Mechanism of halogenation: initiation, propagation, termination; Cl₂ less selective, F₂ explosive, I₂ reversible",
        ],
      },
      {
        name: "Alkenes",
        subtopics: [
          "General formula CₙH₂ₙ; sp² hybridisation; π bond",
          "Geometric isomerism: E/Z (CIP) & cis/trans; condition: different groups on each C of double bond",
          "Preparation: elimination from alkyl halides, dehydration of alcohols",
          "Electrophilic addition mechanism: Markovnikov's rule (H adds to C with more H)",
          "Addition of: H₂ (hydrogenation/reduction), X₂ (halogenation), HX (Markovnikov), H₂O (acid-catalysed), H₂SO₄",
          "Peroxide (anti-Markovnikov) addition of HBr: Kharasch effect",
          "Ozonolysis: O₃ then Zn/H₂O (reductive) → aldehydes/ketones; used to locate double bond",
          "Polymerisation: addition polymerisation",
        ],
      },
      {
        name: "Alkynes",
        subtopics: [
          "General formula CₙH₂ₙ₋₂; sp hybridisation; two π bonds",
          "Acidic character of terminal alkynes: RC≡C-H → RC≡C⁻ (stronger acid than alkenes/alkanes); reaction with NaNH₂, AgNO₃ (white ppt), ammoniacal CuCl (red ppt)",
          "Preparation: from vicinal dihalides (2 moles HX eliminated), from calcium carbide (CaC₂ + H₂O → HC≡CH)",
          "Addition of H₂, X₂, HX (two steps, Markovnikov), H₂O (Markovnikov → tautomerises to ketone/acetaldehyde)",
          "Polymerisation: benzene formation from ethyne (600°C, Fe tube)",
        ],
      },
      {
        name: "Aromatic Hydrocarbons",
        subtopics: [
          "Benzene: Kekulé structure; resonance hybrid; aromaticity (Hückel rule: 4n+2 π electrons, planar, cyclic, fully conjugated)",
          "Benzene structure: all bond lengths equal (1.40 Å), all angles 120°",
          "Nomenclature: ortho (1,2), meta (1,3), para (1,4); trivial names (toluene, xylene, etc.)",
          "Electrophilic substitution mechanism (EAS): formation of arenium ion (σ-complex/Wheland intermediate)",
          "Reactions: halogenation (X₂/Lewis acid), nitration (HNO₃/H₂SO₄ → -NO₂), sulphonation (conc H₂SO₄/oleum → -SO₃H)",
          "Friedel-Crafts alkylation (RX/AlCl₃ → alkylbenzene; limitation: polyalkylation)",
          "Friedel-Crafts acylation (RCOCl/AlCl₃ → aryl ketone; more controlled than alkylation)",
          "Directive influence: o/p directors (EDG: -OH, -NH₂, -CH₃, halogens — halogens are deactivating but o/p); m directors (EWG: -NO₂, -CN, -CHO, -COOH)",
          "Carcinogenicity of PAHs (polycyclic aromatic hydrocarbons)",
        ],
      },
    ],
  },

  {
    chapter: "Organic Compounds Containing Halogens",
    tag: "OC",
    class: "12",
    topics: [
      {
        name: "Haloalkanes (Alkyl Halides)",
        subtopics: [
          "Nomenclature: IUPAC & common names",
          "Nature of C-X bond: polar, C is δ+; X is δ−; bond length F < Cl < Br < I; bond enthalpy F > Cl > Br > I",
          "Preparation: from alcohols (with HX, SOCl₂, PCl₃), from alkenes (addition of HX, X₂), halogenation of alkanes (free radical)",
          "S_N2 mechanism: one step, inversion of configuration (Walden inversion), bimolecular, 1° > 2° > 3°",
          "S_N1 mechanism: two steps, carbocation intermediate, racemisation, 3° > 2° > 1°",
          "Elimination (E2): strong base, anti-periplanar orientation, Saytzeff product (major); Hofmann product",
          "Reactions: with KOH/NaOH (aq → alcohol; alc → alkene), with KCN (nitrile), with AgCN (isocyanide), with KNO₂ (nitroalkane), with AgNO₂ (alkyl nitrite)",
          "Nucleophilic substitution vs elimination: depends on substrate (1° vs 3°), nucleophile, solvent, temperature",
        ],
      },
      {
        name: "Haloarenes (Aryl Halides)",
        subtopics: [
          "C-X in aryl halides: resonance; C-X bond shorter than in haloalkanes; less reactive in nucleophilic substitution",
          "Preparation: direct halogenation, Sandmeyer reaction (from diazonium salts)",
          "Electrophilic substitution: halogens are o/p directors (deactivating)",
          "Nucleophilic aromatic substitution: requires strong EWG at o/p positions (Meisenheimer complex intermediate)",
        ],
      },
      {
        name: "Uses & Environmental Effects",
        subtopics: [
          "Chloroform CHCl₃: anaesthetic; toxic; stored with ethanol to prevent COCl₂ (phosgene) formation",
          "Iodoform CHI₃: antiseptic; yellow colour; iodoform test for methyl ketones & ethanol",
          "Freons (CFCs): refrigerants; responsible for ozone layer depletion (Cl• radical chain mechanism)",
          "DDT: persistent organochlorine pesticide; biomagnification; banned in many countries",
          "Biological effects of haloalkanes: liver toxicity (CCl₄), carcinogenicity",
        ],
      },
    ],
  },

  {
    chapter: "Organic Compounds Containing Oxygen",
    tag: "OC",
    class: "12",
    topics: [
      {
        name: "Alcohols",
        subtopics: [
          "Classification: 1° (−CH₂OH), 2° (−CHOH−), 3° (−C(OH)−)",
          "Nomenclature: IUPAC; alkan-1-ol, alkan-2-ol, etc.",
          "Preparation: hydration of alkenes, from Grignard reagent + aldehyde/ketone/CO₂, reduction of carbonyl",
          "Identification: Lucas test (ZnCl₂/conc HCl): 3° immediate turbidity, 2° slow, 1° no reaction (at RT)",
          "Physical properties: H-bonding → high BP relative to MW; solubility decreases with chain length",
          "Chemical reactions: with Na (gives H₂), with PBr₃/SOCl₂ (→ haloalkane), dehydration with conc H₂SO₄ (170°C → alkene; 140°C → ether; Saytzeff rule)",
          "Oxidation: 1° → aldehyde → carboxylic acid; 2° → ketone; 3° → resistant under mild conditions",
          "Esterification with carboxylic acid (Fischer esterification, acid-catalysed, reversible)",
        ],
      },
      {
        name: "Phenols",
        subtopics: [
          "Acidic nature: more acidic than alcohols (phenoxide ion stabilised by resonance); less acidic than carboxylic acids; K_a ≈ 10⁻¹⁰",
          "Reaction with NaOH: forms sodium phenoxide (not with NaHCO₃ → confirms weaker acid than H₂CO₃)",
          "Preparation: from diazonium salts, from cumene (industrial), from chlorobenzene (dow process)",
          "Electrophilic substitution (OH activates benzene strongly, o/p director): bromination (Br₂/H₂O → 2,4,6-tribromophenol, white ppt), nitration, sulphonation",
          "Reimer-Tiemann reaction: phenol + CHCl₃ + NaOH → o-hydroxybenzaldehyde (salicylaldehyde)",
          "Kolbe-Schmitt reaction: sodium phenoxide + CO₂ → salicylic acid",
          "Tests: FeCl₃ (violet colouration distinguishes phenol from alcohol)",
        ],
      },
      {
        name: "Ethers",
        subtopics: [
          "Structure: R-O-R'; bent geometry at O (sp³)",
          "Nomenclature: alkoxy alkane (IUPAC) or common (diethyl ether)",
          "Preparation: Williamson ether synthesis (SN2: NaOR' + RX → ROR'; use 1° RX to avoid elimination)",
          "Physical properties: low BP (no H-bonding); slightly soluble in water",
          "Reactions: with HI (cleavage: R-O-R' + HI → RI + ROH); with Lewis acids",
          "Uses: diethyl ether as solvent, anaesthetic",
        ],
      },
      {
        name: "Aldehydes & Ketones",
        subtopics: [
          "Structure: carbonyl group C=O; aldehyde (−CHO at chain end), ketone (−CO− in chain)",
          "Nomenclature: -al (aldehyde), -one (ketone)",
          "Preparation: from primary alcohol oxidation (PCC → aldehyde, KMnO₄ → acid); from alkyne hydration (Markovnikov); ozonolysis; Rosenmund reduction (RCOCl + H₂/Pd → RCHO)",
          "Nucleophilic addition to C=O: aldehyde > ketone (steric & electronic)",
          "Addition of HCN → cyanohydrin; NaHSO₃ → bisulphite adduct (purification)",
          "Addition of NH₃ derivatives: NH₂OH → oxime; N₂H₄ → hydrazone; PhNHNH₂ → phenylhydrazone",
          "Grignard reagent: RMgX + HCHO → 1° alcohol; RMgX + RCHO → 2° alcohol; RMgX + R₂CO → 3° alcohol",
          "Oxidation: aldehydes oxidised to acids (Fehling's solution → brick red ppt; Tollens' reagent → silver mirror; distinguishes from ketones)",
          "Reduction: H₂/Ni → alcohol (1° from aldehyde, 2° from ketone); Clemmensen (Zn-Hg/HCl → CH₂); Wolf-Kishner (NH₂NH₂/KOH/heat → CH₂)",
          "Aldol condensation: β-hydroxy carbonyl compound (in dil. NaOH); followed by dehydration → α,β-unsaturated carbonyl",
          "Cannizzaro reaction: non-enolisable aldehydes with conc NaOH → disproportionation (alcohol + carboxylate); e.g. HCHO, PhCHO",
          "Haloform reaction: CH₃CO- group + X₂/NaOH → CHX₃; iodoform test for ethanol & methyl ketones",
          "Acidity of α-hydrogen; keto-enol tautomerism",
        ],
      },
      {
        name: "Carboxylic Acids",
        subtopics: [
          "Structure: -COOH group; planar due to resonance",
          "Nomenclature: -anoic acid (IUPAC); formic, acetic, propionic, butyric, benzoic (trivial)",
          "Acidic strength: factors — EWG on α-carbon increase acidity (+I groups decrease); resonance stabilisation of carboxylate; much stronger than phenols & alcohols",
          "Preparation: oxidation (1° alcohol/aldehyde), hydrolysis of nitriles, Grignard + CO₂, from alkylbenzenes (side chain oxidation with KMnO₄)",
          "Reactions: salt formation (with NaOH, Na₂CO₃, NaHCO₃ — distinguishes from phenol), ester formation, amide formation, acid chloride (SOCl₂/PCl₃), anhydride formation, decarboxylation of malonic acid derivatives",
          "Hell-Volhard-Zelinsky (HVZ): α-halogenation with Br₂/red P",
        ],
      },
    ],
  },

  {
    chapter: "Organic Compounds Containing Nitrogen",
    tag: "OC",
    class: "12",
    topics: [
      {
        name: "Amines",
        subtopics: [
          "Classification: 1° (R-NH₂), 2° (R₂NH), 3° (R₃N); aliphatic & aromatic",
          "Nomenclature: IUPAC (alkanamines) & common",
          "Basic character: lone pair on N; aliphatic amines stronger base than ammonia; aniline (aromatic) much weaker (lone pair delocalised into ring)",
          "Order of basicity in water: 2° amine > 1° amine ≈ 3° amine > NH₃ > aniline (due to solvation effects in water)",
          "Preparation: reduction of nitro compounds, alkylation of NH₃ (with alkyl halides — gives mixture), Gabriel phthalimide synthesis (1° amine only), Hoffman bromamide degradation (RCONHBr + NaOH → 1° amine, one C less)",
          "Identification of 1°, 2°, 3° amines: Hinsberg test (benzenesulphonyl chloride); nitrous acid test (1° → diazonium, 2° → N-nitroso, 3° → no reaction)",
          "Reactions: with acid → salt; alkylation; acylation (with acid chloride/anhydride → amide); carbylamine reaction (1° amine + CHCl₃ + KOH → isocyanide, foul smell — test for 1° amine only)",
          "Electrophilic substitution of aniline: ring activated, o/p director; nitration (use CH₃CO₂H to protect -NH₂, avoid meta product); bromination (2,4,6-tribromoaniline, white ppt)",
        ],
      },
      {
        name: "Diazonium Salts",
        subtopics: [
          "Preparation: diazotisation — aniline + HCl + NaNO₂ at 0-5°C → ArN₂⁺Cl⁻",
          "Stability: kept at 0-5°C; decomposes on heating",
          "Reactions replacing −N₂⁺: Sandmeyer (ArCl via CuCl/HCl; ArBr via CuBr/HBr; ArCN via CuCN); ArI via KI; ArF via Balz-Schiemann (NaBF₄ then heat); ArOH via H₃PO₂/H₂O; ArH via H₃PO₂",
          "Coupling reaction: ArN₂⁺ + phenol/aniline (in basic medium) → azo dye (−N=N−); application in dyeing",
          "Importance of diazonium salts in synthetic organic chemistry (gateway to wide range of arene derivatives)",
        ],
      },
    ],
  },

  {
    chapter: "Biomolecules",
    tag: "OC",
    class: "12",
    topics: [
      {
        name: "Carbohydrates",
        subtopics: [
          "Definition: polyhydroxy aldehydes or ketones or compounds that yield these on hydrolysis",
          "Classification: monosaccharides (cannot be hydrolysed further; glucose, fructose), oligosaccharides (2-10 units; sucrose, lactose, maltose), polysaccharides (starch, glycogen, cellulose)",
          "Aldoses vs ketoses: glucose (aldohexose), fructose (ketohexose)",
          "Structure of glucose: open chain (Fisher) — 6C, -CHO at C1, 4 -OH groups; C2-C5 chiral; D/L configuration (C5 reference)",
          "Reactions of glucose: reduction (sorbitol), oxidation (gluconic/saccharic acid), acetylation (5 acetyl groups → 5 -OH), reaction with HI (hexane → all -OH replaced), osazone formation (with excess PhNHNH₂)",
          "Cyclic structure of glucose: Haworth projection; α & β anomers; anomeric carbon C1; glucopyranose",
          "Fructose: open chain & cyclic; furanose form; mutarotation",
          "Sucrose (cane sugar): glucose + fructose; non-reducing; glycosidic bond at anomeric C of both",
          "Lactose (milk sugar): galactose + glucose; reducing sugar",
          "Maltose (malt sugar): glucose + glucose; reducing sugar",
          "Starch: amylose (straight, α-1,4 linkage) + amylopectin (branched, α-1,6 at branch points)",
          "Glycogen: animal storage; highly branched",
          "Cellulose: β-1,4 linkage; structural polysaccharide; not digestible by humans",
        ],
      },
      {
        name: "Proteins",
        subtopics: [
          "Amino acids: α-amino acids; central C bonded to −NH₂, −COOH, −H, −R",
          "Essential vs non-essential amino acids",
          "Zwitterion form: NH₃⁺−CHR−COO⁻; isoelectric point (pI)",
          "Peptide bond: formed by condensation between −COOH & −NH₂; −CO−NH− linkage",
          "Polypeptides: many amino acids linked; protein = one or more polypeptide chains",
          "Primary structure: sequence of amino acids (determines all higher structures)",
          "Secondary structure: α-helix (H-bonds within chain) & β-pleated sheet (H-bonds between chains)",
          "Tertiary structure: 3D folding; disulfide bridges, H-bonds, ionic & hydrophobic interactions",
          "Quaternary structure: association of multiple polypeptide subunits (e.g. haemoglobin has 4 subunits)",
          "Denaturation: loss of 3D structure by heat, pH, heavy metals; loses biological activity (e.g. boiling egg)",
          "Enzymes: biological catalysts; protein in nature; highly specific (lock-and-key model); active site",
        ],
      },
      {
        name: "Vitamins",
        subtopics: [
          "Fat-soluble vitamins: A (retinol — night blindness), D (calciferol — rickets), E (tocopherol — antioxidant), K (phylloquinone — blood clotting)",
          "Water-soluble vitamins: B-complex group (B₁ thiamine — beri-beri; B₂ riboflavin; B₆ pyridoxine; B₁₂ cyanocobalamin — pernicious anaemia; niacin — pellagra; folic acid), C (ascorbic acid — scurvy)",
          "Sources, deficiency diseases (NCERT table)",
        ],
      },
      {
        name: "Nucleic Acids",
        subtopics: [
          "Components: nitrogenous base + deoxyribose/ribose + phosphate",
          "Nitrogenous bases — purines (adenine, guanine) & pyrimidines (cytosine, thymine in DNA; uracil replaces thymine in RNA)",
          "Nucleoside = base + sugar; nucleotide = nucleoside + phosphate",
          "DNA: double helix (Watson-Crick model); A-T (2 H-bonds), G-C (3 H-bonds); antiparallel strands; deoxyribose",
          "RNA: single-stranded; ribose; uracil instead of thymine; types: mRNA, tRNA, rRNA",
          "Biological functions: DNA (genetic information storage, replication), RNA (protein synthesis — transcription & translation)",
        ],
      },
      {
        name: "Hormones",
        subtopics: [
          "Chemical messengers secreted by endocrine glands; carried by blood",
          "Types: peptide/protein hormones (insulin, glucagon, ADH), steroid hormones (testosterone, estrogen, cortisol), amino acid derivatives (adrenaline, thyroxine)",
          "General introduction only (NEET level)",
        ],
      },
    ],
  },

  {
    chapter: "Polymers",
    tag: "OC",
    class: "12",
    topics: [
      {
        name: "Classification & Types",
        subtopics: [
          "Natural polymers: starch, cellulose, natural rubber (polyisoprene), proteins, nucleic acids",
          "Synthetic polymers: nylon, PVC, polyester, teflon, bakelite",
          "Based on structure: linear (HDPE), branched (LDPE), cross-linked (bakelite, melamine)",
          "Based on polymerisation: addition polymers (monomers with double bonds) & condensation polymers (monomers with bifunctional groups, lose small molecules)",
          "Based on source: natural, semi-synthetic (cellulose acetate, vulcanised rubber), synthetic",
          "Copolymers: two different monomers (e.g. Buna-S: styrene + butadiene)",
        ],
      },
      {
        name: "Addition Polymers",
        subtopics: [
          "Chain-growth polymerisation: free radical, cationic, anionic",
          "Polythene (polyethylene): LDPE (branched, low density, soft) vs HDPE (linear, Ziegler-Natta catalyst, harder)",
          "Polypropylene: atactic, isotactic, syndiotactic",
          "Polystyrene: clear, brittle; used in packaging",
          "PVC (polyvinyl chloride): hard → plasticised with phthalates → flexible",
          "Teflon (PTFE): polytetrafluoroethylene; non-stick, chemically inert, high MP",
          "Polyacrylonitrile (Orlon/Acrilan): used in textiles",
        ],
      },
      {
        name: "Condensation Polymers",
        subtopics: [
          "Step-growth polymerisation: bifunctional monomers; elimination of small molecules (H₂O, HCl)",
          "Nylon-6,6: hexamethylenediamine + adipic acid → polyamide; strong, tough; used in ropes, textiles",
          "Nylon-6: caprolactam → ring-opening polymerisation; similar uses",
          "Dacron (Terylene/PET): ethylene glycol + terephthalic acid → polyester; used in fabrics, bottles",
          "Bakelite: phenol + formaldehyde → cross-linked; thermosetting; electrical insulator",
          "Melamine-formaldehyde: cross-linked; hard, fire-resistant; crockery",
          "Glyptal: ethylene glycol + phthalic acid; alkyd resin; used in paints & lacquers",
        ],
      },
      {
        name: "Rubber & Special Polymers",
        subtopics: [
          "Natural rubber: cis-polyisoprene; elastic; poor properties at extreme T",
          "Vulcanisation: heating with S (2-3%) at 373 K; S bridges between chains → improved elasticity, tensile strength, resistance to chemicals",
          "Synthetic rubbers: Buna-S (SBR), Buna-N (nitrile rubber, oil-resistant), Neoprene (polychloroprene, chemical resistant)",
          "Biodegradable polymers: PHBV (poly-β-hydroxybutyrate-co-β-hydroxyvalerate), Nylon-2-nylon-6",
          "Polymers of commercial importance: polycarbonate, PMMA (plexiglass/perspex)",
        ],
      },
    ],
  },

  {
    chapter: "Chemistry in Everyday Life",
    tag: "OC",
    class: "12",
    topics: [
      {
        name: "Drugs & Medicines",
        subtopics: [
          "Drug: chemical that interacts with macromolecular targets to produce biological response",
          "Targets: enzymes, receptors, carrier proteins, nucleic acids",
          "Drug-enzyme interaction: competitive inhibition (blocks active site); allosteric inhibition",
          "Drug-receptor interaction: agonist (mimics natural ligand) vs antagonist (blocks receptor)",
          "Classification by pharmacological effect: analgesics, antipyretics, antibiotics, antiseptics, antacids, antihistamines, tranquilisers, antimalarials",
          "Analgesics: non-narcotic (aspirin, paracetamol, ibuprofen — anti-inflammatory); narcotic (morphine, codeine — pain relief, cause addiction)",
          "Tranquilisers: barbiturates (sleeping pills), benzodiazepines (valium/diazepam), meprobamate; treat mental illness",
          "Antimicrobials: antibiotics (bactericidal: penicillin, aminoglycosides; bacteriostatic: sulphonamides, tetracyclines); antifungals",
          "Antacids: NaHCO₃, Mg(OH)₂, Al(OH)₃; neutralise excess HCl in stomach",
          "Antihistamines: block histamine receptors (not histamine production); used for allergies; e.g. brompheniramine, terfenadine",
          "Antifertility drugs: synthetic oestrogen & progesterone (norethindrone); ovulation suppression",
        ],
      },
      {
        name: "Chemicals in Food",
        subtopics: [
          "Preservatives: table salt, sugar, vegetable oils, sodium benzoate (C₆H₅COONa), sodium metabisulphite",
          "Artificial sweeteners: saccharin (oldest; 500× sweeter than sugar; not metabolised; safe for diabetics), aspartame (100× sweeter; limited to cold food; contains phenylalanine — unsafe for PKU patients), sucralose (600× sweeter; not absorbed; stable to heat), alitame, cyclamate",
          "Antioxidants: BHA (butylated hydroxyanisole), BHT (butylated hydroxytoluene), vitamin E (natural); prevent oxidation of fats",
          "Food colours, edible flavours (artificial vs natural)",
        ],
      },
      {
        name: "Cleansing Agents",
        subtopics: [
          "Soaps: sodium/potassium salts of long-chain fatty acids (RCOOH + NaOH → RCOONa + H₂O); saponification",
          "Mechanism of cleansing: micelle formation — hydrophilic heads out, hydrophobic tails surround grease",
          "Limitations of soap: ineffective in hard water (Ca²⁺/Mg²⁺ ions form insoluble scum); ineffective in acidic media",
          "Synthetic detergents: still work in hard water; not affected by pH",
          "Types of detergents: anionic (sodium lauryl sulphate — most common), cationic (quaternary ammonium salts — bactericidal), non-ionic (polyethylene glycol ethers)",
          "Disadvantage of detergents: non-biodegradable branched chains cause foaming in rivers",
        ],
      },
    ],
  },

  {
    chapter: "Practical Chemistry (NEET Unit 20)",
    tag: "PC",
    class: "12",
    topics: [
      {
        name: "Detection of Functional Groups",
        subtopics: [
          "Hydroxyl (alcoholic): Lucas test; esterification; sodium metal test",
          "Hydroxyl (phenolic): FeCl₃ (violet), NaOH soluble but not NaHCO₃",
          "Carbonyl (aldehyde): Tollens' (silver mirror), Fehling's (brick red), 2,4-DNP test",
          "Carbonyl (ketone): 2,4-DNP; does NOT give Tollens' or Fehling's",
          "Carboxyl (−COOH): effervescence with NaHCO₃ (CO₂); litmus; esterification",
          "Amino (−NH₂): Hinsberg test; carbylamine (1° only); turns wet litmus blue",
          "Halogens in organic compounds: Beilstein test (green/blue flame); AgNO₃ precipitate",
        ],
      },
      {
        name: "Inorganic Preparations & Experiments",
        subtopics: [
          "Mohr's salt (FeSO₄·(NH₄)₂SO₄·6H₂O): preparation, double salt",
          "Potash alum (KAl(SO₄)₂·12H₂O): preparation, crystallisation",
          "Titrations: acids-bases with indicators; oxalic acid vs KMnO₄ (self-indicator); Mohr's salt vs KMnO₄",
          "Enthalpy of solution of CuSO₄: calorimetry, temperature change",
          "Enthalpy of neutralisation of strong acid-strong base",
        ],
      },
      {
        name: "Qualitative Salt Analysis",
        subtopics: [
          "Cations tested: Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, Ni²⁺, Ca²⁺, Ba²⁺, Mg²⁺, NH₄⁺",
          "Anions tested: CO₃²⁻, S²⁻, SO₄²⁻, NO₃⁻, NO₂⁻, Cl⁻, Br⁻, I⁻ (insoluble salts excluded)",
          "Group analysis: dilute H₂SO₄ group (CO₃²⁻, S²⁻, SO₃²⁻, NO₂⁻) vs conc H₂SO₄ group (Cl⁻, Br⁻, I⁻, NO₃⁻, SO₄²⁻)",
          "Flame test for cations (Na yellow, K violet, Ca brick-red, Ba apple-green)",
          "NaOH test for cations: Cu²⁺ (blue ppt), Fe³⁺ (rust-brown ppt), Al³⁺ (white ppt, soluble in excess), Zn²⁺ (white, soluble in excess), NH₄⁺ (ammonia smell on heating)",
        ],
      },
      {
        name: "Kinetics & Colloids Experiments",
        subtopics: [
          "Kinetic study: rate of reaction of iodide ions with H₂O₂ at room temperature; starch indicator",
          "Preparation of lyophilic sol: starch sol, gelatin sol (disperse in hot water)",
          "Preparation of lyophobic sol: Fe(OH)₃ sol by hydrolysis of FeCl₃ (peptisation); As₂S₃ sol",
          "Coagulation: adding electrolyte; Hardy-Schulze rule",
        ],
      },
    ],
  },

  // ── SURFACE CHEMISTRY (Class 12 bonus — appears in NEET) ─────────────────
  {
    chapter: "Surface Chemistry",
    tag: "PC",
    class: "12",
    topics: [
      {
        name: "Adsorption",
        subtopics: [
          "Adsorption vs absorption; adsorbate & adsorbent",
          "Physisorption: weak van der Waals forces, reversible, multilayer, low T favoured",
          "Chemisorption: strong chemical bond, irreversible, monolayer, high T, specific; follows Arrhenius",
          "Freundlich adsorption isotherm: x/m = kp^(1/n); log(x/m) vs log p is linear",
          "Factors affecting adsorption: nature of adsorbent (activated charcoal, silica gel), surface area, temperature, pressure",
          "Applications: decolourisation of sugar by charcoal, gas masks, chromatography, heterogeneous catalysis",
        ],
      },
      {
        name: "Catalysis",
        subtopics: [
          "Homogeneous catalysis: catalyst & reactants in same phase; H₂SO₄ in ester hydrolysis",
          "Heterogeneous catalysis: different phases; Fe in Haber process, V₂O₅ in Contact process, Ni in hydrogenation",
          "Mechanism of heterogeneous catalysis: adsorption of reactants, reaction at surface, desorption of products",
          "Promoters & poisons: promoters enhance catalyst activity (Al₂O₃ with Fe); poisons deactivate (CO poisons Pt)",
          "Enzyme catalysis: biochemical catalysis; highly specific; lock-and-key model; effect of temperature, pH, substrate concentration",
          "Autocatalysis: product acts as catalyst (e.g. KMnO₄ + oxalic acid: Mn²⁺ is product-catalyst)",
        ],
      },
      {
        name: "Colloids",
        subtopics: [
          "Classification: based on nature of dispersed phase & medium (8 types from solid/liquid/gas combinations)",
          "Lyophilic (solvent-loving): stable, easily prepared, not coagulated easily (e.g. starch, gelatin)",
          "Lyophobic (solvent-hating): unstable, require stabiliser, easily coagulated (e.g. Fe(OH)₃, As₂S₃)",
          "Preparation of lyophobic sols: condensation (chemical methods) & dispersion (breaking down)",
          "Properties: Tyndall effect (scattering of light), Brownian motion, electrophoresis, coagulation",
          "Hardy-Schulze rule: coagulating power ∝ valency of coagulating ion (higher valency → less electrolyte needed)",
          "Protective colloids: lyophilic colloids protect lyophobic (gold number; lower gold number = better protective colloid)",
          "Emulsions: oil-in-water (O/W: milk, vanishing cream) & water-in-oil (W/O: butter, cold cream); emulsifier stabilises",
          "Applications of colloids: medicine (colloidal gold, argyrol), food industry, industrial processes, water purification (alum coagulates clay)",
        ],
      },
    ],
  },
];
