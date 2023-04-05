import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 153.5px;
    margin-top: 24px;
    height: auto;
`
export const Content = styled(TouchableOpacity)`
    width: 153.5px;
    height: 48px;
    border-radius: 6px;
    background: ${({ theme}) => theme.COLORS.GRAY_8};
    border: 1px solid ${({ theme}) => theme.COLORS.GRAY_5};
    align-items: center;
    justify-content: center;
`

export const ViewCalendar = styled(TouchableOpacity)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme}) => theme.COLORS.GRAY_8};
`

export const ViewCalendarCenter = styled(TouchableOpacity)`
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    font-size: ${({ theme}) => theme.FONT_SIZE.SM}px;
    font-weight: ${({ theme}) => theme.FONT_WEIGHT.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_2};
    line-height: 18.2px;
    margin-bottom: 4px;
`