import { BottomBarStyled } from "./BottomBarStyled"
import { IconButtonCalendarStyled, IconButtonContactStyled, IconButtonMediaStyled, IconButtonProfileStyled, IconButtonStatisticsStyled } from "./iconsButtonStyled"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";





export const BottomBarProfileComponent = () => {

    return(
        <BottomBarStyled>
            <IconButtonStatisticsStyled><FaArrowTrendUp size='1.5em'/></IconButtonStatisticsStyled>
            <IconButtonCalendarStyled><FaCalendarAlt size='1.5em'/></IconButtonCalendarStyled>
            <IconButtonProfileStyled type='focus'><CgProfile size='2.5em'/></IconButtonProfileStyled>
            <IconButtonMediaStyled><FaPhotoVideo size='1.5em'/></IconButtonMediaStyled>
            <IconButtonContactStyled><MdOutlineContactSupport size='1.5em'/></IconButtonContactStyled>
        </BottomBarStyled>
    )
}

export const BottomBarContactComponent = () => {

    return(
        <BottomBarStyled>
            <IconButtonStatisticsStyled><FaArrowTrendUp size='1.5em'/></IconButtonStatisticsStyled>
            <IconButtonCalendarStyled><FaCalendarAlt size='1.5em'/></IconButtonCalendarStyled>
            <IconButtonProfileStyled><CgProfile size='1.5em'/></IconButtonProfileStyled>
            <IconButtonMediaStyled><FaPhotoVideo size='1.5em'/></IconButtonMediaStyled>
            <IconButtonContactStyled type='focus'><MdOutlineContactSupport size='2.5em'/></IconButtonContactStyled>
        </BottomBarStyled>
    )
}