import styled from "styled-components/native";


export const Container = styled.View`
    display: flex;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XLG};
    line-height: 41.6px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
`

export const SubTitle = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.SM};
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.NORMAL};
    color: ${({theme}) => theme.COLORS.GRAY_2};
    line-height: 18.2px;
`