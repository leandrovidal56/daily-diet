import styled from "styled-components/native";

type Props = { 
    good?: boolean;
}

export const Container = styled.View`

    display: flex;
    justify-content: center;
    margin-top: 30px;
`
export const ButtonRow = styled.View<Props>`
    width: 144px;
    height: 34px;
    border-radius: 20px;
    margin-top: 8px;
    background-color: ${({ good, theme}) => good ? theme.COLORS.GRAY_6 : theme.COLORS.RED_MID};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-weight: ${({theme}) => theme.FONT_WEIGHT.NORMAL};
    line-height: 18.2px;
    color: ${({theme }) => theme.COLORS.GRAY_1};
`

export const Marker = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 7px;
    margin-right: 8px;
    background-color: ${({ good, theme}) => good ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
`