
import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Header = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const Space = styled.View`
    width: 40px;
`

export const Container = styled.View`
    width: 100%;
    height: 124px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-top: 30px;
    background: ${({theme }) => theme.COLORS.GREEN_LIGHT};

`

export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    line-height: 23.4px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_1
}))``
