import React from 'react';
import {
  ContactForm,
  Form,
  Input,
  Title,
  InputContainer,
  Label,
  TextAreaContainer,
  TextInput,
  Btn,
} from './FormStyle';

const FormInfo = () => {
  return (
    <ContactForm>
      <Form>
        <Title>Contact Us</Title>
        <InputContainer>
          <Input type="text" name="name" />
          <Label>Username</Label>
          <span>Username</span>
        </InputContainer>
        <InputContainer>
          <Input type="text" name="email" />
          <Label>Email</Label>
          <span>Email</span>
        </InputContainer>
        <InputContainer>
          <Input type="tel" name="phone" />
          <Label>Phone</Label>
          <span>Phone</span>
        </InputContainer>
        <TextAreaContainer>
          <TextInput name="message"></TextInput>
          <Label>Message</Label>
          <span>Message</span>
        </TextAreaContainer>
        <Btn type="submit" value="send" />
      </Form>
    </ContactForm>
  );
};

export default FormInfo;
