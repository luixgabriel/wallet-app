import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../styles/theme";


const Container = styled.View`
padding: ${RFValue(10)}px`;

const ContentHeader = styled.View`
justify-content: center;
align-items: center;
padding: ${RFValue(20)}px;
`;

const ContentBody = styled.View``;

const ContentFooter = styled.View``;

const ViewButton = styled.View`
flex-direction: row;
gap: 10px;
`;

const Title = styled.Text`
margin-top: 30px;
text-align: center;
font-size: ${RFValue(25)}px;
`;

const Description = styled.Text`
margin-top: ${RFValue(60)}px;
margin-bottom: ${RFValue(15)}px;
font-size: ${RFValue(15)}px;
font-family: ${theme.FONTS.POPPINSLIGHT};
`;

export {
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  ViewButton,
  Title,
  Description,
};
