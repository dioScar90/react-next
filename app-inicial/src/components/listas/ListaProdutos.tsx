import ProdutoItem from "./ProdutoItem";
import Produto from "@/model/Produto";

interface ListaProdutosProps {
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutosProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            {props.produtos.map(produto => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar} />
            })}
        </div>        
    )
}