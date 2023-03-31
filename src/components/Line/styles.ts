import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = { 
    good?: boolean;
}

export const Container = styled(TouchableOpacity)`
    width: 327px;
    height: 49px;
    border-radius: 6px;
    border: 1px solid ${({ theme}) => theme.COLORS.GRAY_5};
    display: flex;
    flex-direction: row;
    margin: 4px 0;
    padding: 0 14px;
    justify-content: space-between;
    align-items: center;
`
export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Time = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.SSM}px;
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.BOLD};
    line-height: 15px;   
`
export const Space = styled.Text`
    margin: 0 12px;
`
export const Description = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.NORMAL};
    line-height: 20px;   
`
export const Marker = styled.View<Props>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ good, theme}) => good ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
`