import { ButtonDisabledStyled, ButtonSecondaryStyled, SegmentButtonStyled } from "./buttonStyled"
import { SegmentStyled } from "./segmentStyled"
import { SubtitleStyled } from "../subtitleStyled"



export const SegmentLeftControlComponent = () => {

    return (
        <SegmentStyled>
            <ButtonSecondaryStyled>Datos</ButtonSecondaryStyled>
            <ButtonDisabledStyled>Fotos</ButtonDisabledStyled>
            <ButtonDisabledStyled>Reservas</ButtonDisabledStyled>
        </SegmentStyled>
    )
}
export const SegmentCenterControlComponent = () => {

    return (
        <SegmentStyled>
            <ButtonDisabledStyled>Datos</ButtonDisabledStyled>
            <ButtonSecondaryStyled>Fotos</ButtonSecondaryStyled>
            <ButtonDisabledStyled>Reservas</ButtonDisabledStyled>
        </SegmentStyled>
    )
}

export const SegmentRigthControlComponent = () => {

    return (
        <SegmentStyled>
            <ButtonDisabledStyled>Datos</ButtonDisabledStyled>
            <ButtonDisabledStyled>Fotos</ButtonDisabledStyled>
            <ButtonSecondaryStyled>Reservas</ButtonSecondaryStyled>
        </SegmentStyled>
    )
}
