import styled from "styled-components";

export const NavContainer = styled.div`
    position: sticky;
    /* background-color: #17a2b8; */
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
        padding: 8px 12px;
    }

    .teal-button:last-of-type {
        border-right: solid 1px white;
    }

    input {
        padding: 8px;
        width: 40%;
    }

    #search-level {
        display: flex;
        justify-content: center;
        width: 80%;
        padding: 3px;
    }

    .lime {
        background-color: #94BB20;
        padding: 8px;
        border: none;
    }

    .icon {
        width: 15px;
    }
`;

export const LayerThree = styled.div``;
