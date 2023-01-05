import styled from "styled-components/native";

export const Container = styled.View`
    width: 327px;
    height: 50px;
    border-radius: 6px;
    background: ${({ theme }) => theme.COLORS.GRAY_2};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
    line-height: 18.2px;
    color: ${({theme }) => theme.COLORS.WHITE};
`