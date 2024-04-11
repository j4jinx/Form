import React from 'react';

import { Checkbox } from '../src/index.jsx';

export default {
	component: Checkbox,
	title: 'Checkbox',
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxList = Template.bind({});
CheckboxList.args = {
	name: "checkboxFld1",
	options: [
		{ label: 'Label1', value: 'value1' },
		{ label: 'Label2', value: 'value2' },
		{ label: 'Label3', value: 'value3' },
		{ label: 'Label4', value: 'value4' }
	]
};


export const WithChecked = Template.bind({});
WithChecked.args = {
	name: "preChecked",
	options: [
		{ label: 'Label1', value: 'value1' },
		{ label: 'Label2', value: 'value2' },
		{ label: 'Label3', value: 'value3' },
		{ label: 'Label4', value: 'value4' }
	],
	selectedValues: ['value2', 'value4']
}