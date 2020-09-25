import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
    return (
        <Row>
            <Col></Col>
            <Col
                xs={8}
                style={{
                    backgroundColor: "rgb(240, 240, 240)",
                    padding: "20px",
                }}
            >
                <a href="https://google.com">
                    <Image
                        style={{ float: "left" }}
                        src="https://via.placeholder.com/200"
                    />
                    <h2 className="text-left">
                        Did Trump Tweet That He ‘Sacrificed a Lot To Be Your
                        President’?
                    </h2>
                    <p className="text-left">
                        Memorial Day is for honoring and mourning the military
                        personnel who have died while serving in the U.S. armed
                        forces.
                    </p>
                </a>
            </Col>
            <Col></Col>
        </Row>
    );
};
