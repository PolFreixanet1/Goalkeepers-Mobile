import { TitleStyled } from "../titleStyled"
import { SubtitleStyled } from "../subtitleStyled"
import { SpanGoldkeeperStyled } from "./spanGoldkeeper"
import { ImgProfileStyled } from "./imgProfileStyled"
import { PhotoNameStyled } from "./photonameStyled"




export const PhotoNameComponent = () => {
    
    return(
        <PhotoNameStyled>
            <ImgProfileStyled src='https://cdn01.diarimes.com/uploads/imagenes/10col/2018/07/03/_pol_08f05a27.jpg?ed9f53d540561354fb299c98f6f05163' />
            <TitleStyled type='sinmargeninferior' >Pol Freixanet</TitleStyled>
            <SubtitleStyled type='sinmargensuperior' >es <SpanGoldkeeperStyled>GOLD</SpanGoldkeeperStyled>KEEPER</SubtitleStyled>
        </PhotoNameStyled>
    )
}