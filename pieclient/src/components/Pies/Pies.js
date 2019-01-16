import React, {Component} from 'react';

import Pie from './Pie/Pie';
import './Pies.css';

class Pies extends Component {
  state = {
    pies: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pies', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(json => this.setState({pies: json}))
  }

  render(){
    let pieRows = this.state.pies.map(pie => {
      return(
        <Pie pie={pie}/>
      )
    })
    return(
      <table>
        <tbody>
        <th>
          <td>Pie Name</td>
        </th>
        <th>
          <td>Filling</td>
        </th>
        <th>
          <td>Crust</td>
        </th>
        <th>
          <td>Time to Bake</td>
        </th>
        <th>
          <td>Servings</td>
        </th>
        <th>
          <td>Rating</td>
        </th>
          {pieRows}
        </tbody>
      </table>
    )
  }
}

export default Pies;