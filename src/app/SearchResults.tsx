import {NamedArmorPiece, SearchResult} from "../search/types";
import {Card, Col, Row} from "react-bootstrap";

export default function SearchResults(props: {
  searchResults: SearchResult[]
}) {
  return (
    <Row>
      {props.searchResults.map((result, i) =>
        <Col key={i} className="p-2" xs="auto">
          <Card className="px-0">
            <Card.Header
              className="text-center text-body-emphasis p-1">Score: {result.score.toFixed(2)}</Card.Header>
            <Card.Body className="py-1 px-2">
              <ResultSlot label="Chest: " piece={result.chest}/>
              <ResultSlot label="Gloves: " piece={result.glove}/>
              <ResultSlot label="Helmet: " piece={result.helm}/>
              <ResultSlot label="Boots: " piece={result.boot}/>
            </Card.Body>
            <Card.Footer className="py-1 px-0">
              <Row xs="auto" className="justify-content-center mb-1">
                <Card className="p-0 me-1">
                  <Card.Header className="text-center py-0 px-1">Armor</Card.Header>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm fw-bold fs-3">{result.armor}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-0 ms-1">
                  <Card.Header className="text-center py-0 px-1">Weight</Card.Header>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm fw-bold fs-3">{result.weight}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>

              <Row xs="auto" className="justify-content-center mx-1">
                <Card className="border-0 bg-transparent p-0">
                  <Card.Img variant="top" src="img/bleed.png"/>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm">{result.bleed}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0 bg-transparent p-0">
                  <Card.Img variant="top" src="img/burn.png"/>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm">{result.burn}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0 bg-transparent p-0">
                  <Card.Img variant="top" src="img/overload.png"/>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm">{result.overload}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0 bg-transparent p-0">
                  <Card.Img variant="top" src="img/blight.png"/>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm">{result.blight}</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="border-0 bg-transparent p-0">
                  <Card.Img variant="top" src="img/corrode.png"/>
                  <Card.Body className="p-0">
                    <Card.Text className="text-center py-0 px-1 lh-sm">{result.corrode}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      )}
    </Row>
  );
}

function ResultSlot(props: {
  label: string,
  piece: NamedArmorPiece
}) {
  return (
    <Card.Text className="my-1"><strong>{props.label}</strong>{props.piece.name}</Card.Text>
  )
}
