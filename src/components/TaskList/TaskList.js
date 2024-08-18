import React, { useContext } from "react";
import { ContainerList, Checkbox, Description, RemoveListBTN, ContentList } from "../../styles/stylesList";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TaskContext } from "../context/context";

export default function Tasklist() {

    const { handleRemoveTask, handleCompleteTask, task, filterValue } = useContext(TaskContext)

    {/*Valor do filtro selecionado por padrão começa em Todas*/}
    const filteredTasks = task.filter(task => {
        if (filterValue === 'Todas') return true;
        if (filterValue === 'Concluidas') return task.isCompleted;
        if (filterValue === 'Pendentes') return !task.isCompleted;
        return true;
    });

    return filteredTasks.map((task) => (
        <ContainerList key={task.id}> {/*Container de cada tarefa*/}
            <Checkbox
                type="checkbox"
                checked={task.isCompleted}
                onClick={() => handleCompleteTask(task.id)}
            /> {/*Caixa de seleção para marcar a tarefa concluida ou não*/}
            <ContentList> {/* Conteudo de cada tarefa - adapta o tamanho até atingir o maximo, mostrando a descrição*/}
                <Description> {/* Descrição da tarefa*/}
                    {task.description}
                </Description>
            </ContentList>
            <RemoveListBTN 
            onClick={() => handleRemoveTask(task.id)}>  {/* Botão de remover*/}
            <RiDeleteBin6Line size={'30px'} color={"#000"} />{/* Icone lixeira */}
            </RemoveListBTN>
        </ContainerList>))
}