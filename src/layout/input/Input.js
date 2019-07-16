import React from 'react';
import styled from 'styled-components'; 

const StyledInput = styled.input`
    padding: ${props => props.padding[0]/2 || 5}px ${props => props.padding[1]/2 || 10}px;
    background: ${props => props.background || 'none'};
    border-width: ${props => props.border[0] || 0}px;
    border-color:${props => props.borderColor || '#777'};
    border-radius: ${props => props.border[1]|| null}px;
    border-style: ${props => props.border[2] || null};
    color: #777;
    margin: ${props => props.margin[0] || 0}px ${props => props.margin[1] || 0}px;
    height:  ${props => props.height}%;
    width:  ${props => props.width}%;
    ${this}:hover{
        cursor: pointer;
        color: ${props => props.color || '#f5f5f5'};
        border-color: ${props => props.color || null};
    }
`;

const Input = ({children, ...props}) => {

    return(
        <StyledInput {...props}>
            {children}
        </StyledInput>
    )
}

export default Input;

{/* <Input
 padding= {[paddingTopBottom, paddingleftright]}
 background= {}
 border= {[borderWidth, borderRadius, borderStyle]}
 border-color={[]}
 color= {};
 margin= {[marginTopBottom, marginleftright]}>
</Input> */}