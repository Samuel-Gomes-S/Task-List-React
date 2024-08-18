import styled from "styled-components";

const AreaInput = styled.div`
    display: flex; 
    gap: 5%;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    overflow: hidden;
`;

const Input = styled.input`
    justify-content: center;
    align-items: center;
    padding-left: 2%;
    width: 60%;
    height: 30px;
    border-radius: 8px;
    border: 2px solid #000;
`;

const ContentInput = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5%;
    align-items: center;
`;

const SubmitButton = styled.button`
    background-color: ${(props) => (props.ishovered ? '#fff' : '#d6dad5')};
    border: ${(props) => (props.ishovered ? '2px solid #3d3' : '1px outset #171717')};
    width: 100px;
    height: 35px;
    border-radius: 8px;
    &:hover {
        background-color: #fff;
    }

    &:active {
        background-color: #ddd;
        transform: scale(0.95);
    }
`;

const TaskCreationText = styled.h3`
    white-space: nowrap;
    margin-left: 5%;
`;

export {
    AreaInput,
    Input,
    ContentInput,
    SubmitButton,
    TaskCreationText

}