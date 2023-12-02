import { HeaderStyled } from "./HeaderStyled"
import { HeaderTextComponent } from "./HeaderText"
import { PhotoNameComponent } from "./PhotoName"
import { HeaderBlockStyled } from "./headerBlock"
import { SubtitleStyled } from "../subtitleStyled"
import { TitleStyled } from "../titleStyled"



export const HeaderComponent = () => {
    return (
        <HeaderStyled>
            <HeaderTextComponent></HeaderTextComponent>
            <PhotoNameComponent></PhotoNameComponent>
            <HeaderBlockStyled></HeaderBlockStyled>
        </HeaderStyled>
    )
}