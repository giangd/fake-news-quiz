import React from "react";
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
        <Row className="mb-4">
            <Col></Col>
            <Col
                xs={6}
                style={{
                    backgroundColor: "rgb(235, 235, 235)",
                    padding: "20px",
                }}
            >
                <Row>
                    <Col>
                        {/* <h2 class="display-4">{props.article.title}</h2> */}
                        <h2>{props.article.title}</h2>
                        <p>{props.article.subtitle}</p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        {props.hasAnswered ? (
                            <Image
                                src={props.article.imgLink}
                                className="img-fluid"
                                height="auto"
                                width="auto"
                            />
                        ) : (
                            <Image
                                style={{ filter: "blur(10px)" }}
                                src={props.article.imgLink}
                                className="img-fluid"
                                height="auto"
                                width="auto"
                            />
                        )}
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    );
};
