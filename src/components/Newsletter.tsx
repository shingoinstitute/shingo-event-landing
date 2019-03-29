import * as React from 'react';
import styled from '../styled-components';

interface Props {
    className?: string;
}

const Container = styled.div`
    height: 50px;
    min-width: 100%;
    background: #640921;
    z-index: 10;
    box-shadow: 0 2px 5px #CCC;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        color:white;
        padding: 0;
        font-weight: 500;
    }

    
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