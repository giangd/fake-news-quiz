import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
    return (
        <Row>
            <Col></Col>
            <Col style={{ textAlign: "center" }} xs={9}>
                <h1>
                    Your score was: {props.score}/{props.numArticles}
                </h1>
                <Button onClick={props.handleOnClick}>Restart</Button>
            </Col>
            <Col></Col>
        </Row>
    );
};
