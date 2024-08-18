import React, { useContext, useState } from "react"
import { ContainerFilter, FilterButton } from "../styles/stylesFilter"
import { TaskContext } from "../components/context/context"


export function FilterTask() {
    
    const { filterValue, setFilterValue } = useContext(TaskContext)

    //função para alterar o valor do filtro
    function handleFilterBtn(value) {
        setFilterValue(value)
        return filterValue
    }

    return (
        <ContainerFilter> {/*Container conteudo do filtro*/}
            <p> Mostrar: </p>
            <FilterButton
                active={filterValue === "Todas"}
                onClick={() => handleFilterBtn("Todas")}
            >{/*Botão que mostra todas as tarefas */}
                Todas
            </FilterButton>
            <FilterButton
                active={filterValue === "Concluidas"}
                onClick={() => handleFilterBtn("Concluidas")}
            >{/*Botão que mostra só as tarefas concluidas */}
                Concluidas
            </FilterButton>
            <FilterButton
                active={filterValue === "Pendentes"}
                onClick={() => handleFilterBtn("Pendentes")}
            >{/*Botão que mostra só as tarefas pendentes */}
                Pendentes
            </FilterButton>
        </ContainerFilter >
    )
}