import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import {SearchCriteriaName, SearchValue, SearchValues} from "../helpers/types";

export default function SearchInput(props: {
  label: string,
  name: SearchCriteriaName,
  values: SearchValues,
  updateValue: (name: SearchCriteriaName, updates: Partial<SearchValue>) => void
}) {
  return (
    <Form.Group as={Row} xs="auto" className="mb-2">
      <Form.Label column xs="3">{props.label}</Form.Label>
      <SearchInputColumn name={props.name} subName="weight" values={props.values} updateValue={props.updateValue}/>
      <SearchInputColumn name={props.name} subName="min" values={props.values} updateValue={props.updateValue}/>
      <SearchInputColumn name={props.name} subName="max" values={props.values} updateValue={props.updateValue}/>
    </Form.Group>
  );
}

function SearchInputColumn(props: {
  name: SearchCriteriaName,
  subName: keyof SearchValue,
  values: SearchValues,
  updateValue: (name: SearchCriteriaName, updates: Partial<SearchValue>) => void
}) {
  return (
    <Col xs="3" className="px-1">
      <Form.Control
        className="text-center"
        type="number"
        min="-1000"
        max="1000"
        placeholder={props.subName}
        name={props.name}
        value={props.values[props.name][props.subName] ?? ''}
        onChange={(e) =>
          props.updateValue(props.name, {
            [props.subName]: e.target.value ? Number(e.target.value) : null
          })}/>
    </Col>
  );
}
