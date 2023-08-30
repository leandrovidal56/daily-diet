import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
  backgroundGreen?: boolean | null;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 327px;
  height: 102px;
  border-radius: 8px;
  background: ${({ backgroundGreen }) =>
    backgroundGreen === true
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
