import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    align-items: center;
    margin-bottom: 40px;
`

export const Header = styled.View`
    width: 100%;
    height: 15%;
    background: ${({theme }) => theme.COLORS.GREEN_LIGHT};
    align-items: center;
    padding-top: 30px;
    padding-left: 24px;
    flex-direction: row;
`
export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    line-height: 23.4px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
`
export const Content = styled.View`
    height: 80%;
    border-radius: 20px;
    align-items: center;
`
export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 327px;
`

export const BackButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    margin-right: 82px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_1
}))`

`;