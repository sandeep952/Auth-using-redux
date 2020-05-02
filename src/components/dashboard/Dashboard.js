import React, { Component } from "react";

import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi
            ad tenetur, eum doloribus reiciendis facere expedita earum,
            explicabo modi dolorum libero, nostrum fuga exercitationem
            architecto blanditiis dolores. Harum, molestiae?
          </div>

          <div className="col-md-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatem reprehenderit est? Dolor distinctio aperiam quis
            doloribus inventore, sit reiciendis? Debitis harum laudantium animi
            quia cupiditate id quis excepturi enim.
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
