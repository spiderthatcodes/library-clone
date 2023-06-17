import { FC } from 'react';
import { Container, Wrapper, GridSide, LinkSide } from './style';

const Home: FC = () => {
    return (
        <Wrapper>
            <Container>
                <GridSide></GridSide>
                <LinkSide></LinkSide>
            </Container>
        </Wrapper>
    );
};

export default Home;
