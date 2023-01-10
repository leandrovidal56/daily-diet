import { PercentageCard } from "@components/PercentageCard";
import { SummaryCard } from "@components/SummaryCard";
import { Text } from "@components/Text";
import { Container, Content, Percentage, Row } from "./styles";

export function Statistic(){
    return (
        <Container>
            <Percentage>
                <Text
                    title="90,86%"
                    subTitle="das refeições dentro da dieta"
                    
                />

            </Percentage>
            <Content>
                <SummaryCard
                    title="4"
                    subTitle="melhor sequência de pratos dentro da dieta"
                />
                <SummaryCard
                    title="109"
                    subTitle="refeições registradas"
                />
                <Row>
                <SummaryCard
                    title="32"
                    subTitle="refeições dentro da dieta"
                    small
                    background="#E5F0DB"
                    />
                <SummaryCard
                    title="77"
                    subTitle="refeições fora da dieta"
                    small
                    background="#F4E6E7"
                    />
                </Row>

            </Content>

        </Container>
    )
}