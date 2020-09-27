import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import SnopesAnswer from "./components/SnopesAnswer";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Article from "./components/Article";
import Loading from "./components/Loading";
import Score from "./components/Score";

import config from "./config/config.json";

export default class App extends React.Component {
    state = {};
    setStateToDefault = (callback) => {
        this.setState(
            {
                hasAnswered: false,
                isCorrect: undefined,
                articles: undefined,
                articleIndex: 0,
                article: undefined,
                trueConditions: config.trueConditions,
                mixedConditions: config.mixedConditions,
                falseConditions: config.falseConditions,
                numArticles: 10,
                isArticleLastOne: false,
                shouldShowScore: false,
                score: 0,
            },
            callback
        );
    };

    componentDidMount = async () => {
        this.setStateToDefault(this.loadNewSetOfArticles);
        console.log("App -> componentDidMount -> this.state", this.state);
    };

    handleRestart = async () => {
        console.log("restarted");
        this.setStateToDefault(this.loadNewSetOfArticles);
        console.log("App -> handleRestart -> this.state", this.state);
    };

    loadNewSetOfArticles = async () => {
        const num = this.state.numArticles;
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
            this.state.articleIndex + 2 >= this.state.numArticles;

        this.setState(
            (prevState) => ({
                articleIndex: prevState.articleIndex + 1,
                isArticleLastOne: isNextArticleLastOne,
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
        this.setState({ hasAnswered: true });

        switch (answer) {
            case "true":
                if (
                    this.state.trueConditions.includes(
                        this.state.article.rating
                    )
                ) {
                    this.setState((prevState) => ({
                        isCorrect: true,
                        score: prevState.score + 1,
                    }));
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
                    this.setState((prevState) => ({
                        isCorrect: true,
                        score: prevState.score + 1,
                    }));
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
                    this.setState((prevState) => ({
                        isCorrect: true,
                        score: prevState.score + 1,
                    }));
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
        if (!this.state.isArticleLastOne) {
            this.loadNextArticle();
            this.setState({ hasAnswered: false });
        } else {
            this.setState({ shouldShowScore: true });
        }
    };

    render() {
        const displayArticle = () => {
            if (this.state.article && !this.state.shouldShowScore) {
                return (
                    <Article
                        article={this.state.article}
                        hasAnswered={this.state.hasAnswered}
                    />
                );
            } else if (!this.state.article) {
                return <Loading></Loading>;
            }
        };

        const displayButtons = () => {
            if (!this.state.hasAnswered && !this.state.shouldShowScore) {
                return <Buttons onClick={this.handleAnswerClick} />;
            }
        };

        const displayAnswer = () => {
            if (this.state.hasAnswered && !this.state.shouldShowScore) {
                return (
                    <>
                        <Result
                            isCorrect={this.state.isCorrect}
                            isArticleLastOne={this.state.isArticleLastOne}
                            onClick={this.handleNextQuestionClick}
                        />
                        <SnopesAnswer article={this.state.article} />
                    </>
                );
            }
        };

        const displayScore = () => {
            if (this.state.shouldShowScore) {
                return (
                    <Score
                        score={this.state.score}
                        numArticles={this.state.numArticles}
                        handleOnClick={this.handleRestart}
                    ></Score>
                );
            }
        };

        return (
            <>
                <Container>
                    {displayScore()}
                    {displayArticle()}
                    {displayButtons()}
                    {displayAnswer()}
                </Container>
            </>
        );
    }
}
