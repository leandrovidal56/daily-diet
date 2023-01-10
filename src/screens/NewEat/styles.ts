import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({theme }) => theme.COLORS.GRAY_8};
`

export const Header = styled.View`
    width: 100%;
    height: 15%;
    background: ${({theme }) => theme.COLORS.GREEN_LIGHT};
    justify-content: center;
    align-items: center;
`
export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    line-height: 23.4px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
`
export const Content = styled.View`
    height: 80%;
    border-radius: 20px;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    align-items: center;
`
