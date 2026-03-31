export const AVATAR_BORDER_COLORS = [
  { id: "default", name: "Default", description: "Clean silver-blue frame." },
  { id: "cobalt", name: "Cobalt", description: "Cool electric blue." },
  { id: "gold", name: "Gold", description: "Warm gold trim." },
  { id: "onyx", name: "Onyx", description: "Dark steel finish." }
] as const;

export const AVATAR_FRAME_TIERS = [
  { id: 0, name: "Frame I", unlockLevel: 0 },
  { id: 1, name: "Frame II", unlockLevel: 10 },
  { id: 2, name: "Frame III", unlockLevel: 25 },
  { id: 3, name: "Frame IV", unlockLevel: 50 },
  { id: 4, name: "Frame V", unlockLevel: 75 },
  { id: 5, name: "Frame VI", unlockLevel: 100 },
  { id: 6, name: "Frame VII", unlockLevel: 125 },
  { id: 7, name: "Frame VIII", unlockLevel: 150 },
  { id: 8, name: "Frame IX", unlockLevel: 175 },
  { id: 9, name: "Frame X", unlockLevel: 200 }
] as const;

export type AvatarBorderColorId = (typeof AVATAR_BORDER_COLORS)[number]["id"];

export function getAvatarFrameTier(level: number) {
  return AVATAR_FRAME_TIERS.reduce((current, tier) => (level >= tier.unlockLevel ? tier : current), AVATAR_FRAME_TIERS[0]);
}

export function normalizeSelectedAvatarBorder(selectedBorder: string | null | undefined) {
  const known = new Set<string>(AVATAR_BORDER_COLORS.map((color) => color.id));
  return known.has(selectedBorder ?? "") ? (selectedBorder as AvatarBorderColorId) : "default";
}
