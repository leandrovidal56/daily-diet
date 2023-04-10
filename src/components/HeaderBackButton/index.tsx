import {BackIcon, Space, Container, Header, Text } from "./styles";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

type Props = {
    title?: string;
}


export function HeaderBackButton ({title}: Props) {
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack()
      }

    return (
        <Container>
            <TouchableOpacity
                 onPress={handleGoBack}
                 >
                <BackIcon  />
            </TouchableOpacity>
            <Text>{title}</Text>
            <Space />
        </Container>
    )    
}