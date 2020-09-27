import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export default (props) => {
    return (
        <Row className="mb-4">
            <Col></Col>
            <Col
                xs={9}
                style={{
                    backgroundColor: "rgb(240, 240, 240)",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <Spinner animation="border" role="status"></Spinner>
                <h4>Loading...</h4>
            </Col>
            <Col></Col>
        </Row>
    );
};
