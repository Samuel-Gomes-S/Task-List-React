import React, { useContext } from "react";
import { Background, ContainerTask, TitleTask, ContentTask } from "./styles/stylesGeral";
import Tasklist from "./components/TaskList/TaskList";
import TaskInput from "./components/InputTask/Input";
import { TaskContext } from "./components/context/context";
import { FilterTask } from "./Filter/Filter";

function App() {

  const { task } = useContext(TaskContext)

  return (
    <Background> {/*Componente de fundo envolve todo o conteúdo*/}
      <ContainerTask> {/*Container principal*/}
        <ContentTask lengthTasklist={task.length}> {/*Container para o conteudo*/}
          <TitleTask> Lista de tarefas </TitleTask>{/* Titulo*/}
          <TaskInput /> {/*Componente responsavel pelo entrada dos dados da tarefas*/}
          {task.length === 0 ? null : (<FilterTask />)}{/* Exibe o componente de filtro somente se houver tarefas*/}
          <Tasklist /> {/*Componente responsavel pelo input*/}
        </ContentTask>
      </ContainerTask>
    </Background>
  );
}

export default App;
