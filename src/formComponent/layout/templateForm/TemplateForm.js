import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
background: ${props => props.background};
display: flex;
flex-direction: column;
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
height:  ${props => props.height}%;
width:  ${props => props.width}%;
border-bottom-width: ${props => props.border[0] || 0}px;
border-top-width:${props => props.border[1] || 0}px;
border-left-width:${props => props.border[2] || 0}px;
border-right-width:${props => props.border[3] || 0}px;
border-color:${props => props.borderColor || '#777'};
border-radius: ${props => props.border[4] || null}px;
border-style: ${props => props.border[5] || null};
padding: ${props => props.padding[0] / 2 || 5}px ${props => props.padding[1] / 2 || 10}px;
box-shadow:${props => props.boxShadow[0] / 2 || 5}px ${props => props.boxShadow[1]  / 2 || 0}px ${props => props.boxShadow[2]  / 2 || 0}px ${props => props.boxShadow[3]  / 2 || 10}px; 
-moz-box-shadow: 0px 2px 5px 0px rgba(143, 140, 140, 0.83);
-webkit-box-shadow: 0px 2px 5px 0px rgba(143, 140, 140, 0.83);
`;

const templateForm = ({ children, ...props }) => {
    return (
        <StyledForm {...props}>
            {children}
        </StyledForm>
    )
}

export default templateForm

{/* < TemplateForm
    background: ${props => props.background}
    height = {}
    width = {} 
    border={[border-width, border-radius, border-style]}
    justify-content= {justifyContent};
align-items=alignItems}>
</TemplateForm > */}