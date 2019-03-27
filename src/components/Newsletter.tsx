import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
}

const Container = styled.div`
    height: 100px;
    min-width: 100%;
    background: salmon;
`

class Newsletter extends React.Component<Props, {}> {
    render() {
        return (
            <Container>
                <a href="https://huntsmancrm.tfaforms.net/358965" target="_blank">
                    <h4>Get our Monthly Newsletter!</h4>
                </a>
            </Container>
        );
    }
}
  
export default Newsletter