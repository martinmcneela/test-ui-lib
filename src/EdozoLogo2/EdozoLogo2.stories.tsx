import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo2 } from './EdozoLogo2';

export default {
  title: 'Components/EdozoLogo2',
  component: EdozoLogo2,
} as Meta;

const Template: Story = args => <EdozoLogo2 {...args} />;

export const Default = Template.bind({});

export const WithName = Template.bind({});
WithName.args = {
  appName: 'Maps',
};

export const WithOccupiersColor = Template.bind({});
WithOccupiersColor.args = {
  appName: 'Occupiers',
  size: 'standard',
};

export const WithHelpCentreColor = Template.bind({});
WithHelpCentreColor.args = {
  appName: 'Help centre',
  size: 'standard',
};

export const WithInsightColorAndSmall = Template.bind({});
WithInsightColorAndSmall.args = {
  appName: 'Insight',
  size: 'small',
};
