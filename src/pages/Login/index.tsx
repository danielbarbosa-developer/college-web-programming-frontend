import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import {Button} from "../../components/button";
import {Link} from "react-router-dom";
import{Container, FormContainer, InputContainer, Background, Content} from "./styles";

export function Login(){
    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Sign In</h2>
                    <form action="">
                        <InputContainer>
                            <FiMail size={40}/>
                            <input type="email" placeholder="E-mail" />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}/>
                            <input type="password" placeholder="password" />
                        </InputContainer>
                        <Button type="submit">Login</Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn size={40}/>
                        Create a Account
                    </Link>
                </FormContainer>
            </Content>
            <Background>

            </Background>
        </Container>
    )
}