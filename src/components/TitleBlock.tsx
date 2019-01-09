import * as React from 'react';
import styled from '../styled-components';

interface Props {
  className?: string;
  banner?: string;
  info?: string;
  title?: string;
  subtitle?: string;
  register?: string;
}



const TitleContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Info = styled.p`
  color: #555;
  font-size: 3vmin;
  margin: 10px;
`;



const Title = styled.h1`
  color: white;
  font-size: 8vmin;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;

  @media (orientation: portrait) {
    
  }
`;

const Button = styled.a`
  display: block;
  color: white;
  background: #DB8E39;
  width: 26vmin;
  height: 6.5vmin;
  max-width: 300px;
  max-height: 75px;
  margin: auto;
  margin-top: 4%;
  margin-bottom: 2%;
  margin-top-max: 100px;
  position: relative;
  border-radius: 20px;

  :hover { background: #FBAE59; }

  @media (orientation: portrait) {
    width: 26vw;
    height: 6.5vw;
  }
`;

const InfoLink = styled(Button)`
  font-weight: 500;
  text-decoration: none;
  width: 16vmin;
  height: 5vmin;
  margin: 2%;
`;

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
`;

const InfoLinkText = styled(ButtonText)`
  font-size: 3vmin;
`;

const Subtitle = styled(Info)`
  font-style: italic;
  font-size: 5vmin;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const WholeBlock = styled<{ banner?: string }, "div">("div")`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: rgb(134, 161, 204);
  background-image: url(${props => props.banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 5px 8px #555

  
  width: 100vw;
  height: 70vh;
  
  @media (orientation: portrait) {
    width: 100vw;
    height: 40vh;
    max-height: 55vw;
  }
`;

class TitleBlock extends React.Component<Props, {}> {
  render() {
    return (
      <WholeBlock banner={this.props.banner}>
        <TitleContainer>
            <Info>{this.props.info}</Info>
            <Title className='title'>{this.props.title}</Title>
            <Subtitle>{this.props.subtitle}</Subtitle>
            <Button href={this.props.register}>
                <ButtonText>REGISTER</ButtonText>
            </Button>
            <Row>
              <InfoLink href="http://www.cvent.com/events/31st-annual-shingo-conference/speakers-cc99906ddb2f4a5abdc73a67a0142f24.aspx">
                <InfoLinkText>Speakers</InfoLinkText>
              </InfoLink>
              <InfoLink href="http://www.cvent.com/events/31st-annual-shingo-conference/agenda-cc99906ddb2f4a5abdc73a67a0142f24.aspx">
                <InfoLinkText>Agenda</InfoLinkText>
              </InfoLink>
              <InfoLink href="http://www.cvent.com/events/31st-annual-shingo-conference/travel-cc99906ddb2f4a5abdc73a67a0142f24.aspx">
                <InfoLinkText>Travel</InfoLinkText>
              </InfoLink>
            </Row>
        </TitleContainer>
      </WholeBlock>
    );
  }
}

export default TitleBlock;
