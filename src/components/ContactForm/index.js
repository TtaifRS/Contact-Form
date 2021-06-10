import React from 'react';
import DeveloperInfo from '../DeveloperInfo';
import FormInfo from '../FormInfo';
import { BigCircle, Container, FormContainer } from './ContactStyle';

const ContactForm = () => {
  return (
    <Container>
      <BigCircle></BigCircle>
      <FormContainer>
        <DeveloperInfo />
        <FormInfo />
      </FormContainer>
    </Container>
  );
};

export default ContactForm;
