import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export default () => {
    return (
        <Row className="mb-4">
            <Col></Col>
            <Col
                xs={6}
                style={{
                    backgroundColor: "rgb(235, 235, 235)",
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
