import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    line-height: 41.6px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme}) => theme.COLORS.RED_DARK};
`

export const SubTitle = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.NORMAL};
    color: ${({theme}) => theme.COLORS.GRAY_2};
    line-height: 18.2px;
    text-align: center;
`

export const Image = styled.Image`
    margin-top: 50px;
    margin-bottom: 50px;

`
