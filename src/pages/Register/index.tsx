import {Background, Container, Content, FormContainer, InputContainer} from "./styles";
import {FiArrowLeft, FiLock, FiMail, FiUser} from "react-icons/fi";
import {Button} from "../../components/button";
import {Link} from "react-router-dom";

export function Register(){
    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Create Account</h2>
                    <form action="">
                        <InputContainer>
                            <FiUser size={40}/>
                            <input type="text" placeholder="Name" />
                        </InputContainer>
                        <InputContainer>
                            <FiMail size={40}/>
                            <input type="email" placeholder="E-mail" />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}/>
                            <input type="password" placeholder="password" />
                        </InputContainer>
                        <Button type="submit">Create</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}/>
                        Return and sign up
                    </Link>
                </FormContainer>
            </Content>
            <Background>

            </Background>
        </Container>
    )
}