import { Container, Image, SubTitle, Title } from "./styles";
import bad from '@assets/bad.png'
import { Button } from "@components/Button";

export function FeedBackBad(){
    return (
        <Container>
            <Title>Que pena!</Title>
            <SubTitle>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</SubTitle>
            <Image source={bad}/>
            <Button small title="Ir para a página inicial" />
        </Container>
    )
}