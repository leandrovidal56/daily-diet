import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    justify-content: flex-end;
`
export const Percentage = styled.View`
    width: 100%;
    height: 20%;
    background: ${({theme }) => theme.COLORS.GREEN_LIGHT};
    justify-content: center;
    margin-top: 50px;

`
export const Content = styled.View`
    height: 80%;
    border-radius: 20px;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    align-items: center;
`

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
`
