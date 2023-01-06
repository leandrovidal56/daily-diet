import { Container, Row, Time, Space, Description, Marker  } from "./styles";

export function Line() {
    return (
        <Container>
            <Row>
                <Time>20:00</Time>
                <Space>|</Space>
                <Description>X-tudo</Description>
            </Row>
                <Marker />
            
        </Container>
    )
}