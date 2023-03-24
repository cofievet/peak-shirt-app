import Counter from ".";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const DefaultUsage = Template.bind({});

export const WithATwoValueStep = Template.bind({});
WithATwoValueStep.args = { step: 2 };
