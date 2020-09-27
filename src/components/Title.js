import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
    return (
        <Row className="mb-5 mt-5">
            <Col style={{ textAlign: "center" }}>
                <h1 class="display-4">
                    Can you discern fake news from real news?
                </h1>
            </Col>
        </Row>
    );
};
