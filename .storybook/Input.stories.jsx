import React from 'react';

import { Input } from '../src/index.jsx';

export default {
	component: Input,
	title: 'Input',
};

const Template = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
	name: "inputFld1"
};

export const InputWithLabelText = Template.bind({});
InputWithLabelText.args = {
	name: "inputFld1",
	label: 'Input Field Label'
}

export const InputWithNoLabelText = Template.bind({});
InputWithNoLabelText.args = {
	name: "inputFld1",
	label: 'Input Field Label',
	showLabel: false
}

export const InputAsTextArea = Template.bind({});
InputAsTextArea.args = {
	name: "textAreaFld1",
	type: 'textarea'
}

export const InputAsPassword = Template.bind({});
InputAsPassword.args = {
	name: "passwordFld1",
	type: 'password'
}
