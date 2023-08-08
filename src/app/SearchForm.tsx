import {Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import React, {FormEvent, useEffect, useState} from "react";
import SearchInput from "./SearchInput";
import ArmorFilter from "./ArmorFilter";
import {BaseArmorSets} from "../helpers/data";
import {SearchCriteriaName, SearchResult, SearchValue, SearchValues, StateObject} from "../helpers/types";
import {searchArmorSets} from "../helpers/search";

export default function SearchForm(props: {
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>
}) {
  const storedArmorSets = localStorage.getItem("armorSets");
  const initialArmorSets = storedArmorSets ? JSON.parse(storedArmorSets) : BaseArmorSets.map(_ => true);
  const [armorSets, setArmorSets] = useState<boolean[]>(initialArmorSets);

  const [searched, setSearched] = useState(false);
  const [searchValues, setSearchValues] = useState<SearchValues>({
    maxWeight: null,
    minScore: null,
    armor: {weight: null, min: null, max: null},
    bleed: {weight: null, min: null, max: null},
    burn: {weight: null, min: null, max: null},
    overload: {weight: null, min: null, max: null},
    corrode: {weight: null, min: null, max: null},
    blight: {weight: null, min: null, max: null}
  });

  useEffect(() => {
    setSearched(false);
  }, [searchValues, armorSets]);

  function updateValue(name: SearchCriteriaName, updates: Partial<SearchValue>) {
    setSearchValues(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        ...updates
      }
    }));
  }

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearched(true);
    props.setSearchResults(searchArmorSets(armorSets, searchValues));
  }

  const searchValuesState = {value: searchValues, setter: setSearchValues};
  return (
    <Form onSubmit={search}>
      <Form.Group as={Row} xs="auto">
        <NotableValue label="Max Weight:" name="maxWeight" searchValues={searchValuesState}/>
        <NotableValue label="Min Score:" name="minScore" searchValues={searchValuesState}/>
      </Form.Group>
      <Tabs defaultActiveKey="search" className="my-2" justify>
        <Tab eventKey="search" title="Search Weights">
          <SearchInput label="Armor:" name="armor" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Bleed:" name="bleed" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Burn:" name="burn" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Overload:" name="overload" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Blight:" name="blight" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Corrode:" name="corrode" values={searchValues} updateValue={updateValue}/>
          <Row className="p-2 pe-1 align-items-center">
            <Button type="submit" disabled={searched}>Search</Button>
          </Row>
        </Tab>
        <Tab eventKey="filter" title="Armor Filter">
          <ArmorFilter armorSets={armorSets} setArmorSets={setArmorSets}/>
        </Tab>
      </Tabs>
    </Form>
  );
}

function NotableValue(props: {
  label: string,
  name: keyof Pick<SearchValues, "maxWeight" | "minScore">
  searchValues: StateObject<SearchValues>
}) {
  return (
    <Row className="py-1">
      <Form.Label column xs="6" className="pe-1">{props.label}</Form.Label>
      <Col xs="6" className="px-1">
        <Form.Control
          type="number"
          min="-1000"
          max="1000"
          value={props.searchValues.value[props.name] ?? ''}
          onChange={(e) => {
            props.searchValues.setter(prevState => ({
              ...prevState,
              [props.name]: e.target.value ? Number(e.target.value) : null
            }))
          }}/>
      </Col>
    </Row>
  );
}
