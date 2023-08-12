import {Card, Col, Row} from "react-bootstrap";
import {NamedArmorPiece, SearchResult} from "../helpers/types";

export default function SearchResults(props: {
  searchResults: SearchResult[]
}) {
  return (
    <Row>
      {props.searchResults.map((result, i) =>
        <Col key={i} className="p-2" xs="auto">
          <Card className="px-0">
            <Card.Header className="text-center text-body-emphasis p-1">
              Score: {result.score.toFixed(2)}
            </Card.Header>
            <Card.Body className="py-1 px-2">
              <SlotResult label="Helmet: " piece={result.helm}/>
              <SlotResult label="Chest: " piece={result.chest}/>
              <SlotResult label="Boots: " piece={result.boot}/>
              <SlotResult label="Gloves: " piece={result.glove}/>
            </Card.Body>
            <Card.Footer className="py-1 px-0">
              <Row xs="auto" className="justify-content-center mx-0 pb-1">
                <HighlightedResult label="Armor" result={result.armor}/>
                <HighlightedResult label="Weight" result={result.weight}/>
              </Row>
              <Row xs="auto" className="justify-content-center mx-1">
                <ResistResult src="/img/bleed.png" result={result.bleed}/>
                <ResistResult src="/img/burn.png" result={result.burn}/>
                <ResistResult src="/img/overload.png" result={result.overload}/>
                <ResistResult src="/img/corrode.png" result={result.corrode}/>
                <ResistResult src="/img/blight.png" result={result.blight}/>
              </Row>
            </Card.Footer>
          </Card>
        </Col>,
      )}
    </Row>
  );
}

function SlotResult(props: {
  label: string,
  piece: NamedArmorPiece
}) {
  return (
    <Card.Text className="my-1"><strong>{props.label}</strong>{props.piece.name}</Card.Text>
  );
}

function HighlightedResult(props: {
  label: string,
  result: number
}) {
  return (
    <Card className="p-0 mx-1">
      <Card.Header className="text-center py-0 px-1">{props.label}</Card.Header>
      <Card.Body className="p-0">
        <Card.Text className="text-center py-0 px-1 lh-sm fw-bold fs-3">{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function ResistResult(props: {
  src: string,
  result: number
}) {
  return (
    <Card className="border-0 bg-transparent p-0">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + props.src}/>
      <Card.Body className="p-0">
        <Card.Text className="text-center py-0 px-1 lh-sm">{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}
