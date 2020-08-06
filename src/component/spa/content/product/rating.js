import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newrating: parseInt(this.props.rating),
      reviewcount: 9,
    };
  }

  changeReview = () => {
    this.setState({
      reviewcount: 8,
    });
  };
  changeRating=()=>{
      this.setState({
          newrating:this.state.newrating+1
      })
  }

  render() {
    return (
      <span>
        Rating:{this.props.rating}
        <br></br>
        New rating:{this.state.newrating}
        <button onClick={this.changeRating}>Change Rating</button>
        <br></br>
        Reviewcount:{this.state.reviewcount}
        <button onClick={this.changeReview}>Changereviewcount</button>
      </span>
    );
  }
}

export default Rating;
