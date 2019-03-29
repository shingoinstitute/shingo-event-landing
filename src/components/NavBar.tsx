import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
}

const NavContainer = styled.article`
    height: 110px;
    text-decoration: none;
    max-width: 100vw;
`

const MainNav = styled.nav`
    width: 100%;
    max-width: 100vw;
    min-height: 60px;
    height: 100%;
    display: block; 
    margin-bottom: 20px; 
    background: white; 
    position: relative;

    ul {
        display: table; 
        vertical-align: middle; 
        margin: 0;
        float: right;
    }

    ul li {
        height: 100%;
        display: table-cell; 
        text-align: center;
        vertical-align: middle; 
        padding-bottom: 0; 
        margin: 0; 
        height: 60px; 
        line-height: 58px;
    }

    ul li > a {
        display: block; 
        padding: 0 16px; 
        white-space: nowrap;  
        text-shadow: 0 1px 2px #cccccc, 0 1px 0 #cccccc; 
        height: 60px; line-height: 58px; 
        font-size: 16px; 
        font-size: 1rem;
        text-decoration: none;
        font-weight: normal;
    }

    li a {
        color: #002f56;

        :hover {
            color: #d04526;
        }
    }
`

const Row = styled.div`
    width: 100vw; 
    max-width: 1080px; 
    min-width: 320px; 
    margin: 0 auto;

    ::before {
        content: ' '; 
        display: inline-block;
        vertical-align: middle; 
        margin-right: -0.25em;
    }
`

const Logo = styled.div`
    width: 32.05128%;
    float: left;
    height: 110px;
    line-height: 105px;
    margin: 0 1.92308% 0 0; 
    padding: 0;

    a {
        height: 110px;
        line-height: 105px;
    }

    a img {
        max-height: 100%;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        padding-bottom: 5px;
    }
`

const NavLinkBox = styled.div`
    height: 110px;
    width: 66.02564%;
    float: right;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @media only screen and (max-width: 830px) {
        visibility: hidden;
    }
`




class NavBar extends React.Component<Props, {}> {
    render() {
        return (
            <NavContainer>
                <MainNav>
                    <Row>
                        <Logo>
                            <a href="https://www.shingo.org/"><img src="https://res.cloudinary.com/shingo/image/upload/c_scale,h_85/v1474478583/WebContent/Huntsman-Shingo-Logo.png" alt="Shingo Institute"/></a>
                        </Logo>
                        <NavLinkBox>
                            <ul>
                                <li><a href="https://www.shingo.org/model">The Shingo Model</a></li>
                                <li>
                                <a href="https://www.shingo.org/education">Workshops</a>
                                
                                </li>
                                <li>
                                    <a href="https://events.shingo.org/#!/upcoming">Events</a>
                                </li>
                                <li>
                                    <a href="https://www.shingo.org/awards">Awards</a>
                                    
                                </li>
                                <li>
                                <a href="https://www.shingo.org/about">About</a>
                                    
                                </li>
                                <li>
                                <a href="#">Latest</a>
                                    
                                </li>
                            </ul>
                        </NavLinkBox>
                    </Row>
                </MainNav>
            </NavContainer>
        );
    }
}
  
export default NavBar;