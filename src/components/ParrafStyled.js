import styled from "styled-components";




export const ParrafStyled = styled.p`
    ${(props) => {
        switch (props.color) {
            case 'white':
                return`
                color: white;
                `
            case 'yellow':
                return`
                color:#FAA307;
                `
            case 'grey':
                return`
                color:#BDBDBD;
                `

            default: 
                return`
                color:black;
                `
            }
        }}
        margin:0;
`
