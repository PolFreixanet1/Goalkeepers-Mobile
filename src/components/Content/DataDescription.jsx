import { ItemDescriptionStyled } from "./itemDescription"
import { IoPerson } from "react-icons/io5";
import { FaRegHandPaper } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaRulerVertical } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuCake } from "react-icons/lu";
import { ProfileContentDivStyled } from "./ProfileContentDivStyled";






export const DataDescriptionComponent = () => {

    return(
        <ProfileContentDivStyled>
            <ItemDescriptionStyled><IoPerson color='#FAA307' /> PO1</ItemDescriptionStyled>
            <ItemDescriptionStyled><MdEmail color='#FAA307'/> canipse@hotmail.com</ItemDescriptionStyled>
            <ItemDescriptionStyled><FaPhoneAlt color='#FAA307'/> 606838871</ItemDescriptionStyled>
            <ItemDescriptionStyled><FaRulerVertical color='#FAA307'/> 193 cm</ItemDescriptionStyled>
            <ItemDescriptionStyled><IoLocationSharp color='#FAA307'/> Calle Ribera 44, Arroyomolinos</ItemDescriptionStyled>
            <ItemDescriptionStyled><FaRegHandPaper color='#FAA307'/> Diestro</ItemDescriptionStyled>
            <ItemDescriptionStyled><LuCake color='#FAA307'/> 22/08/1991</ItemDescriptionStyled>
        </ProfileContentDivStyled>
    )
}