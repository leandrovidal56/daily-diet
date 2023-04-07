import { TextInput,TextInputProps, TouchableOpacityProps } from "react-native";
import { Container, Content, Text } from "./styles";

type Props = TouchableOpacityProps & TextInputProps &{
    title: string;
    small?: boolean;
    large?: boolean;
    inputRef?: React.RefObject<TextInput>
}

export function Input({title, small, large, inputRef, ...rest}: Props) {
    return (
        <Container >
            <Text>{title}</Text>
            <Content ref={inputRef} small={small} large={large} {...rest}/>                
        </Container>
    )
}