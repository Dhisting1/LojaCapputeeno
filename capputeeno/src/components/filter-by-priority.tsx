import styled from "styled-components"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`

`

export function FilterByPriority(props: FilterByPriorityProps) {
    return (
        <FilterContainer>
            <p>Organizar por: </p>
        </FilterContainer>
    )
}