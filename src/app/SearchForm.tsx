import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import {BaseArmorSets} from "../helpers/data";
import {searchArmorSets} from "../helpers/search";
import {getState, SearchResult, SearchValues, SlotFilter, StateObject} from "../helpers/types";
import ArmorFilter from "./ArmorFilter";
import SearchInput from "./SearchInput";

export default function SearchForm(props: {
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>
}) {
  const initialArmorSets = getInitialArmorSets();
  const initialArmorSlots = getInitialArmorSlots();

  const [armorSets, setArmorSets] = useState<boolean[]>(initialArmorSets);
  const [armorSlots, setArmorSlots] = useState<SlotFilter>(initialArmorSlots);
  const [searched, setSearched] = useState(false);
  const [searchValues, setSearchValues] = useState<SearchValues>({
    maxWeight: null,
    minScore: null,
    armor: {weight: null, min: null, max: null},
    bleed: {weight: null, min: null, max: null},
    burn: {weight: null, min: null, max: null},
    overload: {weight: null, min: null, max: null},
    corrode: {weight: null, min: null, max: null},
    blight: {weight: null, min: null, max: null},
  });

  useEffect(() => {
    setSearched(false);
  }, [searchValues, armorSets, armorSlots]);

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearched(true);
    props.setSearchResults(searchArmorSets(armorSets, armorSlots, searchValues));
  }

  const searchValuesState = getState(searchValues, setSearchValues);
  return (
    <Form onSubmit={search}>
      <Form.Group as={Row} xs="auto">
        <NotableValue label="Max Weight:" name="maxWeight" state={searchValuesState}/>
        <NotableValue label="Min Score:" name="minScore" state={searchValuesState}/>
      </Form.Group>
      <Tabs defaultActiveKey="search" className="pt-1 mb-2" justify>
        <Tab eventKey="search" title="Search Weights">
          <SearchInput label="Armor:" name="armor" state={searchValuesState}/>
          <SearchInput label="Bleed:" name="bleed" state={searchValuesState}/>
          <SearchInput label="Burn:" name="burn" state={searchValuesState}/>
          <SearchInput label="Overload:" name="overload" state={searchValuesState}/>
          <SearchInput label="Corrode:" name="corrode" state={searchValuesState}/>
          <SearchInput label="Blight:" name="blight" state={searchValuesState}/>
          <Row className="p-2 pe-1 align-items-center">
            <Button type="submit" disabled={searched}>Search</Button>
          </Row>
        </Tab>
        <Tab eventKey="filter" title="Armor Filter">
          <ArmorFilter
            setsState={getState(armorSets, setArmorSets)}
            slotsState={getState(armorSlots, setArmorSlots)}
          />
        </Tab>
      </Tabs>
    </Form>
  );
}

function NotableValue(props: {
  label: string,
  name: keyof Pick<SearchValues, "maxWeight" | "minScore">
  state: StateObject<SearchValues>
}) {
  return (
    <Row className="py-2">
      <Form.Label column={true} className="pe-1">{props.label}</Form.Label>
      <Col className="px-1">
        <Form.Control
          className="text-center"
          type="text"
          inputMode="decimal"
          htmlSize={4}
          value={props.state.value[props.name] ?? ""}
          onChange={(e) => {
            if (Number.isFinite(Number(e.target.value))) {
              props.state.setter(prevState => (
                {
                  ...prevState,
                  [props.name]: e.target.value ? e.target.value : null,
                }
              ));
            }
          }}/>
      </Col>
    </Row>
  );
}

function getInitialArmorSets() {
  const initialArmorSets = BaseArmorSets.map(_ => true);
  const storedArmorSetsString = localStorage.getItem("armorSets");
  if (storedArmorSetsString) {
    const storedArmorSets: boolean[] = JSON.parse(storedArmorSetsString);
    storedArmorSets.forEach((enabled, i) => initialArmorSets[i] = enabled);
  }
  return initialArmorSets;
}

function getInitialArmorSlots() {
  let initialArmorSlots = {helm: true, chest: true, boot: true, glove: true};
  const storedArmorSlotsString = localStorage.getItem("armorSlots");
  if (storedArmorSlotsString) {
    initialArmorSlots = JSON.parse(storedArmorSlotsString);
  }
  return initialArmorSlots;
}
