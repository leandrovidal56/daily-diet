import { TouchableOpacityProps } from "react-native";
import { Container, Content, Text } from "./styles";

type Props = TouchableOpacityProps &{
    title: string;
    small?: boolean;
    large?: boolean;
}

export function Input({title, small, large}: Props) {
    return (
        <Container>
            <Text>{title}</Text>
            <Content small={small} large={large}>                
            </Content>
        </Container>
    )
}