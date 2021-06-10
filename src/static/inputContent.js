const content = {
  inputs: [
    {
      label: 'Username',
      name: 'name',
      type: 'text',
      value: true,
      message: 'Please enter your name',
      placeHolder: 'Username',
    },
    {
      label: 'email',
      name: 'email',
      type: 'email',
      value: true,
      message: 'Please enter valid email',
      placeHolder: 'Email',
    },
    {
      label: 'phone',
      name: 'phone',
      type: 'tel',
      value: true,
      message: 'Please enter your phone number',
      placeHolder: 'Phone',
    },
    {
      label: 'address',
      name: 'address',
      type: 'text',
      value: false,
      message: 'Please enter your phone number',
      placeHolder: 'Address',
    },
  ],
};

export default content;
