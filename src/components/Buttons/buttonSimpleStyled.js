import styled from "styled-components";




export const ButtonSimpleStyled = styled.button`
    ${(props) => {
        switch (props.color) {
            case 'white':
                return`
                color:white;
                `
            case 'yellow':
                return`
                color:#FAA307;
                `
            default:
                return`
                color:black;
                `
        }
    }}
    background-color:transparent;
    font-size:16px;
    

       
    
`
