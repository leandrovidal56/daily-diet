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
    width: 159.5px;
    height: 50px;
    border-radius: 6px;
    margin-top: 8px;
    background-color: ${({ good, theme}) => good ? theme.COLORS.GRAY_6 : theme.COLORS.RED_MID};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
    line-height: 18.2px;
    color: ${({theme }) => theme.COLORS.GRAY_1};
`

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 327px;
`
export const Marker = styled.View<Props>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    margin-right: 8px;
    background-color: ${({ good, theme}) => good ? theme.COLORS.GREEN_MID : theme.COLORS.RED_DARK}
`