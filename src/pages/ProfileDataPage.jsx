import { useState } from 'react'
import { SegmentLeftControlComponent } from '../components/Buttons/SegmentControlComponent'
import { HeaderComponent } from '../components/Header/Header'
import { BodyStyled } from '../components/body'
import { IosHeaderBlackComponent } from '../components/IOS/IosHeaderBlack'
import { DataDescriptionComponent } from '../components/Content/DataDescription'
import { BottomBarProfileComponent } from '../components/BottomBar/bottomBar'



export const ProfileDataPage = () => {
  const [count, setCount] = useState(0)

  return (
      <BodyStyled>
        <IosHeaderBlackComponent></IosHeaderBlackComponent>
        <HeaderComponent></HeaderComponent>
        <SegmentLeftControlComponent></SegmentLeftControlComponent>
        <DataDescriptionComponent></DataDescriptionComponent>
        <BottomBarProfileComponent></BottomBarProfileComponent>
      </BodyStyled>
  )
}

export default ProfileDataPage
