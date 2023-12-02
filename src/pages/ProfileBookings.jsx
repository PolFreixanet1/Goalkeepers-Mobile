import { useState } from 'react'
import { SegmentRigthControlComponent } from './components/Buttons/SegmentControlComponent'
import { HeaderComponent } from './components/Header/Header'
import { BodyStyled } from './components/body'
import { BookingItemsComponent } from '../components/Content/BookingsItem'
import { BottomBarProfileComponent } from '../components/BottomBar/bottomBar'
import { IosHeaderWhiteComponent } from '../components/IOS/IosHeaderBlack'



const ProfileBookings = () => {
  const [count, setCount] = useState(0)

  return (
    <BodyStyled>
    <IosHeaderWhiteComponent></IosHeaderWhiteComponent>
    <HeaderComponent></HeaderComponent>
    <SegmentRigthControlComponent></SegmentRigthControlComponent>
    <BookingItemsComponent></BookingItemsComponent>
    <BookingItemsComponent></BookingItemsComponent>
    <BookingItemsComponent></BookingItemsComponent>
    <BookingItemsComponent></BookingItemsComponent>
    <BookingItemsComponent></BookingItemsComponent>
    <BottomBarProfileComponent></BottomBarProfileComponent>
  </BodyStyled>
  )
}

export default ProfileBookings
