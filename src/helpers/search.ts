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
} from "./types";

export function searchArmorSets(setBooleans: boolean[], searchValues: SearchValues) {
  const activeSets = setBooleans
    .map((active, i) => active ? BaseArmorSets[i] : null)
    .filter(isPresent);

  const helms = getSlotSet("helm");
  const chests = getSlotSet("chest");
  const gloves = getSlotSet("glove");
  const boots = getSlotSet("boot");
  if (helms.length < 1 || chests.length < 1 || gloves.length < 1 || boots.length < 1) {
    Error("Please enable at least one item of every slot.");
  }

  const searchResults: SearchResult[] = [];
  chests.forEach(chest => {
    gloves.forEach(glove => {
      helms.forEach(helm => {
        boots.forEach(boot => {
          const sums = getArmorSum([chest, glove, helm, boot]);
          if (passesChecks(sums)) {
            const score = calcScore(sums);
            if (searchValues.minScore == null || score > searchValues.minScore) {
              searchResults.push({
                ...sums,
                score: calcScore(sums),
                chest,
                glove,
                helm,
                boot,
              });
            }
          }
        });
      });
    });
  });

  return searchResults.sort((a, b) => b.score - a.score);

  function getSlotSet(slot: ArmorSlot): NamedArmorPiece[] {
    const slotSet: NamedArmorPiece[] = [];
    activeSets.forEach(set => {
      const piece = set[slot];
      if (piece) {
        slotSet.push({name: set.name, ...piece});
      }
    });
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
    const weightPasses = searchValues.maxWeight == null || sums.weight <= searchValues.maxWeight;
    return weightPasses && SearchCriteriaNames.map(passesCheck).every(Boolean);

    function passesCheck(name: SearchCriteriaName): boolean {
      const value = sums[name];
      const restriction = searchValues[name];
      const passesMin = restriction.min == null || value >= restriction.min;
      const passesMax = restriction.max == null || value <= restriction.max;
      return passesMin && passesMax;
    }
  }

  function calcScore(sums: ArmorPiece): number {
    return SearchCriteriaNames
      .map(name => sums[name] * (
        searchValues[name].weight ?? 0
      ))
      .reduce((a, b) => a + b);
  }
}
