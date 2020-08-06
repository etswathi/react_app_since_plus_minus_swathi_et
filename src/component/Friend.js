import React from "react";
import axios from "axios";

import FriendDetail from "./Frienddetail";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      deleteSuccess: false,
      myid: 0,
      since: 0,
    };
  }

  intializeState = () => {
    setTimeout(() => {
      this.setState({ deleteSuccess: false });
    }, 2000);
  };

  componentWillMount() {
    this.getAllFriends();
  }

  componentDidMount() {
    console.log(this.props);
  }

  getAllFriends = () => {
    axios.get("http://localhost:3000/allfriends").then(
      (response) => {
        console.log(response);
        console.log(response.data);
        this.setState({ friends: response.data });
        console.log(this.state.friends);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  deleteFriendWithId = (id) => {
    console.log("delete friend for received id: " + id);
    axios.delete("http://localhost:3000/allfriends" + "/" + id).then(
      (response) => {
        console.log(response);
        //show deleteSuccess message
        this.setState({ deleteSuccess: true });
        this.getAllFriends();
        //remove deleteSuccess message after 2000 millisecond
        this.intializeState();
      },
      (error) => {
        console.error(error);
      }
    );
  };

  renderAllFriends = () => {
    return this.state.friends.map((friend) => {
      return (
        <FriendDetail
          key={friend.id}
          id={friend.id}
          name={friend.name}
          since={friend.since}
          deleteId={this.deleteFriendWithId}
          editId={this.editFriendWithId}
          incrementId={this.incrementsinceFriend}
          decrementId={this.decrementsinceFriend}
        ></FriendDetail>
      );
    });
  };

  openAddFriend = () => {
    this.props.history.push("/addfriend");
    //this.props.history.push('/editfriend')
  };

  editFriendWithId = (id) => {
    this.setState({ myid: id });
    console.log("Edit friend with id: " + id);
    this.props.history.push({
      pathname: "/editfriend",
      state: { myid: id },
    });
  };

  incrementsinceFriend = (id) => {
    axios.get("http://localhost:3000/allfriends/" + id).then((response) => {
      console.log(response.data);
      this.setState({
        since: response.data.since + 1,
      });
      console.log(this.state.since);
      let friendRequestBody = {
        since: this.state.since,
      };
      console.log(this.state.since);

      axios
        .patch("http://localhost:3000/allfriends/" + id, friendRequestBody)
        .then(
          (response) => {
            console.log(response);
            this.getAllFriends();
          },
          (error) => {
            console.error(error);
          }
        );
    });
  };

  decrementsinceFriend = (id) => {
    axios.get("http://localhost:3000/allfriends/" + id).then((response) => {
      console.log(response.data);
      this.setState({
        since: response.data.since - 1,
      });
      console.log(this.state.since);
      let friendRequestBody = {
        since: this.state.since,
      };
      console.log(this.state.since);

      axios
        .patch("http://localhost:3000/allfriends/" + id, friendRequestBody)
        .then(
          (response) => {
            console.log(response);
            this.getAllFriends();
          },
          (error) => {
            console.error(error);
          }
        );
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.openAddFriend}>Add Friend</button>
        <br></br>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Since</th>
              <th colSpan="4">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderAllFriends()}</tbody>
        </table>
        {this.state.deleteSuccess && (
          <div>
            <h3>Friend deleted success!!!!</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Friend;
