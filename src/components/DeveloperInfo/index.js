import React from 'react';
import { MdLocationCity, MdEmail, MdPhone } from 'react-icons/md';
import {
  ContactInfo,
  Info,
  Information,
  Text,
  Title,
} from './DeveloperInfoStyle';

const DeveloperInfo = () => {
  return (
    <ContactInfo>
      <Title>Let's get in touch</Title>
      <Text>
        <span>Developed by</span>
        <br />
        Taif Rahaman, Full stack React and React Native Developer
      </Text>
      <Info>
        <Information>
          <p>
            <MdLocationCity /> Jaypur, Kalia, Narail
          </p>
        </Information>
        <Information>
          <p>
            <MdEmail />
            taif.rahaman73@gmail.com
          </p>
        </Information>
        <Information>
          <p>
            <MdPhone />
            +880193286510
          </p>
        </Information>
      </Info>
    </ContactInfo>
  );
};

export default DeveloperInfo;
