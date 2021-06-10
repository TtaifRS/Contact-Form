import React from 'react';
import { MdLocationCity, MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  ContactInfo,
  Info,
  Information,
  Text,
  Title,
  SocialMedia,
  SocialIcon,
} from './DeveloperInfoStyle';

const DeveloperInfo = () => {
  return (
    <ContactInfo>
      <Title>Let's get in touch</Title>
      <Text>
        <span style={{ fontWeight: 'lighter' }}>Developed by</span>
        <br />
        Taif Rahaman, Full stack React and React Native Developer
      </Text>
      <Info>
        <Information>
          <p>
            <IconContext.Provider
              value={{
                style: {
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: '1.5px',
                },

                color: '#9ACD32',
              }}
            >
              <MdLocationCity />
            </IconContext.Provider>
            Narail, Khulna, Bangladesh
          </p>
        </Information>
        <Information>
          <p>
            <IconContext.Provider
              value={{
                style: {
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: '2px',
                },
                color: '#27589F',
              }}
            >
              <MdEmail />
            </IconContext.Provider>
            taif.rahaman73@gmail.com
          </p>
        </Information>
        <Information>
          <p>
            <IconContext.Provider
              value={{
                style: {
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: '2px',
                },
                color: '#ff6600',
              }}
            >
              <MdPhone />
            </IconContext.Provider>
            +880193286510
          </p>
        </Information>
      </Info>
      <SocialMedia>
        <p>Connect with me</p>
        <SocialIcon>
          <a href="https://www.linkedin.com/in/taif-rahaman/">
            <IconContext.Provider value={{ size: '50px', color: '#0A66C2' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a href="https://github.com/TtaifRS">
            <IconContext.Provider value={{ size: '50px', color: '#000' }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </SocialIcon>
      </SocialMedia>
    </ContactInfo>
  );
};

export default DeveloperInfo;
