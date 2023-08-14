import React from "react";

export type ArmorSet = {
  name: string,
  chest?: ArmorPiece,
  glove?: ArmorPiece,
  helm?: ArmorPiece,
  boot?: ArmorPiece,
}
export type ArmorSlot = keyof Omit<ArmorSet, "name">;

export type ArmorPiece = {
  weight: number,
  armor: number,
  bleed: number,
  burn: number,
  overload: number,
  corrode: number,
  blight: number,
}

export type SearchValues = {
  maxWeight: string | null,
  minScore: string | null,
  armor: SearchValue,
  bleed: SearchValue,
  burn: SearchValue,
  overload: SearchValue,
  blight: SearchValue,
  corrode: SearchValue,
}
export type SearchCriteriaName = keyof Omit<SearchValues, "maxWeight" | "minScore">;
export const SearchCriteriaNames: SearchCriteriaName[] = [
  "armor",
  "bleed",
  "burn",
  "overload",
  "blight",
  "corrode",
];

export type SearchValue = {
  weight: string | null,
  min: string | null,
  max: string | null,
}

export type NamedArmorPiece = ArmorPiece & {
  name: string,
}

export type SearchResult = ArmorPiece & {
  score: number,
  chest: NamedArmorPiece,
  glove: NamedArmorPiece,
  helm: NamedArmorPiece,
  boot: NamedArmorPiece
}

export type StateObject<T> = {
  value: T,
  setter: React.Dispatch<React.SetStateAction<T>>
}

export function getState<T>(value: T, setter: React.Dispatch<React.SetStateAction<T>>) {
  return {value, setter};
}
