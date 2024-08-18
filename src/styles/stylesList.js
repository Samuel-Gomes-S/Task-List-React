import styled from "styled-components";


const ContainerList = styled.div`
    display: flex;
    background-color: #fff; 
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 7.5px 15px 7.5px 15px;
    padding: 15px;
    border-radius: 8px;
    max-height: 500px;
    overflow: hidden;
`;

const Checkbox = styled.input`
    padding: 15px;
    width: 35px;
    height: 20px;
`;

const Description = styled.div`
    align-items: center;
    display: flex;
    font-size: 20px;
    color: #000;
    border-radius: 8px;
    max-height: 500px;
`;

const RemoveListBTN = styled.button`
    display:flex;
    max-width: 40px;
    max-height: 40px;
    background-color: #fff;
    border: none;
    margin-left: 15px;
    cursor: pointer;
    overflow: visible;
    position: sticky;
    transform-origin:  center;
    padding: 5px; 
    :hover{
        transform: scale(1.10);
        color: #f00;
    }
`;

const ContentList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export {
    ContainerList,
    Checkbox,
    Description,
    RemoveListBTN,
    ContentList
}