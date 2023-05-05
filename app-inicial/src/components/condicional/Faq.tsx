import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0);

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1);
            return;
        }

        setAtivo(indice);
    }

    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta
                indice={0}
                aberta={ativo === 0}
                pergunta="Quem descobriu o Brasil?"
                resposta="Lorem Ipsum seu lazarento"
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={1}
                aberta={ativo === 1}
                pergunta="O que é TypeScritp?"
                resposta="Lorem Ipsum seu lazarento"
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={2}
                aberta={ativo === 2}
                pergunta="React é um framework?"
                resposta="Lorem Ipsum seu lazarento"
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={3}
                aberta={ativo === 3}
                pergunta="Quais as principais funcionalidades do Next.js?"
                resposta="Lorem Ipsum seu lazarento"
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}