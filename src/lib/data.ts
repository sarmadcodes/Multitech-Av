export const contact = {
  phone: "+92 300 2359877",
  phoneHref: "tel:+923002359877",
  landline: "+92 21 35161697",
  landlineHref: "tel:+922135161697",
  whatsapp: "https://wa.me/923002359877",
  email: "sales@multitechav.com.pk",
  // Only Karachi details are confirmed. Add the other offices when supplied.
  offices: [
    { city: "Karachi", address: "CSD Zonal Office Building, Abbasi Shaheed Road, Near Kalapul, Karachi", phone: "+92 21 35161697" },
    { city: "Lahore", address: "", phone: "" },
    { city: "Islamabad", address: "", phone: "" },
    { city: "Peshawar", address: "", phone: "" },
  ],
};

// DEMO numbers, waiting for confirmed figures from the client.
export const stats = [
  { value: 20, suffix: "", label: "Years in the industry" },
  { value: 840, suffix: "+", label: "Installations delivered" },
  { value: 4, suffix: "", label: "Offices across Pakistan" },
];

export const partners = [
  { name: "Ledman", role: "LED and COB display walls" },
  { name: "Samsung", role: "LCD video walls and commercial signage" },
  { name: "Tricolor", role: "Video wall controllers and signal distribution" },
  { name: "iBoard", role: "Interactive panels, whiteboards and projectors" },
  { name: "BNT", role: "Retractable monitor and microphone lifts" },
];

export type Product = {
  slug: string; name: string; brand: string; image: string; position?: string;
  summary: string; detail: string; highlights: string[]; uses: string[];
};

export const products: Product[] = [
  {
    slug: "led-video-walls", name: "LED Video Walls", brand: "Ledman", image: "/img/real/reception-led.jpg", position: "center 35%",
    summary: "Large, bright walls with no visible joins, built to the size of your space.",
    detail: "LED panels connect into one continuous picture, so the display can fill a wall in a lobby, hall or studio.",
    highlights: ["One continuous picture with no joins", "Built to the size of your wall", "Strong brightness in well-lit rooms"],
    uses: ["Reception areas", "Showrooms", "Conference halls", "Broadcast studios"],
  },
  {
    slug: "smd-video-walls", name: "SMD Video Walls", brand: "Ledman", image: "/img/stock/stage.jpg", position: "center 65%",
    summary: "Versatile screens for stages, auditoriums, halls and shops.",
    detail: "A dependable choice for large indoor screens, with a pixel pitch chosen to match how far away your audience sits.",
    highlights: ["Pixel pitch matched to viewing distance", "Fixed or event installation", "Clear video for large audiences"],
    uses: ["Auditoriums", "Stages", "Retail", "Event venues"],
  },
  {
    slug: "cob-video-walls", name: "COB Video Walls", brand: "Ledman", image: "/img/real/boardroom-round.jpg",
    summary: "Very fine detail and a tough surface for rooms where people sit close.",
    detail: "The LEDs sit protected under a solid surface, which suits close viewing and rooms that run around the clock.",
    highlights: ["Sharp from close distances", "Protected, solid surface", "Even colour across the wall"],
    uses: ["Boardrooms", "Control rooms", "Studios"],
  },
  {
    slug: "outdoor-led-screens", name: "Outdoor LED Screens", brand: "Ledman", image: "/img/stock/city.jpg", position: "45% 40%",
    summary: "Street, rooftop and building screens made for sun and rain.",
    detail: "Built to stay readable in daylight and keep running through Pakistan's heat, dust and monsoon.",
    highlights: ["Readable in direct sunlight", "Sealed against rain and dust", "Built for long daily running hours"],
    uses: ["Roadside advertising", "Building facades", "Stadiums"],
  },
  {
    slug: "lcd-video-walls", name: "LCD Video Walls", brand: "Samsung", image: "/img/real/boardroom-long.jpg",
    summary: "Narrow-bezel panels for text, maps and data, all day long.",
    detail: "Tiled commercial displays give high resolution across the wall, which suits information-heavy rooms.",
    highlights: ["Crisp small text and data", "Very narrow gaps between panels", "Commercial panels for long hours"],
    uses: ["Control rooms", "Conference halls", "Operations centres"],
  },
  {
    slug: "digital-signage", name: "Digital Signage", brand: "Samsung", image: "/img/real/mall-window.jpg",
    summary: "Posters, window displays and menu screens you update from one place.",
    detail: "Replace printed media with screens that change by time, branch or campaign.",
    highlights: ["Update content remotely", "Floor, wall and window formats", "Schedules by time and location"],
    uses: ["Retail", "Malls", "Airports", "Restaurants"],
  },
  {
    slug: "interactive-displays", name: "Interactive Displays", brand: "iBoard", image: "/img/stock/board.jpg",
    summary: "Touch panels and whiteboards for classrooms and meetings.",
    detail: "Write, annotate and share from one surface, connected to your computers and devices.",
    highlights: ["Multi-touch writing", "Connects to PCs and devices", "Panels and whiteboards"],
    uses: ["Classrooms", "Training centres", "Meeting rooms"],
  },
  {
    slug: "command-control", name: "Command and Control", brand: "Tricolor", image: "/img/stock/control.jpg", position: "center 45%",
    summary: "Video walls and controllers for rooms watching many live feeds.",
    detail: "Bring cameras, maps and data onto one wall, and change the layout in seconds.",
    highlights: ["Many live sources on one wall", "Saved layouts for quick recall", "Built for round-the-clock rooms"],
    uses: ["Control rooms", "Security monitoring", "Traffic management"],
  },
  {
    slug: "conference-room-systems", name: "Conference Room Systems", brand: "Complete solution", image: "/img/real/boardroom-long.jpg",
    summary: "Display, microphones, speakers and sharing, working as one system.",
    detail: "We plan the picture and the sound together, so every person in the room can see, hear and be heard.",
    highlights: ["Display, audio and control together", "Wireless presentation", "Simple for staff to run"],
    uses: ["Boardrooms", "Meeting halls", "Training centres"],
  },
  {
    slug: "conference-microphones", name: "Conference Microphones", brand: "Professional audio", image: "/img/stock/mic1.jpg", position: "70% center",
    summary: "Clear speech from every seat, in rooms large and small.",
    detail: "Delegate, wireless and ceiling microphone options, chosen to suit the room and how your meetings run.",
    highlights: ["Clear speech pickup", "Wired and wireless options", "Suited to small and large rooms"],
    uses: ["Boardrooms", "Conference halls", "Training centres"],
  },
  {
    slug: "speakers-sound-systems", name: "Speakers and Sound Systems", brand: "Professional audio", image: "/img/stock/hang.jpg",
    summary: "Ceiling, wall and stage speakers with even sound across the room.",
    detail: "From discreet meeting room speakers to full hall sound systems, planned around the size and shape of your space.",
    highlights: ["Even coverage across seating", "Ceiling, wall and stage options", "Planned around the room"],
    uses: ["Conference halls", "Auditoriums", "Event venues"],
  },
  {
    slug: "monitor-lifts", name: "Retractable Monitor Lifts", brand: "BNT", image: "/img/real/boardroom-round.jpg", position: "center 75%",
    summary: "Motorised lifts that raise a screen or microphone only when needed.",
    detail: "Equipment stays out of sight until the meeting starts, which keeps conference rooms tidy.",
    highlights: ["Motorised screen lifts", "Microphone lift options", "Hidden when not in use"],
    uses: ["Boardrooms", "Conference halls", "Paperless meetings"],
  },
];

export const solutions = [
  { id: "conference", name: "Conference Rooms", image: "/img/real/boardroom-round.jpg", text: "Screens, microphones and speakers that let everyone see, hear and be heard.", products: ["conference-room-systems", "conference-microphones", "speakers-sound-systems"] },
  { id: "control", name: "Control Rooms", image: "/img/stock/control.jpg", text: "Video walls and controllers for teams watching many live feeds, all day and all night.", products: ["command-control", "lcd-video-walls"] },
  { id: "outdoor", name: "Outdoor Advertising", image: "/img/stock/city.jpg", text: "Roadside and rooftop screens that stay readable in full sun and keep running through the weather.", products: ["outdoor-led-screens"] },
  { id: "events", name: "Concerts and Events", image: "/img/stock/concert.jpg", text: "Big stage screens and powerful sound that reach the back row.", products: ["smd-video-walls", "speakers-sound-systems"] },
  { id: "retail", name: "Retail and Malls", image: "/img/real/mall-window.jpg", text: "Window and in-store screens that change with each campaign, with no printing.", products: ["digital-signage", "led-video-walls"] },
  { id: "education", name: "Education", image: "/img/real/auditorium.jpg", text: "Auditorium screens, clear sound and interactive classroom panels for universities and schools.", products: ["interactive-displays", "smd-video-walls", "speakers-sound-systems"] },
];

export const installations = [
  { title: "Round-table boardroom", type: "Conference", detail: "Seamless video wall with wireless presentation", image: "/img/real/boardroom-round.jpg", position: undefined },
  { title: "University auditorium", type: "Education", detail: "Large stage screen for lectures and ceremonies", image: "/img/real/auditorium.jpg", position: undefined },
  { title: "Corporate reception", type: "Corporate", detail: "Fine-pitch LED wall behind the front desk", image: "/img/real/reception-led.jpg", position: "center 30%" },
  { title: "Mall storefront", type: "Retail", detail: "Window-facing LED display", image: "/img/real/mall-window.jpg", position: undefined },
  { title: "Executive conference hall", type: "Conference", detail: "LCD video wall and conference microphones", image: "/img/real/boardroom-long.jpg", position: undefined },
];

export const clients = [
  { name: "Pakistan Army", logo: "pak-army" },
  { name: "Pakistan Navy", logo: "pak-navy" },
  { name: "Pakistan Air Force", logo: "pak-air-force" },
  { name: "SUPARCO", logo: "suparco" },
  { name: "Pakistan Telecommunication Authority", logo: "pta" },
  { name: "Provincial Assembly of Sindh", logo: "sindh-assembly" },
  { name: "Special Security Unit, Sindh Police", logo: "special-security-unit" },
  { name: "NED University of Engineering and Technology", logo: "ned-university" },
  { name: "The Aga Khan University Hospital", logo: "aga-khan-hospital" },
  { name: "Indus Motors", logo: "indus-motors" },
  { name: "H&S Apparel", logo: "hs-apparel" },
];

export const services = [
  { name: "Consultation", text: "We visit the site, measure viewing distances and recommend what the room actually needs." },
  { name: "System design", text: "Screen size, sound coverage, structure, power and signal planned before anything is ordered." },
  { name: "Installation", text: "Our own teams mount, wire and calibrate the system, then test it with your content." },
  { name: "Training and support", text: "Your staff learn to run it, and our local engineers stay on call after handover." },
];
