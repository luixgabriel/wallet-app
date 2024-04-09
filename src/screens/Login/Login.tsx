import { SafeAreaView, Text } from "react-native"
import { Container, ContentBody, ContentFooter, ContentHeader, Description, Title, ViewButton } from "./styles"
import styled from "styled-components/native"
import ButtonSocialGoogle from "../../components/ButtonSocialGoogle/ButtonSocialGoogle"


const MyText = styled.Text`
font-size: 20px;
color: aliceblue;
`
const Login = () => {
  return (
    // Respeita as barras de cima do cel o SafeAreaView
    <SafeAreaView>
        <Container>
            <ContentHeader>
              {/* Macete pra quebrar linha {"\n"} */}
              <Title>Seja bem vindo(a) a {"\n"} Wallet App!</Title>
              <Description>
                Entrar com redes sociais
              </Description>
              <ViewButton>
                <ButtonSocialGoogle title="Google" />
                <ButtonSocialGoogle title="Google" />
              </ViewButton>
            </ContentHeader>
            <ContentBody></ContentBody>
            <ContentFooter></ContentFooter>
        </Container>
    </SafeAreaView>
  
  )
}

export default Login
