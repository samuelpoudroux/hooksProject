import React from 'react';
import styled from 'styled-components'; 

const StyledButton = styled.button`
    padding: ${props => props.size[0]/2 || 5}px ${props => props.size[1]/2 || 10}px;
    background: ${props => props.background || 'none'};
    border-width: ${props => props.border[0] || 0}px;
    border-color: ${props => props.borderColor || 0};
    border-radius: ${props => props.border[1] || null}px;
    border-style: ${props => props.border[2] || null}px;
    color: #777;
    display: flex;
    flex-direction:${props => props.flexDirection};
    justify-content:${props => props.justifyContent};
    align-content:${props => props.alignContent};
    margin: ${props => props.margin[0] || 0}px ${props => props.margin[1] || 0}px;
    transition: all .3s ease;
    ${this}:hover{
        cursor: pointer;
        color: ${props => props.color || '#f5f5f5'};
        border-color: ${props => props.color || null};
    }
`;

const Button = ({children, ...props}) => {

    return(
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;