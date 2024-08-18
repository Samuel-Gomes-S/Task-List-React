import styled from "styled-components";

const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin-left: 5%;
    margin-right: 5%;
    max-width: 90%;
    margin-bottom: 15px;
`;
const FilterButton = styled.button`
    background-color: ${({ active }) => (active ? "#33bd" : "#d6dad5")};
    color: ${({ active }) => (active ? "#fff" : "#000")};
    border: none;
    width: 100px;
    height: 25px;
    border-radius: 8px;
    &:hover {
        background-color: #eff;
        color: #000;
        border: 2px solid #eff;
    }

    &:active {
        transform: scale(0.95);
        border: 2px solid #00f;
    }
`;
export {
    ContainerFilter,
    FilterButton
}