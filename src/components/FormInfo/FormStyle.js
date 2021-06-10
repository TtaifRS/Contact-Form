import styled from 'styled-components';

export const ContactForm = styled.div`
  background-color: #9acd32;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #9acd32;
    transform: rotate(45deg);
    top: 50px;
    left: -13px;
  }
`;

export const Form = styled.form`
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 1rem 0;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
`;

export const TextAreaContainer = styled.div``;

export const TextInput = styled.textarea`
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
`;

export const Btn = styled.input`
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
`;
