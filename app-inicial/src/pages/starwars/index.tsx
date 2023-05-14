import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";
import Background from "@/components/starwars/Background";

export default function PaginaStarWars() {
    const { processando, personagens, selecionarPersonagem } = useStarWars();
    
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
            <Background />
            
            {processando ? (
                <div>Processando...</div>
            ) : (personagens.length > 0 ? (
                <Personagens personagens={personagens} selecionar={selecionarPersonagem} />
            ) : (
                <div>Nenhum personagem buscado</div>
            ))}

        </div>
    )
}