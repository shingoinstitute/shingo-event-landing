import * as React from 'react';
// import styled from '../styled-components';
import '../navbar.css'

interface Props {
    className?: string;
}


class NavBar extends React.Component<Props, {}> {
    render() {
        return (
            <article className="navcontain">
                <nav className="navbar" id="main-nav" gumby-fixed="top">
                    <div className="row valign">
                        <a className="toggle"  gumby-trigger="#main-nav > .row > .eight > ul" href="#"><i className="icon-menu"/></a>
                        <div className="four columns logo">
                            <a href="https://www.shingo.org/"><img src="https://res.cloudinary.com/shingo/image/upload/c_scale,h_85/v1474478583/WebContent/Huntsman-Shingo-Logo.png" alt="Shingo Institute"/></a>
                        </div>
                        <div className="eight columns">
                            <ul>
                                <li><a href="https://www.shingo.org/model">The Shingo Model</a></li>
                                <li>
                                <a href="https://www.shingo.org/education">Workshops</a>
                                <div className="dropdown">
                                    <ul>
                                        <li>
                                            <a href="https://www.shingo.org/education">Shingo Workshops</a>
                                            <div className="dropdown">
                                                <ul>
                                                    <li><a href="https://www.shingo.org/education/discover">Discover Excellence</a></li>
                                                    <li><a href="https://www.shingo.org/education/enable">Cultural Enablers</a></li>
                                                    <li><a href="https://www.shingo.org/education/improve">Continuous Improvement</a></li>
                                                    <li><a href="https://www.shingo.org/education/align">Enterprise Alignment & Results</a></li>
                                                    <li><a href="https://www.shingo.org/education/build">Build Excellence</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                                <a href="https://www.shingo.org/workshops">Workshop Schedule</a>
                                        </li>
                                        <li>
                                            <a href="https://www.shingo.org/affiliates">Workshop Providers</a>
                                        </li>   
                                        <li>
                                            <a>Online Training</a>
                                            <div className="dropdown">
                                                <ul>
                                                    <li><a href="https://www.shingo.org/additional">Visual Workplace</a></li>
                                                    <li><a href="https://www.myeducator.com/reader/web/1333b/" target="blank">Shingo Associate Overview</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </li>
                                <li>
                                    <a href="https://events.shingo.org/#!/upcoming">Events</a>
                                </li>
                                <li>
                                    <a href="https://www.shingo.org/awards">Awards</a>
                                    <div className="dropdown">
                                        <ul>
                                            <li><a href="https://www.shingo.org/challengefortheprize">Challenge for The Shingo Prize</a></li>
                                            <li><a href="https://www.shingo.org/awards">Shingo Recipients</a></li>
                                            <li><a href="https://www.shingo.org/researchaward">Research Award</a></li>
                                            <li><a href="https://www.shingo.org/publicationaward">Publication Award</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                <a href="https://www.shingo.org/about">About</a>
                                    <div className="dropdown">
                                        <ul>
                                        <li><a href="https://www.shingo.org/affiliates">Affiliates</a></li>
                                        <li><a href="https://www.shingo.org/seab">Shingo Executive Advisory Board</a></li>
                                        <li><a href="https://www.shingo.org/academy">Shingo Academy</a></li>
                                        <li><a href="https://www.shingo.org/alumni">Shingo Alumni</a></li>
                                        <li><a href="https://www.shingo.org/faculty-fellows">Shingo Faculty Fellows</a></li>
                                        <li><a href="https://www.shingo.org/examiners">Examiners</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                <a href="#">Latest</a>
                                    <div className="dropdown dropdown--size-small">
                                        <ul>
                                        <li><a href="https://blog.shingo.org" target="_blank">Articles</a></li>
                                        <li><a href="https://news.shingo.org" target="_blank">News</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </article>
        );
    }
}
  
export default NavBar;