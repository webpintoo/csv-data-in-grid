import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
//import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as d3 from 'd3';

import data from './data_set/data.csv';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
            dataSet: []
        }

    }
	 componentDidMount() {

      /*axios.get('http://starlord.hackerearth.com/gamesext')
	  .then(response => {
		  console.log(response.data);
			this.setState({
				data:
				response.data 
		
			})
	  
	  })*/
	  //console.log(this.state.data);
	  d3.csv(data).then(data => {
		  console.log(data);
			this.setState({
				dataSet:
				data 
		
			})
		}).catch(function(err) {
			throw err;
		})
    }
	
  render() {
	const data = {
		columns: [
		  {
			label: 'Aggregate rating',
			field: 'Aggregate rating',
			sort: 'asc',
			width: 150
		  },
		  {
			label: 'Average Cost for two',
			field: 'Average Cost for two',
			sort: 'asc',
			width: 270
		  },
		  {
			label: 'Cuisines',
			field: 'Cuisines',
			sort: 'asc',
			width: 200
		  },
		  {
			label: 'Currency',
			field: 'Currency',
			sort: 'asc',
			width: 100
		  },
		  {
			label: 'Has Online delivery',
			field: 'Has Online delivery',
			sort: 'asc',
			width: 150
		  },
		  {
			label: 'Has Table booking',
			field: 'Has Table booking',
			sort: 'asc',
			width: 100
		  },
		  {
			label: 'Rating color',
			field: 'Rating color',
			sort: 'asc',
			width: 100
		  },
		  {
			label: 'Rating text',
			field: 'Rating text',
			sort: 'asc',
			width: 100
		  },
		  {
			label: 'Restaurant ID',
			field: 'Restaurant ID',
			sort: 'asc',
			width: 100
		  },
		  {
			label: 'Restaurant Name',
			field: 'Restaurant Name',
			sort: 'asc',
			width: 100
		  },
		  {
			label: 'Votes',
			field: 'Votes',
			sort: 'asc',
			width: 100
		  }
		],
		rows: 
		  this.state.dataSet
	}
	const wrapper = {
		padding:'20px',
		margin:'20px'
	}
	
    return (
		<div style={wrapper}>
      <MDBDataTable
		  striped
		  bordered
		  small
		  data={data}
		/>
		</div>
    );
  }
}

export default App;
