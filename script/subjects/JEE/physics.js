// ── PHYSICS DATA ──────────────────────────────────────────────────────────
window.PHY_DATA = [
  // ── MECHANICS ────────────────────────────────────────────────────────────
  {
    chapter: "Units & Measurement",
    tag: "Mechanics",
    topics: [
      {
        name: "Physical Quantities",
        subtopics: [
          "Fundamental quantities",
          "Derived quantities",
          "Supplementary quantities",
        ],
      },
      {
        name: "Systems of Units",
        subtopics: ["CGS", "MKS", "SI units", "FPS"],
      },
      {
        name: "Dimensional Analysis",
        subtopics: [
          "Dimensional formula & equation",
          "Checking homogeneity",
          "Unit conversion",
          "Deriving relations",
        ],
      },
      {
        name: "Errors in Measurement",
        subtopics: [
          "Absolute, relative & percentage error",
          "Combination of errors: sum, product, power",
          "Least count error",
        ],
      },
      {
        name: "Significant Figures",
        subtopics: [
          "Rules for counting sig figs",
          "Rounding off",
          "Arithmetic with sig figs",
        ],
      },
      {
        name: "Instruments",
        subtopics: [
          "Vernier calipers: least count, reading",
          "Screw gauge (micrometer): least count, reading",
          "Simple pendulum for g",
        ],
      },
    ],
  },

  {
    chapter: "Kinematics",
    tag: "Mechanics",
    topics: [
      {
        name: "Motion in a Straight Line",
        subtopics: [
          "Position, displacement, distance",
          "Average & instantaneous speed/velocity",
          "Uniform & non-uniform acceleration",
          "Equations of motion",
          "x-t, v-t, a-t graphs",
        ],
      },
      {
        name: "Motion Under Gravity",
        subtopics: [
          "Free fall",
          "Vertical throw upward",
          "Objects dropped from height",
        ],
      },
      {
        name: "Motion in a Plane — Vectors",
        subtopics: [
          "Scalar vs vector",
          "Addition & subtraction",
          "Resolution of vectors",
          "Unit vectors î ĵ k̂",
          "Dot product",
          "Cross product",
        ],
      },
      {
        name: "Projectile Motion",
        subtopics: [
          "Horizontal projectile",
          "Oblique projectile",
          "Time of flight, range, max height",
          "Projectile on inclined plane",
        ],
      },
      {
        name: "Uniform Circular Motion",
        subtopics: [
          "Angular displacement, velocity, acceleration",
          "Centripetal acceleration",
          "Relation: v = rω",
        ],
      },
      {
        name: "Relative Motion",
        subtopics: [
          "Relative velocity in 1D & 2D",
          "Rain-man problems",
          "River-boat problems",
        ],
      },
    ],
  },

  {
    chapter: "Laws of Motion",
    tag: "Mechanics",
    topics: [
      {
        name: "Newton's Laws",
        subtopics: [
          "1st law: inertia & frame of reference",
          "2nd law: F = ma, impulse",
          "3rd law: action-reaction pairs",
        ],
      },
      {
        name: "Free Body Diagram",
        subtopics: [
          "Drawing FBD",
          "Equilibrium problems",
          "Acceleration problems: Atwood machine, pulley systems",
        ],
      },
      {
        name: "Types of Forces",
        subtopics: [
          "Weight & Normal force",
          "Tension in strings",
          "Spring force (Hooke's law)",
          "Pseudo force in non-inertial frames",
        ],
      },
      {
        name: "Friction",
        subtopics: [
          "Static, kinetic & rolling friction",
          "Laws of friction, μ",
          "Angle of friction & angle of repose",
          "Motion on rough inclined plane",
        ],
      },
      {
        name: "Dynamics of Circular Motion",
        subtopics: [
          "Centripetal force",
          "Vehicle on level road",
          "Banking of roads",
          "Conical pendulum",
          "Vertical circular motion: min speed at top",
        ],
      },
      {
        name: "Conservation of Linear Momentum",
        subtopics: ["Isolated system", "Explosion problems", "Recoil of gun"],
      },
    ],
  },

  {
    chapter: "Work, Energy & Power",
    tag: "Mechanics",
    topics: [
      {
        name: "Work",
        subtopics: [
          "Work by constant force",
          "Work by variable force (area under F-x graph)",
          "Work by gravity, spring, friction",
        ],
      },
      {
        name: "Energy",
        subtopics: [
          "Kinetic energy",
          "Potential energy: gravitational & spring",
          "Work-energy theorem",
        ],
      },
      {
        name: "Conservation of Mechanical Energy",
        subtopics: [
          "Conservative vs non-conservative forces",
          "Energy conservation in spring-mass system",
          "Motion in vertical circle",
        ],
      },
      { name: "Power", subtopics: ["Average & instantaneous power", "P = Fv"] },
      {
        name: "Collisions",
        subtopics: [
          "Elastic collision: 1D & 2D",
          "Inelastic collision",
          "Perfectly inelastic collision",
          "Coefficient of restitution",
        ],
      },
    ],
  },

  {
    chapter: "Rotational Motion",
    tag: "Mechanics",
    topics: [
      {
        name: "Centre of Mass",
        subtopics: [
          "COM of 2-particle system",
          "COM of rigid bodies",
          "COM of geometrical shapes",
          "Motion of COM",
        ],
      },
      {
        name: "Kinematics of Rotation",
        subtopics: [
          "Angular displacement, velocity, acceleration",
          "Equations of rotational motion",
          "Rolling without slipping: v = rω",
        ],
      },
      {
        name: "Torque & Angular Momentum",
        subtopics: [
          "Torque: τ = r × F",
          "Angular momentum: L = Iω = r × p",
          "Newton's 2nd law for rotation: τ = Iα",
          "Conservation of angular momentum",
        ],
      },
      {
        name: "Moment of Inertia",
        subtopics: [
          "Definition & physical meaning",
          "MI of standard bodies: rod, ring, disc, sphere, hollow sphere, cylinder",
          "Parallel axis theorem",
          "Perpendicular axis theorem",
        ],
      },
      {
        name: "Rolling Motion",
        subtopics: [
          "Pure rolling: KE = ½mv² + ½Iω²",
          "Rolling on inclined plane",
          "Condition for rolling without slipping",
        ],
      },
      {
        name: "Equilibrium of Rigid Bodies",
        subtopics: [
          "Translational equilibrium: ΣF = 0",
          "Rotational equilibrium: Στ = 0",
          "Ladder problems, see-saw problems",
        ],
      },
    ],
  },

  {
    chapter: "Gravitation",
    tag: "Mechanics",
    topics: [
      {
        name: "Newton's Law of Gravitation",
        subtopics: [
          "Universal law",
          "Gravitational constant G",
          "Superposition principle",
        ],
      },
      {
        name: "Acceleration due to Gravity",
        subtopics: [
          "g at surface",
          "Variation with altitude",
          "Variation with depth",
          "Effect of Earth's rotation",
        ],
      },
      {
        name: "Gravitational Field & Potential",
        subtopics: [
          "Gravitational field intensity",
          "Gravitational potential",
          "Potential energy: U = -GMm/r",
          "Relation: g = -dV/dr",
        ],
      },
      {
        name: "Escape Velocity & Orbital Motion",
        subtopics: [
          "Escape velocity derivation",
          "Orbital velocity",
          "Time period of satellite",
          "Energy of satellite: KE, PE, total",
        ],
      },
      {
        name: "Kepler's Laws",
        subtopics: [
          "Law of orbits (ellipse)",
          "Law of areas (equal areas)",
          "Law of periods (T² ∝ r³)",
        ],
      },
      {
        name: "Geostationary & Polar Satellites",
        subtopics: [
          "Geostationary orbit conditions",
          "Polar satellites",
          "GPS concept",
        ],
      },
    ],
  },

  {
    chapter: "Properties of Solids & Fluids",
    tag: "Mechanics",
    topics: [
      {
        name: "Elasticity",
        subtopics: [
          "Stress & strain",
          "Hooke's law",
          "Young's modulus",
          "Bulk modulus",
          "Modulus of rigidity",
          "Poisson's ratio",
          "Elastic potential energy",
        ],
      },
      {
        name: "Fluid Statics",
        subtopics: [
          "Pressure in a fluid: P = ρgh",
          "Pascal's law & applications (hydraulic press)",
          "Archimedes' principle",
          "Buoyancy & floating bodies",
        ],
      },
      {
        name: "Fluid Dynamics",
        subtopics: [
          "Streamline & turbulent flow",
          "Equation of continuity: A₁v₁ = A₂v₂",
          "Bernoulli's theorem & applications",
          "Torricelli's theorem (efflux speed)",
          "Venturimeter",
        ],
      },
      {
        name: "Viscosity",
        subtopics: [
          "Coefficient of viscosity η",
          "Stoke's law",
          "Terminal velocity",
          "Reynolds number",
        ],
      },
      {
        name: "Surface Tension",
        subtopics: [
          "Surface energy & surface tension",
          "Angle of contact",
          "Excess pressure in drop & bubble",
          "Capillary rise: h = 2Tcosθ/ρrg",
        ],
      },
    ],
  },

  // ── THERMODYNAMICS ────────────────────────────────────────────────────────
  {
    chapter: "Thermal Properties of Matter",
    tag: "Thermo",
    topics: [
      {
        name: "Temperature & Thermal Expansion",
        subtopics: [
          "Temperature scales: Celsius, Fahrenheit, Kelvin",
          "Linear, area & volume expansion",
          "Anomalous expansion of water",
          "Bimetallic strip",
        ],
      },
      {
        name: "Calorimetry",
        subtopics: [
          "Specific heat capacity",
          "Water equivalent",
          "Latent heat",
          "Calorimeter & heat exchange",
        ],
      },
      {
        name: "Heat Transfer",
        subtopics: [
          "Conduction: Fourier's law, thermal resistance, R-value",
          "Convection: natural & forced",
          "Radiation: Stefan's law, emissivity, blackbody",
        ],
      },
      {
        name: "Newton's Law of Cooling",
        subtopics: ["Statement", "Exponential cooling", "Applications"],
      },
      {
        name: "Kirchhoff's Law of Radiation",
        subtopics: [
          "Good absorber = good emitter",
          "Wien's displacement law",
          "Solar constant",
        ],
      },
    ],
  },

  {
    chapter: "Thermodynamics",
    tag: "Thermo",
    topics: [
      {
        name: "Basic Concepts",
        subtopics: [
          "System, surroundings, state variables",
          "Zeroth law & thermal equilibrium",
          "Internal energy",
          "Work done by gas: W = ∫P dV",
        ],
      },
      {
        name: "First Law of Thermodynamics",
        subtopics: ["ΔU = Q - W", "Application to different processes"],
      },
      {
        name: "Thermodynamic Processes",
        subtopics: [
          "Isothermal process",
          "Adiabatic process",
          "Isochoric (isovolumetric) process",
          "Isobaric process",
          "Polytropic process",
        ],
      },
      {
        name: "Heat Engines & Efficiency",
        subtopics: [
          "Carnot engine",
          "Carnot efficiency: η = 1 - T₂/T₁",
          "Refrigerators & COP",
        ],
      },
      {
        name: "Second Law of Thermodynamics",
        subtopics: [
          "Kelvin-Planck statement",
          "Clausius statement",
          "Entropy concept",
        ],
      },
    ],
  },

  {
    chapter: "Kinetic Theory of Gases",
    tag: "Thermo",
    topics: [
      {
        name: "Ideal Gas & Kinetic Theory",
        subtopics: [
          "Ideal gas equation: PV = nRT",
          "Kinetic assumptions",
          "Pressure from molecular motion: P = ⅓ρv²",
        ],
      },
      {
        name: "Molecular Speeds",
        subtopics: [
          "RMS speed: vᵣₘₛ = √(3RT/M)",
          "Mean speed: v̄ = √(8RT/πM)",
          "Most probable speed: vₘₚ = √(2RT/M)",
          "Maxwell distribution",
        ],
      },
      {
        name: "Degrees of Freedom & Equipartition",
        subtopics: [
          "DoF for mono, di, polyatomic gases",
          "Equipartition theorem: ½kT per DoF",
          "Internal energy: U = f/2 nRT",
        ],
      },
      {
        name: "Specific Heats of Gases",
        subtopics: [
          "Cv & Cp for ideal gas",
          "γ = Cp/Cv for different gases",
          "Mayer's relation: Cp - Cv = R",
        ],
      },
      {
        name: "Mean Free Path",
        subtopics: [
          "Definition",
          "Expression for mean free path",
          "Avogadro's number determination",
        ],
      },
    ],
  },

  // ── WAVES ─────────────────────────────────────────────────────────────────
  {
    chapter: "Oscillations (SHM)",
    tag: "Waves",
    topics: [
      {
        name: "Simple Harmonic Motion",
        subtopics: [
          "Definition: F = -kx",
          "Displacement: x = A sin(ωt + φ)",
          "Velocity & acceleration in SHM",
          "Phase & phase difference",
        ],
      },
      {
        name: "Energy in SHM",
        subtopics: [
          "KE = ½mω²(A²-x²)",
          "PE = ½mω²x²",
          "Total energy = ½mω²A²",
          "Energy-position graph",
        ],
      },
      {
        name: "Simple Pendulum",
        subtopics: [
          "Time period: T = 2π√(L/g)",
          "Effective length",
          "Second's pendulum",
          "Pendulum in accelerating lift",
        ],
      },
      {
        name: "Spring-Mass System",
        subtopics: [
          "Horizontal spring",
          "Vertical spring",
          "Springs in series & parallel",
          "Reduced mass for two-body SHM",
        ],
      },
      {
        name: "Damped & Forced Oscillations",
        subtopics: ["Damped SHM", "Forced oscillations", "Resonance"],
      },
    ],
  },

  {
    chapter: "Waves",
    tag: "Waves",
    topics: [
      {
        name: "Wave Motion Basics",
        subtopics: [
          "Transverse & longitudinal waves",
          "Wave parameters: A, λ, T, f, ω, k",
          "Wave equation: y = A sin(kx - ωt)",
          "Wave speed: v = fλ",
        ],
      },
      {
        name: "Speed of Waves",
        subtopics: [
          "Speed in string: v = √(T/μ)",
          "Speed in liquid: v = √(B/ρ)",
          "Speed of sound in gas: v = √(γP/ρ)",
          "Newton's formula & Laplace correction",
        ],
      },
      {
        name: "Superposition & Interference",
        subtopics: [
          "Principle of superposition",
          "Constructive & destructive interference",
          "Path difference & phase difference",
        ],
      },
      {
        name: "Standing Waves",
        subtopics: [
          "Formation of standing waves",
          "Nodes & antinodes",
          "Standing waves in string",
          "Standing waves in open & closed pipes",
          "Harmonics & overtones",
        ],
      },
      {
        name: "Beats",
        subtopics: [
          "Beat frequency = |f₁ - f₂|",
          "Application in tuning instruments",
        ],
      },
      {
        name: "Doppler Effect",
        subtopics: [
          "Source moving, observer stationary",
          "Observer moving, source stationary",
          "Both moving",
          "Applications",
        ],
      },
    ],
  },

  // ── OPTICS ────────────────────────────────────────────────────────────────
  {
    chapter: "Ray Optics",
    tag: "Optics",
    topics: [
      {
        name: "Reflection",
        subtopics: [
          "Laws of reflection",
          "Plane mirror: image characteristics",
          "Spherical mirrors: concave & convex",
          "Mirror formula: 1/v + 1/u = 1/f",
          "Magnification",
        ],
      },
      {
        name: "Refraction",
        subtopics: [
          "Snell's law: n₁sinθ₁ = n₂sinθ₂",
          "Refractive index",
          "Real & apparent depth",
          "Lateral shift in glass slab",
          "Total internal reflection & critical angle",
        ],
      },
      {
        name: "Prism",
        subtopics: [
          "Refraction through prism",
          "Angle of minimum deviation: n = sin((A+δₘ)/2) / sin(A/2)",
          "Dispersion",
          "Cauchy's relation",
        ],
      },
      {
        name: "Lenses",
        subtopics: [
          "Thin lens formula: 1/v - 1/u = 1/f",
          "Lens maker's equation",
          "Power of lens: P = 1/f",
          "Combination of lenses",
          "Magnification",
        ],
      },
      {
        name: "Optical Instruments",
        subtopics: [
          "Simple microscope: m = 1 + D/f",
          "Compound microscope: magnification",
          "Astronomical telescope: m = -f₀/fₑ",
          "Galilean telescope",
          "Eye: defects & correction",
        ],
      },
      {
        name: "Refraction at Spherical Surface",
        subtopics: ["n₁/u + n₂/v = (n₂-n₁)/R", "Derivation & applications"],
      },
    ],
  },

  {
    chapter: "Wave Optics",
    tag: "Optics",
    topics: [
      {
        name: "Nature of Light & Wavefront",
        subtopics: [
          "Wave theory of light",
          "Huygens' principle",
          "Plane & spherical wavefronts",
        ],
      },
      {
        name: "Interference",
        subtopics: [
          "Coherent sources",
          "Young's double slit experiment (YDSE)",
          "Fringe width: β = λD/d",
          "Conditions for bright & dark fringes",
          "Lloyd's mirror",
        ],
      },
      {
        name: "Diffraction",
        subtopics: [
          "Single slit diffraction",
          "Central maximum width",
          "Secondary maxima & minima",
          "Difference: interference vs diffraction",
        ],
      },
      {
        name: "Polarisation",
        subtopics: [
          "Transverse nature of light",
          "Polarisation by reflection: Brewster's law",
          "Malus's law: I = I₀cos²θ",
          "Polaroids & applications",
        ],
      },
    ],
  },

  // ── E&M ───────────────────────────────────────────────────────────────────
  {
    chapter: "Electrostatics",
    tag: "E&M",
    topics: [
      {
        name: "Electric Charge & Coulomb's Law",
        subtopics: [
          "Properties of charge: quantisation, conservation",
          "Coulomb's law: F = kq₁q₂/r²",
          "Superposition principle",
          "Continuous charge distributions",
        ],
      },
      {
        name: "Electric Field",
        subtopics: [
          "E due to point charge",
          "E due to dipole (axial & equatorial)",
          "E due to ring, disc, infinite sheet",
          "Electric field lines: properties",
        ],
      },
      {
        name: "Gauss's Law",
        subtopics: [
          "Electric flux: Φ = ∮E·dA",
          "Gauss's law",
          "E due to infinite wire, infinite plane, spherical shell, solid sphere",
        ],
      },
      {
        name: "Electric Potential & PE",
        subtopics: [
          "Potential: V = kq/r",
          "Potential difference",
          "Potential due to dipole",
          "Relation: E = -dV/dr",
          "Equipotential surfaces",
          "PE of system of charges",
        ],
      },
      {
        name: "Capacitors",
        subtopics: [
          "Capacitance: C = Q/V",
          "Parallel plate capacitor",
          "Effect of dielectric: C = κC₀",
          "Series & parallel combination",
          "Energy stored: U = ½CV²",
          "Van de Graaff generator",
        ],
      },
      {
        name: "Conductors & Dielectrics",
        subtopics: [
          "Properties of conductors in electrostatic equilibrium",
          "Polarisation in dielectrics",
          "Electric susceptibility",
          "Gauss's law in dielectrics",
        ],
      },
    ],
  },

  {
    chapter: "Current Electricity",
    tag: "E&M",
    topics: [
      {
        name: "Current & Drift Velocity",
        subtopics: [
          "Electric current: I = dQ/dt",
          "Drift velocity",
          "Relation: I = nAevd",
          "Mobility",
        ],
      },
      {
        name: "Ohm's Law & Resistance",
        subtopics: [
          "Ohm's law: V = IR",
          "Resistivity & conductivity",
          "I-V characteristics: ohmic & non-ohmic",
          "Temperature dependence of resistance",
        ],
      },
      {
        name: "Combinations of Resistors",
        subtopics: [
          "Series: R = R₁ + R₂ + ...",
          "Parallel: 1/R = 1/R₁ + 1/R₂ + ...",
          "Mixed combinations",
          "Infinite ladder networks",
        ],
      },
      {
        name: "Cells & EMF",
        subtopics: [
          "EMF & internal resistance",
          "Terminal voltage",
          "Cells in series & parallel",
          "Max power transfer theorem",
        ],
      },
      {
        name: "Kirchhoff's Laws",
        subtopics: [
          "KCL: ΣI = 0 at junction",
          "KVL: ΣV = 0 in loop",
          "Solving circuits",
          "Wheatstone bridge",
          "Metre bridge",
        ],
      },
      {
        name: "Heating Effects",
        subtopics: [
          "Joule's heating: H = I²Rt",
          "Electrical power: P = VI",
          "Fuse wire",
          "Domestic electrical circuits",
        ],
      },
      {
        name: "Measuring Instruments",
        subtopics: [
          "Galvanometer",
          "Ammeter: shunt resistor",
          "Voltmeter: series resistor",
          "Potentiometer: principle & applications",
        ],
      },
    ],
  },

  {
    chapter: "Magnetic Effects of Current",
    tag: "E&M",
    topics: [
      {
        name: "Magnetic Field & Biot-Savart Law",
        subtopics: [
          "Biot-Savart law: dB = μ₀Idl×r̂/4πr²",
          "B due to straight wire",
          "B at centre of circular loop",
        ],
      },
      {
        name: "Ampere's Circuital Law",
        subtopics: [
          "∮B·dl = μ₀Iₑₙc",
          "B inside solenoid: B = μ₀nI",
          "B inside toroid",
        ],
      },
      {
        name: "Force on Charges & Conductors",
        subtopics: [
          "Lorentz force: F = q(v×B)",
          "Circular motion of charges in B",
          "Velocity selector",
          "Force on current-carrying wire: F = IL×B",
          "Force between parallel currents",
        ],
      },
      {
        name: "Torque on Current Loop",
        subtopics: [
          "Torque: τ = NIAB sinθ",
          "Magnetic moment: m = NIA",
          "Moving coil galvanometer",
        ],
      },
      {
        name: "Magnetism in Matter",
        subtopics: [
          "Magnetic dipole moment",
          "Bar magnet: axial & equatorial field",
          "Gauss's law for magnetism",
          "Diamagnetic, paramagnetic & ferromagnetic materials",
          "Hysteresis loop",
        ],
      },
    ],
  },

  {
    chapter: "Electromagnetic Induction",
    tag: "E&M",
    topics: [
      {
        name: "Magnetic Flux & Faraday's Law",
        subtopics: [
          "Magnetic flux: Φ = B·A",
          "Faraday's law: ε = -dΦ/dt",
          "Lenz's law",
        ],
      },
      {
        name: "Motional EMF",
        subtopics: [
          "EMF in moving rod: ε = Blv",
          "Rotating coil",
          "Eddy currents & applications",
        ],
      },
      {
        name: "Self Induction",
        subtopics: [
          "Self inductance L",
          "ε = -L dI/dt",
          "Energy in inductor: U = ½LI²",
          "Growth & decay of current in LR circuit",
        ],
      },
      {
        name: "Mutual Induction",
        subtopics: [
          "Mutual inductance M",
          "ε₂ = -M dI₁/dt",
          "Transformer: principle, step-up & step-down",
          "Efficiency of transformer",
        ],
      },
    ],
  },

  {
    chapter: "Alternating Current",
    tag: "E&M",
    topics: [
      {
        name: "AC Basics",
        subtopics: [
          "Sinusoidal AC: v = Vmsinωt",
          "RMS & peak values",
          "Average value",
          "Form factor",
        ],
      },
      {
        name: "AC Circuits",
        subtopics: [
          "Purely resistive circuit",
          "Purely inductive circuit: XL = ωL",
          "Purely capacitive circuit: XC = 1/ωC",
          "LC circuit: resonance frequency",
        ],
      },
      {
        name: "Series RLC Circuit",
        subtopics: [
          "Impedance: Z = √(R² + (XL-XC)²)",
          "Phase angle",
          "Power factor: cosφ = R/Z",
          "Resonance in series RLC",
        ],
      },
      {
        name: "Power in AC",
        subtopics: [
          "Instantaneous power",
          "Average power: P = Vrms·Irms·cosφ",
          "Wattless current",
          "Power factor improvement",
        ],
      },
    ],
  },

  {
    chapter: "Electromagnetic Waves",
    tag: "E&M",
    topics: [
      {
        name: "Maxwell's Equations & Displacement Current",
        subtopics: [
          "Displacement current: Id = ε₀ dΦE/dt",
          "Maxwell's modification of Ampere's law",
          "Maxwell's 4 equations (conceptual)",
        ],
      },
      {
        name: "EM Waves",
        subtopics: [
          "Nature: transverse, E⊥B⊥v",
          "Speed in vacuum: c = 1/√(μ₀ε₀)",
          "Relation: c = E₀/B₀",
          "Energy density & intensity",
        ],
      },
      {
        name: "EM Spectrum",
        subtopics: [
          "Radio waves",
          "Microwaves",
          "Infrared",
          "Visible light",
          "UV",
          "X-rays",
          "Gamma rays",
          "Applications of each",
        ],
      },
    ],
  },

  // ── MODERN PHYSICS ────────────────────────────────────────────────────────
  {
    chapter: "Dual Nature of Matter & Radiation",
    tag: "Modern",
    topics: [
      {
        name: "Photoelectric Effect",
        subtopics: [
          "Hertz & Lenard experiments",
          "Einstein's equation: KE_max = hf - φ",
          "Threshold frequency & work function",
          "Effect of intensity vs frequency",
          "Stopping potential",
        ],
      },
      {
        name: "de Broglie Hypothesis",
        subtopics: [
          "Matter waves: λ = h/mv = h/p",
          "Davisson-Germer experiment",
          "de Broglie wavelength for electron, proton",
        ],
      },
      {
        name: "Particle Nature of Light",
        subtopics: [
          "Photon: E = hf, p = h/λ",
          "Compton effect",
          "Photon momentum",
        ],
      },
    ],
  },

  {
    chapter: "Atoms & Nuclei",
    tag: "Modern",
    topics: [
      {
        name: "Atomic Models",
        subtopics: [
          "Thomson model (plum pudding)",
          "Rutherford's nuclear model & scattering experiment",
          "Bohr's model: postulates, energy levels",
          "Hydrogen spectrum: Lyman, Balmer, Paschen, Brackett, Pfund series",
        ],
      },
      {
        name: "Bohr's Model Calculations",
        subtopics: [
          "Radius: rₙ = n²a₀",
          "Energy: Eₙ = -13.6/n² eV",
          "Velocity: vₙ = v₀/n",
          "Wavelength: 1/λ = RH(1/n₁² - 1/n₂²)",
        ],
      },
      {
        name: "Nuclear Structure",
        subtopics: [
          "Nucleus: protons & neutrons",
          "Atomic number Z, mass number A",
          "Isotopes, isobars, isotones",
          "Nuclear size: R = R₀A^(1/3)",
          "Nuclear density (approximately constant)",
        ],
      },
      {
        name: "Nuclear Forces & Binding Energy",
        subtopics: [
          "Nuclear force properties",
          "Mass defect: Δm",
          "Binding energy: BE = Δm × c²",
          "BE per nucleon curve",
          "Nuclear stability",
        ],
      },
      {
        name: "Radioactivity",
        subtopics: [
          "α, β, γ decay: nature, properties",
          "Radioactive decay law: N = N₀e^(-λt)",
          "Half-life: T½ = 0.693/λ",
          "Mean life: τ = 1/λ",
          "Activity: A = λN",
        ],
      },
      {
        name: "Nuclear Reactions",
        subtopics: [
          "Nuclear fission: energy release",
          "Nuclear fusion: energy release",
          "Q-value of reaction",
          "Chain reaction & critical mass",
          "Nuclear reactor",
        ],
      },
    ],
  },

  {
    chapter: "Semiconductor Devices",
    tag: "Modern",
    topics: [
      {
        name: "Semiconductors Basics",
        subtopics: [
          "Energy bands: conductor, insulator, semiconductor",
          "Intrinsic semiconductor",
          "Extrinsic: n-type & p-type",
          "Holes & electrons as charge carriers",
        ],
      },
      {
        name: "p-n Junction Diode",
        subtopics: [
          "Formation of depletion layer",
          "Barrier potential",
          "Forward & reverse bias",
          "I-V characteristics",
          "Diode as rectifier: half-wave & full-wave",
        ],
      },
      {
        name: "Special Diodes",
        subtopics: [
          "Zener diode: voltage regulation",
          "LED: working & applications",
          "Photodiode: working",
          "Solar cell: working & I-V characteristics",
        ],
      },
      {
        name: "Transistor",
        subtopics: [
          "n-p-n & p-n-p transistors",
          "Transistor configurations: CE, CB, CC",
          "CE amplifier: gain, input/output characteristics",
          "Transistor as switch",
        ],
      },
      {
        name: "Logic Gates",
        subtopics: [
          "AND, OR, NOT gates",
          "NAND, NOR as universal gates",
          "XOR gate",
          "Boolean algebra: De Morgan's theorem",
        ],
      },
    ],
  },
];
