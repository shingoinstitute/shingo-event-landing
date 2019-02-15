import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
}

const Title = styled.h2`
    text-align: center;
`;

class NETextBlock extends React.Component<Props, {}> {
    render() {
        return (
            <div className={this.props.className}>
                <Title>Why You Should Attend</Title>
                <p>As a participant of the Shingo Northeast Study Tour, you will see and experience first-hand what is at the heart of the lean business model through a series of plant tours, workshops and peer networking.</p>
                <p>The tour begins with an overview of the Shingo Model™ and a cultural background session so you can understand the context within which the companies you visit operate as well as how best to conduct yourself in your new surroundings.</p>
                <p>We then give you an inside look at world-class companies and allow you to meet the leaders that have catalyzed lean transformations of their own. Our tour hosts will keep you engaged and challenged as you debrief after each visit and define key takeaways that you can apply to your organization’s efforts. You will see the tools and systems of operational excellence in action – you will visit companies that demonstrate excellence in the fundamentals such as 5S, visual management, problem solving, standardized work, quality at the source, safety, continuous flow, intelligent automation and much more.</p>
                <p>On this tour you will visit <strong>Liberty Mutual, AccuRounds, UMass Memorial Health Care, Karl Storz Endovision</strong> and more!</p>
            </div>
        );
    }
}
  
export default NETextBlock;