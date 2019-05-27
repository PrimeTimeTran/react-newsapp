import React from 'react';

class NewsArticle extends React.Component {
  render() {
    if (!this.props.description) return <div />
    return (
      <div style={{ backgroundColor: 'red', margin: 100, height: 100, width: '70%' }}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default NewsArticle