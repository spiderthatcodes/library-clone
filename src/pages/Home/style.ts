import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0 60px;
    @media (max-width: 1020px) {
        padding: 0 5px;
    }
`;

export const Container = styled.div`
    display: grid;
    /* width: 100%; */
    grid-template-columns: auto auto;
    @media (max-width: 700px) {
        grid-template-columns: auto
    }
`;

export const GridSide = styled.div`
    /* flex: 70%; */
    display: grid;
    /* width: 100%; */
    grid-template-columns: auto auto auto auto;

    @media (max-width: 1200px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 1020px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 580px) {
        grid-template-columns: auto;
    }
`;

export const LinkSide = styled.div`
    /* width: 250px; */
`;

export const ColorCard = styled.div<{ color: string }>`
    background-color: ${({ color }) => color && color};
    height: 160px;
    width: 205px;
    margin: 10px 0 5px 0;
    border-radius: 4px;
    border: darkgrey 1px solid;
    @media (max-width: 1020px) {
        width: 300px;
    }
    @media (max-width: 580px) {
        width: auto;
    }
    @media (max-width: 580px) {
        width: 100%;
    }
`;

export const BlackBox = styled.div`
    width: 290px;
    height: 50px;
    background-color: darkgray;
    margin: 10px 0 5px 0;
    border-radius: 4px;
`;
