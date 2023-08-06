import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import {SearchValues} from "./SearchForm";

export default function SearchInput(props: {
  label: string
  name: keyof SearchValues
  value: SearchValue
  updateValue: (name: keyof SearchValues, updates: Partial<SearchValue>) => void
}) {
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label column sm="3">{props.label}</Form.Label>
      <Col sm="3" className="px-1">
        <Form.Control
          className="text-center"
          type="number"
          min="0"
          max="1000"
          placeholder="weight"
          name={props.name}
          value={props.value.weight || ''}
          onChange={(e) =>
            props.updateValue(props.name,{
              weight: Number(e.target.value)
            })}/>
      </Col>
      <Col sm="3" className="px-1">
        <Form.Control
          className="text-center"
          type="number"
          min="0"
          max="1000"
          placeholder="min"
          name={props.name}
          value={props.value.min || ''}
          onChange={(e) =>
            props.updateValue(props.name,{
              min: Number(e.target.value)
            })}/>
      </Col>
      <Col sm="3" className="px-1">
        <Form.Control
          className="text-center"
          type="number"
          min="0"
          max="1000"
          placeholder="max"
          name={props.name}
          value={props.value.max || ''}
          onChange={(e) =>
            props.updateValue(props.name,{
              max: Number(e.target.value)
            })}/>
      </Col>
    </Form.Group>
  );
}

export type SearchValue = {
  min: number,
  max: number,
  weight: number,
}
