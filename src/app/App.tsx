import React from 'react';
import {Col, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function App() {
  return (
    <Row className="m-3">
      <h1>Remnant Armor Search</h1>
      <Col>
        <SearchForm/>
      </Col>
      <Col>
        <SearchResults/>
      </Col>
    </Row>
  );
}
