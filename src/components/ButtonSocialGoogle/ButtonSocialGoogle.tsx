import React from 'react'
import { Button, GoogleIcon, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler';
import pngGoogle from '../../../assets/google.png';


interface Props extends RectButtonProps {
  title: string
}

const ButtonSocialGoogle = ({title, ...rest}: Props) => {
  return (
    <Button {...rest} style={{borderRadius: 10}}>
      <GoogleIcon source={pngGoogle} resizeMode="contain"/>
      <Title>{title}</Title>
    </Button>
  )
}


export default ButtonSocialGoogle
