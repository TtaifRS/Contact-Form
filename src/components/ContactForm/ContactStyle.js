import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #fafafa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BigCircle = styled.span`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(154, 205, 50, 1) 40%,
    rgba(125, 194, 80, 1) 100%
  );
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);

  &:after {
    content: '';
    position: absolute;
    width: 360px;
    height: 360px;
    background-color: #fafafa;
    border-radius: 50%;
    top: calc(50% - 180px);
    left: calc(50% - 180px);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 820px;
  border-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
