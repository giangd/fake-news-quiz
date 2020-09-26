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
        numArticles: 2,
        hasReachedEnd: false,
        shouldShowScore: false,
    };

    componentDidMount = async () => {
        await this.loadNewSetOfArticles(this.state.numArticles);
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
        const isNextArticleLastOne =
            this.state.articleIndex + 2 < this.state.numArticles;
        if (isNextArticleLastOne) {
            console.log("   a");
            this.setState(
                (prevState) => ({
                    articleIndex: prevState.articleIndex + 1,
                }),
                () => {
                    this.updateArticle();
                }
            );
        } else {
            console.log("   b");

            this.setState({ hasReachedEnd: true });
        }
    };
    updateArticle = () => {
        this.setState((prevState) => ({
            article: prevState.articles[prevState.articleIndex],
        }));
    };

    handleAnswerClick = (answer) => {
        this.setState({ hasAnswered: true });

        switch (answer) {
            case "true":
                if (
                    this.state.trueConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    this.setState({ isCorrect: true });
                } else {
                    this.setState({ isCorrect: false });
                }
                break;
            case "mixed":
                if (
                    this.state.mixedConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    this.setState({ isCorrect: true });
                } else {
                    this.setState({ isCorrect: false });
                }
                break;
            case "false":
                if (
                    this.state.falseConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    this.setState({ isCorrect: true });
                } else {
                    this.setState({ isCorrect: false });
                }
                break;
            default:
                console.error(`got answer: ${answer}`);
                break;
        }
    };

    handleNextQuestionClick = () => {
        if (!this.state.hasReachedEnd) {
            console.log("loading next article");
            this.loadNextArticle();
            this.setState({ hasAnswered: false });
        } else {
            this.setState({ shouldShowScore: true });
            console.log("showing results");
        }
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
                                hasReachedEnd={this.state.hasReachedEnd}
                                onClick={this.handleNextQuestionClick}
                            />
                            {/* {this.state.shouldShowScore ? (
                                <h1>Your score was 9/10</h1>
                            ) : (
                                <Result
                                    isCorrect={this.state.isCorrect}
                                    hasReachedEnd={this.state.hasReachedEnd}
                                    onClick={this.handleNextQuestionClick}
                                />
                            )} */}
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
