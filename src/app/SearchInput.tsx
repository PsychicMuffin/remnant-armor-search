import {Col, Form, Row} from "react-bootstrap";
import React, {ChangeEvent} from "react";

export default function SearchInput(props: {
  label: string
  name: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <Form.Group as={Row} className="mb-2">
      <Form.Label column md="auto">{props.label}</Form.Label>
      <Col md="auto">
        <Form.Control type="number" min="0" max="1000" name={props.name} value={props.value} onChange={props.onChange}/>
      </Col>
    </Form.Group>
  );
}
