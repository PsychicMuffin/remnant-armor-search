import {Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import React, {FormEvent, useEffect, useState} from "react";
import SearchInput, {SearchValue} from "./SearchInput";
import ArmorFilter from "./ArmorFilter";

export default function SearchForm() {
  const [searched, setSearched] = useState(false);
  const [maxWeight, setMaxWeight] = useState(50);
  const [searchValues, setSearchValues] = useState({
    armor: {weight: 0, min: 0, max: 0},
    bleed: {weight: 0, min: 0, max: 0},
    burn: {weight: 0, min: 0, max: 0},
    overload: {weight: 0, min: 0, max: 0},
    corrode: {weight: 0, min: 0, max: 0},
    blight: {weight: 0, min: 0, max: 0}
  });

  useEffect(() => {
    setSearched(false);
  }, [searchValues, maxWeight]);

  function updateValue(name: keyof SearchValues, updates: Partial<SearchValue>) {
    setSearchValues(prevState => {
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          ...updates
        }
      }
    });
  }

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearched(true);
    //TODO: actually search
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
            value={maxWeight}
            onChange={(e) => {
              setMaxWeight(Number(e.target.value));
            }}/>
        </Col>
      </Form.Group>
      <Tabs defaultActiveKey="search" className="my-3" justify>
        <Tab eventKey="search" title="Search Weights">
          <SearchInput label="Armor:" name="armor" value={searchValues.armor} updateValue={updateValue}/>
          <SearchInput label="Bleed:" name="bleed" value={searchValues.bleed} updateValue={updateValue}/>
          <SearchInput label="Burn:" name="burn" value={searchValues.burn} updateValue={updateValue}/>
          <SearchInput label="Overload:" name="overload" value={searchValues.overload} updateValue={updateValue}/>
          <SearchInput label="Corrode:" name="corrode" value={searchValues.corrode} updateValue={updateValue}/>
          <SearchInput label="Blight:" name="blight" value={searchValues.blight} updateValue={updateValue}/>
          <Row className="my-3 align-items-center">
            <Button type="submit" disabled={searched}>Search</Button>
          </Row>
        </Tab>
        <Tab eventKey="filter" title="Armor Filter">
          <ArmorFilter/>
        </Tab>
      </Tabs>
    </Form>
  )
}

export type SearchValues = {
  armor: SearchValue,
  bleed: SearchValue,
  burn: SearchValue,
  overload: SearchValue,
  corrode: SearchValue,
  blight: SearchValue
}
