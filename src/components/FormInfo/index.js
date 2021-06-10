import React from 'react';
import { useForm } from 'react-hook-form';

import emailjs from 'emailjs-com';

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
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

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
          <TextInput {...register('message')}></TextInput>
          <Label>Message</Label>
          <span>Message</span>
        </TextAreaContainer>
        <Btn type="submit" value="send" />
      </Form>
    </ContactForm>
  );
};

export default FormInfo;
