import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107236197-1683275209822-gettyimages-1237080749-BC_2021IMXHK_6569.jpeg?v=1683278957&w=1920&h=1080"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>{source}</span>
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
