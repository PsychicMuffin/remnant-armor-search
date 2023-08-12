import {ArmorSet} from "./types";

export const BaseArmorSets: ArmorSet[] = [
  {
    name: "Academic's",
    helm: {armor: 11, weight: 7, bleed: 1, burn: 0, overload: 0, blight: 2, corrode: 3},
    chest: {armor: 47, weight: 21, bleed: 2, burn: 0, overload: 0, blight: 3, corrode: 6},
    boot: {armor: 23, weight: 10, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 4},
    glove: {armor: 8, weight: 4, bleed: 0, burn: 0, overload: 0, blight: 1, corrode: 2},
  }, {
    name: "Bandit",
    helm: {armor: 6, weight: 3, bleed: 2, burn: 0, overload: 0, blight: 3, corrode: 3},
    chest: {armor: 36, weight: 11, bleed: 0, burn: 0, overload: 0, blight: 2, corrode: 2},
    boot: {armor: 19, weight: 6, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 2},
    glove: {armor: 6, weight: 2, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 2},
  }, {
    name: "Bruiser",
    helm: {armor: 15, weight: 9, bleed: 1, burn: 2, overload: 0, blight: 0, corrode: 1},
    chest: {armor: 57, weight: 29, bleed: 2, burn: 6, overload: 0, blight: 0, corrode: 2},
    boot: {armor: 27, weight: 15, bleed: 1, burn: 4, overload: 0, blight: 0, corrode: 2},
    glove: {armor: 11, weight: 7, bleed: 1, burn: 2, overload: 0, blight: 0, corrode: 1},
  }, {
    name: "Crown of the Red Prince",
    helm: {armor: 8, weight: 5, bleed: -6, burn: 25, overload: -6, blight: 13, corrode: -6},
  }, {
    name: "Cultist",
    helm: {armor: 9, weight: 5, bleed: 1, burn: 1, overload: 1, blight: 1, corrode: 1},
    chest: {armor: 46, weight: 17, bleed: 1, burn: 1, overload: 2, blight: 2, corrode: 3},
    boot: {armor: 23, weight: 10, bleed: 1, burn: 1, overload: 1, blight: 2, corrode: 2},
    glove: {armor: 5, weight: 6, bleed: 0, burn: 1, overload: 1, blight: 1, corrode: 1},
  }, {
    name: "Dendroid",
    helm: {armor: 7, weight: 3, bleed: 2, burn: 0, overload: 0, blight: 0, corrode: 2},
    chest: {armor: 36, weight: 12, bleed: 4, burn: 0, overload: 0, blight: 2, corrode: 5},
    boot: {armor: 19, weight: 7, bleed: 3, burn: 0, overload: 2, blight: 2, corrode: 0},
    glove: {armor: 6, weight: 3, bleed: 1, burn: 0, overload: 0, blight: 1, corrode: 1},
  }, {
    name: "Elder",
    helm: {armor: 6, weight: 6, bleed: 0, burn: 3, overload: 0, blight: 2, corrode: 0},
    chest: {armor: 36, weight: 9, bleed: 0, burn: 4, overload: 0, blight: 4, corrode: 2},
    boot: {armor: 19, weight: 6, bleed: 0, burn: 3, overload: 0, blight: 2, corrode: 1},
    glove: {armor: 6, weight: 3, bleed: 0, burn: 2, overload: 0, blight: 1, corrode: 1},
  }, {
    name: "Fae Royal",
    helm: {armor: 15, weight: 8, bleed: 2, burn: 2, overload: 0, blight: 2, corrode: 0},
    chest: {armor: 57, weight: 27, bleed: 4, burn: 3, overload: 0, blight: 2, corrode: 0},
    boot: {armor: 26, weight: 13, bleed: 2, burn: 3, overload: 0, blight: 2, corrode: 0},
    glove: {armor: 10, weight: 7, bleed: 1, burn: 1, overload: 0, blight: 1, corrode: 0},
  }, {
    name: "Field Medic",
    helm: {armor: 10, weight: 5, bleed: 0, burn: 0, overload: 0, blight: 2, corrode: 1},
    chest: {armor: 45, weight: 16, bleed: 9, burn: 0, overload: 0, blight: 3, corrode: 0},
    boot: {armor: 24, weight: 9, bleed: 4, burn: 0, overload: 0, blight: 2, corrode: 0},
    glove: {armor: 9, weight: 5, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 1},
  }, {
    name: "High Noon",
    helm: {armor: 9, weight: 4, bleed: 0, burn: 1, overload: 1, blight: 0, corrode: 1},
    chest: {armor: 48, weight: 19, bleed: 0, burn: 4, overload: 4, blight: 0, corrode: 2},
    boot: {armor: 24, weight: 10, bleed: 0, burn: 3, overload: 2, blight: 0, corrode: 2},
    glove: {armor: 9, weight: 6, bleed: 0, burn: 2, overload: 2, blight: 0, corrode: 1},
  }, {
    name: "Knotted",
    helm: {armor: 13, weight: 8, bleed: 0, burn: 0, overload: 0, blight: 1, corrode: 2},
    chest: {armor: 53, weight: 28, bleed: 1, burn: 0, overload: 0, blight: 3, corrode: 7},
    boot: {armor: 26, weight: 14, bleed: 1, burn: 0, overload: 0, blight: 2, corrode: 4},
    glove: {armor: 11, weight: 6, bleed: 1, burn: 0, overload: 0, blight: 1, corrode: 2},
  }, {
    name: "Labyrinth",
    helm: {armor: 13, weight: 7, bleed: 0, burn: 2, overload: 3, blight: 0, corrode: 0},
    chest: {armor: 45, weight: 20, bleed: 0, burn: 4, overload: 6, blight: 0, corrode: 0},
    boot: {armor: 25, weight: 10, bleed: 0, burn: 3, overload: 4, blight: 0, corrode: 0},
    glove: {armor: 25, weight: 10, bleed: 0, burn: 3, overload: 4, blight: 0, corrode: 0},
  }, {
    name: "Leto Mark I",
    helm: {armor: 29, weight: 15, bleed: 3, burn: 4, overload: 2, blight: 2, corrode: 4},
    chest: {armor: 101, weight: 45, bleed: 4, burn: 5, overload: 5, blight: 5, corrode: 5},
    boot: {armor: 51, weight: 24, bleed: 4, burn: 3, overload: 4, blight: 4, corrode: 3},
    glove: {armor: 20, weight: 11, bleed: 2, burn: 1, overload: 2, blight: 2, corrode: 3},
  }, {
    name: "Leto Mark II",
    helm: {armor: 33, weight: 13, bleed: 2, burn: 3, overload: 1, blight: 1, corrode: 2},
    chest: {armor: 107, weight: 44, bleed: 3, burn: 4, overload: 4, blight: 5, corrode: 3},
    boot: {armor: 55, weight: 23, bleed: 3, burn: 2, overload: 3, blight: 3, corrode: 2},
    glove: {armor: 22, weight: 10, bleed: 2, burn: 1, overload: 2, blight: 1, corrode: 3},
  }, {
    name: "Lodestone Crown",
    helm: {armor: 5, weight: 3, bleed: -2, burn: 0, overload: -1, blight: 5, corrode: 0},
  }, {
    name: "Navigator's Helm",
    helm: {armor: 12, weight: 8, bleed: -1, burn: -1, overload: 2, blight: -1, corrode: 3},
  }, {
    name: "Nightstalker",
    helm: {armor: 11, weight: 6, bleed: 0, burn: 1, overload: 1, blight: 3, corrode: 0},
    chest: {armor: 44, weight: 18, bleed: 2, burn: 3, overload: 2, blight: 2, corrode: 0},
    boot: {armor: 25, weight: 9, bleed: 2, burn: 2, overload: 1, blight: 1, corrode: 0},
    glove: {armor: 8, weight: 3, bleed: 2, burn: 1, overload: 1, blight: 7, corrode: 0},
  }, {
    name: "Radiant",
    helm: {armor: 14, weight: 8, bleed: 1, burn: 1, overload: 3, blight: 1, corrode: 0},
    chest: {armor: 59, weight: 30, bleed: 2, burn: 2, overload: 4, blight: 1, corrode: 0},
    boot: {armor: 29, weight: 17, bleed: 1, burn: 1, overload: 3, blight: 1, corrode: 0},
    glove: {armor: 11, weight: 6, bleed: 1, burn: 1, overload: 2, blight: 0, corrode: 0},
  }, {
    name: "Realmwalker",
    helm: {armor: 5, weight: 2, bleed: 0, burn: 0, overload: 1, blight: 1, corrode: 0},
    chest: {armor: 35, weight: 11, bleed: 3, burn: 2, overload: 3, blight: 4, corrode: 0},
    boot: {armor: 20, weight: 6, bleed: 2, burn: 1, overload: 2, blight: 3, corrode: 0},
    glove: {armor: 4, weight: 2, bleed: 0, burn: 1, overload: 1, blight: 1, corrode: 0},
  }, {
    name: "Red Widow",
    helm: {armor: 12, weight: 8, bleed: 2, burn: 0, overload: 0, blight: 2, corrode: 0},
    chest: {armor: 47, weight: 23, bleed: 5, burn: 0, overload: 0, blight: 4, corrode: 1},
    boot: {armor: 24, weight: 12, bleed: 3, burn: 0, overload: 0, blight: 3, corrode: 1},
    glove: {armor: 8, weight: 5, bleed: 2, burn: 0, overload: 0, blight: 2, corrode: 0},
  }, {
    name: "Space Worker",
    helm: {armor: 7, weight: 3, bleed: 1, burn: 0, overload: 2, blight: 0, corrode: 2},
    chest: {armor: 36, weight: 11, bleed: 1, burn: 1, overload: 4, blight: 0, corrode: 2},
    boot: {armor: 19, weight: 7, bleed: 1, burn: 1, overload: 3, blight: 0, corrode: 2},
    glove: {armor: 6, weight: 2, bleed: 1, burn: 1, overload: 1, blight: 0, corrode: 1},
  }, {
    name: "Survivor",
    chest: {armor: 46, weight: 19, bleed: 3, burn: 2, overload: 2, blight: 2, corrode: 2},
    boot: {armor: 24, weight: 10, bleed: 1, burn: 1, overload: 1, blight: 1, corrode: 2},
    glove: {armor: 8, weight: 4, bleed: 1, burn: 1, overload: 1, blight: 1, corrode: 1},
  }, {
    name: "Technician",
    helm: {armor: 14, weight: 8, bleed: 0, burn: 1, overload: 2, blight: 0, corrode: 2},
    chest: {armor: 59, weight: 30, bleed: 0, burn: 2, overload: 6, blight: 0, corrode: 2},
    boot: {armor: 29, weight: 14, bleed: 0, burn: 1, overload: 3, blight: 0, corrode: 2},
    glove: {armor: 10, weight: 6, bleed: 0, burn: 1, overload: 2, blight: 0, corrode: 1},
  }, {
    name: "Trainer",
    helm: {armor: 7, weight: 4, bleed: 0, burn: 0, overload: 0, blight: 0, corrode: 1},
    chest: {armor: 46, weight: 18, bleed: 3, burn: 0, overload: 4, blight: 1, corrode: 3},
    boot: {armor: 22, weight: 8, bleed: 1, burn: 0, overload: 1, blight: 1, corrode: 2},
    glove: {armor: 9, weight: 3, bleed: 2, burn: 0, overload: 3, blight: 1, corrode: 1},
  }, {
    name: "Void",
    helm: {armor: 15, weight: 8, bleed: 0, burn: 1, overload: 2, blight: 0, corrode: 1},
    chest: {armor: 56, weight: 28, bleed: 0, burn: 3, overload: 4, blight: 0, corrode: 4},
    boot: {armor: 28, weight: 15, bleed: 0, burn: 2, overload: 2, blight: 0, corrode: 3},
    glove: {armor: 11, weight: 6, bleed: 0, burn: 1, overload: 1, blight: 0, corrode: 1},
  },
];
