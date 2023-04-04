import styled from "styled-components/native";

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
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    flex-direction: row;
`
export const HeaderText = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    line-height: 23.4px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
`
export const Content = styled.View`
    height: 70%;
    border-radius: 20px;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    line-height: 23.4px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
    margin-top: 40px;
`

export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    line-height: 20.8px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.NORMAL};
    color: ${({ theme}) => theme.COLORS.GRAY_2};
    margin-top: 8px;
`

export const Date = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    line-height: 18.2px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
    margin-top: 24px;
`
export const DateText = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    line-height: 20.8px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.NORMAL};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
    margin-top: 8px;
`
export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 327px;
`