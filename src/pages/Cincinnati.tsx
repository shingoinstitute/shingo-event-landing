import * as React from 'react'
import styled from '../styled-components'

import TitleBlock from '../components/TitleBlock'
import TextBlock from '../components/TextBlock'
import VideoBlock from '../components/VideoBlock'
import Footer from '../components/Footer'

const Content = styled.div`
  margin: 40px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Subtitle = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 50px auto;
  font-size: 50px;
  font-weight: 100;

  @media (orientation: portrait) {
    font-size: 7vw;
    margin: 25px auto;
  }
`

const StyledTextBlock = styled(TextBlock)`
  font-size: 17px;
  width: 500px;
  max-width: 90%;
  margin: auto 20px;
`

const StyledVideoBlock = styled(VideoBlock)`
  width: 500px;
  height: 281px;
  max-width: 90vw;
  max-height: 45vw;
  margin: auto 20px;
`

const Quote = styled.p`
  text-align: center;
  font-size: 35px;
  width: 1100px;
  max-width: 90%;
  margin: 30px auto 50px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;
  border-top: solid 5px #DB8E39;
  border-bottom: solid 5px #DB8E39;
  font-style: italic;

  @media (orientation: portrait) {
    font-size: 4.5vw;
  }
`

const Button = styled.a`
  display: block;
  color: white;
  background: #DB8E39;
  width: 300px;
  height: 75px;
  margin: 10px;
  position: relative;
  border-radius: 20px;

  :hover { background: #FBAE59; }

  @media (orientation: portrait) {
    width: 30vw;
    height: 7.5vw;
  }
`

const ButtonText = styled.p`
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;

  @media (orientation: portrait) {
    font-size: 4.5vw;
  }
`


class Cincinnati extends React.Component<{}> {
  render() {
    document.title = 'Shingo Conference | Cincinnati, Ohio'
    return (
      <div>
        <TitleBlock
              banner = 'https://res.cloudinary.com/shingo/image/upload/v1539204551/iStock-124393964_blue_small2_zrxr82.jpg'
              title = 'SHINGO CONFERENCE'
              date = 'CINCINNATI, OHIO • MAY 1-2, 2019'
              register = 'https://www.cvent.com/d/ngqnct'
        />
        <Content>
          <Subtitle>Make Work Meaningful</Subtitle>
          <Row>
            <StyledTextBlock/>
            <StyledVideoBlock video="https://www.youtube.com/embed/ofhB2HjRP8Y"/>
          </Row>
          <Quote>"The speakers were excellent, the organization of the Conference was brilliant, and the venue was great!"</Quote>
          <Row>
            <Button href="https://www.cvent.com/d/ngqnct">
              <ButtonText>Summary</ButtonText>
            </Button>
            <Button href="http://www.cvent.com/events/31st-annual-shingo-conference/agenda-cc99906ddb2f4a5abdc73a67a0142f24.aspx">
              <ButtonText>Agenda</ButtonText>
            </Button>
            <Button href="http://www.cvent.com/events/31st-annual-shingo-conference/travel-cc99906ddb2f4a5abdc73a67a0142f24.aspx">
              <ButtonText>Travel</ButtonText>
            </Button>
          </Row>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Cincinnati;