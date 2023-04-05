import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    justify-content: flex-end;
`

export const Percentage = styled.View`
    width: 100%;
    height: 20%;
    background: ${({theme }) => theme.COLORS.GREEN_LIGHT};
    justify-content: center;
    margin-top: 50px;
`

export const BackButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    padding-top: 60px;
    padding-left: 27px;
    background-color: red;
`
export const BackIcon = styled(ArrowLeft).attrs(({ theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_1
}))`

`;

export const Content = styled.View`
    height: 80%;
    border-radius: 20px;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    align-items: center;
`

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
`
