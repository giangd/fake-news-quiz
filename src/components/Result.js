import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
    const text = props.isCorrect ? "You're correct!" : "You're wrong!";
    console.log("props.isCorrect", props.isCorrect);
    return (
        <Row>
            <Col></Col>
            <Col style={{ textAlign: "center" }}>
                <h1>{text}</h1>
                <Button onClick={props.onClick} variant="primary">
                    Next Question
                </Button>
            </Col>
            <Col></Col>
        </Row>
    );
};
