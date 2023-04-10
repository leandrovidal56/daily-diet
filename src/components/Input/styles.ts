import { TextInput } from "react-native";
import styled from "styled-components/native";

type Props = {
    small?: boolean;
    large?: boolean;
}

export const Container = styled.View`
    flex-direction: column;
    margin-top: 24px;
`
export const Content = styled(TextInput)<Props>`
    width: ${({ small  }) => small ? 153.5 : 327}px;
    height:  ${({ large  }) => large ? 120 : 48}px;
    border-radius: 6px;
    background: ${({ theme}) => theme.COLORS.GRAY_8};
    border: 1px solid ${({ theme}) => theme.COLORS.GRAY_5};
    padding: 15px;
`

export const Text = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.SM}px;
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_2};
    line-height: 18.2px;
    margin-bottom: 4px;
`