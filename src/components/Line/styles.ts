import styled from "styled-components/native";

export const Container = styled.View`
    width: 327px;
    height: 49px;
    border-radius: 6px;
    background: ${({ theme}) => theme.COLORS.GRAY_5};
    border: 1px solid ${({ theme}) => theme.COLORS.GRAY_5};
    display: flex;
    flex-direction: row;
`