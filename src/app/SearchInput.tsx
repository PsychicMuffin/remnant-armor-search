import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import {SearchCriteriaName, SearchValue, SearchValues, StateObject} from "../helpers/types";

export default function SearchInput(props: {
  label: string,
  name: SearchCriteriaName,
  state: StateObject<SearchValues>
}) {
  const {value: searchValues, setter: setSearchValues} = props.state;
  const searchValue = searchValues[props.name];

  function updateValue(subName: keyof SearchValue, value: string) {
    if (Number.isFinite(Number(value))) {
      setSearchValues(prevState => (
        {
          ...prevState,
          [props.name]: {
            ...prevState[props.name],
            [subName]: value ? value : null,
          },
        }
      ));
    }
  }

  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label column>{props.label}</Form.Label>
      <SearchInputColumn value={searchValue} subName="weight" updateValue={updateValue}/>
      <SearchInputColumn value={searchValue} subName="min" updateValue={updateValue}/>
      <SearchInputColumn value={searchValue} subName="max" updateValue={updateValue}/>
    </Form.Group>
  );
}

function SearchInputColumn(props: {
  value: SearchValue,
  subName: keyof SearchValue,
  updateValue: (subName: keyof SearchValue, value: string) => void
}) {
  return (
    <Col className="px-1">
      <Form.Control
        className="text-center"
        type="text"
        inputMode="decimal"
        htmlSize={4}
        placeholder={props.subName}
        value={props.value[props.subName] ?? ""}
        onChange={(e) => props.updateValue(props.subName, e.target.value)}/>
    </Col>
  );
}
