import React, { useState } from 'react';
import TemplateForm from '../layout/templateForm/TemplateForm';
import Input from '../layout/input/Input';
import Button from '../layout/button/Button';
import InputContainer from '../layout/inputContainer/InputContainer';


const Form = () => {

    const [statesManager, setStatesManager] = useState("");

    const onChangeUseState = e => {
        const { name, value } = e.target;
        setStatesManager(prevState => ({ ...prevState, [name]: value }));
    };

    async function updateParentState(e) {
        await onChangeUseState(e)
        console.log(statesManager)
    }

    return (
        <TemplateForm
            height={60}
            width={60}
            justifyContent={'center'}
            alignItems={'center'}
            border={[0, 5, 'solid']}
            borderColor={"green"}
            background={'grey'}>

            <InputContainer
                padding
                border={[0, 5, "solid"]}
                borderColor={'blue'}
                height
                width={80}
                flexDirection={"row"}
                justifyContent={"space-around"}
                alignContent
            >
                <Input
                    type="text"
                    placeholder="Nom"
                    color="#ff9f43"
                    margin={[10]}
                    padding={[20]}
                    background
                    border={[0, 5, 5]}
                    borderColor={'blue'}
                    width={30}
                    height
                    name={"firstName"}
                    onChange={updateParentState}
                />

                <Input
                    type="text"
                    placeholder="Prénom"
                    color="#ff9f43"
                    margin={[10]}
                    padding={[0]}
                    background
                    border={[0, 5, 5]}
                    width={30}
                    name={"lastName"}
                    onChange={updateParentState}

                />
            </InputContainer>


            <Button
                type="submit"
                value="S'inscrire"
                size={[20, 25]}
                border={[2, "5px", "solid"]}
                color="#6a89cc"
                margin={[20]} />

        </TemplateForm>
    )
}


export default Form