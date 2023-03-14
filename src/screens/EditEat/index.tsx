import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Line } from "@components/Line";
import { PercentageCard } from "@components/PercentageCard";
import { Select } from "@components/Select";
import { SummaryCard } from "@components/SummaryCard";

import { Container, Content, Header, Text, Row  } from "./styles";

export function EditEat(){
    return (
        <Container>
            <Header>
                <Text>Editar refeição</Text>
            </Header>
            <Content>
                <Input title="Nome"/>
                <Input title="Descrição" large/>
                <Row>
                    <Input title="Data" small />
                    <Input title="Data" small />
                </Row>
                <Select/>
            </Content>
            <Button title="Salvar alterações" />

        </Container>
    )
}