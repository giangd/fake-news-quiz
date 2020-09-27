import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import SnopesAnswer from "./components/SnopesRating";
import Buttons from "./components/Claim";
import Result from "./components/Result";
import Article from "./components/Article";
import Loading from "./components/Loading";
import Score from "./components/Score";
import Title from "./components/Title";

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
                isLoaded: false,
            },
            callback
        );
    };

    componentDidMount = async () => {
        await this.setStateToDefault(this.loadNewSetOfArticles);
    };

    handleRestart = async () => {
        this.setStateToDefault(this.loadNewSetOfArticles);
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
            isLoaded: true,
        }));
    };

    handleAnswerClick = (answer) => {
        this.setState({ hasAnswered: true });
        let answeredCorrectly = false;

        switch (answer) {
            case "true":
                answeredCorrectly = this.state.trueConditions.includes(
                    this.state.article.rating
                );
                break;
            case "mixed":
                answeredCorrectly = this.state.mixedConditions.includes(
                    this.state.article.rating
                );
                break;
            case "false":
                answeredCorrectly = this.state.falseConditions.includes(
                    this.state.article.rating
                );
                break;
            default:
                console.error(`got answer: ${answer}`);
                break;
        }

        if (answeredCorrectly) {
            this.setState((prevState) => ({
                isCorrect: true,
                score: prevState.score + 1,
            }));
        } else {
            this.setState({ isCorrect: false });
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
            if (this.state.isLoaded) {
                if (this.state.article && !this.state.shouldShowScore) {
                    return (
                        <Article
                            article={this.state.article}
                            hasAnswered={this.state.hasAnswered}
                        />
                    );
                }
            } else {
                return <Loading></Loading>;
            }
        };

        const displayButtons = () => {
            if (this.state.isLoaded) {
                if (!this.state.hasAnswered && !this.state.shouldShowScore) {
                    return (
                        <Buttons
                            article={this.state.article}
                            onClick={this.handleAnswerClick}
                        />
                    );
                }
            } else {
                return <Loading></Loading>;
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
                    <Title></Title>
                    {displayArticle()}
                    {displayButtons()}
                    {displayAnswer()}
                    {displayScore()}
                </Container>
            </>
        );
    }
}
