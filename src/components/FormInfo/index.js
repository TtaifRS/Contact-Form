import React from 'react';
import { useForm } from 'react-hook-form';

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

import content from '../../static/inputContent';

const FormInfo = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <ContactForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Contact Us</Title>
        {content.inputs.map((input, key) => {
          return (
            <InputContainer key={key}>
              <Input {...register(input.name)} type={input.type} />
              <Label>{input.label}</Label>
              <span>{input.label}</span>
            </InputContainer>
          );
        })}
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
