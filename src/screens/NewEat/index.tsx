import { Input } from "@components/Input";
import { PercentageCard } from "@components/PercentageCard";
import { SummaryCard } from "@components/SummaryCard";

import { Container, Content, Header, Text  } from "./styles";

export function NewEat(){
    return (
        <Container>
            <Header>
                <Text>Nova refeição</Text>
            </Header>
            <Content>
                <Input/>
            </Content>

        </Container>
    )
}