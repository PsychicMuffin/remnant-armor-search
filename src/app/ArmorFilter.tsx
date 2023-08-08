import {BaseArmorSets} from "../helpers/data";
import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import {StateObject} from "../helpers/types";

export default function ArmorFilter(props: {
  state: StateObject<boolean[]>
}) {
  useEffect(() => {
    localStorage.setItem("armorSets", JSON.stringify(props.state.value))
  }, [props.state.value]);

  function updateArmorSet(index: number, include: boolean) {
    props.state.setter(prevState => prevState.map((value, i) => {
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
          checked={props.state.value[i]}
          onChange={(e) => updateArmorSet(i, e.target.checked)}
        />
      )}
    </div>
  );
}
