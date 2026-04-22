// ── CHEMISTRY DATA ────────────────────────────────────────────────────────
window.CHEM_DATA = [

  // ── PHYSICAL CHEMISTRY ───────────────────────────────────────────────────
  {
    chapter: "Some Basic Concepts of Chemistry", tag: "PC", class: "11",
    topics: [
      { name: "Matter & Measurement", subtopics: ["States of matter", "Properties: physical & chemical", "SI units & prefixes", "Significant figures & scientific notation"] },
      { name: "Atomic & Molecular Mass", subtopics: ["Atomic mass unit (amu)", "Average atomic mass", "Molecular mass", "Formula mass for ionic compounds"] },
      { name: "Mole Concept", subtopics: ["Avogadro's number: 6.022 × 10²³", "Mole ↔ mass ↔ number conversions", "Molar mass", "Mole fraction"] },
      { name: "Stoichiometry", subtopics: ["Balancing chemical equations", "Stoichiometric calculations: mole-mole, mass-mass", "Limiting reagent", "Percent yield & theoretical yield"] },
      { name: "Concentration Terms", subtopics: ["Molarity (M)", "Molality (m)", "Normality (N)", "Mass percent (w/w)", "Volume percent (v/v)", "ppm & ppb"] },
      { name: "Empirical & Molecular Formula", subtopics: ["Percent composition from formula", "Empirical formula from percent composition", "Molecular formula from empirical formula & molar mass"] },
    ]
  },

  {
    chapter: "Atomic Structure", tag: "PC", class: "11",
    topics: [
      { name: "Subatomic Particles & Early Models", subtopics: ["Electron: cathode ray experiment, e/m ratio", "Proton & neutron discovery", "Thomson model (plum pudding)", "Rutherford's α-scattering experiment & nuclear model"] },
      { name: "Electromagnetic Radiation & Spectra", subtopics: ["Wave nature: frequency, wavelength, speed: c = νλ", "Particle nature: photon, E = hν", "Hydrogen emission spectrum: Lyman, Balmer, Paschen, Brackett, Pfund series", "Rydberg equation: 1/λ = RH(1/n₁² − 1/n₂²)"] },
      { name: "Bohr's Model", subtopics: ["Postulates of Bohr's model", "Energy of electron: Eₙ = −13.6/n² eV", "Radius: rₙ = 0.529n² Å", "Velocity: vₙ = 2.18 × 10⁶/n m/s", "Limitations of Bohr's model"] },
      { name: "Quantum Mechanical Model", subtopics: ["de Broglie hypothesis: λ = h/mv", "Heisenberg uncertainty principle: Δx·Δp ≥ h/4π", "Schrödinger wave equation (conceptual)", "Wave function ψ & probability density ψ²"] },
      { name: "Quantum Numbers", subtopics: ["Principal quantum number n: shell, energy", "Azimuthal quantum number l: subshell, shape (s,p,d,f)", "Magnetic quantum number mₗ: orientation", "Spin quantum number mₛ: ±½"] },
      { name: "Electronic Configuration", subtopics: ["Aufbau principle", "Pauli's exclusion principle", "Hund's rule of maximum multiplicity", "n+l rule (filling order)", "Electronic config of elements Z=1 to 36", "Extra stability of half-filled & fully-filled subshells"] },
    ]
  },

  {
    chapter: "Chemical Bonding & Molecular Structure", tag: "PC", class: "11",
    topics: [
      { name: "Ionic Bond", subtopics: ["Formation: electron transfer", "Lattice energy & Born-Haber cycle", "Properties of ionic compounds", "Fajan's rules: polarisation of ions"] },
      { name: "Covalent Bond", subtopics: ["Formation: electron sharing", "Lewis structures & octet rule", "Formal charge calculation", "Exceptions to octet rule: odd-electron, incomplete, expanded octet"] },
      { name: "VSEPR Theory", subtopics: ["Electron pair repulsion concept", "Predicting geometry: linear, trigonal planar, tetrahedral, trigonal bipyramidal, octahedral", "Effect of lone pairs on geometry (bent, pyramidal, T-shape, see-saw, square pyramidal, square planar)", "Bond angle trends"] },
      { name: "Valence Bond Theory", subtopics: ["Overlap of atomic orbitals", "σ bond: head-on overlap", "π bond: lateral overlap", "Hybridisation: sp, sp², sp³, sp³d, sp³d²", "Shapes & bond angles from hybridisation"] },
      { name: "Molecular Orbital Theory", subtopics: ["LCAO method: bonding & antibonding MOs", "MO energy diagram for H₂, N₂, O₂, F₂, B₂, C₂", "Bond order = (Nb − Na)/2", "Paramagnetic vs diamagnetic prediction"] },
      { name: "Intermolecular Forces & Hydrogen Bond", subtopics: ["London dispersion forces", "Dipole-dipole forces", "Dipole-induced dipole forces", "Hydrogen bond: conditions, types (inter- & intramolecular)", "Effect on boiling point, solubility, viscosity"] },
      { name: "Bond Parameters", subtopics: ["Bond length & covalent radii", "Bond enthalpy (bond dissociation energy)", "Bond order & bond length inverse relation", "Dipole moment & electronegativity"] },
    ]
  },

  {
    chapter: "States of Matter", tag: "PC", class: "11",
    topics: [
      { name: "Gaseous State — Gas Laws", subtopics: ["Boyle's law: PV = const (T const)", "Charles's law: V/T = const (P const)", "Gay-Lussac's law: P/T = const (V const)", "Avogadro's law: V ∝ n", "Combined ideal gas law: PV = nRT"] },
      { name: "Ideal Gas & Deviations", subtopics: ["Kinetic theory of gases: postulates", "Kinetic energy: KE = 3/2 nRT", "Speeds: urms, uav, ump & their ratios", "van der Waals equation: (P + an²/V²)(V−nb) = nRT", "Z = PV/nRT: compressibility factor, real gas behaviour"] },
      { name: "Diffusion & Effusion", subtopics: ["Graham's law: rate ∝ 1/√M", "Applications: separation of isotopes"] },
      { name: "Liquid State", subtopics: ["Vapour pressure & boiling point", "Surface tension: definition, units, temperature dependence", "Viscosity: definition, units, temperature dependence"] },
      { name: "Solid State", subtopics: ["Types of solids: ionic, molecular, covalent, metallic", "Crystal lattice & unit cell", "Types of unit cell: SC, BCC, FCC/CCP, HCP", "Packing fraction: SC (52%), BCC (68%), FCC (74%)", "Radius ratio & coordination number", "Imperfections: point defects (Schottky, Frenkel)", "Electrical & magnetic properties of solids"] },
    ]
  },

  {
    chapter: "Thermodynamics", tag: "PC", class: "11",
    topics: [
      { name: "Basic Concepts", subtopics: ["System, surroundings, boundary", "Open, closed & isolated systems", "State functions vs path functions", "Extensive vs intensive properties"] },
      { name: "First Law of Thermodynamics", subtopics: ["Internal energy U", "ΔU = q + w", "Work: w = −PextΔV; w = −nRT ln(V₂/V₁) for reversible isothermal", "Enthalpy: H = U + PV; ΔH = qp", "Cp − Cv = R for ideal gas"] },
      { name: "Thermochemistry", subtopics: ["Standard enthalpy of reaction ΔH°", "Hess's law of constant heat summation", "Enthalpy of formation, combustion, neutralisation, atomisation, sublimation", "Bond enthalpy method: ΔH = Σ(bonds broken) − Σ(bonds formed)", "Kirchhoff's equation"] },
      { name: "Second Law & Entropy", subtopics: ["Spontaneity & entropy S", "ΔS = qrev/T", "Entropy of universe increases in spontaneous processes", "Standard entropy change ΔS°"] },
      { name: "Gibbs Free Energy", subtopics: ["G = H − TS", "ΔG = ΔH − TΔS", "Spontaneity: ΔG < 0", "ΔG° = −RT ln K = −nFE°cell", "Temperature of equilibrium: T = ΔH/ΔS when ΔG = 0"] },
    ]
  },

  {
    chapter: "Chemical Equilibrium", tag: "PC", class: "11",
    topics: [
      { name: "Nature of Equilibrium", subtopics: ["Dynamic equilibrium", "Law of mass action", "Equilibrium constant Kc & Kp", "Relation: Kp = Kc(RT)^Δn", "Homogeneous & heterogeneous equilibria"] },
      { name: "Equilibrium Calculations", subtopics: ["ICE table method", "Degree of dissociation α", "Relation between α and Kc/Kp"] },
      { name: "Le Chatelier's Principle", subtopics: ["Effect of concentration change", "Effect of pressure & volume change", "Effect of temperature change", "Effect of catalyst (no effect on K)", "Industrial applications: Haber process, Contact process"] },
      { name: "Ionic Equilibrium", subtopics: ["Arrhenius & Brønsted-Lowry acid-base concept", "Lewis acid-base concept", "Conjugate acid-base pairs", "Ionic product of water Kw = 10⁻¹⁴ at 25°C", "pH = −log[H⁺]", "pH of strong & weak acids/bases", "Ka, Kb & pKa, pKb; relation: Ka × Kb = Kw"] },
      { name: "Buffer Solutions", subtopics: ["Definition & types: acidic & basic buffer", "Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA])", "Buffer capacity"] },
      { name: "Solubility Equilibrium", subtopics: ["Solubility product Ksp", "Common ion effect on solubility", "Condition for precipitation: Q vs Ksp", "Selective precipitation"] },
      { name: "Hydrolysis of Salts", subtopics: ["Salt of strong acid & strong base (neutral)", "Salt of strong acid & weak base (acidic)", "Salt of weak acid & strong base (basic)", "Salt of weak acid & weak base: pH = 7 + ½(pKa − pKb)"] },
    ]
  },

  {
    chapter: "Solutions", tag: "PC", class: "12",
    topics: [
      { name: "Types & Concentration", subtopics: ["Types of solutions: solid, liquid, gaseous", "Molarity, molality, mole fraction, mass percent", "Interconversion of concentration units"] },
      { name: "Henry's Law", subtopics: ["p = KH·x: solubility of gas in liquid", "Applications: carbonated drinks, scuba diving, oxygen in blood"] },
      { name: "Raoult's Law & Vapour Pressure", subtopics: ["Raoult's law for volatile solutes", "Ideal vs non-ideal solutions: positive & negative deviations", "Azeotropes"] },
      { name: "Colligative Properties", subtopics: ["Relative lowering of vapour pressure: ΔP/P° = x₂", "Elevation of boiling point: ΔTb = Kb·m", "Depression of freezing point: ΔTf = Kf·m", "Osmosis & osmotic pressure: π = CRT = nRT/V", "Abnormal molar mass: van't Hoff factor i"] },
    ]
  },

  {
    chapter: "Electrochemistry", tag: "PC", class: "12",
    topics: [
      { name: "Conductance", subtopics: ["Electrolytic conductance: resistance, resistivity", "Conductance G, conductivity κ", "Molar conductivity Λm", "Variation of Λm with concentration: Kohlrausch's law", "Applications of Kohlrausch's law: degree of dissociation, Kc"] },
      { name: "Electrochemical Cells", subtopics: ["Galvanic (voltaic) cell: anode (−), cathode (+)", "Cell notation (left ‖ right convention)", "Standard electrode potential E°", "SHE as reference: E° = 0 V", "E°cell = E°cathode − E°anode"] },
      { name: "Nernst Equation", subtopics: ["E = E° − (RT/nF) ln Q", "E = E° − (0.0592/n) log Q at 25°C", "Equilibrium & Nernst: E° = (0.0592/n) log K"] },
      { name: "Electrolysis & Faraday's Laws", subtopics: ["Electrolytic cell: anode (+), cathode (−)", "Faraday's 1st law: m = ZIt = (M/nF)It", "Faraday's 2nd law: m ∝ equivalent mass", "Products of electrolysis: discharge potential, overvoltage"] },
      { name: "Batteries & Corrosion", subtopics: ["Primary cells: dry cell (Leclanche), mercury cell", "Secondary cells: lead-acid battery, Li-ion battery", "Fuel cells: H₂-O₂ cell", "Corrosion: electrochemical mechanism, galvanic corrosion, prevention"] },
    ]
  },

  {
    chapter: "Chemical Kinetics", tag: "PC", class: "12",
    topics: [
      { name: "Rate of Reaction", subtopics: ["Average & instantaneous rate", "Rate in terms of concentrations of reactants & products", "Rate law: r = k[A]^m[B]^n", "Order vs molecularity", "Units of rate constant k"] },
      { name: "Integrated Rate Laws", subtopics: ["Zero-order: [A] = [A]₀ − kt; t½ = [A]₀/2k", "First-order: ln[A] = ln[A]₀ − kt; t½ = 0.693/k", "Second-order: 1/[A] = 1/[A]₀ + kt", "Graphical determination of order"] },
      { name: "Temperature Dependence", subtopics: ["Arrhenius equation: k = Ae^(−Ea/RT)", "ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂)", "Activation energy Ea: concept, determination", "Effect of catalyst: lowers Ea, increases rate"] },
      { name: "Collision Theory & TST", subtopics: ["Collision frequency & effective collisions", "Steric factor (orientation factor)", "Transition state theory: activated complex", "Energy profile diagram: Ea (forward & reverse), ΔH"] },
    ]
  },

  {
    chapter: "Surface Chemistry", tag: "PC", class: "12",
    topics: [
      { name: "Adsorption", subtopics: ["Physisorption vs chemisorption", "Factors affecting adsorption", "Freundlich adsorption isotherm: x/m = kP^(1/n)", "Langmuir adsorption isotherm"] },
      { name: "Catalysis", subtopics: ["Homogeneous vs heterogeneous catalysis", "Mechanism of heterogeneous catalysis: adsorption theory", "Enzyme catalysis: lock & key, Michaelis-Menten (conceptual)", "Autocatalysis", "Promoters & poisons"] },
      { name: "Colloids", subtopics: ["Dispersed phase & dispersion medium", "Types of colloids: sol, gel, emulsion, aerosol, foam", "Lyophilic & lyophobic colloids", "Properties: Tyndall effect, Brownian motion, electrophoresis, coagulation", "Gold number & protective colloids", "Preparation & purification: dialysis, electrodialysis"] },
      { name: "Emulsions & Micelles", subtopics: ["O/W and W/O emulsions", "Emulsifying agents", "Micelle formation: CMC, cleansing action of soap"] },
    ]
  },

  {
    chapter: "Nuclear Chemistry & Radioactivity", tag: "PC", class: "12",
    topics: [
      { name: "Radioactive Decay", subtopics: ["α decay: A decreases by 4, Z by 2", "β⁻ decay: Z increases by 1", "β⁺ decay & electron capture: Z decreases by 1", "γ radiation: no change in A or Z", "Decay law: N = N₀e^(−λt); t½ = 0.693/λ"] },
      { name: "Nuclear Reactions", subtopics: ["Q-value of nuclear reaction", "Nuclear fission & chain reaction", "Nuclear fusion", "Artificial radioactivity & transuranium elements"] },
      { name: "Applications", subtopics: ["Radiocarbon dating: C-14 method", "Age of rocks: U-Pb, K-Ar methods", "Tracers in medicine & agriculture", "Radiation units: Curie, Becquerel, rad, rem"] },
    ]
  },

  // ── ORGANIC CHEMISTRY ────────────────────────────────────────────────────
  {
    chapter: "Basic Principles of Organic Chemistry", tag: "OC", class: "11",
    topics: [
      { name: "Classification & Nomenclature", subtopics: ["Homologous series", "Functional groups & their priority order (IUPAC)", "IUPAC naming: alkanes, alkenes, alkynes, alcohols, ketones, aldehydes, acids, amines, halides", "Common names vs IUPAC names for JEE-tested compounds"] },
      { name: "Isomerism", subtopics: ["Structural isomerism: chain, position, functional group, metamerism, tautomerism", "Stereoisomerism: geometrical (cis-trans, E-Z) & optical (enantiomers, diastereomers)", "Chirality: chiral centre, R/S configuration (CIP rules)", "Conformational isomerism: ethane (staggered vs eclipsed), cyclohexane (chair vs boat)"] },
      { name: "Electronic Effects", subtopics: ["Inductive effect: +I and −I groups, effect on acidity/basicity", "Resonance (mesomeric effect): +M and −M groups, resonance structures", "Hyperconjugation: no-bond resonance, stability of carbocations & alkenes", "Electromeric effect"] },
      { name: "Reaction Intermediates", subtopics: ["Carbocation: structure, stability (3° > 2° > 1°), rearrangements (hydride & methyl shift)", "Carbanion: structure, stability", "Free radicals: structure, stability", "Carbene & nitrene (brief)"] },
      { name: "Types of Reactions & Reagents", subtopics: ["Homolytic & heterolytic bond cleavage", "Electrophile & nucleophile: examples", "Substitution: SN1, SN2 — mechanism, stereochemistry, conditions", "Elimination: E1, E2 — Zaitsev's rule", "Addition: electrophilic, nucleophilic, free radical", "Oxidation & reduction in organic chemistry"] },
    ]
  },

  {
    chapter: "Hydrocarbons", tag: "OC", class: "11",
    topics: [
      { name: "Alkanes", subtopics: ["Preparation: from alkyl halides (Wurtz), from carboxylic acids (decarboxylation, Kolbe's), from unsaturated hydrocarbons (hydrogenation)", "Reactions: halogenation (free radical mechanism, selectivity 3°>2°>1°), combustion, pyrolysis (cracking), isomerisation"] },
      { name: "Alkenes", subtopics: ["Preparation: dehydration of alcohols, dehydrohalogenation (E2)", "Structure: sp² hybridisation, π bond", "Reactions: electrophilic addition — HX (Markovnikov's rule), H₂O (acid-catalysed), H₂SO₄, halogens, HO-X (halohydrin)", "Free radical addition of HBr: anti-Markovnikov (Kharash effect)", "Ozonolysis, epoxidation, hydroxylation (OsO₄), polymerisation"] },
      { name: "Alkynes", subtopics: ["Preparation: from vicinal/geminal dihalides, dehalogenation", "Structure: sp hybridisation, two π bonds, linear geometry", "Reactions: electrophilic addition (both steps Markovnikov), acidic nature — reaction with Na, NaNH₂", "Tautomerism: terminal alkyne → aldehyde/ketone", "Ozonolysis of alkynes"] },
      { name: "Aromatic Hydrocarbons", subtopics: ["Benzene: structure, resonance, aromaticity (Hückel 4n+2 rule)", "Electrophilic aromatic substitution (EAS) mechanism: σ-complex (arenium ion)", "Reactions: halogenation (X₂/FeBr₃), nitration (HNO₃/H₂SO₄), sulfonation, Friedel-Crafts alkylation & acylation", "Directing effects: o/p directors (+M or +I groups), m-directors (−M groups)", "Effect on reactivity: activation vs deactivation"] },
    ]
  },

  {
    chapter: "Haloalkanes & Haloarenes", tag: "OC", class: "12",
    topics: [
      { name: "Preparation", subtopics: ["From alcohols: SOCl₂, PCl₅, PCl₃, HX/ZnCl₂", "Halogenation of alkanes (free radical)", "Addition of HX & X₂ to alkenes", "Sandmeyer & Balz-Schiemann reactions (from diazonium)", "Aromatichalides: from arenes via EAS or from diazonium"] },
      { name: "Nucleophilic Substitution", subtopics: ["SN2: bimolecular, one-step, backside attack, inversion (Walden inversion)", "SN1: unimolecular, two-step via carbocation, racemisation", "Factors: substrate structure, nucleophile, leaving group, solvent", "Competing reactions: SN1/SN2 vs E1/E2"] },
      { name: "Elimination", subtopics: ["E2: bimolecular, anti-periplanar geometry, Zaitsev's product (major)", "E1: via carbocation, Zaitsev's rule", "Saytzeff vs Hofmann elimination"] },
      { name: "Reactions of Haloalkanes", subtopics: ["With NaOH (aq): substitution → alcohol", "With KOH (alc): elimination → alkene", "With NaCN: → nitrile (carbon chain extension)", "With AgCN: → isonitrile", "With KNO₂: → nitroalkane (N-attack)", "With AgNO₂: → nitrite ester (O-attack)", "With NaI/acetone (Finkelstein): halide exchange", "Grignard reagent formation: RMgX"] },
      { name: "Reactions of Haloarenes", subtopics: ["Low reactivity toward nucleophilic substitution (aromaticity, +M effect of halogen)", "Nucleophilic aromatic substitution when ring is electron-deficient (SNAr)", "Reactions of C−X bond: with Mg (Grignard)", "Reactions retaining ring: EAS on haloarenes (o/p directors)"] },
      { name: "Polyhalogen Compounds", subtopics: ["Chloroform CHCl₃: preparation, reactions (carbylamine, reimer-tiemann)", "Carbon tetrachloride CCl₄: uses, toxicity", "DDT: structure, historical use, environmental concerns", "Freons (CFCs): uses, ozone depletion"] },
    ]
  },

  {
    chapter: "Alcohols, Phenols & Ethers", tag: "OC", class: "12",
    topics: [
      { name: "Alcohols — Preparation", subtopics: ["Hydration of alkenes (acid-catalysed, Markovnikov)", "Reduction of aldehydes, ketones, carboxylic acids, esters (LiAlH₄, NaBH₄)", "Grignard reagent + carbonyl compounds", "From primary alkyl halides (SN2 with OH⁻)"] },
      { name: "Alcohols — Reactions", subtopics: ["Acidic nature: ROH → RO⁻ + H⁺; 1° > 2° > 3° acidity", "Reaction with Na: formation of alkoxide + H₂", "Esterification: ROH + RCOOH ⇌ RCOOR + H₂O (H⁺ catalyst)", "With HX: Lucas test (ZnCl₂/HCl) — 3° fastest", "Oxidation: 1° → aldehyde → acid (KMnO₄, CrO₃); 2° → ketone; 3° → no reaction with mild oxidant", "Dehydration: conc H₂SO₄/170°C → alkene; 140°C → ether (Williamson)", "Victor Meyer test & iodoform reaction"] },
      { name: "Phenols — Preparation", subtopics: ["From diazonium salts (diazotisation + hydrolysis)", "From cumene (industrial)", "From haloarenes (NaOH, high T & P)", "From benzene sulphonic acid (alkali fusion)"] },
      { name: "Phenols — Reactions", subtopics: ["High acidity (pKa ≈ 10) due to resonance stabilisation of phenoxide", "Reaction with FeCl₃: violet colour (test)", "Kolbe's reaction: Na-phenoxide + CO₂ → salicylic acid", "Reimer-Tiemann reaction: → o-hydroxybenzaldehyde (CHCl₃/NaOH)", "Nitration: dilute HNO₃ → o & p-nitrophenol; conc HNO₃/H₂SO₄ → picric acid", "Bromination: Br₂/water → 2,4,6-tribromophenol (no catalyst needed)"] },
      { name: "Ethers — Preparation & Reactions", subtopics: ["Williamson synthesis: R−O⁻ + R'X → R−O−R'", "From alcohols: conc H₂SO₄, 140°C", "Reactions: cleavage by HI (HBr): R−O−R' + HI → RI + R'OH", "Peroxide formation", "Electrophilic substitution of aryl ethers (o/p direction)"] },
    ]
  },

  {
    chapter: "Aldehydes, Ketones & Carboxylic Acids", tag: "OC", class: "12",
    topics: [
      { name: "Aldehydes & Ketones — Preparation", subtopics: ["Oxidation of alcohols (PCC, KMnO₄)", "Ozonolysis of alkenes", "Hydration of alkynes (acid/Hg²⁺): terminal alkynes → methyl ketone (Markovnikov)", "Gattermann-Koch reaction (aldehyde from benzene)", "Rosenmund reduction (acyl chloride → aldehyde, Pd/BaSO₄/H₂)", "Friedel-Crafts acylation (aryl ketones)"] },
      { name: "Nucleophilic Addition to C=O", subtopics: ["Mechanism: nucleophile attacks electrophilic carbon", "Reactivity: HCHO > RCHO > RCOR' (steric & electronic)", "With HCN: cyanohydrin formation", "With NaHSO₃: bisulphite addition", "With Grignard: RMgX + RCHO → 2° alcohol; RMgX + RCOR' → 3° alcohol", "With H₂O: geminal diol (hydration)", "With alcohols: hemiacetal → acetal (acid catalyst)"] },
      { name: "Condensation Reactions", subtopics: ["With NH₃ derivatives: oxime (NH₂OH), hydrazone (NH₂NH₂), semicarbazone (NH₂NHCONH₂)", "Aldol condensation: base-catalysed; aldol product & dehydration to α,β-unsaturated carbonyl", "Crossed aldol condensation", "Cannizzaro reaction (no α-H, conc KOH): disproportionation → alcohol + acid", "Knoevenagel, Claisen-Schmidt (brief)"] },
      { name: "Oxidation & Reduction of Carbonyls", subtopics: ["Oxidation: Tollen's reagent (Ag mirror) — aldehydes only", "Fehling's solution (Cu²⁺ → Cu₂O) — aliphatic aldehydes only", "Benedict's solution", "Reduction: Clemmensen (Zn-Hg/HCl) → CH₂; Wolf-Kishner (NH₂NH₂/KOH) → CH₂", "Meerwein-Ponndorf-Verley (MPV) reduction (selective)", "NaBH₄ vs LiAlH₄ selectivity"] },
      { name: "Special Reactions of Aldehydes", subtopics: ["Iodoform test (CH₃CHO & methyl ketones): I₂/NaOH → CHI₃ (yellow ppt)", "Perkin condensation, Benzoin condensation (benzaldehyde)", "Reductive amination"] },
      { name: "Carboxylic Acids — Preparation", subtopics: ["Oxidation of primary alcohols & aldehydes", "Carbonation of Grignard reagent: RMgX + CO₂ → RCOOH", "Hydrolysis of nitriles (RCN + H₂O → RCOOH)", "Hydrolysis of esters & amides", "Koch reaction (alkene + CO + H₂O, acid catalyst)"] },
      { name: "Carboxylic Acids — Reactions & Acidity", subtopics: ["Acidic strength: RCOOH >> ROH; factors — inductive (−I increases acidity), resonance", "Acidity order: HCOOH > CH₃COOH; CCl₃COOH > CBr₃COOH > CF₃COOH", "Formation of salts, esters, acid chlorides (SOCl₂, PCl₅), anhydrides, amides", "Hell-Volhard-Zelinski (HVZ): α-halogenation with Br₂/P", "Decarboxylation: RCOOH → RH + CO₂ (conditions)", "Kolbe electrolysis: RCOO⁻ → R-R (at anode)"] },
      { name: "Derivatives of Carboxylic Acids", subtopics: ["Acid chlorides: most reactive, acylation, Rosenmund reduction", "Anhydrides: esterification, Friedel-Crafts", "Esters: Fisher esterification (equilibrium), saponification (base hydrolysis)", "Amides: least reactive, Hofmann rearrangement (Br₂/NaOH: RCONH₂ → RNH₂)"] },
    ]
  },

  {
    chapter: "Amines", tag: "OC", class: "12",
    topics: [
      { name: "Classification & Structure", subtopics: ["Primary (1°), secondary (2°), tertiary (3°) amines", "Aliphatic & aromatic amines", "sp³ hybridisation, lone pair on N, pyramidal shape"] },
      { name: "Preparation", subtopics: ["Reduction of nitro compounds (Fe/HCl, catalytic H₂)", "Reduction of nitriles (LiAlH₄)", "Reduction of amides (LiAlH₄)", "Gabriel phthalimide synthesis: primary amines only", "Hofmann bromamide degradation: RCONH₂ → RNH₂", "Reductive amination"] },
      { name: "Basicity of Amines", subtopics: ["Aliphatic amines: 3° > 2° > 1° > NH₃ (in gas phase); 2° > 1° > 3° > NH₃ (in water, solvent effect)", "Aniline << aliphatic amines (−NH₂ lone pair in resonance with ring)", "Effect of substituents on aniline: EDG (p-CH₃) increases, EWG (p-NO₂) decreases basicity", "Steric effect on basicity of 3° vs 2°"] },
      { name: "Reactions of Amines", subtopics: ["With acids: salt formation", "Alkylation: R-NH₂ → 2° → 3° → quaternary ammonium salt", "Acylation: with acid chlorides/anhydrides → amide (acetylation)", "With aldehydes & ketones: Schiff's base (imine)", "Carbylamine test (isocyanide test): primary amines only (CHCl₃/KOH → isocyanide, foul smell)", "Hinsberg test: distinguish 1°, 2°, 3° amines"] },
      { name: "Diazonium Salts", subtopics: ["Diazotisation: ArNH₂ + NaNO₂ + HCl, 0–5°C → ArN₂⁺Cl⁻", "Stability: aromatic >> aliphatic", "Reactions retaining N₂: coupling with phenols & aromatic amines → azo dyes", "Reactions losing N₂: Sandmeyer (ArCl, ArBr, ArCN using CuX/CuCN), Balz-Schiemann (ArF using HBF₄)", "Reduction → hydrazine", "Hydrolysis → phenol", "Gattermann (direct Cl/Br with Cu powder)"] },
      { name: "Aromatic Amines", subtopics: ["Aniline: basicity, acylation, sulfonation, electrophilic substitution (o/p director, but deactivated by acylation protection)", "Acetanilide: synthesis & use as intermediate in para-nitroaniline synthesis"] },
    ]
  },

  {
    chapter: "Biomolecules", tag: "OC", class: "12",
    topics: [
      { name: "Carbohydrates", subtopics: ["Classification: mono, oligo, polysaccharides", "Monosaccharides: glucose (open-chain: aldohexose; Haworth: α-D & β-D glucose), fructose (ketohexose)", "Mutarotation & anomers", "Reactions of glucose: with HNO₃ (saccharic acid), HCN, hydroxylamine, Fehling's, Tollen's; osazone formation", "Sucrose (non-reducing): α-D-glucose + β-D-fructose; inversion to glucose + fructose (invertase)", "Starch: amylose + amylopectin; iodine test", "Cellulose: β-1,4 glycosidic linkage; structural role"] },
      { name: "Proteins & Amino Acids", subtopics: ["α-amino acids: structure (NH₂ & COOH on α-carbon), zwitterion, isoelectric point", "Essential vs non-essential amino acids", "Peptide bond: CONH linkage, formation & hydrolysis", "Primary, secondary (α-helix, β-sheet), tertiary, quaternary structure", "Denaturation: causes, reversible vs irreversible", "Enzymes: specificity, active site, lock-and-key model"] },
      { name: "Nucleic Acids", subtopics: ["Nucleoside = base + sugar; Nucleotide = nucleoside + phosphate", "DNA: deoxyribose, A-T & G-C base pairing (Watson-Crick), double helix, antiparallel strands", "RNA: ribose, A-U & G-C pairing; types: mRNA, tRNA, rRNA", "Central dogma: DNA → (transcription) → RNA → (translation) → protein"] },
      { name: "Lipids", subtopics: ["Fats & oils: triglycerides (esters of glycerol + fatty acids)", "Saturated vs unsaturated fatty acids", "Saponification: base hydrolysis → soap + glycerol", "Phospholipids: bilayer, cell membrane structure", "Steroids: cholesterol structure (brief)"] },
      { name: "Vitamins & Hormones", subtopics: ["Fat-soluble vitamins: A, D, E, K (deficiency diseases)", "Water-soluble vitamins: B-complex, C (deficiency diseases)", "Hormones: classification — amino acid derivatives, peptide, steroid hormones (examples & functions)"] },
    ]
  },

  {
    chapter: "Polymers", tag: "OC", class: "12",
    topics: [
      { name: "Classification", subtopics: ["Natural vs synthetic polymers", "Addition (chain-growth) vs condensation (step-growth) polymers", "Homopolymer vs copolymer", "Linear, branched & cross-linked polymers", "Biodegradable vs non-biodegradable"] },
      { name: "Addition Polymers", subtopics: ["Free radical polymerisation: mechanism (initiation, propagation, termination)", "Polyethylene (LDPE, HDPE)", "Polypropylene, PVC, Teflon (PTFE)", "Polystyrene, polyacrylonitrile", "Rubber: natural (cis-1,4-polyisoprene) & vulcanisation (S crosslinks → harder)", "Synthetic rubbers: neoprene (Cl), Buna-S (butadiene + styrene), Buna-N (butadiene + acrylonitrile)"] },
      { name: "Condensation Polymers", subtopics: ["Nylon-6,6: adipic acid + hexamethylenediamine; amide linkage", "Nylon-6: caprolactam ring-opening", "Polyester: Terylene/Dacron (terephthalic acid + ethylene glycol; ester linkage)", "Bakelite: phenol + formaldehyde; thermosetting", "Glyptal: phthalic acid + glycol", "Melamine-formaldehyde resin"] },
      { name: "Rubber", subtopics: ["Natural rubber structure & limitations", "Vulcanisation: effect on properties", "Synthetic rubbers & their uses"] },
      { name: "Biodegradable Polymers", subtopics: ["PHBV (poly-β-hydroxybutyrate-co-β-hydroxyvalerate)", "Nylon-2-nylon-6: alternating copolymer", "Importance & applications"] },
    ]
  },

  {
    chapter: "Chemistry in Everyday Life", tag: "OC", class: "12",
    topics: [
      { name: "Drugs & Medicines", subtopics: ["Analgesics: narcotic (morphine, codeine) & non-narcotic (aspirin, paracetamol, ibuprofen)", "Tranquilisers: barbiturates, benzodiazepines (valium, librium)", "Antiseptics vs disinfectants: dettol, bithionol, chlorine, iodoform", "Antibiotics: bactericidal (penicillin) vs bacteriostatic (sulphadiazine)", "Antacids: NaHCO₃, Mg(OH)₂, Al(OH)₃, ranitidine, omeprazole", "Antihistamines: brompheniramine, terfenadine"] },
      { name: "Food Additives", subtopics: ["Preservatives: NaCl, sugar, sodium benzoate, BHA, BHT", "Artificial sweeteners: saccharin, aspartame, sucralose, alitame", "Food colours & antioxidants", "Edible oils vs vanaspati (hydrogenation)"] },
      { name: "Cleansing Agents", subtopics: ["Soaps: sodium salts of higher fatty acids; saponification; micelle formation", "Synthetic detergents: anionic (sodium lauryl sulphate), cationic (cetyltrimethylammonium bromide), non-ionic (polyethylene glycol esters)", "Biodegradable vs non-biodegradable detergents"] },
    ]
  },

  // ── INORGANIC CHEMISTRY ──────────────────────────────────────────────────
  {
    chapter: "Periodic Table & Periodicity", tag: "IC", class: "11",
    topics: [
      { name: "Modern Periodic Law & Structure", subtopics: ["Modern periodic law: properties are periodic functions of atomic number", "Long form of periodic table: 18 groups, 7 periods", "s, p, d, f block elements"] },
      { name: "Periodic Trends", subtopics: ["Atomic & ionic radius: trends across period & down group", "Ionisation enthalpy (IE₁, IE₂): trends, exceptions (Be>B, N>O, Mg>Al)", "Electron gain enthalpy: trends, Cl has highest (not F)", "Electronegativity: Pauling scale, trends", "Valency: variation across period"] },
      { name: "Anomalous Properties", subtopics: ["Diagonal relationship: Li-Mg, Be-Al, B-Si", "Anomalous behaviour of first member: Li, Be, B, C, N, O, F vs rest of group"] },
    ]
  },

  {
    chapter: "Hydrogen", tag: "IC", class: "11",
    topics: [
      { name: "Position & Occurrence", subtopics: ["Unique position: resembles alkali metals & halogens", "Isotopes: protium, deuterium (D₂O: heavy water), tritium"] },
      { name: "Preparation & Properties", subtopics: ["Lab preparation: Zn + H₂SO₄ (dil)", "Industrial: steam reforming of methane, water-gas shift", "Electrolysis of water", "Reactions: with F₂ (even dark), Cl₂ (light), N₂ (Haber), O₂ (combustion)"] },
      { name: "Hydrides", subtopics: ["Ionic (saline): NaH, CaH₂ — reducing agents", "Covalent: H₂O, NH₃, HF, H₂S, CH₄", "Metallic (interstitial): TiH₂, PdH₀.₉ — non-stoichiometric", "Acidic strength of hydrides: HF < HCl < HBr < HI (periodic trend vs H₂O)"] },
      { name: "Water & Hydrogen Peroxide", subtopics: ["Structure of ice (H-bonded network)", "Hard & soft water; temporary & permanent hardness; removal methods", "H₂O₂ preparation: BaO₂ + H₂SO₄; properties: weak acid, oxidising & reducing agent, bleaching", "Structure of H₂O₂: non-planar (butterfly), O-O bond"] },
    ]
  },

  {
    chapter: "s-Block Elements", tag: "IC", class: "11",
    topics: [
      { name: "Alkali Metals (Group 1)", subtopics: ["General properties: soft, low MP, low IE", "Reactivity with water, O₂, halogens", "Oxides: Li₂O, Na₂O₂, KO₂ (superoxide)", "Hydroxides: strong bases, NaOH by Chlor-alkali process", "Carbonates & bicarbonates: stability order", "Anomalous properties of Li (resembles Mg)"] },
      { name: "Sodium Compounds", subtopics: ["NaOH (caustic soda): Chlor-alkali process, properties, uses", "Na₂CO₃ (washing soda): Solvay process, Na₂CO₃·10H₂O (decahydrate)", "NaHCO₃ (baking soda): preparation, uses", "NaCl: common salt, uses"] },
      { name: "Alkaline Earth Metals (Group 2)", subtopics: ["General properties vs Group 1: harder, higher MP, +2 state only", "Reactivity trend down group", "Anomalous behaviour of Be (resembles Al)", "Mg & Ca: reactions with O₂, H₂O, acids"] },
      { name: "Calcium Compounds", subtopics: ["CaO (quicklime): preparation, slaking, uses", "Ca(OH)₂ (slaked lime): uses", "CaCO₃ (limestone): decomposition, Mortar", "CaSO₄ (gypsum) → CaSO₄·½H₂O (Plaster of Paris): setting reaction", "Bleaching powder: Ca(OCl)Cl preparation, uses"] },
    ]
  },

  {
    chapter: "p-Block Elements (13–14)", tag: "IC", class: "12", class: "12",
    topics: [
      { name: "Group 13 — Boron Family", subtopics: ["Electronic config: ns²np¹", "Anomalous behaviour of B (small size, high IE, non-metallic)", "Boron: allotropes, B₂H₆ (diborane: 3-centre 2-electron bond), BF₃ (Lewis acid)", "Boric acid H₃BO₃: structure (planar), weak acid, uses", "Borax Na₂B₄O₇·10H₂O: structure, borax bead test", "Aluminium: reaction with NaOH, aluminothermy, alums, Al₂O₃ (amphoteric)"] },
      { name: "Group 14 — Carbon Family", subtopics: ["Electronic config: ns²np²", "Allotropes of carbon: diamond (sp³, 3D covalent), graphite (sp², layered, conductor), fullerene C₆₀ (soccer-ball)", "CO: preparation, properties (reducing agent, poisonous)", "CO₂: acidic oxide, structure (linear), green-house gas", "Silicates: SiO₄⁴⁻ tetrahedron, types (ortho, pyro, chain, sheet, 3D)", "Silicon chemistry: SiO₂ structure, silicones (Si-O-Si backbone)"] },
    ]
  },

  {
    chapter: "p-Block Elements (15–18)", tag: "IC", class: "12",
    topics: [
      { name: "Group 15 — Nitrogen Family", subtopics: ["Electronic config: ns²np³; half-filled p, extra stability", "N₂: inertness (triple bond), preparation, uses", "NH₃: preparation (Haber), structure (pyramidal), basic nature, reactions", "HNO₂ vs HNO₃: oxidising power", "Oxides of N: N₂O, NO, N₂O₃, NO₂ (brown), N₂O₅ — structures & properties", "HNO₃: Ostwald process; reactions — with metals, non-metals, organic compounds; aqua regia", "Phosphorus allotropes: white (P₄), red, black", "Phosphorus hydride PH₃, chlorides PCl₃ & PCl₅ (structures, hydrolysis)", "Oxoacids of P: H₃PO₄, H₃PO₃ (diprotic), H₃PO₂ (monoprotic), pyrophosphoric acid"] },
      { name: "Group 16 — Oxygen Family", subtopics: ["Oxygen: paramagnetic (2 unpaired e⁻ in degenerate π* MOs), allotrope ozone O₃", "O₃: structure (bent, resonance), preparation, oxidising power, decomposition, uses", "Sulphur allotropes: rhombic & monoclinic (stable forms)", "H₂S: preparation, weak acid, reducing agent", "SO₂: structure (bent), reducing agent, bleaching, uses", "SO₃: structure, strong oxidising agent", "H₂SO₄: Contact process, oleum, reactions — dilute (acid) & conc (oxidising, dehydrating, sulphonating)", "Oxoacids of S: H₂SO₃, H₂SO₄, H₂S₂O₇ (oleum), H₂S₂O₈ (peroxodisulphuric), thiosulphate Na₂S₂O₃"] },
      { name: "Group 17 — Halogens", subtopics: ["General: high EA, −1 oxidation state, diatomic", "F₂: no positive oxidation state, oxidises H₂O, HF is weakest acid (in water) but strongest H-bond", "Cl₂: preparation (MnO₂ + HCl, electrolysis), reactions, bleaching (moist)", "HF, HCl, HBr, HI: acidic strength, reducing power, thermal stability trends", "Interhalogen compounds: XX' types (ClF, BrF₃, IF₅, IF₇)", "Oxoacids of Cl: HOCl > HOClO > HOClO₂ > HOClO₃ (acidic strength)", "Bleaching powder & its reactions"] },
      { name: "Group 18 — Noble Gases", subtopics: ["General properties: monoatomic, low BP, inert", "Occurrence & isolation (liquefaction & fractional distillation)", "Compounds of Xe: XeF₂ (linear), XeF₄ (square planar), XeF₆ (distorted octahedral), XeO₃ (pyramidal), XeOF₄ (square pyramidal)", "Uses of noble gases: He (balloons, MRI), Ne (signs), Ar (welding), Kr, Xe (flash lamps), Rn (radiotherapy)"] },
    ]
  },

  {
    chapter: "d & f Block Elements", tag: "IC", class: "12",
    topics: [
      { name: "d-Block — General Properties", subtopics: ["Electronic config: (n-1)d¹⁻¹⁰ ns⁰⁻²", "Variable oxidation states: reason, common states for Sc-Zn", "Metallic character, high MP & BP", "Paramagnetism: unpaired electrons, magnetic moment μ = √(n(n+2)) BM", "Catalytic activity: reasons (variable OS, adsorption)", "Coloured ions: d-d transitions, charge transfer", "Ability to form complexes", "Interstitial compounds, alloy formation"] },
      { name: "Important Compounds of Transition Metals", subtopics: ["KMnO₄: preparation (fusion → MnO₄²⁻ → MnO₄⁻), oxidising agent in acidic & alkaline medium, reactions", "K₂Cr₂O₇: preparation from chromite ore, dichromate ⇌ chromate equilibrium (pH dependent), oxidising reactions", "CuSO₄·5H₂O: blue vitriol, reactions", "FeSO₄·7H₂O: green vitriol"] },
      { name: "f-Block Elements", subtopics: ["Lanthanides (4f): Ce to Lu; lanthanide contraction — cause (poor shielding of 4f) & consequences", "Actinides (5f): Th to Lr; radioactivity, transuranic elements", "Comparison: lanthanides vs actinides"] },
    ]
  },

  {
    chapter: "Coordination Compounds", tag: "IC", class: "12",
    topics: [
      { name: "Basic Concepts & Terminology", subtopics: ["Central atom/ion & ligands", "Ligand types: monodentate, bidentate (en, ox), polydentate (EDTA), ambidentate (SCN⁻/NCS⁻)", "Coordination number", "Inner & outer sphere complexes", "Charge of complex & oxidation state of metal calculation"] },
      { name: "IUPAC Nomenclature", subtopics: ["Order of listing ligands (alphabetical)", "Naming: anionic ligands (-o), neutral ligands (aqua, ammine, carbonyl, nitrosyl)", "Name of metal: IUPAC name with oxidation state in parentheses", "Anionic complexes: -ate suffix for metal", "Examples: [Fe(CN)₆]⁴⁻, [Co(NH₃)₆]³⁺, [CrCl₂(en)₂]⁺"] },
      { name: "Isomerism in Complexes", subtopics: ["Structural isomerism: ionisation, linkage, coordination, solvate (hydrate)", "Stereoisomerism: geometrical (cis-trans) in square planar & octahedral", "Optical isomerism: chiral complexes (e.g. [Co(en)₃]³⁺)", "Mer & fac isomers in octahedral MA₃B₃"] },
      { name: "Bonding Theories", subtopics: ["VBT: hybridisation (sp³, dsp², sp³d², d²sp³), inner & outer orbital complex", "Crystal Field Theory (CFT): splitting of d-orbitals in octahedral (t₂g & eg, Δ₀), tetrahedral (Δt = 4/9 Δ₀), square planar", "High spin vs low spin: pairing energy P vs Δ₀", "Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO", "CFSE calculation"] },
      { name: "Stability & Applications", subtopics: ["Stability constants & chelate effect", "Labile vs inert complexes", "Applications: haemoglobin (Fe-porphyrin), chlorophyll (Mg), vitamin B₁₂ (Co)", "Extraction of metals: Ag & Au by cyanide process", "EDTA in analytical chemistry & medicine (chelation therapy)", "Anticancer drugs: cisplatin cis-[Pt(NH₃)₂Cl₂]"] },
    ]
  },

  {
    chapter: "Metallurgy", tag: "IC", class: "12",
    topics: [
      { name: "Occurrence & Terminology", subtopics: ["Minerals, ores, gangue", "Native ores vs combined ores", "Important ores: Fe (haematite Fe₂O₃, magnetite Fe₃O₄), Cu (copper pyrites CuFeS₂), Al (bauxite Al₂O₃·2H₂O), Pb (galena PbS), Zn (zinc blende ZnS)"] },
      { name: "Concentration of Ores", subtopics: ["Hand-picking, gravity separation", "Froth flotation (sulphide ores)", "Leaching (Bayer's process for Al, cyanide for Ag/Au)", "Magnetic separation (Fe₃O₄)"] },
      { name: "Extraction (Reduction)", subtopics: ["Calcination: carbonate ores → oxide + CO₂", "Roasting: sulphide ores → oxide + SO₂", "Reduction with C (coke): Fe in blast furnace, Zn", "Reduction with Al (thermite/aluminothermy)", "Reduction with H₂: Ni from NiO", "Electrolytic reduction: Al (Hall-Heroult), Na (Down's cell), Cu (electrorefining)"] },
      { name: "Refining Methods", subtopics: ["Distillation (Zn, Hg)", "Liquation (Sn, Bi)", "Electrolytic refining (Cu, Ag, Au, Al)", "Zone refining (Ge, Si): ultra-pure semiconductors", "Van Arkel method (Ti, Zr): CVD via TiI₄", "Mond's process (Ni): volatile Ni(CO)₄ decomposition", "Chromatography"] },
      { name: "Iron & Steel", subtopics: ["Blast furnace zones: combustion, reduction, slag formation", "Pig iron, cast iron, wrought iron, steel — carbon content & properties", "Bessemer & basic oxygen processes for steelmaking"] },
    ]
  },

  {
    chapter: "Qualitative Analysis (Salt Analysis)", tag: "IC", class: "12",
    topics: [
      { name: "Dry Tests", subtopics: ["Colour of salt: Cu (blue/green), Fe³⁺ (yellow), Fe²⁺ (pale green), Cr (green), Mn (pink), Co (dark)", "Flame test: Li (crimson), Na (golden yellow), K (violet), Ca (brick red), Sr (crimson), Ba (apple green)", "Charcoal cavity test, cobalt nitrate test"] },
      { name: "Wet Tests — Anions (Acid Radicals)", subtopics: ["Dilute H₂SO₄ group: CO₃²⁻ (CO₂, lime water), NO₂⁻ (brown fumes), SO₃²⁻ (SO₂ smell), S²⁻ (H₂S, lead acetate), CH₃COO⁻ (vinegar smell)", "Conc H₂SO₄ group: Cl⁻ (HCl, pungent), Br⁻ (orange-brown HBr), I⁻ (violet HI + I₂), NO₃⁻ (brown ring test), C₂O₄²⁻ (CO₂+CO), SO₄²⁻ (white fumes SO₃)", "Special tests: Cl⁻ (AgNO₃ white ppt), Br⁻ (pale yellow ppt), I⁻ (yellow ppt), SO₄²⁻ (BaCl₂ white ppt), PO₄³⁻ (ammonium molybdate, yellow ppt)"] },
      { name: "Wet Tests — Cations (Basic Radicals)", subtopics: ["NH₄⁺: NaOH + heat → NH₃ (turns litmus, pungent)", "Group I (HCl ppt): Pb²⁺ (white PbCl₂), Ag⁺ (white AgCl), Hg₂²⁺", "Group II (H₂S, dil HCl): Pb²⁺, Cu²⁺ (black CuS), Bi³⁺, Hg²⁺, As³⁺, Sb³⁺, Sn²⁺", "Group III (NH₄OH + NH₄Cl): Fe³⁺ (red-brown Fe(OH)₃), Al³⁺ (white Al(OH)₃), Cr³⁺ (green Cr(OH)₃)", "Group IV (H₂S, NH₄OH): Co²⁺ (black CoS), Ni²⁺ (black NiS), Mn²⁺ (pink MnS), Zn²⁺ (white ZnS)", "Group V (NH₄)₂CO₃: Ba²⁺ (white BaCO₃), Sr²⁺, Ca²⁺", "Group VI (no ppt): Mg²⁺ (white Mg(OH)₂ with NaOH), NH₄⁺, Na⁺, K⁺"] },
    ]
  },

  {
    chapter: "Environmental Chemistry", tag: "IC", class: "11",
    topics: [
      { name: "Atmospheric Pollution", subtopics: ["Tropospheric pollution: CO, CO₂, NOₓ, SO₂, SPM, hydrocarbons", "Smog: classical (SO₂ + smoke) & photochemical (NO₂ + hydrocarbons + sunlight → O₃, PAN)", "Acid rain: SO₂ + NOₓ + H₂O → H₂SO₄ + HNO₃; pH < 5.6", "Global warming & greenhouse gases: CO₂, CH₄, N₂O, CFCs; greenhouse effect", "Ozone layer depletion: CFCs → Cl• catalytic cycle, Antarctic ozone hole"] },
      { name: "Water Pollution", subtopics: ["Sources: industrial effluents (heavy metals, acids), agricultural run-off (fertilisers, pesticides), sewage", "BOD (biological oxygen demand): measure of organic pollution", "Eutrophication: excess N & P → algal bloom → O₂ depletion", "Heavy metal contamination: Hg (Minamata), Pb, Cd, As", "Water treatment: sedimentation, coagulation, chlorination, ozonation, UV"] },
      { name: "Soil Pollution & Remediation", subtopics: ["Pesticides (DDT, BHC), herbicides, fertilisers", "Industrial waste & heavy metals in soil", "Bioremediation, phytoremediation"] },
      { name: "Green Chemistry", subtopics: ["12 principles of green chemistry (conceptual)", "Examples: dry cleaning with liquid CO₂ (vs perchloroethylene), safer solvents, atom economy"] },
    ]
  },

];