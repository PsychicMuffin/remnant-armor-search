import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Header from "./Header";
import {SearchResult} from "../search/types";

export default function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <>
      <Header/>
      <Row className="m-3 me-0">
        <Col sm="auto">
          <SearchForm setSearchResults={setSearchResults}/>
        </Col>
        <Col lg="auto" xl="7" xxl="8">
          <SearchResults searchResults={searchResults}/>
        </Col>
      </Row>
    </>
  );
}
