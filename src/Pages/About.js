import React, { Component } from "react";
import { Link, Outlet} from "react-router-dom";


class About extends Component {
  constructor() {
    super();
    console.log("About -> constructor");
  }
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: 55 });
  };

  componentDidMount() {
    console.log("About -> componentDidMount");
  }

  componentDidUpdate(a, b, c, d) {
    console.log("About -> componentDidUpdate", a, b, c, d);
  }

  render() {
    console.log("About -> render");

    return (
      <div>
        <h1>About Page</h1>

        <div className="row">
          {/*Sidebar*/}
          <div className="col-3 border-end border-warning">
            <Link className="d-block" to="/about/team">
              About Team
            </Link>
            <Link className="d-block" to="/about/company">
              About Company
            </Link>
          </div>
          {/*Content*/}
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
