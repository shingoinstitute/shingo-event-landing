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
  width: 300px;
  height: 75px;
  margin: auto;
  margin-top: 100px;
  position: relative;
  border-radius: 20px;

  :hover { background: #FBAE59; }

  @media (orientation: portrait) {
    width: 28vw;
    height: 7vw;
    margin-top: 10%;
  }
`;

const ButtonText = styled.p`
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;

  @media (orientation: portrait) {
    font-size: 4vw;
  }
`;


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
            <Info>{this.props.subtitle}</Info>
            <Button href={this.props.register}>
                <ButtonText>REGISTER</ButtonText>
            </Button>
        </TitleContainer>
      </WholeBlock>
    );
  }
}

export default TitleBlock;
