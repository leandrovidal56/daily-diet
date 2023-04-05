import { Button } from "@components/Button";
import { DateCalendar } from "@components/DateCalendar";
import { Input } from "@components/Input";
import { Line } from "@components/Line";
import { PercentageCard } from "@components/PercentageCard";
import { Select } from "@components/Select";
import { SummaryCard } from "@components/SummaryCard";
import { BackButton, BackIcon } from "@screens/NewEat/styles";
import { eatEditByUser } from "@storage/user/userEditEat";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container, Content, Header, Text, Row  } from "./styles";

type Props = TouchableOpacity & {
    hour?: string;
    title?: string;
    description?: string;
    diet?: boolean;

}

export function EditEat({navigation, route}: Props){
    function handleGoBack(){
        navigation.goBack()
      }
    async function handleEditEat(){
    eatEditByUser(route.params, title, description, diet)
    navigation.navigate('Home')

    }
    const [title, setTitle] = useState(route.params.eat)
    const [description, setDescription] = useState(route.params.description)
    const [diet, setDiet] = useState(route.params.diet)

    return (
        <Container>
            <Header>
            <BackButton onPress={handleGoBack}>
                <BackIcon  />
              </BackButton>
                <Text>Editar refeição</Text>
            </Header>
            <Content>
                <Input title="Nome" 
                value={title}
                 onChangeText={setTitle} />
                <Input title="Descrição" large 
                value={description} 
                onChangeText={setDescription}
                />
                <Select diet={diet} setDiet={setDiet} />
            </Content>
            <Button title="Salvar alterações" onPress={handleEditEat} />

        </Container>
    )
}