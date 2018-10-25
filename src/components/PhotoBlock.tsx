import * as React from 'react';
// import styled from '../styled-components';

interface Props {
    className?: string;
    image: string;
}

class PhotoBlock extends React.Component<Props, {}> {
    render() {
        return (
            <img className={this.props.className} src={this.props.image} />
        );
    }
}
  
export default PhotoBlock;