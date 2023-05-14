import Personagens from "@/components/starwars/Personagens";
import Filmes from "@/components/starwars/Filmes";
import useStarWars from "@/data/hooks/useStarWars";
import Background from "@/components/starwars/Background";

const getComponentAfterBackground = () => {
    const { processando, personagens, filmes, voltar, selecionarPersonagem } = useStarWars();
    
    const possuiFilmes = filmes.length > 0;
    const possuiPersonagens = personagens.length > 0;

    if (processando)
        return <div>Processando...</div>

    if (possuiFilmes)
        return <Filmes filmes={filmes} voltar={voltar} />

    if (possuiPersonagens)
        return <Personagens personagens={personagens} selecionar={selecionarPersonagem} />

    return <div>Dados não encontrados</div>
}

export default function PaginaStarWars() {
    const componentAfterBackground = getComponentAfterBackground();
    
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
            <Background />
            
            {componentAfterBackground}
        </div>
    )
}