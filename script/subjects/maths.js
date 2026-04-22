// ── MATHS DATA ────────────────────────────────────────────────────────────
window.MATH_DATA = [

  // ── ALGEBRA ──────────────────────────────────────────────────────────────
  {
    chapter: "Sets, Relations & Functions", tag: "Algebra", class: "11",
    topics: [
      { name: "Sets", subtopics: ["Types: empty, finite, infinite, singleton, universal, power set", "Operations: union, intersection, difference, symmetric difference, complement", "Laws: De Morgan's, distributive, associative, commutative", "Venn diagrams: n(A∪B) = n(A)+n(B)−n(A∩B); three-set problems"] },
      { name: "Relations", subtopics: ["Ordered pairs & Cartesian product A×B", "Types: reflexive, symmetric, antisymmetric, transitive, equivalence relation", "Equivalence classes & partitions"] },
      { name: "Functions", subtopics: ["Definition: domain, codomain, range", "Types: one-one (injective), onto (surjective), bijective", "Composition: fog, gof; (fog)⁻¹ = g⁻¹of⁻¹", "Inverse function: conditions, finding f⁻¹(x)", "Even & odd functions; periodic functions (sinx period 2π, tanx period π)"] },
      { name: "Special Functions & Graphs", subtopics: ["Modulus |x|: graph (V-shape), |f(x)| transforms", "Greatest integer ⌊x⌋: graph (staircase), properties, ⌊x⌋=n ↔ n≤x<n+1", "Fractional part {x} = x−⌊x⌋: period 1, sawtooth graph", "Signum sgn(x): −1, 0, 1", "Graphs of key functions: x², x³, √x, 1/x, eˣ, ln x, sinx, cosx, tanx"] },
    ]
  },

  {
    chapter: "Logarithms", tag: "Algebra", class: "11",
    topics: [
      { name: "Definition & Basics", subtopics: ["log_b(x) = y ↔ bʸ = x; domain x>0, b>0, b≠1", "log_b(b) = 1; log_b(1) = 0; log_b(bˣ) = x; b^(log_b x) = x", "Natural log ln x = log_e x; common log log₁₀ x"] },
      { name: "Laws of Logarithms", subtopics: ["Product: log(mn) = log m + log n", "Quotient: log(m/n) = log m − log n", "Power: log(mⁿ) = n log m", "Change of base: log_b(a) = log_c(a) / log_c(b)", "Reciprocal: log_b(a) = 1/log_a(b)", "log_b(a) × log_a(b) = 1"] },
      { name: "Logarithmic Equations", subtopics: ["Basic: log_b f(x) = k → f(x) = bᵏ (with domain check f(x)>0)", "Equations reducible by substitution: t = log x → quadratic in t", "Equations with same base: equate arguments", "Checking validity: all arguments must be positive"] },
      { name: "Logarithmic Inequalities", subtopics: ["Base b>1: log_b f(x) > k ↔ f(x) > bᵏ (inequality preserved)", "Base 0<b<1: log_b f(x) > k ↔ f(x) < bᵏ (inequality reverses)", "Combined with domain constraint f(x)>0", "Problems: log₂(x²−5) > log₂(x+1) type"] },
      { name: "Characteristic & Mantissa", subtopics: ["For log₁₀ N: characteristic = ⌊log₁₀ N⌋, mantissa = fractional part ≥ 0", "Number of digits in N = ⌊log₁₀ N⌋ + 1", "Number of digits in Nⁿ = ⌊n log₁₀ N⌋ + 1"] },
    ]
  },

  {
    chapter: "Complex Numbers", tag: "Algebra", class: "11",
    topics: [
      { name: "Basics & Algebra", subtopics: ["z = a+ib; Re(z)=a, Im(z)=b", "Addition, subtraction, multiplication, division (multiply by conjugate)", "Conjugate z̄=a−ib; |z|=√(a²+b²); z·z̄=|z|²", "Argument arg(z)=θ; principal arg ∈ (−π,π]", "Polar form: z=r(cosθ+i sinθ); Euler: z=re^(iθ)"] },
      { name: "Properties of Modulus & Argument", subtopics: ["|z₁z₂|=|z₁||z₂|; |z₁/z₂|=|z₁|/|z₂|", "arg(z₁z₂)=arg z₁+arg z₂; arg(z₁/z₂)=arg z₁−arg z₂", "Triangle inequality: |z₁+z₂|≤|z₁|+|z₂|; ||z₁|−|z₂||≤|z₁−z₂|", "Powers of i: cycle of 4; iⁿ = iⁿ ᵐᵒᵈ ⁴"] },
      { name: "De Moivre's Theorem & Roots", subtopics: ["(cosθ+i sinθ)ⁿ = cos(nθ)+i sin(nθ)", "nth roots of unity: e^(2πik/n), k=0,1,…,n−1; sum=0; product=(−1)ⁿ⁺¹", "Cube roots: ω=e^(2πi/3); 1+ω+ω²=0; ω³=1", "nth roots of complex number z^(1/n)"] },
      { name: "Geometry of Complex Numbers", subtopics: ["Argand plane; distance |z₁−z₂|; midpoint (z₁+z₂)/2", "Section formula, centroid of triangle with vertices z₁,z₂,z₃", "Collinearity: Im[(z₂−z₁)/(z₃−z₁)]=0", "Circle: |z−z₀|=r; perpendicular bisector: |z−a|=|z−b|", "Rotation: z₂=z₀+(z₁−z₀)e^(iα) rotates z₁ about z₀ by α"] },
      { name: "Quadratic Equations with Complex Roots", subtopics: ["D<0: complex conjugate roots a±ib", "Sum α+β=−b/a; product αβ=c/a", "Forming equation: x²−(sum)x+(product)=0", "Condition for common roots of two quadratics"] },
    ]
  },

  {
    chapter: "Quadratic Equations & Expressions", tag: "Algebra", class: "11",
    topics: [
      { name: "Quadratic Equations", subtopics: ["Standard form ax²+bx+c=0; roots: x=(−b±√D)/2a", "D=b²−4ac: D>0 (real distinct), D=0 (real equal), D<0 (complex conjugate)", "Vieta's: α+β=−b/a; αβ=c/a", "Symmetric functions: α²+β², α³+β³, α/β+β/α, (α−β)²=(α+β)²−4αβ"] },
      { name: "Quadratic Expression & Parabola", subtopics: ["f(x)=ax²+bx+c: parabola, vertex at (−b/2a, −D/4a)", "Sign of f(x): if a>0 min=−D/4a; if a<0 max=−D/4a", "f(x)>0 ∀x iff a>0 & D<0; f(x)<0 ∀x iff a<0 & D<0"] },
      { name: "Equations Reducible to Quadratic", subtopics: ["t=x², t=aˣ, t=log x, t=sin x substitutions", "Reciprocal equations: divide by xⁿ, use t=x+1/x"] },
      { name: "Theory of Equations & Location of Roots", subtopics: ["Both roots>k: D≥0, f(k)>0, −b/2a>k", "Both roots<k: D≥0, f(k)>0, −b/2a<k", "Roots on either side of k: f(k)<0 (D condition automatic)", "One root in (k₁,k₂): f(k₁)·f(k₂)<0", "Descartes' rule of signs"] },
      { name: "Inequalities", subtopics: ["Linear on number line; intersection/union of intervals", "Quadratic: wavy curve (sign chart) method", "Rational: mark critical points (num=0 & denom=0); check signs", "Modulus: |f(x)|<a ↔ −a<f(x)<a; |f(x)|>a ↔ f(x)<−a or f(x)>a"] },
    ]
  },

  {
    chapter: "Sequences & Series", tag: "Algebra", class: "11",
    topics: [
      { name: "Arithmetic Progression (AP)", subtopics: ["aₙ=a+(n−1)d; Sₙ=n/2[2a+(n−1)d]", "AM=(a+b)/2; n AMs between a & b: d=(b−a)/(n+1)", "Properties: sum of equidistant terms = a₁+aₙ; 3 terms in AP: a−d, a, a+d"] },
      { name: "Geometric Progression (GP)", subtopics: ["aₙ=arⁿ⁻¹; Sₙ=a(rⁿ−1)/(r−1); S∞=a/(1−r) for |r|<1", "GM=√(ab); n GMs: r=(b/a)^(1/(n+1))", "3 terms in GP: a/r, a, ar"] },
      { name: "Harmonic Progression (HP) & Means", subtopics: ["HP: reciprocals form AP; nth term by finding AP term", "HM=2ab/(a+b); AM≥GM≥HM (equality iff a=b)", "Weighted AM-GM inequality applications"] },
      { name: "Special Series & Summation", subtopics: ["Σr=n(n+1)/2; Σr²=n(n+1)(2n+1)/6; Σr³=[n(n+1)/2]²", "Method of differences: Tₙ=Sₙ−Sₙ₋₁ (for Sₙ given)", "Telescoping (Vₙ method): 1/(r(r+k))=1/k·[1/r−1/(r+k)]", "AGP: {a, (a+d)r, (a+2d)r², …}: multiply by r, subtract, solve"] },
    ]
  },

  {
    chapter: "Permutations & Combinations", tag: "Algebra", class: "11",
    topics: [
      { name: "Fundamental Principles & Factorials", subtopics: ["Multiplication (AND); Addition (OR)", "n!=n·(n−1)·…·1; 0!=1; n!/(n−r)!=ⁿPᵣ"] },
      { name: "Permutations", subtopics: ["ⁿPᵣ=n!/(n−r)!: ordered arrangement of r from n", "Circular: (n−1)! for distinct; (n−1)!/2 if reversals identical", "Repeated objects: n!/(p!q!r!)", "Restrictions: objects always together (group them); never together (total−together)"] },
      { name: "Combinations", subtopics: ["ⁿCᵣ=n!/(r!(n−r)!): unordered selection", "ⁿCᵣ=ⁿCₙ₋ᵣ; ⁿCᵣ+ⁿCᵣ₋₁=ⁿ⁺¹Cᵣ (Pascal)", "ΣⁿCᵣ=2ⁿ; ΣⁿC₂ᵣ=ΣⁿC₂ᵣ₊₁=2ⁿ⁻¹"] },
      { name: "Standard Problems", subtopics: ["Lines/triangles from n points (subtract collinear cases)", "Division into groups: equal groups n!/(r!)ᵏ/k!; unequal groups directly", "Distribution of identical objects in distinct boxes: ⁿ⁺ʳ⁻¹Cᵣ₋₁ (stars & bars)", "Derangements D(n)=n!·Σᵢ₌₀ⁿ(−1)ⁱ/i! (brief)"] },
    ]
  },

  {
    chapter: "Binomial Theorem", tag: "Algebra", class: "11",
    topics: [
      { name: "Binomial Expansion", subtopics: ["(x+y)ⁿ=ΣⁿCᵣ xⁿ⁻ʳ yʳ, r=0 to n", "General term: Tᵣ₊₁=ⁿCᵣ xⁿ⁻ʳ yʳ", "Total terms: n+1; middle term(s) at r=(n/2) or r=(n±1)/2"] },
      { name: "Special Terms", subtopics: ["Numerically greatest term: |Tᵣ₊₁/Tᵣ|≥1 → find r", "Term independent of x: set power of x to 0, solve for r", "Coefficient of specific xᵏ"] },
      { name: "Properties of Binomial Coefficients", subtopics: ["ΣCᵣ=2ⁿ; even sum = odd sum = 2ⁿ⁻¹", "C₀²+C₁²+…+Cₙ²=²ⁿCₙ; ΣrCᵣ=n·2ⁿ⁻¹"] },
      { name: "Multinomial & Approximation", subtopics: ["Multinomial: coeff of xᵃyᵇzᶜ in (x+y+z)ⁿ is n!/(a!b!c!)", "Approximation: (1+x)ⁿ≈1+nx for |x|«1"] },
    ]
  },

  {
    chapter: "Matrices & Determinants", tag: "Algebra", class: "12",
    topics: [
      { name: "Matrices — Basics", subtopics: ["Types: zero, identity, diagonal, scalar, symmetric (Aᵀ=A), skew-symmetric (Aᵀ=−A), orthogonal (AᵀA=I)", "Addition, scalar multiplication; matrix multiplication (conformability, AB≠BA)", "Transpose: (AB)ᵀ=BᵀAᵀ; trace tr(A)=Σaᵢᵢ"] },
      { name: "Determinants", subtopics: ["2×2: ad−bc; 3×3: cofactor expansion along any row/column", "Properties: row swap→sign change; scalar factor; det(AB)=detA·detB; det(Aᵀ)=detA", "det(kA)=kⁿ·detA; Cofactor Cᵢⱼ=(−1)^(i+j)Mᵢⱼ; adj(A)=(Cᵢⱼ)ᵀ"] },
      { name: "Inverse & System of Equations", subtopics: ["A⁻¹=adj(A)/det(A) (requires det A≠0); A·adj(A)=det(A)·I", "AX=B: X=A⁻¹B; Cramer's rule: xᵢ=Dᵢ/D", "Consistency: unique (D≠0); infinite (D=0, all Dᵢ=0); none (D=0, any Dᵢ≠0)", "Homogeneous AX=0: non-trivial iff det A=0"] },
      { name: "Special Determinant Results", subtopics: ["Vandermonde; cyclic determinants", "Evaluating by row operations without full expansion", "Area of triangle: ½|det[x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]|"] },
    ]
  },

  {
    chapter: "Mathematical Induction & Reasoning", tag: "Logic", class: "11",
    topics: [
      { name: "Mathematical Induction", subtopics: ["PMI steps: P(1) base; assume P(k); prove P(k+1)", "Proving summation formulae, divisibility statements, inequalities"] },
      { name: "Mathematical Reasoning", subtopics: ["Connectives: ∧, ∨, ¬, →, ↔; truth tables", "Tautology, contradiction, contingency", "Converse (q→p), inverse (¬p→¬q), contrapositive (¬q→¬p) of p→q", "Quantifiers ∀ & ∃"] },
    ]
  },

  {
    chapter: "Probability", tag: "Algebra", class: "12",
    topics: [
      { name: "Classical Probability", subtopics: ["P(A)=n(A)/n(S); P(A')=1−P(A)", "P(A∪B)=P(A)+P(B)−P(A∩B); mutually exclusive: P(A∩B)=0"] },
      { name: "Conditional Probability & Independence", subtopics: ["P(A|B)=P(A∩B)/P(B)", "Independent: P(A∩B)=P(A)·P(B); multiplication theorem: P(A∩B)=P(A)·P(B|A)"] },
      { name: "Bayes' Theorem", subtopics: ["Total probability: P(B)=ΣP(Aᵢ)P(B|Aᵢ)", "Bayes: P(Aᵢ|B)=P(Aᵢ)P(B|Aᵢ)/ΣP(Aⱼ)P(B|Aⱼ)"] },
      { name: "Random Variables & Distributions", subtopics: ["PMF, E(X)=ΣxᵢP(xᵢ), Var(X)=E(X²)−[E(X)]²", "Binomial: P(X=r)=ⁿCᵣpʳqⁿ⁻ʳ; mean=np; variance=npq", "Poisson (JEE Adv): P(X=r)=e^(−λ)λʳ/r!; mean=variance=λ"] },
    ]
  },

  {
    chapter: "Statistics", tag: "Logic", class: "11",
    topics: [
      { name: "Measures of Central Tendency", subtopics: ["Mean: Σxᵢ/n (ungrouped); Σfᵢxᵢ/Σfᵢ (grouped)", "Median: middle value (odd n); avg of middle two (even n); grouped: L+[(n/2−cf)/f]·h", "Mode: most frequent; grouped: L+[(f₁−f₀)/(2f₁−f₀−f₂)]·h"] },
      { name: "Measures of Dispersion", subtopics: ["Range; mean deviation about mean & median", "Variance σ²=Σ(xᵢ−x̄)²/n=Σxᵢ²/n−x̄²; SD σ=√(σ²)", "Coefficient of variation CV=(σ/x̄)×100; comparing variability of two series"] },
    ]
  },

  // ── TRIGONOMETRY ─────────────────────────────────────────────────────────
  {
    chapter: "Trigonometric Functions & Identities", tag: "Trigo", class: "11",
    topics: [
      { name: "Angles & Measurement", subtopics: ["Degree-radian: π rad=180°; l=rθ; A=½r²θ", "Trig ratios via right triangle & unit circle; reciprocal relations"] },
      { name: "Fundamental Identities & Allied Angles", subtopics: ["sin²+cos²=1; 1+tan²=sec²; 1+cot²=csc²", "Signs in quadrants: ASTC; allied angles at 90°±θ, 180°±θ, 270°±θ, 360°±θ"] },
      { name: "Compound & Multiple Angle Formulas", subtopics: ["sin(A±B), cos(A±B), tan(A±B)", "Double: sin2A=2sinAcosA; cos2A=cos²A−sin²A=1−2sin²A=2cos²A−1; tan2A", "Triple: sin3A=3sinA−4sin³A; cos3A=4cos³A−3cosA; tan3A=(3tanA−tan³A)/(1−3tan²A)", "Half angle via t=tan(A/2): sinA=2t/(1+t²); cosA=(1−t²)/(1+t²); tanA=2t/(1−t²)"] },
      { name: "Product-to-Sum & Sum-to-Product", subtopics: ["sinC+sinD=2sin((C+D)/2)cos((C−D)/2)", "sinC−sinD=2cos((C+D)/2)sin((C−D)/2)", "cosC+cosD=2cos((C+D)/2)cos((C−D)/2)", "cosC−cosD=−2sin((C+D)/2)sin((C−D)/2)"] },
      { name: "Range & Conditional Identities", subtopics: ["a sinθ+b cosθ: max=√(a²+b²), min=−√(a²+b²)", "Range of a sinθ+b cosθ+c: [c−√(a²+b²), c+√(a²+b²)]", "Conditional identities when A+B+C=π (triangle results)"] },
    ]
  },

  {
    chapter: "Inverse Trigonometry", tag: "Trigo", class: "12",
    topics: [
      { name: "Domains & Ranges", subtopics: ["sin⁻¹:[−1,1]→[−π/2,π/2]; cos⁻¹:[−1,1]→[0,π]", "tan⁻¹:ℝ→(−π/2,π/2); cot⁻¹:ℝ→(0,π)", "sec⁻¹ & csc⁻¹: domains & ranges"] },
      { name: "Properties & Identities", subtopics: ["Odd/even symmetry: sin⁻¹(−x)=−sin⁻¹x; cos⁻¹(−x)=π−cos⁻¹x; tan⁻¹(−x)=−tan⁻¹x", "Complementary pairs: sin⁻¹x+cos⁻¹x=π/2; tan⁻¹x+cot⁻¹x=π/2", "sin⁻¹x+sin⁻¹y (two cases: x²+y²≤1 and x²+y²>1)", "tan⁻¹x+tan⁻¹y: three cases based on sign of xy vs 1"] },
      { name: "Simplification & Equations", subtopics: ["sin⁻¹x as cos⁻¹√(1−x²) as tan⁻¹(x/√(1−x²)) for x∈[0,1]", "Composition: sin(cos⁻¹x)=√(1−x²); tan(sin⁻¹x)=x/√(1−x²)", "sin⁻¹(sinx)=x only if x∈[−π/2,π/2] (otherwise reduce)", "Solving equations involving inverse trig functions"] },
    ]
  },

  {
    chapter: "Trigonometric Equations", tag: "Trigo", class: "11",
    topics: [
      { name: "General Solutions", subtopics: ["sinθ=sinα → θ=nπ+(−1)ⁿα", "cosθ=cosα → θ=2nπ±α", "tanθ=tanα → θ=nπ+α", "sinθ=0→nπ; cosθ=0→(2n+1)π/2; tanθ=0→nπ"] },
      { name: "Equations of Form a sinθ+b cosθ=c", subtopics: ["Convert: R sin(θ+φ)=c where R=√(a²+b²), tanφ=b/a", "Condition for solution: |c|≤√(a²+b²)", "Auxiliary angle method"] },
      { name: "Solving in a Given Interval", subtopics: ["List general solution, substitute n=0,1,2,… to find values in [0,2π]", "Factoring method: (sinx−a)(cosx−b)=0", "Equations reducible by identities; checking extraneous solutions"] },
    ]
  },

  {
    chapter: "Properties of Triangles", tag: "Trigo", class: "11",
    topics: [
      { name: "Sine & Cosine Rule", subtopics: ["Sine rule: a/sinA=b/sinB=c/sinC=2R", "Cosine rule: a²=b²+c²−2bc cosA", "Projection formula: a=b cosC+c cosB"] },
      { name: "Area Formulas", subtopics: ["Δ=½bc sinA; Heron's: √(s(s−a)(s−b)(s−c))", "Δ=abc/4R; Δ=rs"] },
      { name: "Circles of Triangle", subtopics: ["R=a/2sinA=abc/4Δ; r=Δ/s; r₁=Δ/(s−a)", "r=4R sin(A/2)sin(B/2)sin(C/2); relations among r,r₁,r₂,r₃,R"] },
      { name: "Heights & Distances", subtopics: ["Angle of elevation/depression; single-observer tower problems", "Two-observer problems; problems with bearings"] },
    ]
  },

  // ── COORDINATE GEOMETRY ──────────────────────────────────────────────────
  {
    chapter: "Straight Lines", tag: "Coord", class: "11",
    topics: [
      { name: "Cartesian Coordinates & Locus", subtopics: ["Distance, section formula (internal & external), midpoint", "Centroid, incentre (weighted by side lengths), circumcentre, orthocentre", "Area of triangle via coordinates: ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|; collinearity when = 0", "Locus: translate geometric condition → algebraic equation"] },
      { name: "Equation of a Line", subtopics: ["Slope m=tanθ; slope from two points", "Slope-intercept y=mx+c; point-slope y−y₁=m(x−x₁); two-point form", "Intercept form x/a+y/b=1; normal form x cosα+y sinα=p", "General form ax+by+c=0; slope=−a/b; intercepts=−c/a, −c/b"] },
      { name: "Parametric Form of a Line", subtopics: ["Through (x₁,y₁) at inclination θ: x=x₁+r cosθ, y=y₁+r sinθ", "r = signed distance along line from (x₁,y₁); |r| = actual distance to point", "Finding points at given distance d from (x₁,y₁) along the line", "Locating feet of perpendiculars & reflections using parametric form"] },
      { name: "Angle, Distance & Position", subtopics: ["Angle between lines: tanψ=|(m₁−m₂)/(1+m₁m₂)|; parallel m₁=m₂; perp m₁m₂=−1", "Distance from (x₁,y₁) to ax+by+c=0: |ax₁+by₁+c|/√(a²+b²)", "Distance between parallel lines |c₁−c₂|/√(a²+b²)", "Same/opposite side of line: same if (ax₁+by₁+c) & (ax₂+by₂+c) have same sign"] },
      { name: "Family of Lines, Concurrency & Bisectors", subtopics: ["Family through L₁∩L₂: L₁+λL₂=0", "Concurrence of three lines: det=0", "Angle bisectors: (ax+by+c)/√(a²+b²)=±(a'x+b'y+c')/√(a'²+b'²)", "Identifying acute/obtuse bisector"] },
      { name: "Pair of Straight Lines", subtopics: ["Homogeneous: ax²+2hxy+by²=0: two lines through origin; m₁+m₂=−2h/b; m₁m₂=a/b", "Angle between pair: tanθ=2√(h²−ab)/(a+b); perp if a+b=0; coincident if h²=ab", "General 2nd degree S=ax²+2hxy+by²+2gx+2fy+c=0 represents pair of lines iff Δ=|a h g; h b f; g f c|=0", "Equation of angle bisectors of ax²+2hxy+by²=0: (x²−y²)/(a−b)=xy/h"] },
      { name: "Transformation of Axes", subtopics: ["Translation to (h,k): X=x−h, Y=y−k (removes linear terms)", "Rotation by θ: x=X cosθ−Y sinθ, y=X sinθ+Y cosθ", "Removing xy-term: choose θ=½ cot⁻¹((a−b)/2h)"] },
    ]
  },

  {
    chapter: "Circles", tag: "Coord", class: "11",
    topics: [
      { name: "Equations of Circle", subtopics: ["Standard: (x−h)²+(y−k)²=r²", "General: x²+y²+2gx+2fy+c=0; centre (−g,−f), r=√(g²+f²−c)", "Diameter form: (x−x₁)(x−x₂)+(y−y₁)(y−y₂)=0", "Parametric: x=h+r cosθ, y=k+r sinθ"] },
      { name: "Position of Point & Line", subtopics: ["S₁₁<0 (inside), =0 (on), >0 (outside)", "d<r (chord), d=r (tangent), d>r (no intersection)", "Length of chord 2√(r²−d²); length of tangent √(S₁₁)"] },
      { name: "Tangent & Normal", subtopics: ["Tangent at (x₁,y₁): T=0", "Slope form: y=mx±r√(1+m²)", "Normal passes through centre; pair of tangents SS₁=T²"] },
      { name: "Chord", subtopics: ["Chord of contact: T=0; chord with midpoint (x₁,y₁): T=S₁"] },
      { name: "Family of Circles & Radical Axis", subtopics: ["S₁+λS₂=0; radical axis S₁−S₂=0; radical centre", "Orthogonality condition: 2g₁g₂+2f₁f₂=c₁+c₂"] },
    ]
  },

  {
    chapter: "Parabola", tag: "Coord", class: "11",
    topics: [
      { name: "Standard Forms & Definitions", subtopics: ["y²=4ax: focus (a,0), directrix x=−a, LR=4a, parametric (at²,2at)", "Four orientations: y²=±4ax, x²=±4ay", "Shifted form (y−k)²=4a(x−h); vertex (h,k)", "Focal distance of (x₁,y₁): x₁+a (for y²=4ax)"] },
      { name: "Tangent & Normal", subtopics: ["Tangent at (x₁,y₁): yy₁=2a(x+x₁); at param t: ty=x+at²", "Slope form: y=mx+a/m; foot (a/m²,2a/m)", "Normal at t: y+tx=2at+at³; slope form y=mx−2am−am³"] },
      { name: "Chord & Chord of Contact", subtopics: ["Chord through t₁,t₂: slope=2/(t₁+t₂); focal chord: t₁t₂=−1", "Chord of contact from (h,k): ky=2a(x+h)", "Chord with midpoint (h,k): T=S₁"] },
      { name: "Reflection & Conormals", subtopics: ["Reflection property: rays ‖ axis → focus", "Three conormal points: sum of slopes=0, sum of ordinates=0", "Director circle (locus of ⊥ tangents): x=−a (the directrix itself)"] },
    ]
  },

  {
    chapter: "Ellipse & Hyperbola", tag: "Coord", class: "12",
    topics: [
      { name: "Ellipse — Standard Form", subtopics: ["x²/a²+y²/b²=1 (a>b): c²=a²−b²; e=c/a<1", "Foci (±ae,0); directrices x=±a/e; LR=2b²/a; sum of focal distances=2a", "Parametric: (a cosθ, b sinθ); auxiliary circle x²+y²=a²"] },
      { name: "Ellipse — Tangent, Normal & Chord", subtopics: ["Tangent at (x₁,y₁): xx₁/a²+yy₁/b²=1; slope form y=mx±√(a²m²+b²)", "Normal at (x₁,y₁): a²x/x₁−b²y/y₁=a²−b²; director circle x²+y²=a²+b²", "Chord of contact T=0; midpoint chord T=S₁"] },
      { name: "Hyperbola — Standard Form", subtopics: ["x²/a²−y²/b²=1: c²=a²+b²; e>1; asymptotes y=±(b/a)x", "Foci (±ae,0); LR=2b²/a; |difference of focal distances|=2a", "Rectangular: xy=c²; parametric (a secθ,b tanθ) or (ct,c/t)"] },
      { name: "Hyperbola — Tangent & Chord", subtopics: ["Tangent at (x₁,y₁): xx₁/a²−yy₁/b²=1; slope form y=mx±√(a²m²−b²)", "Director circle x²+y²=a²−b² (exists if a>b); chord of contact T=0"] },
      { name: "Focal Chord & Optical Properties", subtopics: ["Ellipse focal chord: 1/r₁+1/r₂=2a/b²", "Reflection: ellipse F₁→F₂; hyperbola directed at F₁→reflects to F₂"] },
    ]
  },

  // ── CALCULUS ─────────────────────────────────────────────────────────────
  {
    chapter: "Limits & Continuity", tag: "Calculus", class: "11",
    topics: [
      { name: "Limits — Concept & Techniques", subtopics: ["LHL, RHL; limit exists iff LHL=RHL", "Indeterminate forms: 0/0, ∞/∞, 0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰", "Factoring, rationalisation, L'Hôpital's rule"] },
      { name: "Standard Limits", subtopics: ["lim_{x→0} sinx/x=1; tanx/x=1; (1−cosx)/x²=½", "lim_{x→0} (eˣ−1)/x=1; (aˣ−1)/x=ln a; ln(1+x)/x=1", "lim_{x→0}(1+x)^(1/x)=e; lim_{x→∞}(1+1/x)ˣ=e", "lim_{x→a}(xⁿ−aⁿ)/(x−a)=naⁿ⁻¹", "Sandwich (squeeze) theorem: g(x)≤f(x)≤h(x) & lim g=lim h=L ⟹ lim f=L"] },
      { name: "Continuity", subtopics: ["Continuous at a: f(a) defined, limit exists, lim=f(a)", "Types of discontinuity: removable (limit≠f(a)), jump (LHL≠RHL), infinite", "Operations on continuous functions; continuity of standard functions"] },
      { name: "IVT & Applications", subtopics: ["IVT: continuous on [a,b] ⟹ takes all values between f(a) & f(b)", "Existence of root when f(a) & f(b) have opposite signs"] },
    ]
  },

  {
    chapter: "Differentiability & Differentiation", tag: "Calculus", class: "11",
    topics: [
      { name: "Differentiability", subtopics: ["First principle: f'(a)=lim_{h→0}[f(a+h)−f(a)]/h", "LHD=RHD for differentiable; corners/cusps/vertical tangents are non-differentiable", "Differentiable ⟹ continuous; not vice versa"] },
      { name: "Differentiation Formulas", subtopics: ["Power, exponential, log rules", "All six trig and six inverse trig derivatives"] },
      { name: "Rules of Differentiation", subtopics: ["Product, quotient, chain rule"] },
      { name: "Special Techniques", subtopics: ["Logarithmic differentiation (xˣ, products)", "Implicit differentiation", "Parametric: dy/dx=(dy/dt)/(dx/dt); d²y/dx²", "Higher order derivatives"] },
    ]
  },

  {
    chapter: "Applications of Derivatives", tag: "Calculus", class: "12",
    topics: [
      { name: "Tangents & Normals", subtopics: ["Tangent/normal equations; angle between curves", "Length of tangent, normal, subtangent, subnormal"] },
      { name: "Monotonicity", subtopics: ["f'>0 increasing; f'<0 decreasing; critical points", "Monotone intervals; strictly monotone conditions"] },
      { name: "Maxima & Minima", subtopics: ["First derivative test (sign change of f')", "Second derivative test (f'' sign at critical point)", "Absolute extrema on [a,b]: check critical pts + endpoints", "Inflection point: f''=0 & sign change"] },
      { name: "Rolle's & MVT", subtopics: ["Rolle's theorem: conditions & conclusion", "LMVT: f'(c)=[f(b)−f(a)]/(b−a); Cauchy's MVT", "Applications: inequalities, number of roots"] },
      { name: "Rate of Change, Error & Optimisation", subtopics: ["Related rates: dy/dt=(dy/dx)·(dx/dt)", "Linear approximation f(a+h)≈f(a)+hf'(a); error Δy≈f'(x)Δx", "Optimisation problems: max area, min cost/material, shortest path"] },
    ]
  },

  {
    chapter: "Indefinite Integration", tag: "Calculus", class: "12",
    topics: [
      { name: "Standard Integrals", subtopics: ["Power, log, exponential, all trig, inverse trig standard forms"] },
      { name: "Methods of Integration", subtopics: ["Substitution (u-sub)", "Integration by parts: ∫u dv=uv−∫v du; ILATE rule", "Partial fractions: distinct linear, repeated, irreducible quadratic"] },
      { name: "Special & Irrational Integrals", subtopics: ["∫dx/(x²±a²); ∫dx/(a²−x²) (log forms)", "∫dx/√(x²±a²); ∫dx/√(a²−x²) (log & arcsin forms)", "∫√(a²−x²) dx; ∫√(x²±a²) dx (standard formulae with derivation)", "Completing the square for ∫dx/(ax²+bx+c) & ∫dx/√(ax²+bx+c)", "∫(px+q)/(ax²+bx+c) dx: split as λ·deriv(denom)+μ"] },
      { name: "Key Patterns & Reductions", subtopics: ["∫eˣ[f(x)+f'(x)] dx=eˣf(x)+C", "Wallis reduction for ∫sinⁿx dx, ∫cosⁿx dx", "∫tanⁿx, ∫secⁿx reduction formulas"] },
    ]
  },

  {
    chapter: "Definite Integration & Area", tag: "Calculus", class: "12",
    topics: [
      { name: "Properties of Definite Integrals", subtopics: ["Linearity, additivity, reversal of limits", "King's: ∫ₐᵇ f(x)=∫ₐᵇ f(a+b−x); half-interval: ∫₀ᵃ f(a−x)", "Even/odd on [−a,a]; periodic: ∫₀ⁿᵀ f=n∫₀ᵀ f"] },
      { name: "Evaluation & Leibniz Rule", subtopics: ["FTC: ∫ₐᵇ f=F(b)−F(a)", "Substitution with limit change", "Leibniz: d/dx[∫_{g(x)}^{h(x)} f(t)dt]=f(h)h'−f(g)g'"] },
      { name: "Limit of Sum", subtopics: ["Riemann sum → ∫ₐᵇ f; recognise lim(1/n)Σf(r/n)=∫₀¹ f(x)dx"] },
      { name: "Area Under Curves", subtopics: ["∫|f(x)| dx (split at roots)", "Area between curves ∫|f−g| dx", "Horizontal strips; standard areas (circle, ellipse, parabola)"] },
    ]
  },

  {
    chapter: "Differential Equations", tag: "Calculus", class: "12",
    topics: [
      { name: "Basics & Formation", subtopics: ["Order, degree; formation by eliminating constants"] },
      { name: "Methods", subtopics: ["Variable separable; reducible to separable (dy/dx=f(ax+by+c))", "Homogeneous: y=vx substitution", "Linear 1st order: IF=e^(∫P dx)", "Bernoulli: z=y^(1−n) substitution"] },
      { name: "Applications", subtopics: ["Tangent/normal curve problems; orthogonal trajectories", "Growth/decay: dN/dt=kN; Newton's cooling"] },
    ]
  },

  // ── VECTORS & 3D ─────────────────────────────────────────────────────────
  {
    chapter: "Vectors", tag: "Vectors & 3D", class: "12",
    topics: [
      { name: "Basics & Algebra", subtopics: ["Types of vectors; addition (triangle, parallelogram laws)", "Unit vector; position vector; section formula in vectors"] },
      { name: "Dot Product", subtopics: ["a⃗·b⃗=|a||b|cosθ; Cartesian form; projection", "Perpendicularity condition; work done (F⃗·d⃗)"] },
      { name: "Cross Product", subtopics: ["a⃗×b⃗=|a||b|sinθ n̂; det form; anti-commutative", "Parallel condition; area of triangle/parallelogram; torque"] },
      { name: "Triple Products", subtopics: ["STP [a⃗ b⃗ c⃗]=a⃗·(b⃗×c⃗): volume; coplanar iff =0", "Volume of tetrahedron=⅙|STP|", "VTP: a⃗×(b⃗×c⃗)=(a⃗·c⃗)b⃗−(a⃗·b⃗)c⃗"] },
    ]
  },

  {
    chapter: "3D Geometry", tag: "Vectors & 3D", class: "12",
    topics: [
      { name: "Direction Cosines & Ratios", subtopics: ["l,m,n with l²+m²+n²=1; DR a,b,c proportional", "DC from two points; angle between lines via DC"] },
      { name: "Equations of a Line", subtopics: ["Vector r⃗=a⃗+λb⃗; Cartesian (x−x₁)/l=(y−y₁)/m=(z−z₁)/n", "Angle: parallel (b⃗₁‖b⃗₂); perpendicular (b⃗₁·b⃗₂=0)"] },
      { name: "Skew Lines & Distance", subtopics: ["SD=|(a⃗₂−a⃗₁)·(b⃗₁×b⃗₂)|/|b⃗₁×b⃗₂|; Cartesian form", "Condition for intersection: SD=0"] },
      { name: "Equations of a Plane", subtopics: ["r⃗·n⃗=d; through 3 points; intercept form x/a+y/b+z/c=1", "Family through line of intersection: P₁+λP₂=0"] },
      { name: "Angle, Distance & Combinations", subtopics: ["Angle between planes; distance from point to plane", "Angle between line & plane; line ⊥/‖ plane conditions", "Foot of perpendicular from point to plane & to line; image of point in plane"] },
      { name: "Sphere", subtopics: ["Equation: (x−a)²+(y−b)²+(z−c)²=r²", "General: x²+y²+z²+2ux+2vy+2wz+d=0; centre (−u,−v,−w), r=√(u²+v²+w²−d)", "Sphere through 4 given points (setting up system)"] },
    ]
  },

];