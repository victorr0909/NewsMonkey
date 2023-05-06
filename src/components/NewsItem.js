import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width : "18rem"}}>
            <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107236197-1683275209822-gettyimages-1237080749-BC_2021IMXHK_6569.jpeg?v=1683278957&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
