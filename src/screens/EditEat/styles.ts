import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: ${({theme }) => theme.COLORS.GRAY_8};
    align-items: center;
    margin-bottom: 40px;
`

export const Content = styled.View`
    height: 80%;
    border-radius: 20px;
    align-items: center;
`
