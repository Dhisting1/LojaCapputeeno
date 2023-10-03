"use client"

import styled from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"


/*  Fonte */
const sairaStencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ['latin']
})

/*  Estilização do header*/
const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
    
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

/*  Estilização da logo */
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`
export default function Header() {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="Procurando por algo especifico ?" />
                <CartControl></CartControl>
            </div>
        </TagHeader>
    )
}