import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
    const text = props.isCorrect ? "You're correct!" : "You're wrong!";
    return (
        <Row>
            <Col></Col>
            <Col
                xs={6}
                style={{
                    backgroundColor: "rgb(240, 240, 240)",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <h1>{text}</h1>
                <Button onClick={props.onClick} variant="primary">
                    {props.isArticleLastOne ? "Show Score" : "Next Question"}
                </Button>
            </Col>
            <Col></Col>
        </Row>
    );
};
