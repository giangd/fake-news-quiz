import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
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
                {props.isCorrect ? (
                    <h1 style={{ color: "green" }}>Correct!</h1>
                ) : (
                    <h1 style={{ color: "red" }}>Wrong!</h1>
                )}
                <Button
                    className="mt-2"
                    onClick={props.onClick}
                    variant="primary"
                >
                    {props.isArticleLastOne ? "Show Score" : "Next Question"}
                </Button>
            </Col>
            <Col></Col>
        </Row>
    );
};
