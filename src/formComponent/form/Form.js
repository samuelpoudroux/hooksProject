import React, { useState } from 'react';
import TemplateForm from '../layout/templateForm/TemplateForm';
import Input from '../layout/input/Input';
import Button from '../layout/button/Button';
import InputContainer from '../layout/inputContainer/InputContainer';
import Css from '../cssGlobalVariables/CssGlobalVariables';
import inputSources from '../form/inputSources/inputSources'

const Form = () => {
    const [statesManager, setStatesManager] = useState({});
    const [borderStatesManager, setBorder] = useState("");
    const [validUrlStatesManager, setValidUrl] = useState({});
    const [errorUrlStatesManager, setErrorUrl] = useState({});

    async function onChangeUseState(e) {
        const { name, value } = e.target;
        setStatesManager(prevState => ({ ...prevState, [name]: value }));
    };

    async function onBlurUseState(e) {
        const { name, required } = e.target;
        if (statesManager[name] !== undefined) {
            if (required && statesManager[name].length <= 2) {
                setBorder(prevState => ({ ...prevState, [name]: 'red' }))
                setValidUrl(prevState => ({ ...prevState, [name]: null }))
            }
            else if (required && statesManager[name].length > 2) {
                await setBorder(prevState => ({ ...prevState, [name]: 'green' }))
                await setValidUrl(prevState => ({ ...prevState, [name]: true }))
                console.log(validUrlStatesManager)

            }
            else {
                setBorder(prevState => ({ ...prevState, [name]: 'white' }))
                setValidUrl(prevState => ({ ...prevState, [name]: null }))

            }
        }
    }


    function inputGenerator(i) {
        if (i < inputSources.length) {
            return (
                <Input
                    type={inputSources[i].type}
                    placeholder={inputSources[i].placeholder}
                    color={Css.input.color}
                    margin={Css.input.margin}
                    padding={Css.input.padding}
                    background={validUrlStatesManager[inputSources[i].name] || null}
                    border={Css.input.border}
                    borderColor={borderStatesManager[inputSources[i].name] || null}
                    width={Css.input.width}
                    height={Css.input.height}
                    name={inputSources[i].name}
                    onChange={onChangeUseState}
                    onBlur={onBlurUseState}
                    placeholderFontweight={Css.input.placeholderFontweight}
                    placeholderColor={Css.input.placeholderColor}
                    placeholderFontSize={Css.input.placeholderFontSize}
                    required={inputSources[i].required}
                />
            )
        }

    }

    function rowGenerator() {
        console.log(inputSources[0])
        let arrayNumber = [];
        for (var i = 0; i < inputSources.length; i += 2) {
            arrayNumber.push(i)
        }
        return arrayNumber.map(number =>
            <InputContainer
                padding
                borderColor={Css.inputContainer.borderColor}
                border={Css.inputContainer.border}
                height
                width={80}
                flexDirection={Css.inputContainer.flexDirection}
                justifyContent={Css.inputContainer.justifyContent}
                alignContent={Css.inputContainer.alignContent}
                background={Css.inputContainer.background}
            >
                {inputGenerator(number)}
                {inputGenerator(number + 1)}
            </InputContainer>
        )
    }



    return (
        <TemplateForm
            height={Css.templateForm.height}
            width={Css.templateForm.width}
            justifyContent={Css.templateForm.justifyContent}
            alignItems={Css.templateForm.alignItems}
            border={Css.templateForm.border}
            borderColor={Css.templateForm.borderColor}
            background={Css.templateForm.backgrounds}
        >


            {rowGenerator()}
        </TemplateForm >
    )
}


export default Form