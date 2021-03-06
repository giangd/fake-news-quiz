import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
    const handleOnClick = (e) => {
        const answer = e.target.getAttribute("data-answer");
        props.onClick(answer);
    };

    return (
        <Row>
            <Col></Col>
            <Col
                xs={6}
                style={{
                    backgroundColor: "rgb(235, 235, 235)",
                    padding: "20px",
                }}
            >
                <div className="mb-3">
                    <h4>
                        Claim: <small>{props.article.claim}</small>
                    </h4>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button
                        className="mr-4"
                        onClick={handleOnClick}
                        data-answer="true"
                        variant="success"
                    >
                        True
                    </Button>
                    <Button
                        className="mr-4"
                        onClick={handleOnClick}
                        data-answer="mixed"
                        variant="warning"
                    >
                        Mixed
                    </Button>
                    <Button
                        onClick={handleOnClick}
                        data-answer="false"
                        variant="danger"
                    >
                        False
                    </Button>
                </div>
            </Col>
            <Col></Col>
        </Row>
    );
};
