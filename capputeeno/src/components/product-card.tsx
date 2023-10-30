import { formatValue } from "@/utils/format-value"
import styled from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0 0 4px 4px;

    background: rgba(255,255,255,.4);
    backdrop-filter: blur(10px);

    width: 256px;

    img{
        width: 256px;
        height: 300px;
    }

    h3{
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark2);
    }

    p{
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
    }

    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;

        > div{
            width: 228px;
            height: 5px;
            margin: 8px 0;
            padding: 0;
            background-color: var(--shapes);
            
        }
    }

`

export function ProductCard(props: ProductCardProps) {

    return (
        <Card>
            <img src={props.image} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{formatValue(props.price)}</p>
            </div>
        </Card>
    )
}