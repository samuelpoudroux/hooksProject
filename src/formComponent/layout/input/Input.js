import React from 'react';
import styled from 'styled-components';
import check from '../../asset/icon/check.png'
import error from '../../asset/icon/baseline-error-24px.svg'

const StyledInput = styled.input`
    padding: ${props => props.padding[0] / 2 || 5}px ${props => props.padding[1] / 2 || 10}px;
    background: url(${props => (props.background === "valid" && props.required)? check : null || (props.background === "invalid" && props.required)? error:null}) no-repeat scroll 100%;
    background-size: 15px;
    border-bottom-width: ${props => props.border[0] || 0}px;
    border-top-width:${props => props.border[1] || 0}px;
    border-left-width:${props => props.border[2] || 0}px;
    border-right-width:${props => props.border[3] || 0}px;
    border-color:${props => props.borderColor || '#777'};
    border-radius: ${props => props.border[4] || null}px;
    border-style: ${props => props.border[5] || null};
    color: ${props => props.color| null};
    margin: ${props => props.margin[0] || 0}px ${props => props.margin[1] || 0}px;
    height:  ${props => props.height}%;
    width:  ${props => props.width}%;

    ${this}::placeholder {
    font-size: ${props => props.placeholderFontSize || null}px;
    font-weight:  ${props => props.placeholderFontWeight || null};
    color: ${props => props.placeholderColor || null};
}
`;

const Input = ({ children, ...props }) => {

    return (
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
 margin= {[marginTopBottom, marginleftright]}
  placeholderFontSize|| null}
     placeholderFontweight|| null}}
     placeholderFontWeight|| null}
>
</Input> */}