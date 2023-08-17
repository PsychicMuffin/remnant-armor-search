import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import {BaseArmorSets} from "../helpers/data";
import {SlotFilter, StateObject} from "../helpers/types";

export default function ArmorFilter(props: {
  setsState: StateObject<boolean[]>
  slotsState: StateObject<SlotFilter>
}) {
  const {value: sets, setter: setSets} = props.setsState;
  const {value: slots, setter: setSlots} = props.slotsState;

  useEffect(() => {
    localStorage.setItem("armorSets", JSON.stringify(sets));
  }, [sets]);

  useEffect(() => {
    localStorage.setItem("armorSlots", JSON.stringify(slots));
  }, [slots]);

  function updateArmorSet(index: number, include: boolean) {
    setSets(prevState => prevState.map((value, i) => {
      if (i === index) {
        return include;
      } else {
        return value;
      }
    }));
  }

  function updateArmorSlot(slot: keyof SlotFilter, include: boolean) {
    setSlots(prevState => (
      {
        ...prevState,
        [slot]: include,
      }
    ));
  }

  return (
    <>
      <h5 className="text-center"><u>Sets to include</u></h5>
      <div style={{gridTemplateColumns: "1fr 1fr", display: "grid"}}>
        {BaseArmorSets.map((armorSet, i) =>
          <Form.Check
            key={i}
            className="mx-1"
            label={armorSet.name}
            checked={sets[i]}
            onChange={(e) => updateArmorSet(i, e.target.checked)}
          />,
        )}
      </div>
      <h5 className="text-center"><u>Slots to include</u></h5>
      <div style={{gridTemplateColumns: "1fr 1fr 1fr 1fr", display: "grid"}}>
        <Form.Check
          className="mx-1"
          label="Helmet"
          checked={slots["helm"]}
          onChange={(e) => updateArmorSlot("helm", e.target.checked)}
        />
        <Form.Check
          className="mx-1"
          label="Chest"
          checked={slots["chest"]}
          onChange={(e) => updateArmorSlot("chest", e.target.checked)}
        />
        <Form.Check
          className="mx-1"
          label="Boots"
          checked={slots["boot"]}
          onChange={(e) => updateArmorSlot("boot", e.target.checked)}
        />
        <Form.Check
          className="mx-1"
          label="Gloves"
          checked={slots["glove"]}
          onChange={(e) => updateArmorSlot("glove", e.target.checked)}
        />
      </div>
    </>
  );
}
