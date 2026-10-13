export const COMPANY_INFO = {
  name: "AKASH INDUSTRIES",
  tagline: "Engineering Quality. Building Trust.",
  subtitle: "Industrial Manufacturing & Precision Engineering Solutions",
  description:
    "Akash Industries delivers precision-engineered industrial components, custom metal fabrication, and comprehensive manufacturing support. We partner with industries across infrastructure, automotive, and heavy equipment to turn complex specifications into durable, reliable parts.",
  disclaimer:
    "Demo Notice: All specifications, capabilities, and metrics presented on this website are illustrative sample content developed for demonstration purposes.",
  contact: {
    address: "Plot 42, Sector 8, Industrial Development Zone, Phase II",
    city: "Navi Mumbai, MH 400710",
    phone: "+91 (022) 5550-8421",
    email: "inquiries@akashindustries-demo.com",
    hours: "Monday – Saturday: 08:30 AM – 06:30 PM IST",
    emergencySupport: "24/7 Production Downtime Assistance",
  },
  stats: [
    { label: "Machining Accuracy", value: "±0.005 mm" },
    { label: "Standard Production Cycles", value: "24/7 Operations" },
    { label: "Material Grades Processed", value: "40+ Alloys & Steels" },
    { label: "Inspection Coverage", value: "100% Quality Audited" },
  ],
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export const VALUES_DATA = [
  {
    id: "quality",
    title: "Quality",
    icon: "ShieldCheck",
    tagline: "Zero-tolerance for compromise",
    description:
      "Every manufactured batch undergoes rigorous dimensional verification, material hardness analysis, and surface-integrity audits using calibrated precision instruments.",
    highlights: ["Dimensional CMM inspections", "Certified raw materials", "Standardized process controls"],
  },
  {
    id: "reliability",
    title: "Reliability",
    icon: "CheckCircle2",
    tagline: "Consistency across every delivery",
    description:
      "Dependable production scheduling and disciplined supply chain management ensure critical components arrive on schedule without production bottlenecks.",
    highlights: ["On-time dispatch focus", "Traceable batch documentation", "Durable operational lifespan"],
  },
  {
    id: "innovation",
    title: "Innovation",
    icon: "Cpu",
    tagline: "Modern tooling & continuous adaptation",
    description:
      "Continuous optimization in multi-axis machining, automated tooling pathways, and lean production workflows to streamline turnaround and minimize waste.",
    highlights: ["Multi-axis CNC equipment", "Lean workflow adoption", "Computer-aided optimization"],
  },
];

export const PRODUCTS_DATA = [
  {
    id: "industrial-components",
    title: "Industrial Components",
    category: "Heavy Machinery & Plant",
    shortDesc:
      "Heavy-duty mechanical assemblies, structural brackets, industrial valves, and high-tensile fasteners built for severe operating environments.",
    fullDesc:
      "Our industrial component manufacturing line specializes in robust, high-load hardware suited for industrial machinery, process plants, and material transport networks. Built from forged carbon steel, alloy grades, and stainless metals with custom protective coatings.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: [
      "High-load mechanical brackets & flanges",
      "Corrosion-resistant surface finishing",
      "Heavy-duty fasteners and structural joints",
      "Custom industrial piping couplings",
    ],
    specifications: {
      tolerances: "Standard ISO 2768-m",
      materials: "Carbon Steel, Stainless Steel (304/316), Cast Iron",
      surfaceTreatment: "Zinc plating, Powder coating, Black oxide",
      batchCapacity: "Pilot batches to volume runs",
    },
  },
  {
    id: "precision-parts",
    title: "Precision Parts",
    category: "CNC Machining & Milling",
    shortDesc:
      "High-tolerance CNC turned and milled components, bushings, pins, splined shafts, and custom fixtures engineered to micro-level accuracy.",
    fullDesc:
      "Produced on multi-axis CNC turning and machining centers, our precision parts deliver extreme dimensional repeatability for hydraulic systems, gearboxes, and precision tooling assemblies where tight tolerances are mandatory.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    features: [
      "High-precision turned shafts & sleeves",
      "Close-tolerance milled pockets & slots",
      "Precision brass & bronze bushings",
      "Honed hydraulic valve spools",
    ],
    specifications: {
      tolerances: "Down to ±0.005 mm",
      materials: "Alloy Steel (EN8, EN24), Brass, Aluminum 6061/7075",
      surfaceRoughness: "Ra 0.4 µm achievable",
      inspection: "Optical comparator & CMM report",
    },
  },
  {
    id: "engineering-solutions",
    title: "Engineering Solutions",
    category: "Technical Services & Tooling",
    shortDesc:
      "Engineering consultation, design for manufacturability (DFM), tooling design, and custom fixture fabrication for streamlined production.",
    fullDesc:
      "From converting technical CAD drawings into production workflows to troubleshooting assembly bottlenecks, our engineering team provides practical technical advisory to improve part longevity and lower unit manufacturing costs.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    features: [
      "Design for Manufacturability (DFM) audits",
      "Custom jig and fixture design",
      "Process route planning & optimization",
      "Material selection & heat-treatment advisory",
    ],
    specifications: {
      designSoftware: "SolidWorks, AutoCAD, Mastercam compatible",
      deliveryFormat: "STEP, IGES, DXF, 2D Production Blueprints",
      prototypingSupport: "Rapid turnaround validation samples",
      scope: "Tooling, testing rigs, and process planning",
    },
  },
  {
    id: "custom-manufacturing",
    title: "Custom Manufacturing",
    category: "Fabrication & Assembly",
    shortDesc:
      "Bespoke metal fabrication, laser cutting, certified structural welding, and turn-key mechanical assembly tailored to client blueprints.",
    fullDesc:
      "Complete contract fabrication services combining CNC laser sheet profiling, press-brake bending, TIG/MIG welding, and finished module assembly. We support both customized one-off fabrications and scalable contract manufacturing schedules.",
    image:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    features: [
      "CNC sheet metal cutting & precision bending",
      "Certified MIG/TIG structural fabrication",
      "Sub-assembly and component integration",
      "Protective priming and industrial coatings",
    ],
    specifications: {
      cuttingThickness: "Up to 25mm mild steel, 16mm stainless",
      weldingStandards: "WPS compliant industrial welding",
      assemblyScope: "Turnkey sub-assemblies and test fits",
      leadTimes: "Accelerated prototyping & scheduled rollouts",
    },
  },
];

export const INDUSTRIES_DATA = [
  {
    id: "heavy-manufacturing",
    name: "Manufacturing & Heavy Plants",
    icon: "Factory",
    description:
      "Wear-resistant wear plates, roller assemblies, gearbox housings, and machine frames designed for continuous factory environments.",
    keyDeliverables: ["Machinery replacement parts", "Conveyor drives", "Heavy brackets"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Construction",
    icon: "Building2",
    description:
      "High-tensile structural tie-rods, anchor plates, civil hardware, and customized fabrication for large-scale engineering projects.",
    keyDeliverables: ["Foundation anchor bolts", "Structural gussets", "Heavy shoring pins"],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    icon: "Zap",
    description:
      "Pressure-retaining couplings, turbine mountings, heat-exchanger components, and valve manifolds fabricated for thermal and mechanical resilience.",
    keyDeliverables: ["Manifold blocks", "Flange adaptors", "Thermal-resistant fittings"],
  },
  {
    id: "industrial-equipment",
    name: "Industrial Equipment & Tooling",
    icon: "Wrench",
    description:
      "Jigs, fixtures, indexing plates, and precision hydraulic components supplied to equipment makers and system integrators.",
    keyDeliverables: ["Assembly fixtures", "Precision guide pins", "Clamping blocks"],
  },
  {
    id: "automotive",
    name: "Automotive & Fleet Hardware",
    icon: "Truck",
    description:
      "Chassis brackets, suspension bushings, drivetrain couplings, and auxiliary mechanical parts built to exact dimensional repeatability.",
    keyDeliverables: ["Suspension linkage pins", "Engine mount brackets", "Machined hubs"],
  },
  {
    id: "material-handling",
    name: "Material Handling & Logistics",
    icon: "Boxes",
    description:
      "Heavy-duty rollers, overhead crane track components, palletizing hardware, and ruggedized pulleys for high-duty-cycle facilities.",
    keyDeliverables: ["Guide rollers & idlers", "Shaft collars", "Crane hoist components"],
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: "quality-focused",
    title: "Quality-Focused Approach",
    icon: "Target",
    badge: "Standards & Control",
    description:
      "Quality is engineered into every stage, from raw material receipt through CNC programming, in-process gauging, and final pre-dispatch verification.",
    points: [
      "Rigorous dimensional tolerance verification",
      "Calibrated measuring instruments and gauges",
      "Material test certifications available with every batch",
    ],
  },
  {
    id: "customer-oriented",
    title: "Customer-Oriented Service",
    icon: "Users",
    badge: "Direct Collaboration",
    description:
      "We act as an extension of your engineering and procurement departments, offering direct technical communication, flexible scheduling, and clear production timelines.",
    points: [
      "Single-point technical point of contact",
      "Rapid quoting and prototype turnaround",
      "Transparent order progress updates from shop floor",
    ],
  },
  {
    id: "reliable-solutions",
    title: "Reliable Solutions",
    icon: "Layers",
    badge: "Proven Consistency",
    description:
      "Industrial operations depend on uninterrupted supply. Our disciplined production routing and vendor relationships minimize risk and protect delivery milestones.",
    points: [
      "Repeatable tolerances across pilot and production batches",
      "Structured material stocking for critical contracts",
      "Secure protective packaging for safe transit",
    ],
  },
  {
    id: "continuous-improvement",
    title: "Continuous Improvement",
    icon: "TrendingUp",
    badge: "Modern Machinery",
    description:
      "We systematically invest in tooling calibration, machine modernization, cycle-time reductions, and safety standards to deliver increasing value.",
    points: [
      "Regular tooling and machine calibration regimens",
      "Lean manufacturing methodology to minimize scrap",
      "Ongoing technician skills development and workshop safety",
    ],
  },
];
