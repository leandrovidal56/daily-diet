import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #FAFAFA;
    padding: 0 30px;

`
export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    line-height: 41.6px;
    font-weight:${({ theme }) => theme.FONT_WEIGHT.NORMAL};
    color: ${({ theme}) => theme.COLORS.GRAY_1};
    margin-top: 36px;
    margin-bottom: 8px;
`
