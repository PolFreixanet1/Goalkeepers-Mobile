import { useState } from 'react'
import { SegmentCenterControlComponent } from './components/Buttons/SegmentControlComponent'
import { HeaderComponent } from './components/Header/Header'
import { BodyStyled } from './components/body'
import { IosHeaderBlackComponent } from './components/IOS/IosHeaderBlack'
import { BottomBarProfileComponent } from '../components/BottomBar/bottomBar'


const ProfilePhotos = () => {
  const [count, setCount] = useState(0)
  
  return (
      <BodyStyled>
        <IosHeaderBlackComponent>ss</IosHeaderBlackComponent>
        <HeaderComponent></HeaderComponent>
        <SegmentCenterControlComponent></SegmentCenterControlComponent>
        <BottomBarProfileComponent></BottomBarProfileComponent>
      </BodyStyled>
  )
}

export default ProfilePhotos
