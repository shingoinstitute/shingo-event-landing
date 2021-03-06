import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
}

const Title = styled.h2`
    text-align: center;
`;

const Link = styled.a`
    text-decoration: none;
    color: #DB8E39;

    :hover { color: #FBAE59; }
`

class TextBlock extends React.Component<Props, {}> {
    render() {
        return (
            <div className={this.props.className}>
                <Title>Why You Should Attend</Title>
                <p>A big part of shaping a culture that drives operational excellence is engaging the entire organization in improvement efforts. This year’s theme of “Make Work Meaningful” is about finding ways to create that culture of engagement in continuous improvement.</p>
                <p>Join us to learn from leaders how to make great transformations in your organization using the principles of the <em>Shingo Model™</em>.</p>
                <ul>
                    <li>Network with Lean practitioners like you, all striving to improve their organizations.</li>
                    <li>Discover what process improvement practitioners like you have done to make notable improvements to their organizations.</li>
                    <li>Listen to experienced leaders as keynote speakers.</li>
                    <li>Join the discussion in break-out sessions.</li>
                </ul>
                <p>This year’s tour sites are to <strong>Toyota</strong> and <strong>LeanCor</strong>. Both will inspire you with new ideas for improvement. Sign up for a workshop and/or site tour to catch one or both of these valuable experiences.</p>
                <p>If you are interested in becoming an exhibitor and/or sponsor, <Link href="https://res.cloudinary.com/shingo/image/upload/v1543950007/Events/IntlConference/2019/ExhibitorProspectus.pdf">click here.</Link></p>
                <p>For more information on why you should attend, <Link href="https://res.cloudinary.com/shingo/image/upload/v1547674632/Events/IntlConference/2019/AttendeeProspectus_A1_-_FIXED_-_01-2019.pdf">click here.</Link></p>
            </div>
        );
    }
}
  
export default TextBlock;