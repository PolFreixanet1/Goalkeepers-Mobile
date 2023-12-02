import styled from 'styled-components';

export const SubtitleStyled = styled.h5`
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
    font-size:16px;
    font-weight: 500;
    margin-top: ${(props) => props.type == 'sinmargensuperior' ? '0px' : ''};
    margin-bottom:1em;
 
    `
