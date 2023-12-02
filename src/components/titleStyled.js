import styled from 'styled-components';


export const TitleStyled = styled.h1`
    font-size: 30px;
    color: ${(props) => props.color == 'white' ? 'white' : 'black'};
    margin-bottom: ${(props) => props.type == 'sinmargeninferior' ? '1.5px' : ''};
    margin-top:0.5em;
    `