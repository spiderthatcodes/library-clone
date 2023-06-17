import { FC } from 'react';
import { Container, Wrapper, GridSide, LinkSide, ColorCard, BlackBox } from './style';

const Home: FC = () => {
    const colors: string[] = [
        '#007bff',
        '#6610f2',
        '#6f42c1',
        '#e83e8c',
        '#dc3545',
        '#fd7e14',
        '#ffc107',
        '#28a745',
        '#20c997',
        '#17a2b8',
        '#eb6126',
        '#660B80',
    ];

    return (
        <Wrapper>
            <Container>
                <GridSide>
                    {colors.map((color) => (
                        <ColorCard key={color} color={color} />
                    ))}
                </GridSide>
                <LinkSide>
                    <BlackBox />
                </LinkSide>
            </Container>
        </Wrapper>
    );
};

export default Home;
