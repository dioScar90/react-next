import useProcessando from "./useProcessando";
import { useState } from "react";

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();
    const [ personagens, setSPersonagens ] = useState<any>([]);

    async function obterPersonagens() {
        try {
            iniciarProcessamento();
            const resp = await fetch("https://swapi.dev/api/people/");
            const dados = await resp.json();
            setSPersonagens(dados.results);
        }
        finally {
            finalizarProcessamento();
        }
    }

    return {
        personagens,
        obterPersonagens,
        processando
    }
}