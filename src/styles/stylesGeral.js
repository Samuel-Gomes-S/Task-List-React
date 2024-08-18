import styled from "styled-components";

const Background = styled.div`
    height: 100vh;
    background-color: rgba(140, 134, 134, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto; 
`;

const ContainerTask = styled.div`
    margin: auto;
    overflow: hidden;
    justify-content: center; 
    align-items: center;
    width: 60vw;
    border-radius: 25px 25px 8px 8px;
    padding: 15px;
`;

const TitleTask = styled.h1`
    overflow: hidden;
    padding-left: 5%;
    text-align: center;
`;

const ContentTask = styled.div`
    display: flex;
    border-radius: ${(props) => (props.lengthTasklist === 0 ? '50px' : '15px')};
    background-color: #f0f2fe;
    flex-direction: column;
    padding-bottom: 20px;
    overflow: hidden; 

`;


export {
    Background,
    ContainerTask,
    TitleTask,
    ContentTask
}