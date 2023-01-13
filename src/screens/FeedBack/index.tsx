import { Container, Image, SubTitle, Title } from "./styles";
import celebration from '@assets/celebration.png'
import { Button } from "@components/Button";

export function FeedBack(){
    return (
        <Container>
            <Title>Continue assim!</Title>
            <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>
            <Image source={celebration}/>
            <Button small title="Ir para a página inicial" />
        </Container>
    )
}