import theme from "@theme/index";
import styled from "styled-components/native";

type Props = {
    background?: string;
    borderColor?: string;
    small?: boolean;
    textColor?: string;
    marginBottom?: number;
    
}

export const Container = styled.View<Props>`
    width: ${({ small  }) => small ? 191 : 327}px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid ${({ borderColor}) => borderColor ? borderColor : theme.COLORS.GRAY_2};
    background-color: ${({ background }) => background ? background : theme.COLORS.GRAY_2};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : 36 }px;
`
export const Title = styled.Text<Props>`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
    line-height: 18.2px;
    color: ${({textColor }) => textColor ? textColor : theme.COLORS.WHITE};
`