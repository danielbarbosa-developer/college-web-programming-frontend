import {Header} from "../../components/header";
import {Container} from "./styles";
import {Summary} from "../../components/summary";
import {ActivityTable} from "../../components/activity-table";


export function Dashboard(){
    return(
        <>
            <Header/>
            <Container>
                <Summary/>
                <ActivityTable/>
            </Container>
        </>
    )
}