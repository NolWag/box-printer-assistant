import React from 'react';
import axios from 'axios';
import { BrowserRouter as Link } from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/posts')
    .then(res => {
      const boxes = res.data;
      this.setState({ boxes });
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Qty</th>
                </tr>
              </thead>
            {
              this.state.boxes.map((box, i) =>
              <tr>
                <td>{i}</td>
                <td>{box.title}</td>
                <td>{box.qty}</td>
              </tr>
            )
            }
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
