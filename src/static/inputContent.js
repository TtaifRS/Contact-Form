const content = {
  inputs: [
    {
      label: 'Username',
      name: 'name',
      type: 'text',
      value: true,
      message: 'Please enter your name',
    },
    {
      label: 'email',
      name: 'email',
      type: 'email',
      value: true,
      message: 'Please enter valid email',
    },
    {
      label: 'phone',
      name: 'phone',
      type: 'tel',
      value: true,
      message: 'Please enter your phone number',
    },
    {
      label: 'address',
      name: 'address',
      type: 'text',
      value: false,
      message: 'Please enter your phone number',
    },
  ],
};

export default content;
