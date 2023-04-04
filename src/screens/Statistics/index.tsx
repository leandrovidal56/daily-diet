import { PercentageCard } from "@components/PercentageCard";
import { SummaryCard } from "@components/SummaryCard";
import { Text } from "@components/Text";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BackIcon } from "@screens/NewEat/styles";
import { BackButton, Container, Content, Percentage, Row } from "./styles";
import { eatsGetAll } from '@storage/user/userGetEat';
import { useCallback, useEffect, useState } from "react";



export function Statistics(){
    const navigation = useNavigation();
    const [eats, setEats] = useState([''])
    const [eatsRegister, setEatsRegister] = useState(0)
    const [eatsGood, setEatsGood] = useState(0)
    const [eatsBad, setEatsBad] = useState(0)
    const [eatsPercentage, setEatsPercentage] = useState(0)
    

    async function fetchEatAll() {
        const storage = await eatsGetAll()
        const good = storage.filter(object => object.diet);
        setEatsGood(good.length)
        const bad = storage.filter(object => !object.diet);
        setEatsBad(bad.length)

        setEats(storage)
        setEatsRegister(storage.length)
        console.log(eatsRegister, 'teste Register dentro do fetchAll')
        console.log(eatsGood, 'teste good dentro do fetchAll')
        // setEatsPercentage((eatsGood / eatsRegister) *100)
    }
    
    function handleGoBack(){
        navigation.goBack()
      }
      async function testando (){
        const storage = await eatsGetAll()
        setEatsPercentage((eatsGood / eatsRegister) *100 )

      }
    useEffect(() =>{
        testando()
    },[])
      useFocusEffect(useCallback(() => {
        fetchEatAll();
      },[eatsGetAll]))
    
    return (
        <Container>
            <Percentage>
            <BackButton onPress={handleGoBack}>
                <BackIcon  />
              </BackButton>
                <Text
                    title={eatsPercentage}
                    subTitle="das refeições dentro da dieta"
                />

            </Percentage>
            <Content>
                <SummaryCard
                    title="4"
                    subTitle="melhor sequência de pratos dentro da dieta"
                />
                <SummaryCard
                    title={eatsRegister}
                    subTitle="refeições registradas"
                />
                <Row>
                <SummaryCard
                    title={eatsGood}
                    subTitle="refeições dentro da dieta"
                    small
                    background="#E5F0DB"
                    />
                <SummaryCard
                    title={eatsBad}
                    subTitle="refeições fora da dieta"
                    small
                    background="#F4E6E7"
                    />
                </Row>

            </Content>

        </Container>
    )
}