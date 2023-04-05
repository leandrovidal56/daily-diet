import { Button } from "@components/Button";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { eatEditByUser } from "@storage/user/userEditEat";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container, Content } from "./styles";

type Props = TouchableOpacity & {
    hour?: string;
    title?: string;
    description?: string;
    diet?: boolean;

}

export function EditEat({navigation, route}: Props){
    async function handleEditEat(){
    eatEditByUser(route.params, title, description, diet)
    navigation.navigate('Home')

    }
    const [title, setTitle] = useState(route.params.eat)
    const [description, setDescription] = useState(route.params.description)
    const [diet, setDiet] = useState(route.params.diet)

    return (
        <Container>
            <HeaderBackButton
                title="Editar refeição"
            />
            <Content>
                <Input 
                    title="Nome" 
                    value={title}
                    onChangeText={setTitle} 
                />
                <Input 
                    title="Descrição" 
                    large 
                    value={description} 
                    onChangeText={setDescription}
                />
                <Select diet={diet} setDiet={setDiet} />
            </Content>
            <Button title="Salvar alterações" onPress={handleEditEat} />
        </Container>
    )
}