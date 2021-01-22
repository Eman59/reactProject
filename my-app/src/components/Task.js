import React, { Component } from "react";
import axios from 'axios';
import "./Task.css";
import NavbarMenu from "./NavbarMenu"

const EndPoint = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
class Task extends Component {
  state = {
    posts: []
  };

   async componentDidMount(){
    const {data: posts } = await axios.get(EndPoint)
    this.setState({posts})
  }

  handleAdd = async() => {
    const obj = {title: "Its My Task for Nimap", body: "Imran"}
    const {data:post} = await axios.post( EndPoint, obj)
    const posts = [post, ...this.state.posts]
    this.setState({posts})
  };

  handleUpdate = post => {
    console.log("Update", post);
  };

  handleDelete = async post => {
    const posts = this.state.posts.filter(p => p.id !== post.id)
    this.setState({posts})
    await axios.delete(`${EndPoint}/${post.id}`)
  };

  render() {
    return (
      <React.Fragment>
        <NavbarMenu/>
        <div className="container">
        <button className="btn btn-primary btn-md mt-3 mb-2" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Task;