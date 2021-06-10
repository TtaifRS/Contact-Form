import styled from 'styled-components';

export const ContactInfo = styled.div`
  padding: 2.3rem 2.2rem;
  position: relative;

  @media (max-width: 850px) {
    &:before {
      bottom: initial;
      top: -75px;
      right: 65px;
      transform: scale(0.95);
    }
  }
`;

export const Title = styled.h3`
  color: #1abc9c;
  font-weight: bold;
  font-size: 2rem;
`;

export const Text = styled.p`
  color: #333;
  font-weight: bold;
  @media (max-width: 850px) {
    margin: 1rem 0 1.5rem 0;
  }
`;

export const Info = styled.div``;

export const Information = styled.div`
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
  font-weight: bold;
`;

export const SocialMedia = styled.div`
  padding: 2rem 0 0 0;

  p {
    color: #333;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
