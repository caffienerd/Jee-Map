// ── PHYSICS DATA  ·  NEET UG 2026 ────────────────────────────────────────
window.NEET_PHY_DATA = [
  // ── MECHANICS ─────────────────────────────────────────────────────────────
  {
    chapter: "Physics & Measurement",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Physical Quantities & Units",
        subtopics: [
          "Fundamental quantities: mass, length, time, temperature, current, luminous intensity, amount of substance",
          "Derived quantities: velocity, force, pressure, energy, etc.",
          "Supplementary units: radian (plane angle), steradian (solid angle)",
          "Systems of units: CGS, MKS, SI, FPS",
          "SI base units & standard definitions",
        ],
      },
      {
        name: "Dimensional Analysis",
        subtopics: [
          "Dimensional formula & dimensional equation of common quantities",
          "Principle of homogeneity: checking correctness of equations",
          "Deriving relations between physical quantities",
          "Unit conversion using dimensional analysis",
          "Limitations of dimensional analysis",
        ],
      },
      {
        name: "Errors in Measurement",
        subtopics: [
          "Systematic vs random errors",
          "Absolute error, mean absolute error",
          "Relative & percentage error",
          "Error in sum/difference: add absolute errors",
          "Error in product/quotient: add relative errors",
          "Error in power n: multiply relative error by n",
          "Least count error",
        ],
      },
      {
        name: "Significant Figures",
        subtopics: [
          "Rules for counting significant figures",
          "Rounding off numbers",
          "Operations with sig figs: addition/subtraction (decimal places); multiplication/division (sig figs)",
        ],
      },
      {
        name: "Measuring Instruments (Experimental Skills)",
        subtopics: [
          "Vernier caliper: least count = 1 MSD − 1 VSD, reading, zero error correction",
          "Screw gauge: least count = pitch / number of divisions, zero error correction",
          "Simple pendulum: T = 2π√(L/g), graph of T² vs L to find g",
          "Metre scale: mass of object by principle of moments",
        ],
      },
    ],
  },

  {
    chapter: "Kinematics",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Motion in a Straight Line",
        subtopics: [
          "Frame of reference: inertial & non-inertial",
          "Position, displacement, distance",
          "Average & instantaneous speed / velocity",
          "Uniform & non-uniform motion",
          "Uniformly accelerated motion: v = u + at, s = ut + ½at², v² = u² + 2as",
          "Distance in nth second: sₙ = u + a(2n−1)/2",
          "x-t, v-t, a-t graphs and their interpretation",
        ],
      },
      {
        name: "Motion Under Gravity",
        subtopics: [
          "Free fall: a = g = 9.8 m/s²",
          "Vertical throw upward: time of flight, max height",
          "Objects dropped from height: time & velocity on hitting ground",
        ],
      },
      {
        name: "Vectors",
        subtopics: [
          "Scalar vs vector quantities",
          "Vector addition: triangle & parallelogram law",
          "Vector subtraction",
          "Resolution into components: Ax = A cosθ, Ay = A sinθ",
          "Unit vectors î, ĵ, k̂",
          "Dot product (scalar product): A·B = AB cosθ",
          "Cross product (vector product): |A×B| = AB sinθ, direction by right-hand rule",
        ],
      },
      {
        name: "Projectile Motion",
        subtopics: [
          "Horizontal projectile: x = ut, y = ½gt²",
          "Oblique projectile: independent x & y equations",
          "Time of flight: T = 2u sinθ/g",
          "Maximum height: H = u²sin²θ/2g",
          "Horizontal range: R = u²sin2θ/g; max range at θ = 45°",
          "Trajectory equation: y = x tanθ − gx²/2u²cos²θ",
        ],
      },
      {
        name: "Uniform Circular Motion",
        subtopics: [
          "Angular displacement, angular velocity ω, angular acceleration",
          "Relation: v = rω",
          "Centripetal acceleration: a = v²/r = rω²; direction always towards centre",
          "Period & frequency: T = 2π/ω",
        ],
      },
      {
        name: "Relative Velocity",
        subtopics: [
          "Relative velocity in 1D: V_AB = V_A − V_B",
          "Relative velocity in 2D",
          "Rain-man problems",
          "River-boat problems: angle for shortest time vs shortest path",
        ],
      },
    ],
  },

  {
    chapter: "Laws of Motion",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Newton's Laws",
        subtopics: [
          "1st law: law of inertia; inertial frame of reference",
          "2nd law: F = ma; net force & acceleration; impulse J = FΔt = Δp",
          "3rd law: action-reaction pairs act on different bodies",
          "Law of conservation of linear momentum & its applications",
          "Equilibrium of concurrent forces: ΣF = 0",
        ],
      },
      {
        name: "Free Body Diagram & Applications",
        subtopics: [
          "Drawing FBD correctly",
          "Atwood machine: a = (m₁−m₂)g/(m₁+m₂)",
          "Pulley systems: fixed & movable pulley",
          "Connected bodies on smooth & rough surfaces",
        ],
      },
      {
        name: "Types of Forces",
        subtopics: [
          "Weight W = mg & Normal reaction N",
          "Tension in strings (massless & massive)",
          "Spring force: F = kx (Hooke's law)",
          "Pseudo force in non-inertial frames: F_pseudo = −ma₀",
        ],
      },
      {
        name: "Friction",
        subtopics: [
          "Static friction: fs ≤ μsN; self-adjusting up to limiting value",
          "Kinetic friction: fk = μkN; μk < μs",
          "Rolling friction: least among the three",
          "Angle of friction: tan φ = μ",
          "Angle of repose: tan θ = μ; condition for sliding on inclined plane",
          "Motion on rough inclined plane: acceleration & friction force",
        ],
      },
      {
        name: "Dynamics of Circular Motion",
        subtopics: [
          "Centripetal force: Fc = mv²/r; provided by friction, tension, normal force, or gravity",
          "Vehicle on level circular road: v_max = √(μrg)",
          "Vehicle on banked road: tan θ = v²/rg; max & min speed with friction",
          "Conical pendulum: T = 2π√(L cosθ/g)",
          "Vertical circular motion: minimum speed at top = √(rg)",
        ],
      },
    ],
  },

  {
    chapter: "Work, Energy & Power",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Work",
        subtopics: [
          "Work by constant force: W = F·d cosθ",
          "Work by variable force: W = ∫F dx (area under F-x graph)",
          "Work by gravity: W = mgh (path-independent)",
          "Work by spring: W = ½kx²",
          "Work by friction: always negative (non-conservative)",
        ],
      },
      {
        name: "Energy & Work-Energy Theorem",
        subtopics: [
          "Kinetic energy: KE = ½mv²",
          "Work-energy theorem: W_net = ΔKE",
          "Gravitational PE: U = mgh",
          "Elastic PE (spring): U = ½kx²",
          "Conservative vs non-conservative forces",
          "Conservation of mechanical energy: KE + PE = constant",
        ],
      },
      {
        name: "Power",
        subtopics: [
          "Average power: P = W/t",
          "Instantaneous power: P = F·v",
          "Units: Watt (W), horsepower (hp); 1 hp = 746 W",
        ],
      },
      {
        name: "Collisions",
        subtopics: [
          "Elastic collision (1D): both momentum & KE conserved; velocity exchange formulas",
          "Inelastic collision: momentum conserved, KE decreases",
          "Perfectly inelastic: bodies stick; v = (m₁u₁+m₂u₂)/(m₁+m₂)",
          "Coefficient of restitution: e = separation speed / approach speed; e=1 elastic, e=0 perfectly inelastic",
          "Elastic & inelastic collisions in 2D",
        ],
      },
    ],
  },

  {
    chapter: "Rotational Motion",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Centre of Mass",
        subtopics: [
          "COM of two-particle system: x_cm = (m₁x₁+m₂x₂)/(m₁+m₂)",
          "COM of rigid bodies & standard geometrical shapes",
          "Motion of COM: F_ext = M·a_cm",
        ],
      },
      {
        name: "Torque & Angular Momentum",
        subtopics: [
          "Torque: τ = r × F = rF sinθ",
          "Newton's 2nd law for rotation: τ_net = Iα",
          "Angular momentum: L = Iω = r × p",
          "Conservation of angular momentum: L = constant when τ_ext = 0",
          "Applications: spinning skater, diving, planet in orbit",
        ],
      },
      {
        name: "Moment of Inertia",
        subtopics: [
          "I = Σmr²; radius of gyration K = √(I/M)",
          "MI of standard bodies: thin rod (ML²/12 about centre; ML²/3 about end), ring (MR²), disc (MR²/2), solid sphere (2MR²/5), hollow sphere (2MR²/3), solid cylinder (MR²/2)",
          "Parallel axis theorem: I = I_cm + Md²",
          "Perpendicular axis theorem (planar bodies only): I_z = I_x + I_y",
          "Comparison of linear & rotational motion quantities",
        ],
      },
      {
        name: "Rolling Motion",
        subtopics: [
          "Total KE: ½mv²(1 + K²/R²)",
          "Rolling on inclined plane: a = g sinθ/(1 + K²/R²)",
          "Order of acceleration down incline: hollow cylinder < solid cylinder < hollow sphere < solid sphere",
          "Condition for rolling without slipping: v_cm = Rω",
          "Equilibrium of rigid bodies: ΣF = 0 & Στ = 0",
        ],
      },
    ],
  },

  {
    chapter: "Gravitation",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Newton's Law & Gravitational Field",
        subtopics: [
          "Universal law: F = GMm/r²; G = 6.674 × 10⁻¹¹ N m² kg⁻²",
          "Superposition principle for multiple masses",
          "Gravitational field intensity: g = −GM/r²",
          "Gravitational potential: V = −GM/r",
          "Gravitational PE: U = −GMm/r",
          "Relation: g = −dV/dr",
        ],
      },
      {
        name: "Acceleration due to Gravity",
        subtopics: [
          "g at surface: g = GM/R²",
          "Variation with altitude h: g' ≈ g(1 − 2h/R) for h << R",
          "Variation with depth d: g' = g(1 − d/R)",
          "Effect of Earth's rotation on g: g_eff = g − Rω²cos²λ",
          "g is maximum at poles, minimum at equator",
        ],
      },
      {
        name: "Satellite Motion & Escape Velocity",
        subtopics: [
          "Orbital velocity: v₀ = √(GM/r)",
          "Time period: T = 2π√(r³/GM); T² ∝ r³ (Kepler's 3rd law)",
          "Energy: KE = GMm/2r; PE = −GMm/r; TE = −GMm/2r",
          "Escape velocity: vₑ = √(2GM/R) ≈ 11.2 km/s",
          "Geostationary orbit: T = 24 h, height ≈ 36,000 km, equatorial",
          "Polar satellites: low orbit, pole-to-pole, remote sensing",
        ],
      },
      {
        name: "Kepler's Laws",
        subtopics: [
          "Law of orbits: elliptical orbits with Sun at one focus",
          "Law of areas: equal areas in equal times; dA/dt = L/2m = constant",
          "Law of periods: T² ∝ a³ (a = semi-major axis)",
        ],
      },
    ],
  },

  {
    chapter: "Properties of Solids & Liquids",
    tag: "Mechanics",
    class: "11",
    topics: [
      {
        name: "Elasticity",
        subtopics: [
          "Stress = Force/Area; Strain = ΔL/L or ΔV/V",
          "Hooke's law: stress ∝ strain (within elastic limit)",
          "Young's modulus Y = (F/A)/(ΔL/L)",
          "Bulk modulus B = −P/(ΔV/V)",
          "Modulus of rigidity η = shear stress / shear strain",
          "Elastic PE stored in wire: U = ½ × stress × strain × volume",
          "Experimental: Young's modulus of metallic wire",
        ],
      },
      {
        name: "Fluid Statics",
        subtopics: [
          "Pressure in fluid: P = P₀ + ρgh",
          "Pascal's law & applications: hydraulic press, hydraulic brakes",
          "Archimedes' principle: buoyant force = weight of displaced fluid",
          "Floating condition: ρ_body ≤ ρ_fluid",
        ],
      },
      {
        name: "Fluid Dynamics",
        subtopics: [
          "Streamline vs turbulent flow; critical velocity",
          "Equation of continuity: A₁v₁ = A₂v₂",
          "Bernoulli's theorem: P + ½ρv² + ρgh = constant",
          "Torricelli's theorem: speed of efflux v = √(2gh)",
          "Applications: venturimeter, pitot tube, lift on aeroplane",
        ],
      },
      {
        name: "Viscosity",
        subtopics: [
          "Coefficient of viscosity η: F = ηA(dv/dx)",
          "Stokes' law: F = 6πηrv",
          "Terminal velocity: v_t = 2r²(ρ−σ)g/9η",
          "Reynolds number: Re = ρvd/η; criterion for laminar vs turbulent",
          "Experimental: viscosity by terminal velocity method",
        ],
      },
      {
        name: "Surface Tension",
        subtopics: [
          "Surface tension T: force per unit length = surface energy per unit area",
          "Angle of contact: acute (wetting), obtuse (non-wetting)",
          "Excess pressure in drop: ΔP = 2T/r",
          "Excess pressure in soap bubble: ΔP = 4T/r (two surfaces)",
          "Capillary rise: h = 2T cosθ / ρrg",
          "Effect of detergents: reduce surface tension",
          "Experimental: surface tension by capillary rise; effect of detergents",
        ],
      },
      {
        name: "Thermal Properties of Matter",
        subtopics: [
          "Temperature scales & conversions: Celsius, Fahrenheit, Kelvin",
          "Linear expansion: ΔL = αLΔT; area: 2α; volume: 3α",
          "Anomalous expansion of water: max density at 4°C",
          "Specific heat capacity c; calorimetry: heat gained = heat lost",
          "Latent heat: L_f (fusion) & L_v (vaporisation); change of state",
          "Conduction: Q/t = kAΔT/L; thermal resistance",
          "Convection: natural & forced",
          "Radiation: Stefan's law P = σεAT⁴; emissivity ε",
          "Newton's law of cooling: rate of cooling ∝ (T − T₀)",
          "Wien's displacement law: λ_max T = 2.898 × 10⁻³ m·K",
          "Kirchhoff's law: good absorber = good emitter",
          "Experimental: specific heat of solid & liquid by method of mixtures",
        ],
      },
    ],
  },

  // ── THERMODYNAMICS ────────────────────────────────────────────────────────
  {
    chapter: "Thermodynamics",
    tag: "Thermo",
    class: "11",
    topics: [
      {
        name: "Basic Concepts & Zeroth Law",
        subtopics: [
          "Thermodynamic system: open, closed, isolated",
          "State functions vs path functions",
          "Extensive vs intensive properties",
          "Zeroth law of thermodynamics: basis of temperature measurement",
        ],
      },
      {
        name: "First Law of Thermodynamics",
        subtopics: [
          "Internal energy U (state function)",
          "Heat Q & work W (path functions)",
          "ΔU = Q − W",
          "Work done by gas: W = ∫P dV = area under P-V diagram",
          "Isothermal: ΔU = 0, W = nRT ln(V₂/V₁)",
          "Adiabatic: Q = 0, PVγ = const, W = (P₁V₁−P₂V₂)/(γ−1)",
          "Isochoric: W = 0, ΔU = Q",
          "Isobaric: W = PΔV",
        ],
      },
      {
        name: "Second Law & Heat Engines",
        subtopics: [
          "Second law: spontaneous heat flow from hot to cold",
          "Kelvin-Planck & Clausius statements",
          "Reversible vs irreversible processes",
          "Carnot engine: two isothermal + two adiabatic processes",
          "Carnot efficiency: η = 1 − T₂/T₁ (maximum possible)",
          "Refrigerator: COP = Q₂/W = T₂/(T₁−T₂)",
        ],
      },
    ],
  },

  {
    chapter: "Kinetic Theory of Gases",
    tag: "Thermo",
    class: "11",
    topics: [
      {
        name: "Ideal Gas & Kinetic Theory",
        subtopics: [
          "Equation of state: PV = nRT",
          "Kinetic theory assumptions: point masses, elastic collisions, no IMF",
          "Pressure derivation: P = ⅓ρv²_rms",
          "Kinetic interpretation of temperature: KE = (3/2)kT per molecule",
          "Avogadro's number: N_A = 6.022 × 10²³ mol⁻¹",
        ],
      },
      {
        name: "Molecular Speeds",
        subtopics: [
          "RMS speed: v_rms = √(3RT/M)",
          "Mean speed: v̄ = √(8RT/πM)",
          "Most probable speed: v_mp = √(2RT/M)",
          "Ratio: v_mp : v̄ : v_rms = 1 : 1.128 : 1.225",
          "Maxwell-Boltzmann distribution (qualitative)",
        ],
      },
      {
        name: "Degrees of Freedom & Specific Heats",
        subtopics: [
          "Monatomic: f = 3; diatomic (rigid): f = 5; polyatomic: f = 6",
          "Equipartition theorem: ½kT per degree of freedom",
          "Internal energy: U = (f/2)nRT",
          "Cv = (f/2)R; Cp = (f/2 + 1)R; Mayer's relation: Cp − Cv = R",
          "γ = Cp/Cv: monatomic = 5/3; diatomic = 7/5; polyatomic = 4/3",
          "Application to adiabatic processes",
        ],
      },
      {
        name: "Mean Free Path",
        subtopics: [
          "Mean free path λ: average distance between successive collisions",
          "λ = 1/(√2 πd²n); n = number density",
          "Avogadro's number determination from gas properties",
        ],
      },
    ],
  },

  // ── WAVES & OSCILLATIONS ──────────────────────────────────────────────────
  {
    chapter: "Oscillations & Waves",
    tag: "Waves",
    class: "11",
    topics: [
      {
        name: "Simple Harmonic Motion",
        subtopics: [
          "Periodic motion: time period T, frequency f = 1/T",
          "SHM condition: F = −kx (restoring force ∝ displacement)",
          "Displacement: x = A sin(ωt + φ); A = amplitude",
          "Velocity: v = Aω cos(ωt + φ); max at x = 0",
          "Acceleration: a = −ω²x; max at x = ±A",
          "Phase & phase difference",
        ],
      },
      {
        name: "Energy in SHM & Oscillating Systems",
        subtopics: [
          "KE = ½mω²(A²−x²); PE = ½mω²x²; Total E = ½mω²A²",
          "Simple pendulum: T = 2π√(L/g); valid for small angles θ < 5°",
          "Second's pendulum: T = 2 s, L ≈ 1 m",
          "Pendulum in accelerating lift: g_eff = g ± a",
          "Spring-mass: T = 2π√(m/k); independent of amplitude & g",
          "Springs in series: 1/k_eff = 1/k₁ + 1/k₂",
          "Springs in parallel: k_eff = k₁ + k₂",
          "Oscillations of spring: restoring force & force constant concept",
        ],
      },
      {
        name: "Wave Motion",
        subtopics: [
          "Longitudinal vs transverse waves",
          "Wave parameters: A, λ, T, f, ω = 2πf, k = 2π/λ",
          "Progressive wave equation: y = A sin(kx − ωt)",
          "Wave speed: v = fλ = ω/k",
          "Speed in string: v = √(T/μ); μ = mass per unit length",
          "Speed of sound in gas: v = √(γP/ρ); Laplace correction",
          "Speed of sound in air ≈ 332 m/s at 0°C; v ∝ √T",
        ],
      },
      {
        name: "Superposition, Standing Waves & Beats",
        subtopics: [
          "Principle of superposition",
          "Constructive: path diff = nλ; destructive: (2n−1)λ/2",
          "Standing waves: nodes (zero amplitude) & antinodes (max amplitude)",
          "Strings (both ends fixed): f_n = nv/2L; all harmonics",
          "Closed pipe (one end open): f_n = nv/4L; odd harmonics only",
          "Open pipe (both ends open): f_n = nv/2L; all harmonics",
          "Beats: beat frequency = |f₁ − f₂|; tuning of instruments",
          "Resonance: forced frequency = natural frequency",
          "Experimental: speed of sound using resonance tube",
        ],
      },
      {
        name: "Doppler Effect",
        subtopics: [
          "Apparent frequency: f' = f(v ± v₀)/(v ∓ v_s)",
          "Sign convention: + when approaching, − when receding",
          "Applications: SONAR, radar, Doppler ultrasound, redshift in astronomy",
        ],
      },
    ],
  },

  // ── OPTICS ────────────────────────────────────────────────────────────────
  {
    chapter: "Ray Optics",
    tag: "Optics",
    class: "12",
    topics: [
      {
        name: "Reflection & Spherical Mirrors",
        subtopics: [
          "Laws of reflection: angle of incidence = angle of reflection (in same plane)",
          "Plane mirror: virtual, erect, laterally inverted, same size, behind mirror",
          "Concave (converging) & convex (diverging) spherical mirrors",
          "Sign convention (Cartesian): distances from pole; +ve along incident ray direction",
          "Mirror formula: 1/v + 1/u = 1/f = 2/R",
          "Magnification: m = −v/u; m > 0 virtual & erect; m < 0 real & inverted",
          "Experimental: focal length of concave & convex mirror by parallax",
        ],
      },
      {
        name: "Refraction & Total Internal Reflection",
        subtopics: [
          "Snell's law: n₁ sinθ₁ = n₂ sinθ₂",
          "Refractive index: n = c/v; n = sin i / sin r",
          "Real vs apparent depth: apparent depth = real depth / n",
          "Lateral shift in glass slab: d = t sinδ/cosθ_r",
          "Total internal reflection: n₁ > n₂ and θ > θ_c; sin θ_c = n₂/n₁",
          "Applications of TIR: optical fibre, diamond brilliance, prisms, mirage",
          "Experimental: refractive index of glass slab using travelling microscope",
        ],
      },
      {
        name: "Refraction at Spherical Surfaces & Lenses",
        subtopics: [
          "Refraction at spherical surface: n₁/u + n₂/v = (n₂−n₁)/R",
          "Thin lens formula: 1/v − 1/u = 1/f",
          "Lens maker's equation: 1/f = (n−1)(1/R₁ − 1/R₂)",
          "Power of lens: P = 1/f (metres); unit dioptre (D)",
          "Combination of thin lenses in contact: P = P₁ + P₂ + ...",
          "Magnification: m = v/u",
          "Experimental: focal length of convex lens by parallax/displacement method",
        ],
      },
      {
        name: "Prism & Dispersion",
        subtopics: [
          "Refraction through prism: i + e = A + δ",
          "Minimum deviation: n = sin((A+δ_m)/2) / sin(A/2)",
          "Dispersion: violet deviates most, red least (VIBGYOR)",
          "Scattering: Rayleigh scattering ∝ 1/λ⁴ → blue sky, red sunset",
          "Experimental: plot angle of deviation vs angle of incidence for prism",
        ],
      },
      {
        name: "Optical Instruments",
        subtopics: [
          "Simple microscope: m = D/f (image at infinity); m = 1 + D/f (near point); D = 25 cm",
          "Compound microscope: m = m_o × m_e = −L/f_o × D/f_e (approximately)",
          "Refracting astronomical telescope: m = −f_o/f_e; tube length = f_o + f_e",
          "Reflecting telescope: no chromatic aberration, larger aperture; advantage over refracting",
          "Eye defects: myopia (concave lens), hyperopia (convex lens), astigmatism, presbyopia",
        ],
      },
    ],
  },

  {
    chapter: "Wave Optics",
    tag: "Optics",
    class: "12",
    topics: [
      {
        name: "Huygens' Principle",
        subtopics: [
          "Wave theory of light: wavefronts (plane & spherical)",
          "Huygens' principle: every point on wavefront → new source of secondary wavelets",
          "Derivation of laws of reflection using Huygens' principle",
          "Derivation of Snell's law (refraction) using Huygens' principle",
        ],
      },
      {
        name: "Interference",
        subtopics: [
          "Coherent sources: same frequency & constant phase difference",
          "Constructive: path diff = nλ; destructive: (2n−1)λ/2",
          "Young's Double Slit Experiment (YDSE): fringe width β = λD/d",
          "Position of bright fringe: y_n = nλD/d",
          "Position of dark fringe: y_n = (2n−1)λD/2d",
          "Intensity distribution: I = 4I₀ cos²(δ/2)",
          "Effect of changing λ, D, d on fringe pattern",
          "Sustained interference of light",
        ],
      },
      {
        name: "Diffraction",
        subtopics: [
          "Single slit diffraction: central maximum, secondary maxima & minima",
          "Condition for minima: a sinθ = nλ",
          "Width of central maximum: 2λD/a",
          "Difference between interference & diffraction fringes",
        ],
      },
      {
        name: "Polarisation",
        subtopics: [
          "Transverse nature of light; unpolarised vs plane-polarised light",
          "Polarisation by reflection: Brewster's law n = tan i_B; reflected ray ⊥ refracted",
          "Malus's law: I = I₀ cos²θ (analyser rotated by θ from polariser)",
          "Polaroids: production, uses in sunglasses, photography, LCD screens",
          "Polarisation by scattering (blue sky explanation)",
        ],
      },
    ],
  },

  // ── ELECTRICITY & MAGNETISM ──────────────────────────────────────────────
  {
    chapter: "Electrostatics",
    tag: "E&M",
    class: "12",
    topics: [
      {
        name: "Electric Charge & Coulomb's Law",
        subtopics: [
          "Properties of charge: quantisation q = ne, conservation, additivity",
          "Coulomb's law: F = kq₁q₂/r²; k = 9 × 10⁹ N m² C⁻²",
          "Superposition principle for multiple charges",
          "Continuous charge distributions: linear (λ), surface (σ), volume (ρ)",
        ],
      },
      {
        name: "Electric Field & Dipole",
        subtopics: [
          "E = F/q₀; E due to point charge: E = kq/r²",
          "Electric field lines: never cross, start on +q, end on −q",
          "Electric dipole: p = qd (from −q to +q)",
          "E on axial line: E = 2kp/r³ (along p direction)",
          "E on equatorial line: E = kp/r³ (opposite to p direction)",
          "Torque on dipole in uniform field: τ = p × E = pE sinθ",
        ],
      },
      {
        name: "Gauss's Law",
        subtopics: [
          "Electric flux: Φ = ∮E·dA",
          "Gauss's law: Φ = Q_enc/ε₀",
          "E due to infinite uniformly charged wire: E = λ/2πε₀r",
          "E due to infinite plane sheet: E = σ/2ε₀",
          "E due to spherical shell: 0 inside; kQ/r² outside",
          "E due to solid sphere: kQr/R³ inside; kQ/r² outside",
        ],
      },
      {
        name: "Electric Potential & Potential Energy",
        subtopics: [
          "Potential V = kq/r; potential difference ΔV",
          "Relation: E = −dV/dr (E points from high to low V)",
          "Equipotential surfaces: perpendicular to E field; work done = 0 along them",
          "PE of two charges: U = kq₁q₂/r",
          "PE of dipole: U = −pE cosθ = −p·E",
          "Potential due to dipole: V = kp cosθ/r²",
        ],
      },
      {
        name: "Capacitors & Dielectrics",
        subtopics: [
          "Capacitance C = Q/V; parallel plate: C = ε₀A/d",
          "Series: 1/C = 1/C₁ + 1/C₂ + ...; parallel: C = C₁ + C₂ + ...",
          "Energy stored: U = ½CV² = Q²/2C",
          "Dielectric: κ = dielectric constant; C = κε₀A/d",
          "Effect of inserting dielectric (battery connected vs disconnected cases)",
          "Conductors in electrostatic equilibrium: E = 0 inside; charge on surface",
          "Van de Graaff generator: principle & use",
        ],
      },
    ],
  },

  {
    chapter: "Current Electricity",
    tag: "E&M",
    class: "12",
    topics: [
      {
        name: "Current, Drift Velocity & Resistance",
        subtopics: [
          "Electric current I = dQ/dt; conventional vs electron flow",
          "Drift velocity v_d; I = nAev_d; mobility μ = v_d/E",
          "Ohm's law: V = IR; I-V characteristics (ohmic & non-ohmic)",
          "Resistivity ρ & conductivity σ; R = ρL/A",
          "Temperature dependence: R_T = R₀(1 + αΔT); α for metals & semiconductors",
        ],
      },
      {
        name: "Combinations & Kirchhoff's Laws",
        subtopics: [
          "Series: R_eff = R₁ + R₂ + ...; voltage divides",
          "Parallel: 1/R_eff = 1/R₁ + 1/R₂ + ...; current divides",
          "EMF ε & internal resistance r; terminal voltage V = ε − Ir",
          "Cells in series: ε_eff = Σε; r_eff = Σr",
          "Cells in parallel: ε_eff & r_eff using standard formulas",
          "KCL: ΣI = 0 at junction (charge conservation)",
          "KVL: ΣV = 0 in closed loop (energy conservation)",
          "Wheatstone bridge: balanced condition P/Q = R/S",
          "Metre bridge: X = R(100−l)/l; experimental determination of resistance",
          "Potentiometer: principle; comparison of EMF; internal resistance",
        ],
      },
      {
        name: "Heating Effects, Power & Instruments",
        subtopics: [
          "Joule's heating: H = I²Rt = V²t/R",
          "Electric power: P = VI = I²R = V²/R",
          "Domestic circuits: live, neutral, earth wires; fuse & MCB",
          "Galvanometer → ammeter (shunt S) & voltmeter (series R)",
          "Experimental: resistivity of wire; Ohm's law; galvanometer figure of merit",
        ],
      },
    ],
  },

  {
    chapter: "Magnetic Effects of Current & Magnetism",
    tag: "E&M",
    class: "12",
    topics: [
      {
        name: "Biot-Savart & Ampere's Laws",
        subtopics: [
          "Biot-Savart law: dB = μ₀I dl × r̂ / 4πr²",
          "B due to straight wire: B = μ₀I/2πr",
          "B at centre of circular loop: B = μ₀I/2R",
          "Ampere's circuital law: ∮B·dl = μ₀I_enc",
          "B inside solenoid: B = μ₀nI",
          "B inside toroid: B = μ₀NI/2πr",
        ],
      },
      {
        name: "Force on Charges & Conductors",
        subtopics: [
          "Lorentz force: F = q(v × B); F = qvB sinθ",
          "Circular motion in B field: r = mv/qB",
          "Velocity selector (crossed fields): v = E/B",
          "Force on current-carrying wire: F = IL × B = BIL sinθ",
          "Force between parallel wires: F/L = μ₀I₁I₂/2πd; definition of ampere",
          "Torque on current loop: τ = NIAB sinθ; magnetic moment m = NIA",
          "Moving coil galvanometer: working, sensitivity",
        ],
      },
      {
        name: "Magnetism in Matter",
        subtopics: [
          "Bar magnet: axial field B = μ₀·2m/4πr³; equatorial field B = μ₀m/4πr³",
          "Bar magnet as equivalent solenoid",
          "Gauss's law for magnetism: ∮B·dA = 0 (no monopoles)",
          "Torque on magnetic dipole: τ = m × B; PE: U = −m·B",
          "Diamagnetic (χ < 0, repelled): Bi, Cu, water",
          "Paramagnetic (χ > 0, weakly attracted): Al, Pt; Curie's law χ ∝ 1/T",
          "Ferromagnetic (χ >> 0, strongly attracted): Fe, Ni, Co; domain theory",
          "Hysteresis loop: retentivity, coercivity; permanent magnets vs electromagnets",
          "Effect of temperature: Curie temperature → ferromagnetic becomes paramagnetic",
        ],
      },
    ],
  },

  {
    chapter: "Electromagnetic Induction & Alternating Current",
    tag: "E&M",
    class: "12",
    topics: [
      {
        name: "Electromagnetic Induction",
        subtopics: [
          "Magnetic flux: Φ = B·A cosθ",
          "Faraday's law: ε = −dΦ/dt (magnitude = rate of change of flux)",
          "Lenz's law: induced current opposes the change causing it (energy conservation)",
          "Motional EMF: ε = Blv (rod of length l moving with speed v in field B)",
          "Rotating coil: ε = NBAω sinωt",
          "Eddy currents: induced in bulk conductors; heating loss, uses: braking & induction furnace",
        ],
      },
      {
        name: "Self & Mutual Inductance",
        subtopics: [
          "Self inductance L: ε = −L dI/dt; L of solenoid = μ₀n²Al",
          "Energy stored in inductor: U = ½LI²",
          "Time constant of LR circuit: τ = L/R",
          "Mutual inductance M: ε₂ = −M dI₁/dt",
          "AC generator: rotating coil in B field; ε = NBAω sinωt",
          "Transformer: turns ratio V₂/V₁ = N₂/N₁; losses & efficiency",
        ],
      },
      {
        name: "Alternating Current",
        subtopics: [
          "AC: v = V_m sinωt; RMS values V_rms = V_m/√2; I_rms = I_m/√2",
          "Purely resistive: I & V in phase; P = V_rms I_rms",
          "Purely inductive: I lags V by 90°; X_L = ωL; P = 0 (wattless)",
          "Purely capacitive: I leads V by 90°; X_C = 1/ωC; P = 0 (wattless)",
          "Series LCR: Z = √(R² + (X_L−X_C)²); tanφ = (X_L−X_C)/R",
          "Power factor: cosφ = R/Z; P_avg = V_rms I_rms cosφ",
          "Resonance: X_L = X_C; f₀ = 1/2π√(LC); Z_min = R; I_max",
          "Wattless current: component of I perpendicular to V; contributes zero power",
        ],
      },
    ],
  },

  {
    chapter: "Electromagnetic Waves",
    tag: "E&M",
    class: "12",
    topics: [
      {
        name: "Displacement Current & EM Waves",
        subtopics: [
          "Displacement current: I_d = ε₀ dΦ_E/dt; Maxwell's modification of Ampere's law",
          "Transverse nature: E ⊥ B ⊥ propagation direction",
          "Speed in vacuum: c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s",
          "Relation: c = E₀/B₀",
          "EM waves carry energy & momentum; intensity ∝ E₀²",
        ],
      },
      {
        name: "Electromagnetic Spectrum",
        subtopics: [
          "Radio waves (km–m): AM/FM broadcasting, TV; oscillating circuits",
          "Microwaves (cm–mm): radar, microwave oven, satellite communication",
          "Infrared (mm–700 nm): heat, night vision, TV remotes, greenhouses",
          "Visible light (700–400 nm): VIBGYOR; detected by human eye",
          "Ultraviolet (400–10 nm): vitamin D, sterilisation, fluorescence",
          "X-rays (10–0.01 nm): medical imaging, crystal structure analysis",
          "Gamma rays (< 0.01 nm): nuclear reactions, cancer radiotherapy; highest energy",
        ],
      },
    ],
  },

  // ── MODERN PHYSICS ────────────────────────────────────────────────────────
  {
    chapter: "Dual Nature of Matter & Radiation",
    tag: "Modern",
    class: "12",
    topics: [
      {
        name: "Photoelectric Effect",
        subtopics: [
          "Hertz's observation: UV light causes electron emission",
          "Lenard's findings: KE_max depends on frequency, not intensity; current depends on intensity",
          "Einstein's equation: KE_max = hf − φ = hf − hf₀",
          "Work function φ: minimum energy to eject electron",
          "Threshold frequency f₀: below this, no emission regardless of intensity",
          "Stopping potential V₀: eV₀ = KE_max",
          "Particle nature of light confirmed by photoelectric effect",
        ],
      },
      {
        name: "Matter Waves",
        subtopics: [
          "de Broglie relation: λ = h/p = h/mv",
          "Electron accelerated through V volts: λ = h/√(2meV) = 1.227/√V nm",
          "Davisson-Germer experiment: electron diffraction confirms matter wave",
          "Wave-particle duality of radiation & matter",
        ],
      },
    ],
  },

  {
    chapter: "Atoms & Nuclei",
    tag: "Modern",
    class: "12",
    topics: [
      {
        name: "Atomic Models & Bohr's Theory",
        subtopics: [
          "Thomson model: electrons embedded in positive sphere (plum pudding)",
          "Rutherford's α-scattering experiment: large-angle scattering → nuclear model",
          "Rutherford's nuclear atom: tiny dense positive nucleus, electrons orbit outside",
          "Bohr's postulates: stationary orbits, mvr = nh/2π, photon emitted/absorbed in transitions",
          "Energy levels: E_n = −13.6/n² eV",
          "Orbital radius: r_n = n²a₀; a₀ = 0.529 Å",
          "Hydrogen spectrum: Lyman (UV), Balmer (visible), Paschen, Brackett, Pfund (IR)",
          "Rydberg formula: 1/λ = R_H(1/n₁² − 1/n₂²); R_H = 1.097 × 10⁷ m⁻¹",
          "Limitations: fails for multi-electron atoms, no explanation for fine structure",
        ],
      },
      {
        name: "Nuclear Structure & Binding Energy",
        subtopics: [
          "Nucleus: protons Z, neutrons N, mass number A = Z + N",
          "Isotopes (same Z), isobars (same A), isotones (same N)",
          "Atomic mass unit: 1 u = 931.5 MeV/c²",
          "Nuclear size: R = R₀A^(1/3); R₀ = 1.2 fm; nuclear density ≈ constant",
          "Nuclear force: short-range, charge-independent, strongest known force",
          "Mass defect: Δm = Zm_p + Nm_n − M_nucleus",
          "Binding energy: BE = Δm × 931.5 MeV; BE/nucleon peaks at Fe-56",
          "BE/nucleon curve: basis of understanding fission & fusion",
        ],
      },
      {
        name: "Radioactivity",
        subtopics: [
          "α decay: ⁴₂He emitted; A−4, Z−2",
          "β⁻ decay: n → p + e⁻ + v̄; Z+1, A same",
          "β⁺ decay: p → n + e⁺ + v; Z−1, A same",
          "γ decay: no change in A or Z; energy released as photon",
          "Radioactive decay law: N = N₀e^(−λt)",
          "Half-life: T½ = 0.693/λ",
          "Mean life: τ = 1/λ = 1.44 T½",
          "Activity: A = λN; units Becquerel (Bq) & Curie (Ci); 1 Ci = 3.7 × 10¹⁰ Bq",
        ],
      },
      {
        name: "Nuclear Reactions",
        subtopics: [
          "Q-value: Q = (m_reactants − m_products)c²",
          "Fission: ²³⁵U + n → ⁹²Kr + ¹⁴¹Ba + 3n + ~200 MeV",
          "Chain reaction: critical mass; controlled in reactor (moderator, control rods, coolant)",
          "Fusion: D + T → ⁴He + n + 17.6 MeV; requires ~10⁷ K (occurs in stars)",
          "Nuclear reactor: thermal reactor, breeder reactor (concept)",
        ],
      },
    ],
  },

  {
    chapter: "Electronic Devices",
    tag: "Modern",
    class: "12",
    topics: [
      {
        name: "Semiconductors",
        subtopics: [
          "Energy band theory: conductor (overlapping bands), insulator (large gap), semiconductor (small gap ~1 eV)",
          "Intrinsic semiconductor: n_i = p_i; conductivity increases with temperature",
          "n-type: pentavalent dopant (P, As, Sb); electrons majority carriers",
          "p-type: trivalent dopant (B, Al, In); holes majority carriers",
          "Mass-action law: n · p = n_i²",
        ],
      },
      {
        name: "p-n Junction & Diode",
        subtopics: [
          "Depletion layer formation; barrier potential (~0.3 V Ge, ~0.7 V Si)",
          "Forward bias: narrows depletion layer, current flows",
          "Reverse bias: widens depletion layer, tiny leakage current",
          "I-V characteristics curves for forward & reverse bias",
          "Diode as rectifier: half-wave (one diode), full-wave bridge rectifier (four diodes)",
          "Experimental: I-V characteristics of p-n junction diode",
        ],
      },
      {
        name: "Special Diodes",
        subtopics: [
          "Zener diode: operates in reverse breakdown (V_Z); Zener voltage regulator circuit",
          "Experimental: I-V characteristics & breakdown voltage of Zener diode",
          "LED: forward biased; e⁻-hole recombination emits photon; energy gap determines colour",
          "Photodiode: reverse biased; photocurrent ∝ light intensity; used in sensors",
          "Solar cell: unbiased p-n junction; photovoltaic effect; open-circuit voltage & short-circuit current",
          "Identification of diode, LED, resistor, capacitor from mixed collection",
        ],
      },
      {
        name: "Logic Gates",
        subtopics: [
          "AND gate: Y = A·B; output 1 only when both inputs 1",
          "OR gate: Y = A+B; output 1 when at least one input 1",
          "NOT gate: Y = Ā; output is complement of input",
          "NAND gate: Y = (A·B)̄; universal gate — can realise AND, OR, NOT",
          "NOR gate: Y = (A+B)̄; universal gate — can realise AND, OR, NOT",
          "Truth tables for all five gates",
        ],
      },
    ],
  },

  // ── EXPERIMENTAL SKILLS ──────────────────────────────────────────────────
  {
    chapter: "Experimental Skills",
    tag: "Practical",
    class: "11",
    topics: [
      {
        name: "Mechanics & Elasticity",
        subtopics: [
          "Vernier caliper: measure internal/external diameter & depth of vessel; zero error",
          "Screw gauge: thickness/diameter of thin sheet or wire; zero error",
          "Simple pendulum: T² vs L graph to determine g",
          "Metre scale: mass of object by principle of moments",
          "Young's modulus of metallic wire: Searle's apparatus setup & calculation",
        ],
      },
      {
        name: "Fluids & Thermal",
        subtopics: [
          "Surface tension by capillary rise: T = hρrg/2cosθ; effect of detergents on T",
          "Viscosity by terminal velocity of sphere: η = 2r²(ρ−σ)g/9v_t",
          "Specific heat of solid by method of mixtures: heat gained = heat lost",
          "Specific heat of liquid by method of mixtures",
        ],
      },
      {
        name: "Waves",
        subtopics: [
          "Speed of sound in air using resonance tube: first resonance at L₁, second at L₂; λ = 2(L₂−L₁); v = fλ",
        ],
      },
      {
        name: "Electricity",
        subtopics: [
          "Resistivity of wire using metre bridge: balanced length l → X = R(100−l)/l",
          "Resistance of given wire using Ohm's law: V-I graph, slope = R",
          "Resistance & figure of merit of galvanometer by half-deflection method",
        ],
      },
      {
        name: "Optics",
        subtopics: [
          "Focal length of convex mirror: using convex lens & mirror combination",
          "Focal length of concave mirror: by parallax using optical bench",
          "Focal length of convex lens: by parallax / u-v method",
          "Angle of deviation vs angle of incidence for triangular prism: minimum deviation",
          "Refractive index of glass slab using travelling microscope: real & apparent depth",
        ],
      },
      {
        name: "Modern Physics",
        subtopics: [
          "I-V characteristics of p-n junction diode: forward & reverse bias curves",
          "I-V characteristics of Zener diode: reverse breakdown voltage",
          "Identification of diode, LED, resistor, capacitor from mixed collection",
        ],
      },
    ],
  },
];
