import {BaseArmorSets} from "../helpers/data";
import React, {useEffect} from "react";
import {Form} from "react-bootstrap";

export default function ArmorFilter(props: {
  armorSets: boolean[],
  setArmorSets: React.Dispatch<React.SetStateAction<boolean[]>>
}) {
  useEffect(() => {
    localStorage.setItem("armorSets", JSON.stringify(props.armorSets))
  }, [props.armorSets]);

  function updateArmorSet(index: number, include: boolean) {
    props.setArmorSets(prevState => prevState.map((value, i) => {
      if (i === index) {
        return include;
      } else {
        return value;
      }
    }));
  }

  return (
    <div style={{gridTemplateColumns: "1fr 1fr", display: "grid"}}>
      {BaseArmorSets.map((armorSet, i) =>
        <Form.Check
          key={i}
          className="mx-1"
          label={armorSet.name}
          checked={props.armorSets[i]}
          onChange={(e) => updateArmorSet(i, e.target.checked)}
        />
      )}
    </div>
  );
}
