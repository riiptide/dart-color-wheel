const levels = [
  {
    emoji: "🎁",
    colors: [
      { name: "Gift Red", hex: "#e53935", sample: [221, 57, 53] },
      { name: "Ribbon Red", hex: "#a41623", sample: [164, 22, 35] },
      { name: "Bow Gold", hex: "#f7c948", sample: [247, 201, 72] },
      { name: "Highlight Cream", hex: "#f8f4df", sample: [248, 244, 223] },
    ],
    wheelColors: [
      { name: "Tissue Mint", hex: "#2ec4b6" },
      { name: "Party Blue", hex: "#3a86ff" },
      { name: "Purple Wrap", hex: "#8d5cf6" },
      { name: "Slate Tag", hex: "#64748b" },
    ],
  },
  {
    emoji: "🌈",
    colors: [
      { name: "Rainbow Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Sun Yellow", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Sky Blue", hex: "#38bdf8", sample: [56, 189, 248] },
      { name: "Violet", hex: "#8b5cf6", sample: [139, 92, 246] },
    ],
    wheelColors: [
      { name: "Rainbow Orange", hex: "#fb923c" },
      { name: "Fresh Green", hex: "#22c55e" },
      { name: "Cloud White", hex: "#f8fafc" },
      { name: "Rain Gray", hex: "#94a3b8" },
    ],
  },
  {
    emoji: "🍕",
    colors: [
      { name: "Crust", hex: "#d99032", sample: [217, 144, 50] },
      { name: "Cheese", hex: "#ffd166", sample: [255, 209, 102] },
      { name: "Pepperoni", hex: "#c0392b", sample: [192, 57, 43] },
      { name: "Sauce", hex: "#e85d04", sample: [232, 93, 4] },
    ],
    wheelColors: [
      { name: "Basil Green", hex: "#2f9e44" },
      { name: "Olive", hex: "#708238" },
      { name: "Mushroom", hex: "#d6ccc2" },
      { name: "Oven Char", hex: "#3f3f46" },
    ],
  },
  {
    emoji: "🧁",
    colors: [
      { name: "Frosting Pink", hex: "#ff8fab", sample: [255, 143, 171] },
      { name: "Cupcake Gold", hex: "#f4a261", sample: [244, 162, 97] },
      { name: "Wrapper Blue", hex: "#60a5fa", sample: [96, 165, 250] },
      { name: "Cherry Red", hex: "#ef4444", sample: [239, 68, 68] },
    ],
    wheelColors: [
      { name: "Sprinkle Mint", hex: "#5eead4" },
      { name: "Lavender", hex: "#c084fc" },
      { name: "Vanilla", hex: "#fff7ed" },
      { name: "Cocoa", hex: "#7c2d12" },
    ],
  },
  {
    emoji: "🧸",
    colors: [
      { name: "Teddy Brown", hex: "#a16207", sample: [161, 98, 7] },
      { name: "Tan", hex: "#d6a25e", sample: [214, 162, 94] },
      { name: "Blush Pink", hex: "#f9a8d4", sample: [249, 168, 212] },
    ],
    wheelColors: [
      { name: "Button Black", hex: "#27272a" },
      { name: "Honey", hex: "#f59e0b" },
      { name: "Pajama Blue", hex: "#93c5fd" },
      { name: "Soft Cream", hex: "#fde68a" },
      { name: "Toy Purple", hex: "#a78bfa" },
    ],
  },
  {
    emoji: "👑",
    colors: [
      { name: "Crown Gold", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Ruby", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Sapphire", hex: "#2563eb", sample: [37, 99, 235] },
      { name: "Emerald", hex: "#16a34a", sample: [22, 163, 74] },
    ],
    wheelColors: [
      { name: "Pearl", hex: "#fff7ed" },
      { name: "Amethyst", hex: "#9333ea" },
      { name: "Royal Pink", hex: "#ec4899" },
      { name: "Velvet", hex: "#581c87" },
    ],
  },
  {
    emoji: "🚀",
    colors: [
      { name: "Rocket Silver", hex: "#d1d5db", sample: [209, 213, 219] },
      { name: "Rocket Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Window Blue", hex: "#38bdf8", sample: [56, 189, 248] },
      { name: "Flame Orange", hex: "#f97316", sample: [249, 115, 22] },
    ],
    wheelColors: [
      { name: "Space Navy", hex: "#1e293b" },
      { name: "Star Gold", hex: "#fde047" },
      { name: "Fuel Purple", hex: "#a855f7" },
      { name: "Smoke Gray", hex: "#94a3b8" },
    ],
  },
  {
    emoji: "🏰",
    colors: [
      { name: "Castle Stone", hex: "#9ca3af", sample: [156, 163, 175] },
      { name: "Roof Blue", hex: "#3b82f6", sample: [59, 130, 246] },
      { name: "Flag Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Gate Brown", hex: "#7c4a1e", sample: [124, 74, 30] },
    ],
    wheelColors: [
      { name: "Moat Teal", hex: "#0f766e" },
      { name: "Banner Gold", hex: "#fbbf24" },
      { name: "Ivy Green", hex: "#15803d" },
      { name: "Twilight", hex: "#6366f1" },
    ],
  },
  {
    emoji: "🦋",
    colors: [
      { name: "Wing Blue", hex: "#2563eb", sample: [37, 99, 235] },
      { name: "Sky Cyan", hex: "#22d3ee", sample: [34, 211, 238] },
      { name: "Wing Purple", hex: "#7c3aed", sample: [124, 58, 237] },
      { name: "Body Charcoal", hex: "#374151", sample: [55, 65, 81] },
    ],
    wheelColors: [
      { name: "Flower Pink", hex: "#f472b6" },
      { name: "Leaf Green", hex: "#22c55e" },
      { name: "Sunbeam", hex: "#fde047" },
      { name: "Dusk", hex: "#475569" },
    ],
  },
  {
    emoji: "🐢",
    colors: [
      { name: "Shell Green", hex: "#4d7c0f", sample: [77, 124, 15] },
      { name: "Turtle Green", hex: "#65a30d", sample: [101, 163, 13] },
      { name: "Soft Yellow", hex: "#fef08a", sample: [254, 240, 138] },
      { name: "Dark Shell", hex: "#365314", sample: [54, 83, 20] },
    ],
    wheelColors: [
      { name: "Pond Blue", hex: "#0ea5e9" },
      { name: "Lily Pink", hex: "#f9a8d4" },
      { name: "Pebble", hex: "#78716c" },
      { name: "Moss", hex: "#84cc16" },
    ],
  },
  {
    emoji: "🌸",
    colors: [
      { name: "Petal Pink", hex: "#f9a8d4", sample: [249, 168, 212] },
      { name: "Blossom White", hex: "#fff1f2", sample: [255, 241, 242] },
      { name: "Center Gold", hex: "#facc15", sample: [250, 204, 21] },
    ],
    wheelColors: [
      { name: "Leaf Green", hex: "#22c55e" },
      { name: "Sky Wash", hex: "#bae6fd" },
      { name: "Lavender", hex: "#c084fc" },
      { name: "Rose Shadow", hex: "#be185d" },
      { name: "Stem Olive", hex: "#65a30d" },
    ],
  },
  {
    emoji: "🌺",
    colors: [
      { name: "Hibiscus Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Petal Pink", hex: "#fb7185", sample: [251, 113, 133] },
      { name: "Pollen Yellow", hex: "#fde047", sample: [253, 224, 71] },
      { name: "Leaf Green", hex: "#16a34a", sample: [22, 163, 74] },
    ],
    wheelColors: [
      { name: "Tropical Coral", hex: "#ff7f50" },
      { name: "Lagoon", hex: "#06b6d4" },
      { name: "Plum", hex: "#a21caf" },
      { name: "Palm Dark", hex: "#166534" },
    ],
  },
  {
    emoji: "🌻",
    colors: [
      { name: "Sunflower Yellow", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Seed Brown", hex: "#7c2d12", sample: [124, 45, 18] },
      { name: "Leaf Green", hex: "#15803d", sample: [21, 128, 61] },
    ],
    wheelColors: [
      { name: "Field Gold", hex: "#f59e0b" },
      { name: "Sky Blue", hex: "#38bdf8" },
      { name: "Soil", hex: "#57534e" },
      { name: "Cream", hex: "#fef3c7" },
      { name: "Petal Orange", hex: "#fb923c" },
    ],
  },
  {
    emoji: "🍄",
    colors: [
      { name: "Mushroom Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Spot Cream", hex: "#fff7ed", sample: [255, 247, 237] },
      { name: "Stem Beige", hex: "#e7c9a9", sample: [231, 201, 169] },
    ],
    wheelColors: [
      { name: "Forest Moss", hex: "#4d7c0f" },
      { name: "Fern", hex: "#16a34a" },
      { name: "Dirt", hex: "#854d0e" },
      { name: "Dusk Blue", hex: "#475569" },
      { name: "Tiny Violet", hex: "#8b5cf6" },
    ],
  },
  {
    emoji: "🍓",
    colors: [
      { name: "Strawberry Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Seed Gold", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Leaf Green", hex: "#16a34a", sample: [22, 163, 74] },
    ],
    wheelColors: [
      { name: "Berry Pink", hex: "#f43f5e" },
      { name: "Jam", hex: "#9f1239" },
      { name: "Cream", hex: "#fff7ed" },
      { name: "Mint", hex: "#2dd4bf" },
      { name: "Basket", hex: "#b45309" },
    ],
  },
  {
    emoji: "🍉",
    colors: [
      { name: "Melon Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Rind Green", hex: "#16a34a", sample: [22, 163, 74] },
      { name: "Dark Rind", hex: "#166534", sample: [22, 101, 52] },
      { name: "Seed Black", hex: "#1f2937", sample: [31, 41, 55] },
    ],
    wheelColors: [
      { name: "Juice Pink", hex: "#fb7185" },
      { name: "Picnic Blue", hex: "#38bdf8" },
      { name: "Lemon", hex: "#fde047" },
      { name: "Plate White", hex: "#f8fafc" },
    ],
  },
  {
    emoji: "🍍",
    colors: [
      { name: "Pineapple Gold", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Pineapple Orange", hex: "#f59e0b", sample: [245, 158, 11] },
      { name: "Crown Green", hex: "#15803d", sample: [21, 128, 61] },
      { name: "Leaf Lime", hex: "#65a30d", sample: [101, 163, 13] },
    ],
    wheelColors: [
      { name: "Tropical Teal", hex: "#14b8a6" },
      { name: "Sunset", hex: "#fb7185" },
      { name: "Ocean", hex: "#0284c7" },
      { name: "Sand", hex: "#fde68a" },
    ],
  },
  {
    emoji: "🍔",
    colors: [
      { name: "Bun Gold", hex: "#d97706", sample: [217, 119, 6] },
      { name: "Lettuce", hex: "#65a30d", sample: [101, 163, 13] },
      { name: "Cheese", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Patty Brown", hex: "#7c2d12", sample: [124, 45, 18] },
    ],
    wheelColors: [
      { name: "Tomato", hex: "#dc2626" },
      { name: "Pickle", hex: "#16a34a" },
      { name: "Sesame", hex: "#fff7ed" },
      { name: "Tray Blue", hex: "#60a5fa" },
    ],
  },
  {
    emoji: "🍩",
    colors: [
      { name: "Donut Dough", hex: "#d97706", sample: [217, 119, 6] },
      { name: "Icing Pink", hex: "#f9a8d4", sample: [249, 168, 212] },
      { name: "Chocolate", hex: "#78350f", sample: [120, 53, 15] },
      { name: "Sprinkle Blue", hex: "#38bdf8", sample: [56, 189, 248] },
    ],
    wheelColors: [
      { name: "Sprinkle Green", hex: "#22c55e" },
      { name: "Sprinkle Yellow", hex: "#fde047" },
      { name: "Bakery Cream", hex: "#fff7ed" },
      { name: "Berry", hex: "#e11d48" },
    ],
  },
  {
    emoji: "🎂",
    colors: [
      { name: "Cake Cream", hex: "#fff7ed", sample: [255, 247, 237] },
      { name: "Frosting Pink", hex: "#f9a8d4", sample: [249, 168, 212] },
      { name: "Candle Blue", hex: "#38bdf8", sample: [56, 189, 248] },
      { name: "Flame Yellow", hex: "#facc15", sample: [250, 204, 21] },
    ],
    wheelColors: [
      { name: "Cherry Red", hex: "#ef4444" },
      { name: "Cake Brown", hex: "#92400e" },
      { name: "Party Purple", hex: "#a855f7" },
      { name: "Mint Frosting", hex: "#5eead4" },
    ],
  },
  {
    emoji: "🎈",
    colors: [
      { name: "Balloon Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Balloon Shine", hex: "#fecdd3", sample: [254, 205, 211] },
      { name: "String Gray", hex: "#94a3b8", sample: [148, 163, 184] },
    ],
    wheelColors: [
      { name: "Party Blue", hex: "#3b82f6" },
      { name: "Party Yellow", hex: "#fde047" },
      { name: "Party Green", hex: "#22c55e" },
      { name: "Party Purple", hex: "#a855f7" },
      { name: "Confetti Pink", hex: "#f472b6" },
    ],
  },
  {
    emoji: "🎀",
    colors: [
      { name: "Bow Pink", hex: "#f472b6", sample: [244, 114, 182] },
      { name: "Bow Shadow", hex: "#be185d", sample: [190, 24, 93] },
      { name: "Bow Highlight", hex: "#fbcfe8", sample: [251, 207, 232] },
    ],
    wheelColors: [
      { name: "Ribbon Red", hex: "#ef4444" },
      { name: "Gift Gold", hex: "#facc15" },
      { name: "Soft Mint", hex: "#99f6e4" },
      { name: "Lavender", hex: "#c4b5fd" },
      { name: "Slate", hex: "#64748b" },
    ],
  },
  {
    emoji: "💎",
    colors: [
      { name: "Diamond Cyan", hex: "#67e8f9", sample: [103, 232, 249] },
      { name: "Diamond Blue", hex: "#38bdf8", sample: [56, 189, 248] },
      { name: "Diamond White", hex: "#f8fafc", sample: [248, 250, 252] },
      { name: "Deep Facet", hex: "#0284c7", sample: [2, 132, 199] },
    ],
    wheelColors: [
      { name: "Gem Purple", hex: "#8b5cf6" },
      { name: "Silver", hex: "#cbd5e1" },
      { name: "Black Velvet", hex: "#1e293b" },
      { name: "Sparkle Gold", hex: "#fde047" },
    ],
  },
  {
    emoji: "🏆",
    colors: [
      { name: "Trophy Gold", hex: "#f59e0b", sample: [245, 158, 11] },
      { name: "Bright Gold", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Base Brown", hex: "#92400e", sample: [146, 64, 14] },
      { name: "Shadow", hex: "#78716c", sample: [120, 113, 108] },
    ],
    wheelColors: [
      { name: "Victory Blue", hex: "#2563eb" },
      { name: "Ribbon Red", hex: "#dc2626" },
      { name: "Podium Gray", hex: "#94a3b8" },
      { name: "Emerald", hex: "#16a34a" },
    ],
  },
  {
    emoji: "⚽",
    colors: [
      { name: "Soccer White", hex: "#f8fafc", sample: [248, 250, 252] },
      { name: "Soccer Black", hex: "#18181b", sample: [24, 24, 27] },
      { name: "Panel Gray", hex: "#d1d5db", sample: [209, 213, 219] },
    ],
    wheelColors: [
      { name: "Field Green", hex: "#16a34a" },
      { name: "Goal Blue", hex: "#38bdf8" },
      { name: "Whistle Yellow", hex: "#facc15" },
      { name: "Jersey Red", hex: "#ef4444" },
      { name: "Cleat Purple", hex: "#7c3aed" },
    ],
  },
  {
    emoji: "🏀",
    colors: [
      { name: "Basketball Orange", hex: "#f97316", sample: [249, 115, 22] },
      { name: "Line Black", hex: "#1f2937", sample: [31, 41, 55] },
      { name: "Highlight", hex: "#fdba74", sample: [253, 186, 116] },
    ],
    wheelColors: [
      { name: "Court Wood", hex: "#b45309" },
      { name: "Hoop Red", hex: "#dc2626" },
      { name: "Net White", hex: "#f8fafc" },
      { name: "Scoreboard Blue", hex: "#2563eb" },
      { name: "Sneaker Green", hex: "#22c55e" },
    ],
  },
  {
    emoji: "🎸",
    colors: [
      { name: "Guitar Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Wood Brown", hex: "#92400e", sample: [146, 64, 14] },
      { name: "String Silver", hex: "#d1d5db", sample: [209, 213, 219] },
      { name: "Neck Dark", hex: "#431407", sample: [67, 20, 7] },
    ],
    wheelColors: [
      { name: "Stage Purple", hex: "#7c3aed" },
      { name: "Amp Black", hex: "#18181b" },
      { name: "Spotlight Gold", hex: "#facc15" },
      { name: "Neon Blue", hex: "#06b6d4" },
    ],
  },
  {
    emoji: "🎧",
    colors: [
      { name: "Headphone Black", hex: "#1f2937", sample: [31, 41, 55] },
      { name: "Ear Pad Gray", hex: "#6b7280", sample: [107, 114, 128] },
      { name: "Accent Blue", hex: "#38bdf8", sample: [56, 189, 248] },
    ],
    wheelColors: [
      { name: "Sound Purple", hex: "#8b5cf6" },
      { name: "Beat Pink", hex: "#f472b6" },
      { name: "Wave Green", hex: "#22c55e" },
      { name: "Studio Red", hex: "#ef4444" },
      { name: "Cable Silver", hex: "#cbd5e1" },
    ],
  },
  {
    emoji: "📸",
    colors: [
      { name: "Camera Black", hex: "#1f2937", sample: [31, 41, 55] },
      { name: "Camera Silver", hex: "#9ca3af", sample: [156, 163, 175] },
      { name: "Lens Blue", hex: "#38bdf8", sample: [56, 189, 248] },
      { name: "Flash Cream", hex: "#fef3c7", sample: [254, 243, 199] },
    ],
    wheelColors: [
      { name: "Photo Pink", hex: "#f472b6" },
      { name: "Tripod Brown", hex: "#92400e" },
      { name: "Backdrop Green", hex: "#16a34a" },
      { name: "Shutter Red", hex: "#ef4444" },
    ],
  },
  {
    emoji: "📚",
    colors: [
      { name: "Book Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Book Blue", hex: "#2563eb", sample: [37, 99, 235] },
      { name: "Book Green", hex: "#16a34a", sample: [22, 163, 74] },
      { name: "Page Cream", hex: "#fef3c7", sample: [254, 243, 199] },
    ],
    wheelColors: [
      { name: "Bookmark Gold", hex: "#facc15" },
      { name: "Ink Black", hex: "#1f2937" },
      { name: "Library Brown", hex: "#92400e" },
      { name: "Study Purple", hex: "#8b5cf6" },
    ],
  },
  {
    emoji: "🚗",
    colors: [
      { name: "Car Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Window Blue", hex: "#38bdf8", sample: [56, 189, 248] },
      { name: "Tire Black", hex: "#1f2937", sample: [31, 41, 55] },
      { name: "Hubcap Gray", hex: "#9ca3af", sample: [156, 163, 175] },
    ],
    wheelColors: [
      { name: "Road Gray", hex: "#64748b" },
      { name: "Headlight", hex: "#fde047" },
      { name: "Traffic Green", hex: "#22c55e" },
      { name: "Sky", hex: "#60a5fa" },
    ],
  },
  {
    emoji: "🚲",
    colors: [
      { name: "Bike Blue", hex: "#2563eb", sample: [37, 99, 235] },
      { name: "Wheel Black", hex: "#1f2937", sample: [31, 41, 55] },
      { name: "Frame Silver", hex: "#9ca3af", sample: [156, 163, 175] },
      { name: "Seat Brown", hex: "#92400e", sample: [146, 64, 14] },
    ],
    wheelColors: [
      { name: "Trail Green", hex: "#16a34a" },
      { name: "Helmet Red", hex: "#ef4444" },
      { name: "Bell Gold", hex: "#facc15" },
      { name: "Path Tan", hex: "#d6a25e" },
    ],
  },
  {
    emoji: "✈️",
    colors: [
      { name: "Plane White", hex: "#f8fafc", sample: [248, 250, 252] },
      { name: "Wing Gray", hex: "#9ca3af", sample: [156, 163, 175] },
      { name: "Tail Blue", hex: "#2563eb", sample: [37, 99, 235] },
    ],
    wheelColors: [
      { name: "Sky Blue", hex: "#38bdf8" },
      { name: "Cloud", hex: "#e0f2fe" },
      { name: "Sun Gold", hex: "#facc15" },
      { name: "Runway", hex: "#475569" },
      { name: "Signal Red", hex: "#ef4444" },
    ],
  },
  {
    emoji: "🏠",
    colors: [
      { name: "House Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Wall Cream", hex: "#fef3c7", sample: [254, 243, 199] },
      { name: "Door Brown", hex: "#92400e", sample: [146, 64, 14] },
      { name: "Window Blue", hex: "#38bdf8", sample: [56, 189, 248] },
    ],
    wheelColors: [
      { name: "Lawn Green", hex: "#22c55e" },
      { name: "Chimney Gray", hex: "#78716c" },
      { name: "Flower Pink", hex: "#f472b6" },
      { name: "Path Stone", hex: "#a8a29e" },
    ],
  },
  {
    emoji: "⛱️",
    colors: [
      { name: "Umbrella Red", hex: "#ef4444", sample: [239, 68, 68] },
      { name: "Umbrella Yellow", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Pole Brown", hex: "#92400e", sample: [146, 64, 14] },
      { name: "Sand", hex: "#fde68a", sample: [253, 230, 138] },
    ],
    wheelColors: [
      { name: "Ocean Blue", hex: "#0ea5e9" },
      { name: "Beach Teal", hex: "#14b8a6" },
      { name: "Shell Pink", hex: "#f9a8d4" },
      { name: "Shade Purple", hex: "#8b5cf6" },
    ],
  },
  {
    emoji: "☂️",
    colors: [
      { name: "Umbrella Purple", hex: "#7c3aed", sample: [124, 58, 237] },
      { name: "Umbrella Blue", hex: "#2563eb", sample: [37, 99, 235] },
      { name: "Handle Brown", hex: "#92400e", sample: [146, 64, 14] },
    ],
    wheelColors: [
      { name: "Rain Cyan", hex: "#22d3ee" },
      { name: "Storm Gray", hex: "#64748b" },
      { name: "Boot Yellow", hex: "#facc15" },
      { name: "Puddle", hex: "#0ea5e9" },
      { name: "Coat Red", hex: "#ef4444" },
    ],
  },
  {
    emoji: "🔥",
    colors: [
      { name: "Flame Red", hex: "#dc2626", sample: [220, 38, 38] },
      { name: "Flame Orange", hex: "#f97316", sample: [249, 115, 22] },
      { name: "Flame Yellow", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Hot White", hex: "#fff7ed", sample: [255, 247, 237] },
    ],
    wheelColors: [
      { name: "Smoke", hex: "#64748b" },
      { name: "Coal", hex: "#18181b" },
      { name: "Ember Pink", hex: "#fb7185" },
      { name: "Night Blue", hex: "#1e3a8a" },
    ],
  },
  {
    emoji: "🐝",
    colors: [
      { name: "Bee Yellow", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Stripe Black", hex: "#18181b", sample: [24, 24, 27] },
      { name: "Wing Blue", hex: "#bae6fd", sample: [186, 230, 253] },
      { name: "Blush Orange", hex: "#fb923c", sample: [251, 146, 60] },
    ],
    wheelColors: [
      { name: "Flower Pink", hex: "#f472b6" },
      { name: "Honey", hex: "#f59e0b" },
      { name: "Leaf", hex: "#22c55e" },
      { name: "Hive Brown", hex: "#92400e" },
    ],
  },
  {
    emoji: "🐠",
    colors: [
      { name: "Fish Orange", hex: "#f97316", sample: [249, 115, 22] },
      { name: "Fish Yellow", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Fin White", hex: "#f8fafc", sample: [248, 250, 252] },
      { name: "Eye Black", hex: "#18181b", sample: [24, 24, 27] },
    ],
    wheelColors: [
      { name: "Ocean Blue", hex: "#0ea5e9" },
      { name: "Coral Pink", hex: "#fb7185" },
      { name: "Seaweed", hex: "#16a34a" },
      { name: "Bubble Cyan", hex: "#67e8f9" },
    ],
  },
  {
    emoji: "🦚",
    colors: [
      { name: "Peacock Teal", hex: "#0f766e", sample: [15, 118, 110] },
      { name: "Feather Blue", hex: "#2563eb", sample: [37, 99, 235] },
      { name: "Feather Green", hex: "#16a34a", sample: [22, 163, 74] },
      { name: "Eye Gold", hex: "#facc15", sample: [250, 204, 21] },
      { name: "Royal Purple", hex: "#7c3aed", sample: [124, 58, 237] },
    ],
    wheelColors: [
      { name: "Plume Navy", hex: "#1e3a8a" },
      { name: "Garden Pink", hex: "#f472b6" },
      { name: "Pearl", hex: "#f8fafc" },
    ],
  },
];

const wheel = document.querySelector("#wheel");
const wheelButton = document.querySelector("#wheelButton");
const throwButton = document.querySelector("#throwButton");
const nextButton = document.querySelector("#nextButton");
const levelsButton = document.querySelector("#levelsButton");
const completeButton = document.querySelector("#completeButton");
const introPopup = document.querySelector("#introPopup");
const introCloseButton = document.querySelector("#introCloseButton");
const levelLabel = document.querySelector("#levelLabel");
const levelScreen = document.querySelector("#levelScreen");
const levelGrid = document.querySelector("#levelGrid");
const result = document.querySelector("#result");
const dart = document.querySelector("#dart");
const spark = document.querySelector("#spark");
const emojiCanvas = document.querySelector("#emojiCanvas");
const emojiContext = emojiCanvas.getContext("2d", { willReadFrequently: true });
const sourceCanvas = document.createElement("canvas");
const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });

const dartImpactAngle = 90;
const filledEmojiColors = new Set();
const requiredEmojiColors = new Set();
let currentLevelIndex = 0;
let colors = [];
let emojiColors = [];
let segmentDegrees = 45;
let emojiPixels;
let rotation = 0;
let lastFrame = performance.now();
let isThrowing = false;
let isSpinning = true;
let completionTimer;
const introStorageKey = "emojiDartIntroDismissed";
const prefersTouchPrompt = window.matchMedia("(pointer: coarse)").matches;

function hasSeenIntro() {
  try {
    return window.localStorage.getItem(introStorageKey) === "true";
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    window.localStorage.setItem(introStorageKey, "true");
  } catch {
    // The popup still closes for this session if storage is unavailable.
  }
}

function showIntroPopup() {
  if (hasSeenIntro()) return;

  introPopup.hidden = false;
}

function closeIntroPopup() {
  introPopup.hidden = true;
  markIntroSeen();
}

function buildLevelColors(level) {
  const emojiLevelColors = level.colors.map((color) => ({ ...color, emojiColor: true }));
  const extras = level.wheelColors
    .filter((extraColor) => !emojiLevelColors.some((color) => color.name === extraColor.name))
    .slice(0, 8 - emojiLevelColors.length);

  return [...emojiLevelColors, ...extras];
}

function paintWheel() {
  const stops = colors
    .map((color, index) => {
      const start = index * segmentDegrees;
      const end = start + segmentDegrees;
      return `${color.hex} ${start}deg ${end}deg`;
    })
    .join(", ");

  wheel.style.background = `conic-gradient(${stops})`;
}

function animateWheel(now) {
  const elapsed = now - lastFrame;
  lastFrame = now;

  if (isSpinning) {
    rotation = (rotation + elapsed * 0.115) % 360;
    wheel.style.transform = `rotate(${rotation}deg)`;
  }

  requestAnimationFrame(animateWheel);
}

function colorAtDartPoint() {
  const localAngle = (dartImpactAngle - rotation + 360) % 360;
  const index = Math.floor(localAngle / segmentDegrees) % colors.length;
  return colors[index];
}

function hexToRgb(hex) {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function colorDistance(red, green, blue, sample) {
  const redDelta = red - sample[0];
  const greenDelta = green - sample[1];
  const blueDelta = blue - sample[2];
  return redDelta * redDelta + greenDelta * greenDelta + blueDelta * blueDelta;
}

function nearestEmojiColor(red, green, blue) {
  let nearest;
  let nearestDistance = Number.POSITIVE_INFINITY;

  emojiColors.forEach((color) => {
    const distance = colorDistance(red, green, blue, color.sample);
    if (distance < nearestDistance) {
      nearest = color;
      nearestDistance = distance;
    }
  });

  return nearestDistance < 15000 ? nearest : undefined;
}

function drawOriginalEmojiSource() {
  const size = emojiCanvas.width;
  const level = levels[currentLevelIndex];
  sourceCanvas.width = size;
  sourceCanvas.height = size;
  sourceContext.clearRect(0, 0, size, size);
  sourceContext.textAlign = "center";
  sourceContext.textBaseline = "middle";
  sourceContext.font = `${Math.floor(size * 0.78)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
  sourceContext.fillText(level.emoji, size / 2, size / 2 + size * 0.02);
  emojiPixels = sourceContext.getImageData(0, 0, size, size);
  refreshRequiredEmojiColors();
}

function refreshRequiredEmojiColors() {
  requiredEmojiColors.clear();
  if (!emojiPixels) return;

  const counts = new Map();
  let visiblePixels = 0;

  for (let index = 0; index < emojiPixels.data.length; index += 4) {
    const alpha = emojiPixels.data[index + 3];
    if (alpha < 12) continue;

    visiblePixels += 1;
    const red = emojiPixels.data[index];
    const green = emojiPixels.data[index + 1];
    const blue = emojiPixels.data[index + 2];
    const matchingColor = nearestEmojiColor(red, green, blue);
    if (!matchingColor) continue;

    counts.set(matchingColor.name, (counts.get(matchingColor.name) || 0) + 1);
  }

  const minimumCoverage = visiblePixels * 0.025;
  emojiColors.forEach((color) => {
    if ((counts.get(color.name) || 0) >= minimumCoverage) {
      requiredEmojiColors.add(color.name);
    }
  });
}

function drawEmojiObject() {
  if (!emojiPixels) return;

  const image = new ImageData(
    new Uint8ClampedArray(emojiPixels.data),
    emojiPixels.width,
    emojiPixels.height
  );

  for (let index = 0; index < image.data.length; index += 4) {
    const alpha = image.data[index + 3];
    if (alpha < 12) continue;

    const red = image.data[index];
    const green = image.data[index + 1];
    const blue = image.data[index + 2];
    const matchingColor = nearestEmojiColor(red, green, blue);

    if (matchingColor && filledEmojiColors.has(matchingColor.name)) {
      const fill = hexToRgb(matchingColor.hex);
      image.data[index] = fill[0];
      image.data[index + 1] = fill[1];
      image.data[index + 2] = fill[2];
      continue;
    }

    const gray = Math.round(red * 0.299 + green * 0.587 + blue * 0.114);
    image.data[index] = gray;
    image.data[index + 1] = gray;
    image.data[index + 2] = gray;
  }

  emojiContext.putImageData(image, 0, 0);
}

function colorEmojiPart(color) {
  if (!color.emojiColor) return;

  filledEmojiColors.add(color.name);
  drawEmojiObject();
  checkLevelComplete();
}

function setControls(disabled) {
  wheelButton.disabled = disabled;
  throwButton.disabled = disabled;
  nextButton.disabled = disabled;
  levelsButton.disabled = disabled;
}

function setThrowPrompt(hasThrown) {
  if (prefersTouchPrompt) {
    throwButton.textContent = hasThrown ? "Tap to throw again" : "Tap to throw";
    return;
  }

  throwButton.textContent = hasThrown ? "Hit space to throw again" : "Hit space to throw";
}

function hideCompleteButton() {
  window.clearTimeout(completionTimer);
  completeButton.hidden = true;
  completeButton.disabled = true;
  completeButton.textContent = "Done! 🎉";
}

function showCompleteButton() {
  if (!completeButton.hidden) return;

  completeButton.hidden = false;
  completeButton.disabled = true;
  completeButton.textContent = "Done! 🎉";
  completionTimer = window.setTimeout(() => {
    completeButton.textContent = "Next level";
    completeButton.disabled = false;
  }, 1500);
}

function checkLevelComplete() {
  const filledRequiredColors = [...requiredEmojiColors].every((colorName) =>
    filledEmojiColors.has(colorName)
  );
  if (!filledRequiredColors) return;

  showCompleteButton();
}

function resetThrowState() {
  isSpinning = true;
  isThrowing = false;
  lastFrame = performance.now();
  result.textContent = "Ready";
  result.style.color = "var(--text)";
  dart.classList.remove("throwing");
  spark.classList.remove("flash");
  setThrowPrompt(false);
  setControls(false);
}

function loadLevel(index) {
  currentLevelIndex = (index + levels.length) % levels.length;
  const level = levels[currentLevelIndex];
  colors = buildLevelColors(level);
  emojiColors = colors.filter((color) => color.emojiColor);
  segmentDegrees = 360 / colors.length;
  filledEmojiColors.clear();
  requiredEmojiColors.clear();
  hideCompleteButton();
  levelLabel.textContent = `Level ${currentLevelIndex + 1} of ${levels.length}`;
  emojiCanvas.setAttribute("aria-label", `${level.emoji} object to color`);
  rotation = 0;
  wheel.style.transform = "rotate(0deg)";
  paintWheel();
  drawOriginalEmojiSource();
  drawEmojiObject();
  resetThrowState();
}

function throwDart() {
  if (isThrowing || !isSpinning) return;

  isThrowing = true;
  isSpinning = false;
  setControls(true);
  const hit = colorAtDartPoint();

  result.textContent = "...";
  result.style.color = "var(--text)";
  setThrowPrompt(false);

  dart.classList.remove("throwing");
  spark.classList.remove("flash");
  void dart.offsetWidth;
  dart.classList.add("throwing");

  window.setTimeout(() => {
    result.textContent = hit.name;
    result.style.color = hit.hex;
    spark.style.background = hit.hex;
    spark.classList.add("flash");
    colorEmojiPart(hit);
  }, 430);

  window.setTimeout(() => {
    isThrowing = false;
    throwButton.disabled = false;
    setThrowPrompt(true);
    nextButton.disabled = false;
    levelsButton.disabled = false;
  }, 700);
}

function activateThrowControl() {
  if (isSpinning) {
    throwDart();
  } else {
    resetThrowState();
  }
}

function showLevelScreen() {
  levelScreen.hidden = false;
}

function hideLevelScreen() {
  levelScreen.hidden = true;
}

function buildLevelScreen() {
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "level-card";
    button.type = "button";
    button.innerHTML = `
      <span class="level-emoji">${level.emoji}</span>
      <span class="level-number">Level ${index + 1}</span>
    `;
    button.addEventListener("click", () => {
      loadLevel(index);
      hideLevelScreen();
    });
    levelGrid.append(button);
  });
}

wheelButton.addEventListener("click", activateThrowControl);
throwButton.addEventListener("click", activateThrowControl);
nextButton.addEventListener("click", () => loadLevel(currentLevelIndex + 1));
levelsButton.addEventListener("click", showLevelScreen);
completeButton.addEventListener("click", () => loadLevel(currentLevelIndex + 1));
introCloseButton.addEventListener("click", closeIntroPopup);
window.addEventListener("keydown", (event) => {
  if (levelScreen.hidden && event.code === "Space") {
    event.preventDefault();
    activateThrowControl();
  }
});

buildLevelScreen();
loadLevel(0);
showLevelScreen();
showIntroPopup();
requestAnimationFrame(animateWheel);

if (document.fonts) {
  document.fonts.ready.then(() => {
    drawOriginalEmojiSource();
    drawEmojiObject();
  });
}
