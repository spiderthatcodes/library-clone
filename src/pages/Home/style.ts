import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0 60px;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const GridSide = styled.div`
    flex: 70%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 3px;
`;

export const LinkSide = styled.div`
    width: 250px;
`;

export const ColorCard = styled.div<{ color: string }>`
    background-color: ${({ color }) => color && color};
    height: 160px;
    width: 205px;
    margin: 5px;
    border-radius: 4px;
    border: darkgrey 1px solid;
    /* flex: 25%; */
`;
