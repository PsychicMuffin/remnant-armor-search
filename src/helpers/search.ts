import {isPresent} from "ts-is-present";
import {BaseArmorSets} from "./data";
import {
  ArmorPiece,
  ArmorSlot,
  NamedArmorPiece,
  SearchCriteriaName,
  SearchCriteriaNames,
  SearchResult,
  SearchValues,
  SlotFilter,
} from "./types";

const MAX_RESULTS = 100;
const MAX_SIZE = 10000;
const EMPTY_PIECE: NamedArmorPiece = {
  name: "",
  weight: 0,
  armor: 0,
  bleed: 0,
  burn: 0,
  overload: 0,
  corrode: 0,
  blight: 0,
};

export function searchArmorSets(
  setBooleans: boolean[],
  armorSlots: SlotFilter,
  searchValues: SearchValues,
) {
  const activeSets = setBooleans
    .map((active, i) => active ? BaseArmorSets[i] : null)
    .filter(isPresent);

  const helms = getSlotSet("helm", armorSlots.helm);
  const chests = getSlotSet("chest", armorSlots.chest);
  const boots = getSlotSet("boot", armorSlots.boot);
  const gloves = getSlotSet("glove", armorSlots.glove);
  if (helms.length < 1 || chests.length < 1 || boots.length < 1 || gloves.length < 1) {
    Error("Please enable at least one item of every slot.");
  }

  const searchResults: SearchResult[] = [];
  helms.forEach(helm => {
    chests.forEach(chest => {
      boots.forEach(boot => {
        gloves.forEach(glove => {
          const sums = getArmorSum([helm, chest, boot, glove]);
          if (passesChecks(sums)) {
            const score = calcScore(sums);
            if (searchValues.minScore == null || score >= Number(searchValues.minScore)) {
              searchResults.push({
                ...sums,
                score: calcScore(sums),
                helm,
                chest,
                boot,
                glove,
              });
              if (searchResults.length >= MAX_SIZE) {
                truncateResults(searchResults);
              }
            }
          }
        });
      });
    });
  });

  truncateResults(searchResults);
  return searchResults;

  function getSlotSet(slot: ArmorSlot, enabled: boolean): NamedArmorPiece[] {
    const slotSet: NamedArmorPiece[] = [EMPTY_PIECE];
    if (enabled) {
      activeSets.forEach(set => {
        const piece = set[slot];
        if (piece) {
          slotSet.push({name: set.name, ...piece});
        }
      });
    }
    return slotSet;
  }

  function getArmorSum(pieces: ArmorPiece[]): ArmorPiece {
    return pieces.reduce((a, b) => (
      {
        weight: a.weight + b.weight,
        armor: a.armor + b.armor,
        bleed: a.bleed + b.bleed,
        burn: a.burn + b.burn,
        overload: a.overload + b.overload,
        blight: a.blight + b.blight,
        corrode: a.corrode + b.corrode,
      }
    ));
  }

  function passesChecks(sums: ArmorPiece): boolean {
    const weightPasses = searchValues.maxWeight == null
      || sums.weight <= Number(searchValues.maxWeight);
    return weightPasses && SearchCriteriaNames.map(passesCheck).every(Boolean);

    function passesCheck(name: SearchCriteriaName): boolean {
      const value = sums[name];
      const restriction = searchValues[name];
      const passesMin = restriction.min == null || value >= Number(restriction.min);
      const passesMax = restriction.max == null || value <= Number(restriction.max);
      return passesMin && passesMax;
    }
  }

  function calcScore(sums: ArmorPiece): number {
    return SearchCriteriaNames
      .map(name => sums[name] * (
        Number(searchValues[name].weight) ?? 0
      ))
      .reduce((a, b) => a + b);
  }
}

function truncateResults(results: SearchResult[]) {
  results.sort((a, b) => b.score - a.score);
  results.length = MAX_RESULTS;
}
