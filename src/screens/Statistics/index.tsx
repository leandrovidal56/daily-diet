import { PercentageCard } from "@components/PercentageCard";
import { SummaryCard } from "@components/SummaryCard";
import { Text } from "@components/Text";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "@screens/NewEat/styles";
import { BackButton, Container, Content, Percentage, Row } from "./styles";

export function Statistics(){
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack()
      }
    return (
        <Container>
            <Percentage>
            <BackButton onPress={handleGoBack}>
                <BackIcon  />
              </BackButton>
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