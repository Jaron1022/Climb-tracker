export const AVATAR_FRAME_STYLES = [
  { id: "core" },
  { id: "circuit" },
  { id: "crest" }
] as const;

export const AVATAR_BORDER_COLORS = [
  { id: "default", hex: "#dce8fb" },
  { id: "cobalt", hex: "#67c4ff" },
  { id: "gold", hex: "#efca57" },
  { id: "onyx", hex: "#a7b7cf" }
] as const;

export const AVATAR_FRAME_TIERS = [
  { id: 0, unlockLevel: 0 },
  { id: 1, unlockLevel: 10 },
  { id: 2, unlockLevel: 25 },
  { id: 3, unlockLevel: 50 },
  { id: 4, unlockLevel: 75 },
  { id: 5, unlockLevel: 100 },
  { id: 6, unlockLevel: 125 },
  { id: 7, unlockLevel: 150 },
  { id: 8, unlockLevel: 175 },
  { id: 9, unlockLevel: 200 }
] as const;

export type AvatarFrameStyleId = (typeof AVATAR_FRAME_STYLES)[number]["id"];
export type AvatarBorderColorId = (typeof AVATAR_BORDER_COLORS)[number]["id"];

export function getAvatarFrameTier(level: number) {
  return AVATAR_FRAME_TIERS.reduce((current, tier) => (level >= tier.unlockLevel ? tier : current), AVATAR_FRAME_TIERS[0]);
}

export function serializeAvatarBorderSelection(style: AvatarFrameStyleId, color: AvatarBorderColorId) {
  return `${style}:${color}`;
}

export function normalizeSelectedAvatarBorder(selectedBorder: string | null | undefined) {
  const knownStyles = new Set<string>(AVATAR_FRAME_STYLES.map((style) => style.id));
  const knownColors = new Set<string>(AVATAR_BORDER_COLORS.map((color) => color.id));
  const [maybeStyle, maybeColor] = (selectedBorder ?? "").split(":");

  return {
    style: knownStyles.has(maybeStyle) ? (maybeStyle as AvatarFrameStyleId) : ("core" as AvatarFrameStyleId),
    color: knownColors.has(maybeColor) ? (maybeColor as AvatarBorderColorId) : ("default" as AvatarBorderColorId)
  };
}
