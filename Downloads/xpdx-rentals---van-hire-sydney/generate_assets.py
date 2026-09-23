import os

os.makedirs("public/assets/images/vehicles", exist_ok=True)
os.makedirs("public/assets/images/sections", exist_ok=True)
os.makedirs("public/assets/images/hero", exist_ok=True)

# 1. Mercedes-Benz Sprinter MWB High Roof (Front 3/4 Studio angle)
sprinter_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="70%" stop-color="#edf2f7"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="30%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(15,23,42,0.4)"/>
      <stop offset="100%" stop-color="rgba(15,23,42,0)"/>
    </linearGradient>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Studio Background -->
  <rect width="800" height="500" fill="url(#bgGrad)"/>
  
  <!-- Ground Shadow -->
  <ellipse cx="400" cy="425" rx="340" ry="26" fill="url(#shadowGrad)"/>
  <ellipse cx="380" cy="428" rx="280" ry="14" fill="#0f172a" opacity="0.35"/>

  <!-- High-Roof Mercedes Sprinter Van Body -->
  <g id="van-body" filter="url(#dropShadow)">
    <!-- Main High Roof Shell -->
    <path d="M 120 370 
             L 115 220 
             Q 115 110 200 95 
             L 540 95 
             Q 660 100 685 160 
             L 715 250 
             Q 735 270 740 310 
             L 740 380 
             L 690 380 
             Q 680 340 640 340 
             Q 600 340 590 380 
             L 300 380 
             Q 290 340 250 340 
             Q 210 340 200 380 
             Z" fill="url(#bodyGrad)" stroke="#cbd5e1" stroke-width="2"/>

    <!-- High Roof Aerodynamic Ridge -->
    <path d="M 190 95 Q 200 130 550 130 Q 640 130 670 170" fill="none" stroke="#e2e8f0" stroke-width="3"/>
    <path d="M 230 115 L 570 115" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="8 4"/>

    <!-- Front Windshield & Cab Windows -->
    <path d="M 550 135 L 665 170 L 685 245 L 545 245 Z" fill="url(#glassGrad)"/>
    <!-- Driver Side Window -->
    <path d="M 450 145 L 535 140 L 535 245 L 435 245 Z" fill="url(#glassGrad)"/>
    <!-- Quarter Vent Window -->
    <path d="M 400 155 L 440 150 L 428 245 L 390 245 Z" fill="#1e293b"/>

    <!-- Front Bonnet & Headlights -->
    <path d="M 685 245 L 725 255 Q 745 280 740 315 L 675 315 Z" fill="#ffffff" stroke="#cbd5e1"/>
    <!-- Mercedes Headlight assembly -->
    <polygon points="695,250 735,260 730,295 685,285" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="705,255 728,265 724,285 695,278" fill="#e2e8f0"/>
    <circle cx="715" cy="272" r="7" fill="#38bdf8" opacity="0.8"/>
    <circle cx="700" cy="270" r="5" fill="#fef08a" opacity="0.6"/>

    <!-- Front Grille & Mercedes Star -->
    <path d="M 725 295 L 738 310 L 735 345 L 705 345 Z" fill="#1e293b"/>
    <line x1="710" y1="310" x2="735" y2="310" stroke="#94a3b8" stroke-width="2"/>
    <line x1="712" y1="325" x2="734" y2="325" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="722" cy="320" r="8" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Star lines -->
    <line x1="722" y1="312" x2="722" y2="328" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="715" y1="324" x2="729" y2="316" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Front Bumper -->
    <path d="M 680 340 L 742 345 L 740 385 L 675 385 Z" fill="#334155"/>
    <rect x="700" y="355" width="35" height="15" rx="3" fill="#0f172a"/>

    <!-- Side Body Lines & Panel Grooves -->
    <line x1="120" y1="245" x2="435" y2="245" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="120" y1="250" x2="685" y2="250" stroke="#f1f5f9" stroke-width="1"/>
    <!-- Cargo Door Outline -->
    <rect x="260" y="160" width="165" height="185" rx="4" fill="none" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Door handle -->
    <rect x="400" y="255" width="22" height="7" rx="3" fill="#334155"/>
    <!-- Cab door handle -->
    <rect x="510" y="255" width="20" height="7" rx="3" fill="#334155"/>

    <!-- Side Protective Moulding / Trim (Black) -->
    <rect x="120" y="335" width="560" height="24" fill="#334155" opacity="0.9" rx="2"/>

    <!-- XPDX RENTALS Side Decal Livery -->
    <g transform="translate(180, 190)">
      <rect x="0" y="0" width="180" height="60" rx="8" fill="#0f172a" opacity="0.04"/>
      <!-- XPDX Text -->
      <text x="10" y="38" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="34" fill="#ff5500" letter-spacing="-1">XPDX</text>
      <text x="110" y="38" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="14" fill="#1e293b" letter-spacing="3">RENTALS</text>
      <text x="12" y="52" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="9" fill="#64748b" letter-spacing="1">COMMERCIAL FLEET SYDNEY</text>
      <!-- Accent stripes -->
      <polygon points="105,15 115,15 105,42 95,42" fill="#ff5500"/>
    </g>

    <!-- Side Mirror -->
    <path d="M 545 230 Q 560 215 570 230 Q 560 250 545 245 Z" fill="#1e293b"/>

    <!-- Front Wheel Assembly -->
    <g transform="translate(640, 380)">
      <circle cx="0" cy="0" r="46" fill="#0f172a"/>
      <circle cx="0" cy="0" r="32" fill="#334155"/>
      <circle cx="0" cy="0" r="28" fill="#cbd5e1"/>
      <circle cx="0" cy="0" r="12" fill="#64748b"/>
      <!-- Wheel Spokes -->
      <circle cx="0" cy="0" r="6" fill="#0f172a"/>
      <circle cx="0" cy="-20" r="4" fill="#1e293b"/>
      <circle cx="19" cy="-7" r="4" fill="#1e293b"/>
      <circle cx="12" cy="16" r="4" fill="#1e293b"/>
      <circle cx="-12" cy="16" r="4" fill="#1e293b"/>
      <circle cx="-19" cy="-7" r="4" fill="#1e293b"/>
    </g>

    <!-- Rear Wheel Assembly -->
    <g transform="translate(250, 380)">
      <circle cx="0" cy="0" r="46" fill="#0f172a"/>
      <circle cx="0" cy="0" r="32" fill="#334155"/>
      <circle cx="0" cy="0" r="28" fill="#cbd5e1"/>
      <circle cx="0" cy="0" r="12" fill="#64748b"/>
      <!-- Wheel Spokes -->
      <circle cx="0" cy="0" r="6" fill="#0f172a"/>
      <circle cx="0" cy="-20" r="4" fill="#1e293b"/>
      <circle cx="19" cy="-7" r="4" fill="#1e293b"/>
      <circle cx="12" cy="16" r="4" fill="#1e293b"/>
      <circle cx="-12" cy="16" r="4" fill="#1e293b"/>
      <circle cx="-19" cy="-7" r="4" fill="#1e293b"/>
    </g>
  </g>
</svg>"""

with open("public/assets/images/vehicles/mercedes-sprinter-2016.svg", "w") as f:
    f.write(sprinter_svg)

with open("public/assets/images/vehicles/mercedes-sprinter-2014.svg", "w") as f:
    f.write(sprinter_svg)

# 2. Toyota HiAce LWB (Standard Roof Courier Van)
hiace_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="70%" stop-color="#edf2f7"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="hiaceWhite" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="shadow2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(15,23,42,0.4)"/>
      <stop offset="100%" stop-color="rgba(15,23,42,0)"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#bgGrad2)"/>
  <ellipse cx="400" cy="425" rx="330" ry="24" fill="url(#shadow2)"/>

  <!-- HiAce Standard Roof Profile -->
  <g id="hiace-van">
    <!-- Main Shell -->
    <path d="M 130 380 
             L 125 240 
             Q 130 160 210 155 
             L 570 155 
             Q 660 160 680 200 
             L 725 300 
             L 730 380 
             L 680 380 
             Q 670 340 630 340 
             Q 590 340 580 380 
             L 300 380 
             Q 290 340 250 340 
             Q 210 340 200 380 
             Z" fill="url(#hiaceWhite)" stroke="#cbd5e1" stroke-width="2"/>

    <!-- Cab Front Window -->
    <path d="M 570 165 L 670 205 L 685 270 L 560 270 Z" fill="#1e293b"/>
    <!-- Driver Window -->
    <path d="M 450 170 L 550 170 L 550 270 L 440 270 Z" fill="#334155"/>

    <!-- Toyota HiAce Headlamp -->
    <polygon points="690,275 725,285 720,320 680,310" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="705" cy="295" r="8" fill="#38bdf8" opacity="0.9"/>

    <!-- HiAce Chrome Grille -->
    <path d="M 680 315 L 725 320 L 720 345 L 675 340 Z" fill="#94a3b8"/>
    <ellipse cx="700" cy="328" rx="8" ry="6" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>

    <!-- Front Bumper -->
    <path d="M 670 345 L 730 350 L 725 385 L 665 385 Z" fill="#1e293b"/>

    <!-- Sliding Door Outline -->
    <rect x="270" y="175" width="165" height="175" rx="3" fill="none" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="410" y="275" width="22" height="7" rx="3" fill="#334155"/>
    <rect x="520" y="275" width="20" height="7" rx="3" fill="#334155"/>

    <!-- Black Trim Line -->
    <rect x="130" y="340" width="540" height="18" fill="#334155" opacity="0.9"/>

    <!-- XPDX Branding on HiAce -->
    <g transform="translate(190, 210)">
      <text x="0" y="32" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="30" fill="#ff5500">XPDX</text>
      <text x="95" y="32" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="13" fill="#1e293b" letter-spacing="2">RENTALS</text>
      <text x="2" y="46" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="9" fill="#64748b">100+ COMMERCIAL VANS</text>
    </g>

    <!-- Wheels -->
    <g transform="translate(630, 380)">
      <circle cx="0" cy="0" r="44" fill="#0f172a"/>
      <circle cx="0" cy="0" r="28" fill="#cbd5e1"/>
      <circle cx="0" cy="0" r="10" fill="#64748b"/>
    </g>
    <g transform="translate(250, 380)">
      <circle cx="0" cy="0" r="44" fill="#0f172a"/>
      <circle cx="0" cy="0" r="28" fill="#cbd5e1"/>
      <circle cx="0" cy="0" r="10" fill="#64748b"/>
    </g>
  </g>
</svg>"""

with open("public/assets/images/vehicles/toyota-hiace-2009.svg", "w") as f:
    f.write(hiace_svg)

with open("public/assets/images/vehicles/toyota-hiace-2014.svg", "w") as f:
    f.write(hiace_svg)

with open("public/assets/images/vehicles/toyota-hiace-slwb.svg", "w") as f:
    f.write(hiace_svg)

# 3. Rear Cargo Bay & Barn Doors
rear_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#f8fafc"/>
  <ellipse cx="400" cy="430" rx="260" ry="20" fill="rgba(15,23,42,0.3)"/>
  <!-- Van Rear Body -->
  <g transform="translate(180, 80)">
    <rect x="0" y="0" width="440" height="340" rx="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
    <!-- High Roof line -->
    <path d="M 0 60 Q 220 30 440 60" stroke="#cbd5e1" stroke-width="2" fill="none"/>
    <!-- Split Doors -->
    <line x1="220" y1="20" x2="220" y2="340" stroke="#cbd5e1" stroke-width="3"/>
    <!-- Left Glass -->
    <rect x="40" y="70" width="150" height="90" rx="10" fill="#1e293b"/>
    <!-- Right Glass -->
    <rect x="250" y="70" width="150" height="90" rx="10" fill="#1e293b"/>
    <!-- Rear License Plate with XPDX -->
    <rect x="160" y="270" width="120" height="36" rx="4" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <text x="175" y="295" font-family="monospace" font-weight="900" font-size="20" fill="#0f172a">XPDX · NSW</text>
    <!-- Tail Lights -->
    <rect x="15" y="140" width="20" height="120" rx="5" fill="#ef4444" stroke="#b91c1c"/>
    <rect x="405" y="140" width="20" height="120" rx="5" fill="#ef4444" stroke="#b91c1c"/>
    <!-- Door Handles -->
    <rect x="200" y="220" width="15" height="30" rx="4" fill="#334155"/>
    <!-- XPDX Branding Decal -->
    <text x="50" y="220" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="26" fill="#ff5500">XPDX</text>
    <text x="50" y="240" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="12" fill="#475569">RENTALS</text>
    <text x="260" y="235" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="14" fill="#1e293b">0433 418 566</text>
    <!-- Rear Step Bumper -->
    <rect x="-20" y="330" width="480" height="35" rx="6" fill="#1e293b"/>
  </g>
</svg>"""

with open("public/assets/images/vehicles/sprinter-rear.svg", "w") as f:
    f.write(rear_svg)

# 4. Interior Cargo Space
interior_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <rect width="800" height="500" fill="#0f172a"/>
  <!-- Van Cargo Interior Perspective -->
  <polygon points="120,40 680,40 760,460 40,460" fill="#334155"/>
  <!-- Heavy Duty Ply Floor -->
  <polygon points="180,260 620,260 760,460 40,460" fill="#78350f" stroke="#92400e" stroke-width="2"/>
  <!-- Anti-slip floor grid lines -->
  <line x1="100" y1="360" x2="700" y2="360" stroke="#451a03" stroke-width="3"/>
  <line x1="200" y1="310" x2="600" y2="310" stroke="#451a03" stroke-width="2"/>
  <line x1="400" y1="260" x2="400" y2="460" stroke="#451a03" stroke-width="3"/>
  <!-- Bulkhead with Window -->
  <polygon points="260,100 540,100 540,260 260,260" fill="#64748b"/>
  <rect x="340" y="120" width="120" height="60" rx="8" fill="#0284c7" opacity="0.6"/>
  <!-- Tie-down Rails -->
  <rect x="80" y="240" width="10" height="160" fill="#cbd5e1"/>
  <rect x="710" y="240" width="10" height="160" fill="#cbd5e1"/>
  <!-- High Roof Ribs -->
  <path d="M 120 40 Q 400 10 680 40" stroke="#64748b" stroke-width="8" fill="none"/>
  <path d="M 160 80 Q 400 50 640 80" stroke="#64748b" stroke-width="6" fill="none"/>
  <!-- LED Cargo Light -->
  <rect x="360" y="30" width="80" height="15" rx="4" fill="#ffffff" filter="drop-shadow(0 0 10px #ffffff)"/>
  <!-- Spec overlay tag -->
  <rect x="40" y="40" width="220" height="50" rx="8" fill="rgba(15,23,42,0.85)"/>
  <text x="55" y="68" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="16" fill="#ffffff">10.5 m³ Cargo Volume</text>
  <text x="55" y="82" font-family="Plus Jakarta Sans, sans-serif" font-weight="500" font-size="12" fill="#94a3b8">Fitted with Heavy Duty Ply Floor</text>
</svg>"""

with open("public/assets/images/vehicles/sprinter-interior.svg", "w") as f:
    f.write(interior_svg)

# 5. Condell Park Fleet Yard (Section Image from 00:02 in video)
fleet_yard_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="60%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <linearGradient id="asphaltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="40%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>

  <!-- Sydney Clear Sky -->
  <rect width="900" height="320" fill="url(#skyGrad)"/>
  <!-- Sun & Warmth -->
  <circle cx="780" cy="90" r="50" fill="#fef08a" opacity="0.6"/>

  <!-- Condell Park Yard Building / Depot -->
  <rect x="50" y="120" width="450" height="180" fill="#e2e8f0" stroke="#cbd5e1"/>
  <polygon points="30,120 275,60 520,120" fill="#475569"/>
  <!-- Depot Signage -->
  <rect x="120" y="140" width="300" height="50" rx="4" fill="#0f172a"/>
  <text x="145" y="172" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="22" fill="#ff5500">XPDX RENTALS</text>
  <text x="310" y="172" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="12" fill="#ffffff">DEPOT</text>
  <text x="145" y="184" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="9" fill="#94a3b8">16 IRMA ST, CONDELL PARK NSW 2200</text>

  <!-- Asphalt Ground -->
  <polygon points="0,300 900,300 900,600 0,600" fill="url(#asphaltGrad)"/>
  <!-- Parking Bay Lines -->
  <line x1="120" y1="600" x2="320" y2="310" stroke="#fbbf24" stroke-width="4" stroke-dasharray="15 10"/>
  <line x1="380" y1="600" x2="540" y2="310" stroke="#fbbf24" stroke-width="4" stroke-dasharray="15 10"/>
  <line x1="640" y1="600" x2="760" y2="310" stroke="#fbbf24" stroke-width="4" stroke-dasharray="15 10"/>

  <!-- Row of White XPDX Delivery Vans Parked Diagonally -->
  <!-- Van 3 (Background) -->
  <g transform="translate(560, 220) scale(0.42)">
    <rect x="0" y="0" width="420" height="230" rx="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
    <rect x="250" y="30" width="130" height="70" fill="#1e293b"/>
    <text x="60" y="120" font-family="sans-serif" font-weight="900" font-size="36" fill="#ff5500">XPDX</text>
    <circle cx="80" cy="230" r="40" fill="#0f172a"/>
    <circle cx="340" cy="230" r="40" fill="#0f172a"/>
  </g>

  <!-- Van 2 (Middle) -->
  <g transform="translate(380, 240) scale(0.58)">
    <rect x="0" y="0" width="440" height="240" rx="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
    <rect x="280" y="30" width="130" height="80" fill="#1e293b"/>
    <text x="60" y="120" font-family="sans-serif" font-weight="900" font-size="38" fill="#ff5500">XPDX</text>
    <text x="180" y="120" font-family="sans-serif" font-weight="800" font-size="20" fill="#1e293b">RENTALS</text>
    <circle cx="90" cy="240" r="45" fill="#0f172a"/>
    <circle cx="350" cy="240" r="45" fill="#0f172a"/>
  </g>

  <!-- Lead Van (Foreground, Large Crisp) -->
  <g transform="translate(80, 260) scale(0.85)">
    <!-- Shadow -->
    <ellipse cx="260" cy="300" rx="270" ry="24" fill="rgba(15,23,42,0.5)"/>
    <!-- Van Body -->
    <path d="M 20 270 L 10 120 Q 20 20 120 15 L 400 15 Q 520 20 540 80 L 590 180 L 600 270 L 530 270 Q 520 230 480 230 Q 440 230 430 270 L 220 270 Q 210 230 170 230 Q 130 230 120 270 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
    <!-- Cab Window -->
    <path d="M 400 30 L 515 75 L 535 155 L 390 155 Z" fill="#1e293b"/>
    <path d="M 290 35 L 380 35 L 380 155 L 280 155 Z" fill="#334155"/>
    <!-- Headlight -->
    <polygon points="545,160 590,175 580,215 535,200" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="560" cy="188" r="8" fill="#38bdf8"/>
    <!-- XPDX EXPRESS DELIVERY branding -->
    <g transform="translate(130, 90)">
      <text x="0" y="42" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="44" fill="#ff5500">XPDX</text>
      <text x="140" y="42" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="18" fill="#0f172a" letter-spacing="4">RENTALS</text>
      <text x="2" y="64" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="13" fill="#ff5500" letter-spacing="3">EXPRESS DELIVERY</text>
    </g>
    <!-- Trim line -->
    <rect x="20" y="225" width="530" height="18" fill="#334155"/>
    <!-- Wheels -->
    <circle cx="170" cy="270" r="48" fill="#0f172a"/>
    <circle cx="170" cy="270" r="30" fill="#cbd5e1"/>
    <circle cx="480" cy="270" r="48" fill="#0f172a"/>
    <circle cx="480" cy="270" r="30" fill="#cbd5e1"/>
  </g>

  <!-- 100+ Commercial Fleet Badge -->
  <g transform="translate(620, 480)">
    <rect x="0" y="0" width="240" height="80" rx="16" fill="#0f172a" opacity="0.95"/>
    <circle cx="36" cy="40" r="16" fill="#ff5500"/>
    <polyline points="28,40 34,46 44,34" fill="none" stroke="#ffffff" stroke-width="3"/>
    <text x="65" y="36" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="16" fill="#ffffff">Condell Park Depot</text>
    <text x="65" y="56" font-family="Plus Jakarta Sans, sans-serif" font-weight="600" font-size="13" fill="#ff5500">100+ Vans Ready to Hire</text>
  </g>
</svg>"""

with open("public/assets/images/sections/condell-park-fleet.svg", "w") as f:
    f.write(fleet_yard_svg)

# 6. Delivery Scene (Man walking with clipboard/package in front of Van from 00:09)
delivery_scene_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="100%" height="100%">
  <defs>
    <linearGradient id="suburbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="60%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>

  <rect width="900" height="500" fill="url(#suburbGrad)"/>

  <!-- Residential House Background -->
  <rect x="20" y="100" width="360" height="280" fill="#f8fafc" stroke="#cbd5e1"/>
  <polygon points="0,100 200,30 380,100" fill="#334155"/>
  <rect x="80" y="140" width="80" height="90" fill="#38bdf8" opacity="0.4"/>
  <rect x="220" y="140" width="80" height="90" fill="#38bdf8" opacity="0.4"/>
  <rect x="150" y="270" width="60" height="110" fill="#64748b"/>

  <!-- Driveway & Sidewalk -->
  <polygon points="0,380 900,380 900,500 0,500" fill="#94a3b8"/>
  <line x1="0" y1="440" x2="900" y2="440" stroke="#cbd5e1" stroke-width="2"/>

  <!-- Mercedes-Benz High-Roof Van in Driveway -->
  <g transform="translate(240, 110) scale(0.85)">
    <!-- Shadow -->
    <ellipse cx="320" cy="380" rx="300" ry="20" fill="rgba(15,23,42,0.4)"/>
    <!-- Shell -->
    <path d="M 60 360 L 50 160 Q 55 60 140 50 L 510 50 Q 610 55 640 110 L 680 200 L 690 360 L 630 360 Q 620 320 580 320 Q 540 320 530 360 L 260 360 Q 250 320 210 320 Q 170 320 160 360 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
    <!-- Cab Windows -->
    <path d="M 510 65 L 620 115 L 640 190 L 500 190 Z" fill="#1e293b"/>
    <!-- Branding -->
    <text x="180" y="180" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="46" fill="#ff5500">XPDX</text>
    <text x="180" y="205" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="16" fill="#1e293b" letter-spacing="4">RENTALS</text>
    <!-- Wheels -->
    <circle cx="210" cy="360" r="46" fill="#0f172a"/>
    <circle cx="210" cy="360" r="28" fill="#cbd5e1"/>
    <circle cx="580" cy="360" r="46" fill="#0f172a"/>
    <circle cx="580" cy="360" r="28" fill="#cbd5e1"/>
  </g>

  <!-- Person / Delivery Driver in foreground with clipboard & high-vis/jacket -->
  <g transform="translate(180, 180)">
    <!-- Head -->
    <circle cx="70" cy="40" r="18" fill="#fcd34d"/>
    <!-- Cap -->
    <path d="M 50 35 Q 70 20 90 35 L 105 32" stroke="#0f172a" stroke-width="5" fill="#0f172a"/>
    <!-- Body / Jacket -->
    <path d="M 45 60 L 95 60 L 105 160 L 35 160 Z" fill="#1e293b"/>
    <polygon points="50,60 90,60 95,95 45,95" fill="#ea580c"/>
    <!-- Arm with Clipboard -->
    <path d="M 85 80 L 115 120" stroke="#fcd34d" stroke-width="10" stroke-linecap="round"/>
    <rect x="110" y="100" width="30" height="40" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
    <line x1="115" y1="112" x2="135" y2="112" stroke="#0f172a" stroke-width="2"/>
    <line x1="115" y1="122" x2="130" y2="122" stroke="#0f172a" stroke-width="2"/>
    <!-- Legs walking -->
    <line x1="55" y1="160" x2="40" y2="250" stroke="#0f172a" stroke-width="12" stroke-linecap="round"/>
    <line x1="85" y1="160" x2="105" y2="250" stroke="#0f172a" stroke-width="12" stroke-linecap="round"/>
    <!-- Shoes -->
    <rect x="25" y="245" width="30" height="12" rx="4" fill="#475569"/>
    <rect x="95" y="245" width="30" height="12" rx="4" fill="#475569"/>
  </g>
</svg>"""

with open("public/assets/images/sections/delivery-driver.svg", "w") as f:
    f.write(delivery_scene_svg)

print("Generated all SVG assets successfully.")
