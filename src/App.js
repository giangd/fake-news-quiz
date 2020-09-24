import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <>
            <Container>
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
                                Did Trump Tweet That He ‘Sacrificed a Lot To Be
                                Your President’?
                            </h2>
                            <p className="text-left">
                                Memorial Day is for honoring and mourning the
                                military personnel who have died while serving
                                in the U.S. armed forces.
                            </p>
                        </a>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col style={{ textAlign: "center" }}>
                        <Button variant="success">True</Button>
                        <Button variant="warning">Mixed</Button>
                        <Button variant="danger">False</Button>
                        <h1>You're correct!</h1>
                        <Button variant="primary">Next Question</Button>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col
                        xs={10}
                        style={{
                            backgroundColor: "rgb(240, 240, 240)",
                            padding: "20px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <img
                                // style={{ float: "left" }}
                                src="https://www.snopes.com/tachyon/2018/03/rating-mixture.png"
                                height="200px"
                                width="200px"
                            />
                            <div>
                                <h1>Snope's Rating: Mixed</h1>
                                <h4>What's True:</h4>
                                <p>
                                    On at least two occasions in 2016, Trump
                                    said the process of replacing Supreme Court
                                    Justice Antonin Scalia should wait until
                                    after that year's presidential election.
                                </p>
                                <h4>What's False:</h4>
                                <p>
                                    However, the April 2016 "tweet" by Trump,
                                    shared widely in September 2020, was fake,
                                    and Trump did not make the statement
                                    attributed to him there.
                                </p>
                                <h4>What's Undetermined:</h4>
                                <p>
                                    However, the April 2016 "tweet" by Trump,
                                    shared widely in September 2020, was fake,
                                    and Trump did not make the statement
                                    attributed to him there.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
