import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import SnopesAnswer from "./components/SnopesAnswer";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Article from "./components/Article";

export default class App extends React.Component {
    state = { hasAnswered: false, isCorrect: undefined };

    loadNextQuestion = () => {};

    handleAnswerClick = (answer) => {
        console.log("App -> handleClick -> answer", answer);
        this.setState({ hasAnswered: true });

        switch (answer) {
            case "true":
                this.setState({ isCorrect: false });
                break;
            case "mixed":
                this.setState({ isCorrect: true });
                break;
            case "false":
                this.setState({ isCorrect: false });
                break;
            default:
                this.setState({ hasAnswered: false });
                break;
        }
    };

    handleNextQuestionClick = () => {};

    render() {
        return (
            <>
                <Container>
                    <Article />

                    {this.state.hasAnswered ? (
                        <>
                            <Result
                                isCorrect={this.state.isCorrect}
                                onClick={this.handleNextQuestionClick}
                            />
                            <SnopesAnswer />
                        </>
                    ) : (
                        <Buttons onClick={this.handleAnswerClick} />
                    )}
                </Container>
            </>
        );
    }
}
