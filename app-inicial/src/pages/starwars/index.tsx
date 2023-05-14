import Personagens from "@/components/starwars/Personagens";
import Filmes from "@/components/starwars/Filmes";
import useStarWars from "@/data/hooks/useStarWars";
import Background from "@/components/starwars/Background";

export default function PaginaStarWars() {
    const { processando, personagens, filmes, selecionarPersonagem, voltar }
        = useStarWars();
    
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
            <Background />
            
            {processando ? (
                <div>Processando...</div>
            ) : filmes.length > 0 ? (
                <Filmes filmes={filmes} voltar={voltar} />
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} selecionar={selecionarPersonagem} />
            ) : (
                <div>Dados não encontrados</div>
            )}

        </div>
    )
}