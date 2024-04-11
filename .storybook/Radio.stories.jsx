import React from 'react';

import { Radio } from '../src/index.jsx';

export default {
	component: Radio,
	title: 'Radio',
};

const Template = (args) => <Radio {...args} />;

export const RadioList = Template.bind({});
RadioList.args = {
	name: "RadioFld1",
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
	selectedValue: 'value2'
}