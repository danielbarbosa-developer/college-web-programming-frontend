import {Container} from "./styles";

export function ActivityTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Curricular Unit</th>
                        <th>Activity</th>
                        <th>Test</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Web Programming</td>
                        <td>Frontend Development</td>
                        <td>8.50</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Web Programming</td>
                        <td>Authentication Development</td>
                        <td>9.0</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Web Programming</td>
                        <td>Page Styles</td>
                        <td>10</td>
                        <td>05/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}