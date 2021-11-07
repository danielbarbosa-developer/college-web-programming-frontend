import {Background, Container, Content, FormContainer, Error, InputContainer} from "./styles";
import {FiArrowLeft, FiLock, FiMail, FiUser} from "react-icons/fi";
import {Button} from "../../components/button";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';

interface FormData{
    name: string;
    email: string;
    password: string;
}

export function Register(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Create Account</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiUser size={40}/>
                            <input type="text" placeholder="Name" { ... register("name", {required: true})} />
                        </InputContainer>
                        {errors.name && <Error>Filling in the field is mandatory</ Error>}
                        <InputContainer>
                            <FiMail size={40}/>
                            <input type="email" placeholder="E-mail" { ... register("email", {required: true})}/>
                        </InputContainer>
                        {errors.email && <Error>Filling in the field is mandatory</ Error>}
                        <InputContainer>
                            <FiLock size={40}/>
                            <input type="password" placeholder="password" { ... register("password", {required: true})}/>
                        </InputContainer>
                        {errors.password && <Error>Filling in the field is mandatory</ Error>}
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