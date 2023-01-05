import styled from "styled-components/native";

export const Container = styled.View`
    width: 327px;
    height: 102px;
    border-radius: 8px;
    background: ${({theme }) => theme.COLORS.GREEN_LIGHT};
    display: flex;
    align-items: center; 
    justify-content: center;
`