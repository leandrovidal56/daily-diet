import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
    background?: string;
    small?: boolean;
    fail?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: ${({ small  }) => small ? 157.5 : 327}px;
    height: ${({ small  }) => small ? 107 : 89}px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${({ fail }) => fail ? '#F4E6E7' : '#EFF0F0'};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 24px;
    line-height: 31.2px;
    color: #1B1D1E;
    font-weight: 700;
`
export const SubTitle = styled.Text`
    font-size: 14px;
    line-height: 18.2px;
    color: #333638;
    margin-top: 8px;

`