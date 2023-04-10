import { Container, Image, SubTitle, Title } from "./styles";
import celebration from '@assets/celebration.png'
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function FeedBack(){
    const navigation = useNavigation();

    function handleHome(){
      navigation.navigate('Home')
    }
    return (
        <Container>
            <Title>Continue assim!</Title>
            <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>
            <Image source={celebration}/>
            <Button small title="Ir para a página inicial" onPress={handleHome}/>
        </Container>
    )
}