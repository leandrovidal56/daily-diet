import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Status } from "@components/Status";


import { Container, Content, Date, DateText, Header, HeaderText, Row, Text, Title  } from "./styles";

export function Eat(){
    return (
        <Container>
            <Header>
                <HeaderText>Refeição</HeaderText>
            </Header>
            <Content>
                <Title>Sanduíche</Title>
                <Text>
                    Sanduíche de pão integral com atum e 
                    salada de alface e tomate
                </Text>
                <Date>Data e hora</Date>
                <DateText>12/08/2022 às 16:00</DateText>
                <Status title="dentro da dieta" good/>
            </Content>

            <Button title="Editar refeição" marginBottom={9} />
            <Button
                background="#ffffff"
                borderColor="#1B1D1E"
                title="Excluir refeição" 
                textColor="#1B1D1E"
            />
            

        </Container>
    )
}