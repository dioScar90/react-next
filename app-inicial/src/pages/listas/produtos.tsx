import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import Carrinho from "@/components/listas/Carrinho";
import { useState } from "react";

export default function PaginaProdutos() {
    const [itens, setItens] = useState<ItemCarrinho[]>([]);

    const adicionarProduto = (produto: Produto) => {
        const itemAtual = itens.find(item => item.produto.id == produto.id) ?? { quantidade: 0, produto };
        const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
        const outrosItens = itens.filter(item => item.produto.id !== produto.id);
        setItens([ ...outrosItens, novoItem ]);
    }

    return (
        <div className={`
            flex flex-col gap-10 justify-center items-center h-screen
        `}>
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>
    )
}