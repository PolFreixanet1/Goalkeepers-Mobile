import { ContentItemBookingDivStyled } from "./ContentDivBookingItem";
import { ItemDescriptionStyled } from "./itemDescription"
import { IoIosCheckmarkCircle } from "react-icons/io";





export const BookingItemsComponent =() => {

    return(

    <ContentItemBookingDivStyled>
        <ItemDescriptionStyled ><IoIosCheckmarkCircle color='#FAA307'/>Fecha</ItemDescriptionStyled>
        <ItemDescriptionStyled>Hora</ItemDescriptionStyled>
    </ContentItemBookingDivStyled>
    )
}