import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

export default (props) => {
    /*
        imgLink: "https://www.snopes.com/tachyon/2020/09/september-11.jpg"
        link: "https://www.snopes.com/fact-check/fdny-health-fund/"
        rating: "True"
        ratingDesc: {whatsTrue: "", whatsFalse: "", whatsUndetermined: ""}
        ratingImg: "https://www.snopes.com/tachyon/2018/03/rating-true.png"
        subtitle: "The COVID-19 pandemic has made it harder for a cash-strapped New York City to front the costs of the 9/11 program."
        title: "Did the Trump Administration Withhold Money from FDNY 9/11 Health Fund?"
    */
    return (
        <Row className="mt-4">
            <Col>
                <Row>
                    <Col></Col>

                    <Col
                        xs={3}
                        style={{
                            textAlign: "center",
                            backgroundColor: "rgb(240, 240, 240)",
                            padding: "20px",
                        }}
                    >
                        <img
                            src={props.article.ratingImg}
                            className="img-fluid"
                            height="auto"
                            width="auto"
                        />
                    </Col>
                    <Col
                        xs={5}
                        style={{
                            backgroundColor: "rgb(240, 240, 240)",
                            padding: "20px",

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div>
                            <h1 style={{ margin: "0" }}>
                                Snope's Rating:{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={props.article.link}
                                >
                                    {props.article.rating}
                                </a>
                            </h1>

                            {props.article.ratingDesc.whatsTrue ===
                            "" ? null : (
                                <>
                                    <h4>What's True:</h4>
                                    <p>{props.article.ratingDesc.whatsTrue}</p>
                                </>
                            )}

                            {props.article.ratingDesc.whatsFalse ===
                            "" ? null : (
                                <>
                                    <h4>What's False:</h4>
                                    <p>{props.article.ratingDesc.whatsFalse}</p>
                                </>
                            )}

                            {props.article.ratingDesc.whatsUndetermined ===
                            "" ? null : (
                                <>
                                    <h4>What's Undetermined:</h4>
                                    <p>
                                        {
                                            props.article.ratingDesc
                                                .whatsUndetermined
                                        }
                                    </p>
                                </>
                            )}
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>
        </Row>
    );
};
