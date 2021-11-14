import {Container} from "./styles";
import {Content} from "./styles";

export function Header(){
    return (
        <Container>
            <Content>
                <h1>My Activities Space</h1>
                <div>
                    <button type="button">
                        New Curricular Unit
                    </button>
                    <button type="button">
                        New Activity
                    </button>
                </div>
            </Content>
        </Container>
    )
}