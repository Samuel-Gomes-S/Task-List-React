import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
    const [idCounter, setIdCounter] = useState(0); {/** Estado para controlar os ID */ }

    const [filterValue, setFilterValue] = useState("Todas"); {/** Estado para controlar o filtro da lista. */ }

    const [task, setTask] = useState(
        [
            // { id: '1', description: 'descrição', isCompleted: false },
        ]
    ); {/** Estado da Lista contendo as tarefas. */ }

    const [taskText, setTaskText] = useState(''); {/** Estado para controlar a descrição da tarefa */ }

    const [isHovered, setIsHovered] = useState(); {/** Estado para controlar o movimento do mouse no botão */ }

    // Função para controlar o próximo ID
    function nextid(idCounter) {
        const currentId = idCounter;
        setIdCounter(idCounter + 1);
        return currentId;
    }

    // Função para a entrada do mouse no botão
    function handleMouseEnter() {
        setIsHovered(true);
    };

    // Função para a saída do mouse no botão
    function handleMouseLeave() {
        setIsHovered(false);
    };

    // Função para o registro das tarefas
    function handleRegisterTask() {
        if (taskText === '' || taskText === null) {
            setTaskText('');
            return;
        }
        const newTask = {
            id: nextid(idCounter),
            description: taskText,
            isCompleted: false,
        }
        setTask([...task, newTask]);
        setTaskText('');
    }

    // Função para a remoção das tarefas
    function handleRemoveTask(id) {
        setTask(prevTasks => prevTasks.filter(task => task.id !== id));
    }

    // Função para alterar o status da tarefa 
    function handleCompleteTask(id) {
        setTask(prevTasks => prevTasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    }

    return (
        <TaskContext.Provider value={{
            handleMouseEnter,
            handleMouseLeave,
            isHovered,
            setIsHovered,
            handleRegisterTask,
            task,
            taskText,
            setTaskText,
            handleRemoveTask,
            handleCompleteTask,
            filterValue,
            setFilterValue
        }}>
            {children} {/** Renderiza os componentes filhos dentro do contexto */}
        </TaskContext.Provider>
    );
}
