import styled from 'styled-components';

export const ButtonPrimaryStyled = styled.button`
    border-radius: 100px;
    color: white;
    background-color: #FAA307;'#F6F6F6'}
    padding:14px 32px;

`


export const ButtonSecondaryStyled = styled.button`
    border-radius: 100px;
    color: #FAA307;
    background-color:#FFF;
    padding:14px 32px;
`

export const ButtonDisabledStyled = styled.button`
    border-radius: 100px;
    color: #BDBDBD;
    background-color:#F6F6F6;
    padding:14px 32px;

`

export const SegmentButtonStyled = styled.button`
    ${(props) => {
        switch (props.type) {
            case 'left':
                return`
                padding-top:0.3px;
                padding-bottom:0.3px;
                padding-left:0.3px;
                `
            case 'right':
                return`
                padding-top:0.3px;
                padding-bottom:0.3px;
                padding-right:0.3px;
                `
            default: 
                return`
                padding-top:0.3px;
                padding-bottom:0.3px;
                `

        }
    }}
    border-radius: 100px;
    color: #BDBDBD;
    background-color:#F6F6F6;
    width:100%
`



