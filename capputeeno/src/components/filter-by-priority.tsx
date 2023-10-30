import styled from "styled-components"
import { ArrowIcon } from "./icons/arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        
        border: none;
        background-color: transparent;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        svg{
            margin-left: 13px;   
        }
    }
`

const PriorityFilter = styled.ul`
    padding: 12px 16px;
    width: 250px;
    position: absolute;
    top: 100%;
    right: 8px;
    z-index: 999;
    background-color: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    list-style: none;

    li{
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }
    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)
    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por:
                <ArrowIcon />
            </button>
            {
                isOpen &&
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais Vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>
    )
}