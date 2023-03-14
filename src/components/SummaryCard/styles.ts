import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
    background?: string;
    small?: boolean;
    fail?: boolean;
    success?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: ${({ small  }) => small ? 157.5 : 327}px;
    height: ${({ small  }) => small ? 107 : 89}px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${({ background }) => background ? background : theme.COLORS.GRAY_6};
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Title = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.XL}px;
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
    line-height: 31.2px;
`
export const SubTitle = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.XL}px;
    line-height: 18.2px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    margin-top: 8px;

`