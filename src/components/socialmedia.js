import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle'; // You may need to import your global styles
import background from '../Images/pic.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding-top: 60px;
  padding: 50px;
  margin-top: 60px;
`;

const SocialMediaSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 150px;
  margin-bottom: 300px;
  color: black;
  p {
    font-size: 24px;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

const SocialMediaInfo = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.6;
`;

class SocialMediaPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <SocialMediaSection>
            <h1>Social Media</h1>
            <SocialMediaInfo>
              <strong>Instagram:</strong> <a href="https://www.instagram.com/dke_rpi/">dke_rpi</a>
            </SocialMediaInfo>
            <SocialMediaInfo>
              <strong>Reddit:</strong> <a href="https://www.reddit.com/user/DKE_RPI">DKE_RPI</a>
            </SocialMediaInfo>
            <SocialMediaInfo>
              <strong>Twitch:</strong> <a href="https://www.twitch.tv/dke_psiomega">dke_psiomega</a>
            </SocialMediaInfo>
            <SocialMediaInfo>
              <strong>Gmail:</strong> <a href="mailto:marketing.dkepsiomega@gmail.com">marketing.dkepsiomega@gmail.com</a>
            </SocialMediaInfo>
          </SocialMediaSection>
        </Container>
      </>
    );
  }
}

export default SocialMediaPage;
