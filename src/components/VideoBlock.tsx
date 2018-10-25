import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
    video: string;
}

const Video = styled.iframe`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    
`

class VideoBlock extends React.Component<Props, {}> {
    render() {
        return (
            <Wrapper className={this.props.className}>
                <Video src={this.props.video} frameBorder='0' allow="autoplay; encrypted-media"/>
            </Wrapper>
        );
    }
}
  
export default VideoBlock