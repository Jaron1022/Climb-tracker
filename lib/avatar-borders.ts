export const AVATAR_BORDER_DEFINITIONS = [
  { id: "cobalt_t1", name: "Cobalt I", family: "cobalt", tier: 1, unlockLevel: 5, description: "Unlock at level 5." },
  { id: "cobalt_t2", name: "Cobalt II", family: "cobalt", tier: 2, unlockLevel: 15, description: "Unlock at level 15." },
  { id: "gold_t1", name: "Gold I", family: "gold", tier: 1, unlockLevel: 25, description: "Unlock at level 25." },
  { id: "onyx_t1", name: "Onyx I", family: "onyx", tier: 1, unlockLevel: 35, description: "Unlock at level 35." },
  { id: "cobalt_t3", name: "Cobalt III", family: "cobalt", tier: 3, unlockLevel: 50, description: "Unlock at level 50." },
  { id: "gold_t2", name: "Gold II", family: "gold", tier: 2, unlockLevel: 75, description: "Unlock at level 75." },
  { id: "onyx_t2", name: "Onyx II", family: "onyx", tier: 2, unlockLevel: 100, description: "Unlock at level 100." },
  { id: "summit_t1", name: "Summit I", family: "summit", tier: 1, unlockLevel: 125, description: "Unlock at level 125." }
] as const;

export type AvatarBorderId = (typeof AVATAR_BORDER_DEFINITIONS)[number]["id"];

export function getUnlockedAvatarBorders(level: number) {
  return AVATAR_BORDER_DEFINITIONS.filter((border) => level >= border.unlockLevel);
}

export function normalizeSelectedAvatarBorder(selectedBorder: string | null | undefined, unlockedBorderIds: string[]) {
  if (!selectedBorder) {
    return null;
  }

  return unlockedBorderIds.includes(selectedBorder) ? selectedBorder : null;
}
