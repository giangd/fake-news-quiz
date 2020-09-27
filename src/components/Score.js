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
                    backgroundColor: "rgb(235, 235, 235)",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <h1>
                    You got {props.score}/{props.numArticles} correct.
                </h1>
                <Button onClick={props.handleOnClick}>Restart</Button>
            </Col>
            <Col></Col>
        </Row>
    );
};
