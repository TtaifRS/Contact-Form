import React from 'react';
import { useForm } from 'react-hook-form';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  ContactForm,
  Form,
  Input,
  Title,
  InputContainer,
  TextAreaContainer,
  TextInput,
  Btn,
  ErrorMessage,
} from './FormStyle';

import content from '../../static/inputContent';

const FormInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

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
      toastifySuccess();
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
          const { name, type, message, value, placeHolder } = input;
          return (
            <InputContainer key={key}>
              <Input
                type={type}
                placeholder={placeHolder}
                {...register(name, { required: { value, message } })}
              />
              {errors[input.name] && <ErrorMessage>{message}</ErrorMessage>}
            </InputContainer>
          );
        })}

        <TextAreaContainer>
          <TextInput
            placeholder="Message"
            {...register('message', {
              required: { value: true, message: 'Please type your message' },
            })}
          ></TextInput>
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </TextAreaContainer>
        <Btn type="submit" value="send" whileHover={{ scale: 1.1 }} />
      </Form>
      <ToastContainer />
    </ContactForm>
  );
};

export default FormInfo;
