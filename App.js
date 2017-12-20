import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/FormContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Suurin nettotulo VMI11', 'Suurin nettotulo VMI10','Ilmasto-ja energiapoliittinen VMI11','Ilmasto-ja energiapoliittinen VMI10', 'Mustikkasato VMI11','Mustikkasato VMI10','Puolukkasato VM10','Puolukkasato VM11', 'Lahopuu VM10','Lahopuu VM11', 'Hiilinielu VM10','Hiilinielu VM11'],
        datasets:[
          {
            label:'VMI10 & VMI11',
            data:[
              0.94,
              0.33,

              0.45,
              0.62,

              0.60,
              0.11,

              1.19,
              0.76,

              1.62,
              0.88,

              0.72,
              0.22
            ],
            backgroundColor:[
              'rgba(75, 192, 192, 0.6)',
              'rgba(65, 182, 182, 0.5)',

              'rgba(255, 159, 64, 0.6)',
              'rgba(245, 149, 54, 0.5)',

              'rgba(54, 162, 235, 0.6)',
              'rgba(44, 152, 225, 0.5)',
              
              'rgba(255, 99, 132, 0.6)',
              'rgba(245, 89, 122, 0.5)',
              
              'rgba(200, 206, 86, 0.6)',
              'rgba(190, 196, 76, 0.5)',

              'rgba(200, 200, 200, 0.6)',
              'rgba(190, 190, 190, 0.5)',
            
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Metsämittari</h1>
        </header>
        <p className="App-intro">
        </p>
        <div>
				<hr />
				<FormContainer/>
        <hr />
        </div>
        <Chart chartData={this.state.chartData} vmi="Metsämittari" legendPosition="bottom"/>
      </div>
      
    );
  }
}

export default App;
