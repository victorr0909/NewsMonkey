import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
      page : 1,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8aa6021f50ec495c9a289ca271d5631c&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults})

  }

  handleNextClick= async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else
    {let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8aa6021f50ec495c9a289ca271d5631c&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    page: this.setState({
      page : this.state.page+1,
      articles : parsedData.articles
    })}
  }

  handlePrevClick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8aa6021f50ec495c9a289ca271d5631c&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    page: this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines For you!</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?element.title:""}
                description={element.description?element.description:""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20) } class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
