import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SnopesAnswer from "./components/SnopesAnswer";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Article from "./components/Article";

export default class App extends React.Component {
    state = {
        hasAnswered: false,
        isCorrect: undefined,
        articles: undefined,
        articleIndex: 0,
        article: undefined,
        trueConditions: ["True", "Mostly True", "Correct Attribution"],
        mixedConditions: ["Mixture", "Unproven"],
        falseConditions: [
            "Mostly False",
            "False",
            "Outdated",
            "Miscaptioned",
            "Misattributed",
            "Scam",
            "Legend",
            "Labeled Satire",
            "Lost Legend",
        ],
    };

    componentDidMount = async () => {
        await this.loadNewSetOfArticles(5);
    };

    loadNewSetOfArticles = async (num) => {
        const { data: articles } = await axios.get(
            `https://quiet-beach-87061.herokuapp.com/api/randomArticles/${num}`
        );

        this.setState(
            {
                articles,
                articleIndex: 0,
            },
            () => {
                this.updateArticle();
            }
        );
    };

    loadNextArticle = () => {
        this.setState(
            (prevState) => ({
                articleIndex: prevState.articleIndex + 1,
            }),
            () => {
                this.updateArticle();
            }
        );
    };
    updateArticle = () => {
        this.setState((prevState) => ({
            article: prevState.articles[prevState.articleIndex],
        }));
    };

    handleAnswerClick = (answer) => {
        console.log("App -> handleAnswerClick -> answer", answer);
        this.setState({ hasAnswered: true });

        switch (answer) {
            case "true":
                if (
                    this.state.trueConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    console.log("answered true: correct");
                    this.setState({ isCorrect: true });
                } else {
                    console.log("answered true: false");
                    this.setState({ isCorrect: false });
                }
                break;
            case "mixed":
                if (
                    this.state.trueConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    console.log("answered true: correct");
                    this.setState({ isCorrect: true });
                } else {
                    console.log("answered true: false");
                    this.setState({ isCorrect: false });
                }
                break;
            case "false":
                if (
                    this.state.trueConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    console.log("answered true: correct");
                    this.setState({ isCorrect: true });
                } else {
                    console.log("answered true: false");
                    this.setState({ isCorrect: false });
                }
                break;
            default:
                console.error(`got answer: ${answer}`);
                break;
        }
    };

    handleNextQuestionClick = () => {
        this.loadNextArticle();
        this.setState({ hasAnswered: false });
    };

    render() {
        return (
            <>
                <Container>
                    {this.state.article && (
                        <Article
                            article={this.state.article}
                            hasAnswered={this.state.hasAnswered}
                        />
                    )}

                    {this.state.hasAnswered ? (
                        <>
                            <Result
                                isCorrect={this.state.isCorrect}
                                onClick={this.handleNextQuestionClick}
                            />
                            <SnopesAnswer article={this.state.article} />
                        </>
                    ) : (
                        <Buttons onClick={this.handleAnswerClick} />
                    )}
                </Container>
            </>
        );
    }
}
