import React from 'react';
import {Col, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header/>
      <Row className="m-3">
        <Col md="auto">
          <SearchForm/>
        </Col>
        <Col md="auto">
          <SearchResults/>
        </Col>
      </Row>
    </>
  );
}
