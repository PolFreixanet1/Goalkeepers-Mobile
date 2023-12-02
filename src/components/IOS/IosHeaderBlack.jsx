import { IphoneContenedorStyled } from "../iphoneContenedor"
import { SubtitleStyled } from "../subtitleStyled"
import { IosDivStyled } from "./IosDivStyled"
import { ParrafStyled } from "../ParrafStyled"




export const IosHeaderBlackComponent = (props) => {

    return(
        <IosDivStyled>
            <ParrafStyled color={props.color}>9:41</ParrafStyled>
            <IphoneContenedorStyled></IphoneContenedorStyled>
            <ParrafStyled color={props.color}>Iconos</ParrafStyled>
        </IosDivStyled>
    )
}

export const IosHeaderWhiteComponent = () => {

    return(
        <IosDivStyled>
            <ParrafStyled color='white'>9:41</ParrafStyled>
            <IphoneContenedorStyled></IphoneContenedorStyled>
            <ParrafStyled color='white'>Iconos</ParrafStyled>
        </IosDivStyled>
    )
}