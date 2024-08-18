import React, { useContext } from "react";
import { Input, AreaInput, SubmitButton, TaskCreationText, ContentInput } from "../../styles/stylesInput";
import { TaskContext } from "../context/context";

export default function TaskInput() {

    const { handleMouseEnter, handleMouseLeave, isHovered, handleRegisterTask, taskText, setTaskText } = useContext(TaskContext);

    return (
        <AreaInput> {/*Container principal*/}
            <TaskCreationText>Criar tarefa:</TaskCreationText> {/*Texto de orientação*/}
            <ContentInput> {/*Container para o conteudo*/}
                <Input
                    placeholder="Digite a tarefa aqui"
                    type="text"
                    value={taskText}
                    onChange={(event) => setTaskText(event.target.value)}
                /> {/*Input para captar a tarefa*/}
                <SubmitButton
                    ishovered={isHovered}
                    onClick={handleRegisterTask}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                > {/*Botão para registrar a tarefa*/}
                    Registrar 
                </SubmitButton>
            </ContentInput>
        </AreaInput>
    )
}