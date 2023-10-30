import {ArmorSet} from "./types";

export const BaseArmorSets: ArmorSet[] = [
  {
    name: "Academic's",
    helm: {armor: 12.7, weight: 5.2, bleed: 1, burn: 0, overload: 0, blight: 2, corrode: 3},
    chest: {armor: 49.2, weight: 20.8, bleed: 2, burn: 0, overload: 0, blight: 3, corrode: 6},
    boot: {armor: 24.6, weight: 10.4, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 4},
    glove: {armor: 12.3, weight: 5.2, bleed: 0, burn: 0, overload: 0, blight: 1, corrode: 2},
  }, {
    name: "Bandit",
    helm: {armor: 6.8, weight: 2.7, bleed: 2, burn: 0, overload: 0, blight: 3, corrode: 3},
    chest: {armor: 27.2, weight: 10.8, bleed: 0, burn: 0, overload: 0, blight: 2, corrode: 2},
    boot: {armor: 13.6, weight: 5.4, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 2},
    glove: {armor: 6.8, weight: 2.7, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 2},
  }, {
    name: "Bruiser",
    helm: {armor: 17.6, weight: 8.1, bleed: 1, burn: 2, overload: 0, blight: 0, corrode: 1},
    chest: {armor: 70.2, weight: 32.4, bleed: 2, burn: 6, overload: 0, blight: 0, corrode: 2},
    boot: {armor: 35, weight: 16.2, bleed: 1, burn: 4, overload: 0, blight: 0, corrode: 2},
    glove: {armor: 17.6, weight: 8.1, bleed: 1, burn: 2, overload: 0, blight: 0, corrode: 1},
  }, {
    name: "Crown of the Red Prince",
    helm: {armor: 6, weight: 6, bleed: -6, burn: 25, overload: -6, blight: 13, corrode: -6},
  }, {
    name: "Cultist",
    helm: {armor: 11.1, weight: 4.6, bleed: 1, burn: 1, overload: 1, blight: 1, corrode: 1},
    chest: {armor: 44.6, weight: 18.4, bleed: 1, burn: 1, overload: 2, blight: 2, corrode: 3},
    boot: {armor: 22.2, weight: 9.2, bleed: 1, burn: 1, overload: 1, blight: 2, corrode: 2},
    glove: {armor: 11.1, weight: 4.6, bleed: 0, burn: 1, overload: 1, blight: 1, corrode: 1},
  }, {
    name: "Dendroid",
    helm: {armor: 7.7, weight: 3.1, bleed: 2, burn: 0, overload: 0, blight: 0, corrode: 2},
    chest: {armor: 30.8, weight: 12.4, bleed: 4, burn: 0, overload: 0, blight: 2, corrode: 5},
    boot: {armor: 15.4, weight: 6.2, bleed: 3, burn: 0, overload: 0, blight: 2, corrode: 2},
    glove: {armor: 7.7, weight: 3.1, bleed: 1, burn: 0, overload: 0, blight: 1, corrode: 1},
  }, {
    name: "Elder",
    helm: {armor: 7.5, weight: 3, bleed: 0, burn: 3, overload: 0, blight: 2, corrode: 0},
    chest: {armor: 29.6, weight: 12, bleed: 0, burn: 4, overload: 0, blight: 4, corrode: 2},
    boot: {armor: 14.8, weight: 6, bleed: 0, burn: 3, overload: 0, blight: 2, corrode: 1},
    glove: {armor: 7.5, weight: 3, bleed: 0, burn: 2, overload: 0, blight: 1, corrode: 1},
  }, {
    name: "Fae Royal",
    helm: {armor: 15.4, weight: 6.6, bleed: 2, burn: 2, overload: 0, blight: 2, corrode: 0},
    chest: {armor: 60, weight: 26.4, bleed: 4, burn: 3, overload: 0, blight: 2, corrode: 0},
    boot: {armor: 30, weight: 13.2, bleed: 2, burn: 3, overload: 0, blight: 2, corrode: 0},
    glove: {armor: 15, weight: 6.6, bleed: 1, burn: 1, overload: 0, blight: 1, corrode: 0},
  }, {
    name: "Field Medic",
    helm: {armor: 10.6, weight: 4.4, bleed: 0, burn: 0, overload: 0, blight: 2, corrode: 1},
    chest: {armor: 42.8, weight: 17.6, bleed: 9, burn: 0, overload: 0, blight: 3, corrode: 0},
    boot: {armor: 21.4, weight: 8.8, bleed: 4, burn: 0, overload: 0, blight: 2, corrode: 0},
    glove: {armor: 10.6, weight: 4.4, bleed: 2, burn: 0, overload: 0, blight: 1, corrode: 1},
  }, {
    name: "High Noon",
    helm: {armor: 11.7, weight: 4.9, bleed: 0, burn: 1, overload: 1, blight: 0, corrode: 1},
    chest: {armor: 47.1, weight: 19.6, bleed: 0, burn: 4, overload: 4, blight: 0, corrode: 2},
    boot: {armor: 23.4, weight: 9.8, bleed: 0, burn: 3, overload: 2, blight: 0, corrode: 2},
    glove: {armor: 11.7, weight: 4.9, bleed: 0, burn: 2, overload: 2, blight: 0, corrode: 1},
  }, {
    name: "Knotted",
    helm: {armor: 15.5, weight: 6.9, bleed: 0, burn: 0, overload: 0, blight: 1, corrode: 2},
    chest: {armor: 62.2, weight: 27.6, bleed: 1, burn: 0, overload: 0, blight: 3, corrode: 7},
    boot: {armor: 31.1, weight: 13.8, bleed: 1, burn: 0, overload: 0, blight: 2, corrode: 4},
    glove: {armor: 15.5, weight: 6.9, bleed: 1, burn: 0, overload: 0, blight: 1, corrode: 2},
  }, {
    name: "Labyrinth",
    helm: {armor: 12.9, weight: 5.4, bleed: 0, burn: 2, overload: 3, blight: 0, corrode: 0},
    chest: {armor: 51, weight: 21.6, bleed: 0, burn: 4, overload: 6, blight: 0, corrode: 0},
    boot: {armor: 25.5, weight: 10.8, bleed: 0, burn: 3, overload: 4, blight: 0, corrode: 0},
    glove: {armor: 25.8, weight: 10.8, bleed: 0, burn: 3, overload: 4, blight: 0, corrode: 0},
  }, {
    name: "Leto Mark I",
    helm: {armor: 22.6, weight: 11.9, bleed: 3, burn: 4, overload: 2, blight: 2, corrode: 4},
    chest: {armor: 90.4, weight: 47.5, bleed: 4, burn: 5, overload: 5, blight: 5, corrode: 5},
    boot: {armor: 45.2, weight: 23.7, bleed: 4, burn: 3, overload: 4, blight: 4, corrode: 3},
    glove: {armor: 22.6, weight: 11.9, bleed: 2, burn: 1, overload: 2, blight: 2, corrode: 3},
  }, {
    name: "Leto Mark II",
    helm: {armor: 21.8, weight: 11.1, bleed: 2, burn: 3, overload: 1, blight: 1, corrode: 2},
    chest: {armor: 88.8, weight: 45.2, bleed: 3, burn: 4, overload: 4, blight: 5, corrode: 3},
    boot: {armor: 44.4, weight: 22.6, bleed: 3, burn: 2, overload: 3, blight: 3, corrode: 2},
    glove: {armor: 21.8, weight: 11.1, bleed: 2, burn: 1, overload: 2, blight: 1, corrode: 3},
  }, {
    name: "Lodestone Crown",
    helm: {armor: 6.5, weight: 2.6, bleed: -2, burn: 0, overload: -1, blight: 5, corrode: 0},
  }, {
    name: "Navigator's Helm",
    helm: {armor: 16, weight: 7.6, bleed: -1, burn: -1, overload: 2, blight: -1, corrode: 3},
  }, {
    name: "Nightstalker",
    helm: {armor: 10.9, weight: 4.5, bleed: 0, burn: 1, overload: 1, blight: 3, corrode: 0},
    chest: {armor: 43.6, weight: 18, bleed: 2, burn: 3, overload: 2, blight: 2, corrode: 0},
    boot: {armor: 21.8, weight: 9, bleed: 2, burn: 2, overload: 1, blight: 1, corrode: 0},
    glove: {armor: 10.9, weight: 4.5, bleed: 2, burn: 1, overload: 1, blight: 7, corrode: 0},
  }, {
    name: "Radiant",
    helm: {armor: 17.2, weight: 7.9, bleed: 1, burn: 1, overload: 3, blight: 1, corrode: 0},
    chest: {armor: 69, weight: 31.6, bleed: 2, burn: 2, overload: 4, blight: 1, corrode: 0},
    boot: {armor: 34.5, weight: 15.8, bleed: 1, burn: 1, overload: 3, blight: 1, corrode: 0},
    glove: {armor: 17.2, weight: 7.9, bleed: 1, burn: 1, overload: 2, blight: 0, corrode: 0},
  }, {
    name: "Realmwalker",
    helm: {armor: 7.2, weight: 2.9, bleed: 0, burn: 0, overload: 1, blight: 1, corrode: 0},
    chest: {armor: 29, weight: 11.6, bleed: 3, burn: 2, overload: 3, blight: 4, corrode: 0},
    boot: {armor: 14.5, weight: 5.8, bleed: 2, burn: 1, overload: 2, blight: 3, corrode: 0},
    glove: {armor: 7.2, weight: 2.9, bleed: 0, burn: 1, overload: 1, blight: 1, corrode: 0},
  }, {
    name: "Red Widow",
    helm: {armor: 13.2, weight: 5.6, bleed: 2, burn: 0, overload: 0, blight: 2, corrode: 0},
    chest: {armor: 52.8, weight: 22.4, bleed: 5, burn: 0, overload: 0, blight: 4, corrode: 1},
    boot: {armor: 26.2, weight: 11.2, bleed: 3, burn: 0, overload: 0, blight: 3, corrode: 1},
    glove: {armor: 13.1, weight: 5.6, bleed: 2, burn: 0, overload: 0, blight: 2, corrode: 0},
  }, {
    name: "Space Worker",
    helm: {armor: 7, weight: 2.8, bleed: 1, burn: 0, overload: 2, blight: 0, corrode: 2},
    chest: {armor: 28, weight: 11.2, bleed: 1, burn: 1, overload: 4, blight: 0, corrode: 2},
    boot: {armor: 14, weight: 5.6, bleed: 1, burn: 1, overload: 3, blight: 0, corrode: 2},
    glove: {armor: 7, weight: 2.8, bleed: 1, burn: 1, overload: 1, blight: 0, corrode: 1},
  }, {
    name: "Survivor",
    chest: {armor: 39.2, weight: 16, bleed: 3, burn: 2, overload: 2, blight: 2, corrode: 2},
    boot: {armor: 19.6, weight: 8, bleed: 1, burn: 1, overload: 1, blight: 1, corrode: 2},
    glove: {armor: 9.8, weight: 4, bleed: 1, burn: 1, overload: 1, blight: 1, corrode: 1},
  }, {
    name: "Technician",
    helm: {armor: 16.6, weight: 7.5, bleed: 0, burn: 1, overload: 2, blight: 0, corrode: 2},
    chest: {armor: 66.4, weight: 30, bleed: 0, burn: 2, overload: 6, blight: 0, corrode: 2},
    boot: {armor: 33.2, weight: 15, bleed: 0, burn: 1, overload: 3, blight: 0, corrode: 2},
    glove: {armor: 16.6, weight: 7.5, bleed: 0, burn: 1, overload: 2, blight: 0, corrode: 1},
  }, {
    name: "Trainer",
    helm: {armor: 10, weight: 4.1, bleed: 0, burn: 0, overload: 0, blight: 0, corrode: 1},
    chest: {armor: 40, weight: 16.4, bleed: 3, burn: 0, overload: 4, blight: 1, corrode: 3},
    boot: {armor: 20, weight: 8.2, bleed: 1, burn: 0, overload: 1, blight: 1, corrode: 2},
    glove: {armor: 10.1, weight: 4.1, bleed: 2, burn: 0, overload: 3, blight: 1, corrode: 1},
  }, {
    name: "Void",
    helm: {armor: 15.9, weight: 7.1, bleed: 0, burn: 1, overload: 2, blight: 0, corrode: 1},
    chest: {armor: 63.6, weight: 28.4, bleed: 0, burn: 3, overload: 4, blight: 0, corrode: 4},
    boot: {armor: 31.8, weight: 14.2, bleed: 0, burn: 2, overload: 2, blight: 0, corrode: 3},
    glove: {armor: 15.9, weight: 7.1, bleed: 0, burn: 1, overload: 1, blight: 0, corrode: 1},
  },
];
