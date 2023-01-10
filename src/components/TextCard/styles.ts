import styled from "styled-components/native";


export const Container = styled.View`
    display: flex;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.SEMI_BOLD};
    line-height: 31.2px;
`

export const SubTitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    line-height: 18.2px;
    color: ${({theme}) => theme.COLORS.GRAY_2};
    margin-top: 8px;
    padding: 0 10px;
    text-align: center;

`