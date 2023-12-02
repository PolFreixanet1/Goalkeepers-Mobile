import styled from "styled-components";




export const InputTextStyled = styled.input`
    ${(props) =>{
        switch (props.height) {
            case 'text':
                return`
                height:3em;
                `
            case 'message':
                return`
                height:8em;
                `
            
        }
    }
    }
    width: 100%;
    background-color:#F6F6F6;
    border:1px solid #E8E8E8;
    border-radius:5px;
    margin-bottom:1.5em;
    color:black;
`

export const InputCheckboxStyled = styled.input`

    
`

