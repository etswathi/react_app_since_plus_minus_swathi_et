import React from "react";

class Blogss extends React.Component {
  constructor(props) {
    super(props);

   
  }

  deleteBlog = () => {
    console.log("id:" + this.props.id);
  this.props.deleteId(this.props.id)
  };

  render() {
    return (
      <div>
        <h1>{this.props.id}</h1>
        <p>{this.props.body}</p>

        <button onClick={this.deleteBlog}>edit</button>
      </div>
    );
  }
}

export default Blogss;
