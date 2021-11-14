import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import {Button} from "../../components/button";
import {Link} from "react-router-dom";
import{Container, FormContainer, InputContainer, Error, Background, Content} from "./styles";
import {useForm} from 'react-hook-form';

interface FormData{
    email: string;
    password: string;
}

export function Login(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Sign In</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiMail size={40}/>
                            <input type="email" placeholder="E-mail" { ... register("email", {required: true})} />
                        </InputContainer>
                        {errors.email && <Error>Filling in the field is mandatory</ Error>}
                        <InputContainer>
                            <FiLock size={40}/>
                            <input type="password" placeholder="password" { ... register("password", {required:true})}/>
                        </InputContainer>
                        {errors.password && <Error>Filling in the field is mandatory</ Error>}
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