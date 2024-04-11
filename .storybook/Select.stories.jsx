import React from 'react';

import { Select } from '../src/index.jsx';

export default {
	component: Select,
	title: 'Select',
};

const Template = (args) => <Select {...args} />;

export const SelectList = Template.bind({});
SelectList.args = {
	name: "selectFld1",
	options: [
		{ label: 'Label1', value: 'value1' },
		{ label: 'Label2', value: 'value2' },
		{ label: 'Label3', value: 'value3' },
		{ label: 'Label4', value: 'value4' }
	]
};


export const WithSelcted = Template.bind({});
WithSelcted.args = {
	name: "preSelcted",
	options: [
		{ label: 'Label1', value: 'value1' },
		{ label: 'Label2', value: 'value2' },
		{ label: 'Label3', value: 'value3' },
		{ label: 'Label4', value: 'value4' }
	],
	value: 'value3'
}