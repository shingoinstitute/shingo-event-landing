import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
}

const Container = styled.div`
    width: 100vw;
    height: 150px;
    background: rgb(70, 70, 70);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Footnote = styled.p`
    text-align: center;
    color: white;
    max-width: 90%;
`

const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color};

    :hover { color: ${props => props.theme.hover}; }
`

class TextBlock extends React.Component<Props, {}> {
    render() {
        return (
            <Container>
                <Footnote>© 2018 Utah State University | <Link href="https://shingo.org/privacy-policy">Privacy Policy &amp; Copyright Information</Link> | <Link href="https://shingo.org/careers">Careers</Link></Footnote>
                <Footnote>3521 Old Main Hill, Logan, Utah 84322 | <Link href="tel:4357972279">435.797.2279</Link> | <Link href="mailto:shingo.info@usu.edu">shingo.info@usu.edu</Link></Footnote>
            </Container>
        );
    }
}
  
export default TextBlock;