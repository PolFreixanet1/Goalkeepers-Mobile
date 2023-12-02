import styled from "styled-components";




export const ItemDescriptionStyled = styled.p`
    ${(props) => {
        switch (props.align) {
            case 'left':
                return`
                text-align:left;
                `
            case 'right':
                return`
                text-align:right;
                `
            case 'checkbox':
                return`
                text-align:right;
                `
        }
    }}

    font-size:16px;
    font-weight:500;
    color:black;
    
`
