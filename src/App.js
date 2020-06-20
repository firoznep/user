import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card m-2 ">
          <h3 className="card-title bg-primary text-white p-2">App</h3>
          <div className="list-group m-2">
            <div className="list-group-item">
              <strong>Email: </strong>
              <span>test.r@gmail.com</span>
            </div>
            <div className="list-group-item">
              <strong>Phone: </strong>
              <span>333-333-333</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
