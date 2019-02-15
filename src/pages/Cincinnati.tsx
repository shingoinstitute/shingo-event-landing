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
/*
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
*/

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
  font-size: 4.5vmin;
  max-font-size: 35px;
  width: 1100px;
  max-width: 90%;
  margin: 30px auto 50px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;
  border-top: solid 5px ${props => props.theme.color};
  border-bottom: solid 5px ${props => props.theme.color};
  font-style: italic;

  @media (orientation: portrait) {
    font-size: 4.5vmin;
  }
`

/*const Button = styled.a`
  display: block;
  color: white;
  background: #DB8E39;
  width: 26vmin;
  height: 6.5vmin;
  max-width: 300px;
  max-height: 75px;
  margin: 10px;
  position: relative;
  border-radius: 20px;

  :hover { background: #FBAE59; }

  @media (orientation: portrait) {
    width: 26vw;
    height: 6.5vw;
  }
`

const ButtonText = styled.p`
  font-size: 3.75vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;

  @media (orientation: portrait) {
    font-size: 3.75vw;
  }
`*/

const Bar = styled.div`
  width: 1100px;
  max-width: 90%;
  padding-left: 20px;
  padding-right: 20px;
  border-top: solid 5px ${props => props.theme.color};
  margin: 30px auto;
`


class Cincinnati extends React.Component<{}> {
  render() {
    document.title = 'Shingo Conference | Cincinnati, Ohio'
    const link1: [string, string] = ["Speakers",'https://www.cvent.com/events/31st-annual-shingo-conference/speakers-cc99906ddb2f4a5abdc73a67a0142f24.aspx']
    const link2: [string, string] = ['Agenda','https://www.cvent.com/events/31st-annual-shingo-conference/agenda-cc99906ddb2f4a5abdc73a67a0142f24.aspx']
    const link3: [string, string] = ['Travel','http://www.cvent.com/events/31st-annual-shingo-conference/travel-cc99906ddb2f4a5abdc73a67a0142f24.aspx']
    return (
      <div>
        <TitleBlock
              banner = 'https://res.cloudinary.com/shingo/image/upload/v1539204551/iStock-124393964_blue_small2_zrxr82.jpg'
              title = 'SHINGO CONFERENCE'
              subtitle = 'MAKE WORK MEANINGFUL'
              info = 'CINCINNATI, OHIO • MAY 1-2, 2019'
              register = 'https://www.cvent.com/events/31st-annual-shingo-conference/registration-cc99906ddb2f4a5abdc73a67a0142f24.aspx?fqp=true'
              link1 = {link1}
              link2 = {link2}
              link3 = {link3}
        />
        <Content>
          <Bar/>
          <Row>
            <StyledTextBlock/>
            <StyledVideoBlock video="https://www.youtube.com/embed/ofhB2HjRP8Y?autoplay=1&mute=1"/>
          </Row>
          <Quote>"The speakers were excellent, the organization of the conference was brilliant, and the venue was great!"</Quote>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Cincinnati;