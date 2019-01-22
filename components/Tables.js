import React, { Component } from 'react';

class Tables extends Component {
  render() {
    return (
      <div className="Tables">
        <table>
            <tr>
                <th>Name</th>
                <th>Unit value</th>
                <th>Quantity</th>
                <th>Total value</th>
                <th>Select</th>
            </tr>
            
        </table>
      </div>
    );
  }
}

export default Tables;
