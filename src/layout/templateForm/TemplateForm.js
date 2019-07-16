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
border-width: ${props => props.border[0] || 0}px;
border-color:${props => props.borderColor || '#777'};
border-radius: ${props => props.border[1]|| null}px;
border-style: ${props => props.border[2] || null};


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