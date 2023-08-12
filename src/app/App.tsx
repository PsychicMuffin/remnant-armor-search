import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {SearchResult} from "../helpers/types";
import Header from "./Header";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <>
      <Header/>
      <Row className="py-1 ps-3 pe-0 me-0">
        <Col xs="auto">
          <SearchForm setSearchResults={setSearchResults}/>
        </Col>
        <Col lg="auto" xl>
          <SearchResults searchResults={searchResults}/>
        </Col>
      </Row>
    </>
  );
}
