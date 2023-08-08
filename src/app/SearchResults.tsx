import {SearchResult} from "../search/types";
import {Card, Col, Row} from "react-bootstrap";

export default function SearchResults(props: {
  searchResults: SearchResult[]
}) {
  return (
    <Row>
      {props.searchResults.map((result, i) =>
        <Col key={i} className="my-2" xs="auto">
          <Card className="px-0">
            <Card.Header className="fw-bold text-center">Score: {result.score.toFixed(2)}</Card.Header>
            <Card.Body>
              <Card.Text className="my-1">Chest: {result.chest.name}</Card.Text>
              <Card.Text className="my-1">Gloves: {result.glove.name}</Card.Text>
              <Card.Text className="my-1">Helmet: {result.helm.name}</Card.Text>
              <Card.Text className="my-1">Boots: {result.boot.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
}
