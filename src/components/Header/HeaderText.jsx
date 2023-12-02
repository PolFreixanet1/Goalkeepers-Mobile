import { HeaderTextStyled } from "./headerTextStyled"
import { SubtitleStyled } from "../subtitleStyled"
import { TitleStyled } from "../titleStyled"
import { ButtonSimpleStyled } from "../Buttons/buttonSimpleStyled"




export const HeaderTextComponent = () => {
    
    return (
        <HeaderTextStyled>
            <ButtonSimpleStyled color='white'>Settings</ButtonSimpleStyled>
            <TitleStyled color='white'>Perfil</TitleStyled>
            <ButtonSimpleStyled color='white' >Logout</ButtonSimpleStyled>
        </HeaderTextStyled>
    )
}

export const HeaderTextComponentBlack = () => {
    
    return (
        <HeaderTextStyled>
            <ButtonSimpleStyled >Back</ButtonSimpleStyled>
            <TitleStyled >Contacto</TitleStyled>
            <ButtonSimpleStyled>Filter</ButtonSimpleStyled>
        </HeaderTextStyled>
    )
}
