import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
    padding: ${props => props.padding[0] / 2 || 5}px ${props => props.padding[1] / 2 || 10}px;
    height:  ${props => props.height}%;
    width:  ${props => props.width}%;
    display: flex;
    flex-direction:${props => props.flexDirection};
    justify-content:${props => props.justifyContent};
    align-content:${props => props.alignContent};
    border-width: ${props => props.border[0] || 0}px;
    border-color:${props => props.borderColor || '#777'};
    border-radius: ${props => props.border[1]|| null}px;
    border-style: ${props => props.border[2] || null};
    background:${props => props.background || null};

`;

const InputContainer = ({ children, ...props }) => {
    return (
        <StyledInputContainer {...props}>
            {children}
        </StyledInputContainer>
    )
}

export default InputContainer;

{/* <InputContainer 
    padding={[paddingTopBottom, paddingLEFTRIGHT]}
    height={}
    width={}
    display
    flexDirection={}
    justifyContent={}
    alignContent={}
     border={[border-width, border-radius, border-style]}

>
</InputContainer> */}