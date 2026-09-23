import { UseCase, CustomerReview, FAQItem, SuburbDistance } from "../types";

export const siteContent = {
  header: {
    phone: "0433 418 566",
    quoteButtonText: "Get a quote",
  },
  hero: {
    badge: "LONG-TERM VAN HIRE · SYDNEY",
    titleLine1: "100+ Vans.",
    titleLine2: "Ready To",
    titleLine3: "Work.",
    description: "Powering Sydney's trades, couriers, and businesses. Tap into our massive fleet of 100+ commercial vans with unlimited kilometres and comprehensive insurance included.",
    primaryCta: "Explore Fleet",
    phoneCta: "0433 418 566"
  },
  subHeroTicker: {
    tagline: "RENT. DRIVE. THRIVE.",
    items: [
      { text: "Get the van.", icon: "Key" },
      { text: "Get to work.", icon: "SteeringWheel" },
      { text: "Grow your business.", icon: "TrendingUp" }
    ]
  },
  localIntro: {
    heading: "Local, reliable van hire in Sydney",
    description: "Based in Condell Park, XPDX Rentals is a proudly local business focused on providing dependable cargo vans for individuals and businesses across Sydney. Whether you're moving house, handling an overflow of deliveries, or need a long-term commercial fleet addition, we ensure you get the right vehicle at an honest price.",
    cards: [
      {
        title: "Condell Park",
        description: "Conveniently located for quick pickup and drop-off.",
        icon: "MapPin"
      },
      {
        title: "Flexible Hire",
        description: "Short-term jobs or long-term commercial solutions.",
        icon: "Calendar"
      }
    ]
  },
  process: {
    pill: "Process",
    heading: "Simple 3-step process",
    subheading: "We've stripped away the complexity. Getting your van on the road is fast, straightforward, and completely transparent.",
    steps: [
      {
        number: "1",
        title: "Choose & Enquire",
        description: "Browse our fleet and select the van that fits your job. Send us a quick enquiry or call us directly."
      },
      {
        number: "2",
        title: "Fast Approval",
        description: "We verify your details swiftly without endless paperwork. Transparent pricing means no hidden surprises."
      },
      {
        number: "3",
        title: "Pick Up & Drive",
        description: "Collect your van from our Condell Park depot. Fully maintained, insured, and ready for the road."
      }
    ]
  },
  whyHire: {
    heading: "Why hire with us",
    subheading: "Ten things you don't have to ask about, because they're already included.",
    features: [
      { title: "Unlimited kilometres", icon: "Gauge" },
      { title: "Comprehensive insurance", icon: "ShieldCheck" },
      { title: "24/7 roadside assistance", icon: "PhoneCall" },
      { title: "Well-maintained fleet", icon: "Wrench" },
      { title: "Flexible rental terms (28 day minimum)", icon: "CalendarDays" },
      { title: "Fast approvals", icon: "Zap" },
      { title: "Family-owned business", icon: "Users" },
      { title: "Transparent pricing", icon: "Receipt" },
      { title: "Dedicated support", icon: "Headphones" },
      { title: "In-house mechanic", icon: "Cog" }
    ]
  },
  stats: [
    { number: "100+", label: "Vans in Fleet", sublabel: "Ready to work across NSW" },
    { number: "24/7", label: "Roadside Support", sublabel: "Always there when you need us" },
    { number: "28", label: "Day Minimum", sublabel: "Flexible commercial terms" }
  ],
  footer: {
    badge: "Operating 100+ Commercial Vehicles",
    tagline: "Rent · Drive · Thrive",
    companyName: "XPDX Rentals",
    description: "Premium cargo van hire from our yard at Condell Park NSW 2200. 28 day minimum hire for trades and businesses.",
    phone: "0433 418 566",
    address: "16 Irma Street, Condell Park NSW 2200",
    openingHours: {
      weekday: "Mon - Fri: 9:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 1:00 PM",
      sunday: "Sunday: Closed"
    }
  }
};

export const useCases: UseCase[] = [
  {
    id: "courier-delivery",
    title: "Courier & Delivery",
    slug: "courier-delivery",
    description: "Agile, easy-to-park vans with great fuel economy for multi-drop city routes.",
    badgeCount: "3 VAN OPTIONS",
    iconName: "Truck",
    highlights: [
      "A courier round is measured in kilometres, and every hire here is unlimited — the busiest week costs the same as the quietest.",
      "Shorter wheelbases park and turn in the places a round actually takes you: laneways, loading docks, residential streets.",
      "Low roof clearance under 2.0m easily fits standard shopping centre and apartment underground carparks."
    ],
    suggestedVehicleIds: ["2009-toyota-hiace-lwb", "2014-toyota-hiace-lwb-28t", "2016-mercedes-benz-sprinter-mwb"]
  },
  {
    id: "trade-construction",
    title: "Trade & Construction",
    slug: "trade-construction",
    description: "Rugged workhorses with the height and payload for tools, materials and a team.",
    badgeCount: "3 VAN OPTIONS",
    iconName: "HardHat",
    highlights: [
      "Heavy duty tie-down points and ply-lined floors protect both the vehicle and your costly power tools.",
      "High roof standing room allows technicians to work comfortably inside during rainy job days.",
      "Reliable turbo-diesel engines easily handle full toolboxes, piping, and timber deliveries."
    ],
    suggestedVehicleIds: ["2016-mercedes-benz-sprinter-mwb", "2014-mercedes-benz-sprinter-mwb-35t", "2014-toyota-hiace-slwb-highroof"]
  },
  {
    id: "refrigerated-cold-chain",
    title: "Refrigerated / Cold Chain",
    slug: "refrigerated-cold-chain",
    description: "Temperature-controlled vans for food, floral, and pharmaceutical transport.",
    badgeCount: "0 VAN OPTIONS",
    iconName: "ThermometerSnowflake",
    highlights: [
      "Calibrated cooling units maintaining strict Australian HACCP temperature standards.",
      "Thermal insulated cargo bay with easy-clean antibacterial surfaces.",
      "Standby electric plug-in capability for overnight loading."
    ],
    suggestedVehicleIds: []
  },
  {
    id: "group-transport",
    title: "Group Transport",
    slug: "group-transport",
    description: "Comfortable multi-seat people movers for corporate events or site shuttles.",
    badgeCount: "0 VAN OPTIONS",
    iconName: "Users",
    highlights: [
      "Generous legroom with dual climate control air-conditioning front and rear.",
      "Luggage space behind the final row for suitcases and event gear.",
      "Standard car driver licence compatible models."
    ],
    suggestedVehicleIds: []
  },
  {
    id: "events-production",
    title: "Events & Production",
    slug: "events-production",
    description: "Secure, lockable vans for catering, lighting, sound and production gear.",
    badgeCount: "3 VAN OPTIONS",
    iconName: "Camera",
    highlights: [
      "High ceiling capacity allows rigging, trussing, flight cases, and lighting stands to stay upright.",
      "Wide barn doors open 270 degrees for rapid loading directly off loading ramps.",
      "Full comprehensive insurance covers high-value gear transport throughout NSW."
    ],
    suggestedVehicleIds: ["2016-mercedes-benz-sprinter-mwb", "2014-mercedes-benz-sprinter-mwb-std", "2014-toyota-hiace-slwb-highroof"]
  },
  {
    id: "moving-house",
    title: "Moving House",
    slug: "moving-house",
    description: "The largest vans in the fleet, for furniture, appliances and full loads.",
    badgeCount: "3 VAN OPTIONS",
    iconName: "Home",
    highlights: [
      "Fits queen mattresses upright, three-seater sofas, and tall refrigerators with ease.",
      "Much easier and safer to drive than a truck with regular automatic transmission.",
      "Avoid expensive removalist hourly rates with your own flexible 28-day hire."
    ],
    suggestedVehicleIds: ["2016-mercedes-benz-sprinter-mwb", "2014-mercedes-benz-sprinter-mwb-std", "2014-toyota-hiace-slwb-highroof"]
  }
];

export const reviews: CustomerReview[] = [
  {
    id: "1",
    author: "Michael T.",
    rating: 5,
    text: "The vans were in great condition and clearly well-maintained. The team made the rental process incredibly easy and stress-free.",
    source: "Google Reviews",
    location: "Sydney"
  },
  {
    id: "2",
    author: "Sarah J.",
    rating: 5,
    text: "Reasonable pricing and very transparent with no hidden fees. Needed a van for a home move and XPDX was by far the best option in Condell Park.",
    source: "Google Reviews",
    location: "Condell Park"
  },
  {
    id: "3",
    author: "David L.",
    rating: 5,
    text: "Excellent customer service. They helped me pick the right size van for our business delivery run. Highly recommended!",
    source: "Google Reviews",
    location: "Bankstown"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Is there a security bond?",
    answer: "Yes, a standard refundable security bond of $750 is held during the rental period. This is reduced to $500 if you connect your own active toll account. The bond is promptly released once the vehicle is returned in good condition."
  },
  {
    question: "What is the minimum rental period?",
    answer: "Our minimum rental period is 28 days. We specialize in flexible, commercial-grade long-term hire for couriers, trades, and expanding fleets, avoiding rigid 3-year leases."
  },
  {
    question: "Are there any kilometre limits?",
    answer: "Zero limits. All our rentals include 100% unlimited kilometres anywhere across New South Wales. Drive as much as your work demands without worrying about excess fees."
  },
  {
    question: "Is insurance included?",
    answer: "Yes, comprehensive commercial motor vehicle insurance is included in every weekly quote, alongside 24/7 emergency roadside assistance and routine maintenance."
  },
  {
    question: "Who can rent a vehicle?",
    answer: "Drivers must be at least 21 years old and hold a current, full Australian driver licence (held for a minimum of 12 months) or an approved international equivalent."
  },
  {
    question: "Can I use the vehicle for courier or commercial work?",
    answer: "Yes! All our vans are fully registered, commercially rated, and GPS-equipped specifically for courier runs, logistics, sub-contracting, and trade services."
  }
];

export const suburbs: SuburbDistance[] = [
  { name: "Condell Park", driveTime: "At depot", postcode: "2200" },
  { name: "Bankstown", driveTime: "6 min", postcode: "2200" },
  { name: "Milperra", driveTime: "5 min", postcode: "2214" },
  { name: "Panania", driveTime: "7 min", postcode: "2213" },
  { name: "Revesby", driveTime: "8 min", postcode: "2212" },
  { name: "Padstow", driveTime: "9 min", postcode: "2211" },
  { name: "Yagoona", driveTime: "8 min", postcode: "2199" },
  { name: "Punchbowl", driveTime: "11 min", postcode: "2196" },
  { name: "Riverwood", driveTime: "12 min", postcode: "2210" },
  { name: "Greenacre", driveTime: "12 min", postcode: "2190" },
  { name: "Auburn", driveTime: "18 min", postcode: "2144" },
  { name: "Strathfield", driveTime: "20 min", postcode: "2135" },
  { name: "Prestons", driveTime: "18 min", postcode: "2170" },
  { name: "Moorebank", driveTime: "15 min", postcode: "2170" },
  { name: "Campsie", driveTime: "15 min", postcode: "2194" },
  { name: "Guildford", driveTime: "15 min", postcode: "2161" },
  { name: "Fairfield", driveTime: "16 min", postcode: "2165" },
  { name: "Chipping Norton", driveTime: "10 min", postcode: "2170" }
];
