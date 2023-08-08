import {Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import React, {FormEvent, useEffect, useState} from "react";
import SearchInput from "./SearchInput";
import ArmorFilter from "./ArmorFilter";
import {BaseArmorSets} from "../search/data";
import {SearchCriteriaName, SearchResult, SearchValue} from "../search/types";
import {searchArmorSets} from "../search/search";

export default function SearchForm(props: {
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>
}) {
  const storedArmorSets = localStorage.getItem("armorSets");
  const initialArmorSets = storedArmorSets ? JSON.parse(storedArmorSets) : BaseArmorSets.map(_ => true);
  const [armorSets, setArmorSets] = useState<boolean[]>(initialArmorSets);

  const [searched, setSearched] = useState(false);
  const [searchValues, setSearchValues] = useState({
    maxWeight: 50,
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

  return (
    <Form onSubmit={search}>
      <Form.Group as={Row}>
        <Form.Label column md="auto">Max Weight:</Form.Label>
        <Col md="auto">
          <Form.Control
            type="number"
            min="0"
            max="1000"
            value={searchValues.maxWeight}
            onChange={(e) => {
              setSearchValues(prevState => ({...prevState, maxWeight: Number(e.target.value)}))
            }}/>
        </Col>
      </Form.Group>
      <Tabs defaultActiveKey="search" className="my-3" justify>
        <Tab eventKey="search" title="Search Weights">
          <SearchInput label="Armor:" name="armor" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Bleed:" name="bleed" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Burn:" name="burn" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Overload:" name="overload" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Corrode:" name="corrode" values={searchValues} updateValue={updateValue}/>
          <SearchInput label="Blight:" name="blight" values={searchValues} updateValue={updateValue}/>
          <Row className="my-3 align-items-center">
            <Button type="submit" disabled={searched}>Search</Button>
          </Row>
        </Tab>
        <Tab eventKey="filter" title="Armor Filter">
          <ArmorFilter armorSets={armorSets} setArmorSets={setArmorSets}/>
        </Tab>
      </Tabs>
    </Form>
  )
}
