import React from 'react';


const Select = (props) => (
	<div className="form-group">
		<select
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="Form select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt.id}
						value={opt.id}>{opt.name}>{opt.description}>{opt.order}>
					</option>
				);
			})}
		</select>
	</div>
);

export default Select;