import React from 'react';
import { action } from '@storybook/addon-actions';

import Form, { Input } from '../src/index.jsx';

export default {
	component: Form,
	title: 'Form'	
};

const Template = (args) => <Form onDone={action('onDone Called')}>
	<Input {...args} />
	<button type="submit">Submit</button>
</Form>;

export const Demo = Template.bind({});
Demo.args = {
	name: "inputFld1",
	label: 'Input Field Label',
	required: true
};