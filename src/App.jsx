import { useState } from 'react'
import { BodyStyled } from './components/body'
import { IosHeaderBlackComponent } from './components/IOS/IosHeaderBlack'
import { BottomBarContactComponent } from './components/BottomBar/bottomBar'
import { HeaderTextComponentBlack } from './components/Header/HeaderText'
import { InputTextStyled,InputCheckboxStyled } from './components/Content/InputTextStyled'
import { ButtonPrimaryStyled } from './components/Buttons/buttonStyled'




const App = () => {
  const [count, setCount] = useState(0)

  return (
      <BodyStyled>
        <IosHeaderBlackComponent color="black"></IosHeaderBlackComponent>
        <HeaderTextComponentBlack></HeaderTextComponentBlack>
        <InputTextStyled placeholder=' Name'height='text' type='text' ></InputTextStyled>
        <InputTextStyled placeholder=' Teléfono' height='text' type='text'></InputTextStyled>
        <InputTextStyled placeholder=' Motivo' height='text' type='text' ></InputTextStyled>
        <InputTextStyled placeholder=' Mensaje' height='message' type='text' ></InputTextStyled>
        <InputCheckboxStyled id="mensaje" placeholder=' Mensaje' type='checkbox'></InputCheckboxStyled>
        <ButtonPrimaryStyled>Enviar</ButtonPrimaryStyled>
        <BottomBarContactComponent></BottomBarContactComponent>
      </BodyStyled>
  )
}

export default App
