import styled from "styled-components";

export const NavContainer = styled.div`
    position: sticky;
`;

export const LayerOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 8px;

    #logo {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        font-weight: 400;
    }

    span {
        font-weight: 900 !important;
    }

    .orange-button {
        background-color: #e25300;
        color: #fff;
        border: none;
        margin: 2px;
        line-height: 1.5;
        font-size: 1rem;
        padding: 5px 10px;
        font-weight: 400 !important;
        border-radius: 4px;
    }

`;

export const LayerTwo = styled.div`
    background-color: #17a2b8;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .teal-button {
        background-color: #17a2b8;
        border: none;
        border-left: solid 1px white;
        color: #fff;
        padding: 10px 16px;
    }

    .teal-button:last-of-type {
        border-right: solid 1px white;
    }

    input {
        padding: 8px;
        width: 35%;
    }

    #search-level {
        display: flex;
        justify-content: center;
        width: 100%; 
        padding: 3px;
    }

    .lime {
        background-color: #94BB20;
        padding: 10px;
        border: none;
        border-top: 1px #94BB20 inset;
        border-bottom: 1px #94BB20 outset;
    }

    .icon {
        width: 15px;
    }
`;

export const LayerThree = styled.div``;
