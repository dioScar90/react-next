import { useCallback, useEffect, useState } from "react";
import useProcessando from "./useProcessando";

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();
    const [ personagens, setPersonagens ] = useState<any[]>([]);
    const [ personagem, setPersonagem ] = useState<any>([]);
    const [ filmes, setFilmes ] = useState<any>([]);

    const obterFilmes = useCallback(async (personagem: any) => {
        if (!personagem?.films?.length)
            return;
        
        try {
            iniciarProcessamento();

            const reqs = personagem.films.map(async (film: string) => {
                const resp = await fetch(film);
                return await resp.json();
            });
    
            const filmes = await Promise.all(reqs);
            setFilmes(filmes);
        }
        finally {
            finalizarProcessamento();
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    const obterPersonagens = useCallback(async () => {
        try {
            // VERIFICAR POR QUE ESSE CONSOLE.LOG AINDA ESTÁ APARECENDO 2X
            console.log("obter personagens...");

            iniciarProcessamento();
            const resp = await fetch("https://swapi.dev/api/people/");
            const { results: dados } = await resp.json();
            setPersonagens(dados);
        }
        finally {
            finalizarProcessamento();
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    const selecionarPersonagem = (personagem: any) => setPersonagem(personagem);
    
    const voltar = () => {
        setPersonagem(null);
        setFilmes([]);
    }

    useEffect(() => {
        obterPersonagens();
    }, [obterPersonagens])

    useEffect(() => {
        obterFilmes(personagem);
    }, [personagem, obterFilmes])

    return {
        personagens,
        filmes,
        processando,
        selecionarPersonagem,
        voltar
    }
}