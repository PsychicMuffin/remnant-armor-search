import {BaseArmorSets} from "../search/data";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";

export default function ArmorFilter() {
  const storedArmorSets = localStorage.getItem("armorSets");
  const initialArmorSets = storedArmorSets ? JSON.parse(storedArmorSets) : BaseArmorSets.map(_ => true);
  const [armorSets, setArmorSets] = useState<boolean[]>(initialArmorSets);

  useEffect(() => {
    localStorage.setItem("armorSets", JSON.stringify(armorSets))
  }, [armorSets]);

  function updateArmorSet(index: number, include: boolean) {
    setArmorSets(prevState => ({...prevState, [index]: include}));
  }

  return (
    <div style={{gridTemplateColumns: "1fr 1fr", display: "grid"}}>
      {BaseArmorSets.map((armorSet, i) =>
        <FilterColumn index={i} armorSets={armorSets} updateArmorSet={updateArmorSet}/>
      )}
    </div>
  );

  // return (
  //   <div>
  //     {BaseArmorSets.filter((_, i) => !(i % 2)).map((armorSet, i) =>
  //       <Row key={i}>
  //         <FilterColumn index={i * 2} armorSets={armorSets} updateArmorSet={updateArmorSet}/>
  //         {i * 2 + 1 < BaseArmorSets.length &&
  //             <FilterColumn index={i * 2 + 1} armorSets={armorSets} updateArmorSet={updateArmorSet}/>}
  //       </Row>
  //     )}
  //   </div>
  // );
}

function FilterColumn(props: {
  index: number
  armorSets: boolean[],
  updateArmorSet: (index: number, include: boolean) => void,
}) {
  const i = props.index;
  return (
    <span>
      <Form.Check
        // className="text-nowrap"
        label={BaseArmorSets[i].name}
        checked={props.armorSets[i]}
        onChange={(e) => props.updateArmorSet(i, e.target.checked)}
      />
    </span>
  );
}
