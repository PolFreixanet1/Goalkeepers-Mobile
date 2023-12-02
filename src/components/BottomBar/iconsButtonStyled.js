import styled from "styled-components";


export const IconButtonStyled = styled.button`
    ${(props) => {
        switch (props.type) {
            case 'focus':
                return`
                color: black;
                width:100%;
                background-color:#FAA307;
                padding:0.8em;
                height:4.2em;
                margin-top:0.3em;
                `
            default: 
                return`
                color:#FAA307;
                width:100%;
                background-color:#202020;
                `
        }
    }}
`

export const IconButtonStatisticsStyled = styled(IconButtonStyled)`

`

export const IconButtonCalendarStyled = styled(IconButtonStyled)`
`

export const IconButtonProfileStyled = styled(IconButtonStyled)`
`

export const IconButtonMediaStyled = styled(IconButtonStyled)`
`

export const IconButtonContactStyled = styled(IconButtonStyled)`
`
