import { BackButton, BackIcon, Container, Header, Text } from "./styles";
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
            <Header>
                <BackButton onPress={handleGoBack}>
                    <BackIcon  />
                </BackButton>
                <Text>{title}</Text>
            </Header>
        </Container>
    )    
}