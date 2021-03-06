import {Container} from "./styles";
import {GoFile, GoNote, GoGraph} from 'react-icons/go';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Curricular Units</p>
                    <GoFile size={40}/>
                </header>
                <strong>
                    25
                </strong>
            </div>
            <div>
                <header>
                    <p>Activities</p>
                    <GoNote size={40}/>
                </header>
                <strong>
                    80
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>General Average</p>
                    <GoGraph size={40}/>
                </header>
                <strong>
                    9.17
                </strong>
            </div>
        </Container>
    )
}