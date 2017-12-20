import React, {Component} from 'react';
import Select from '../components/Select';
import axios from 'axios';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: [],
			scenarioCollections: [],
			timePeriods: [],
		};
	
		this.handleIdSelect = this.handleIdSelect.bind(this);
		this.handleScenarioCollectionSelect = this.handleScenarioCollectionSelect.bind(this);
		this.handleTimePeriodsSelect = this.handleTimePeriodsSelect.bind(this);
	}
	componentDidMount() {
		axios.get('https://melatupa.azurewebsites.net/regionLevels')
		  .then((response)=>{
			  console.log(response);
			  this.setState({
				id: response.data,
				scenarioCollections: response.data,
				timePeriods: response.data,
			  })
		   })
	}
	handleIdSelect(e) {
		this.setState({ idSelection: e.target.value }, () => console.log('id', this.state.idSelection));
	}
	handleScenarioCollectionSelect(e) {
		this.setState({ scenarioCollectionSelection: e.target.value }, () => console.log('scenarioCollections', this.state.scenarioCollectionSelection));
	}
	handleTimePeriodsSelect(e) {
		this.setState({ timePeriodsSelection: e.target.value }, () => console.log('timePeriods', this.state.timePeriodsSelection));
	}
	render() {
		return (
				<div>
				<form>
				<h5>Aluetaso</h5>
				<Select
					name={'id'}
					placeholder={'Maakunta'}
					controlFunc={this.handleIdSelect}
					options={this.state.id}
					selectedOption={this.state.IdSelection} />				
				<h5>Aikaväli</h5>	
				<Select
					name={'timePeriods'}
					placeholder={'Aikaväli'}
					controlFunc={this.handleTimePeriodsSelect}
					options={this.state.timePeriods}
					selectedOption={this.state.TimePeriodsSelection} />
				<h5>Skenaario kokoelma</h5>	
				<Select
					name={'scenarioCollection'}
					placeholder={'valitse skenaario'}
					controlFunc={this.handleScenarioCollectionSelect}
					options={this.state.scenarioCollections}
					selectedOption={this.state.ScenarioCollectionSelection} />			
				</form>
				</div>
				
		);
	}
}

export default FormContainer;
