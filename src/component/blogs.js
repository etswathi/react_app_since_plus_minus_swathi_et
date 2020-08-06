import React from "react";
import axios from "axios";
import Blogss from "./Blogss";
class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allblogs: [],
    };
  }

  componentWillMount() {
    this.getblogs();
  }

  //   getblogs() {
  //     axios.get("https://jsonplaceholder.typicode.com/posts/").then(
  //       function (response) {
  //         console.log(response.data);
  //       },

  //       function (error) {
  //         console.log(error);
  //       }
  //     );
  //   }

  getblogs() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(
      (response) => {
        console.log(response.data);
        this.setState({
          allblogs: response.data,
        });
        console.log(this.state.allblogs);
      },

      (error) => {
        console.log(error);
      }
    );
  }

  deletewithid = (id) => {
    console.log(id);

    var tempblogs = this.state.allblogs.filter((blog) => {
      return blog.id !== id;
    });
    console.log(tempblogs);
    this.setState({
      allblogs: tempblogs,
    });
  };

  renderBlogs = () => {
    console.log("in renderblog");
    return this.state.allblogs.map((b) => {
      return <Blogss body={b.body} id={b.id} deleteId={this.deletewithid}></Blogss>;
    });
  };

  render() {
    return (
      <div>
        <h1>Blogs</h1>
        {this.renderBlogs()}
      </div>
    );
  }
}

export default Blogs;
