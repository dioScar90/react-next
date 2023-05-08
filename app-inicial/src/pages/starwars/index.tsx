import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";
import Background from "@/components/starwars/Background";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens } = useStarWars();

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Background />

            <button onClick={obterPersonagens} className="bg-blue-500 p-2 rounded-md">
                Buscar personagens
            </button>
            
            {processando ? (
                <div>Processando...</div>
            ) : (personagens.length > 0 ? (
                <Personagens personagens={personagens} />
            ) : (
                <div>Nenhum personagem buscado</div>
            ))}

        </div>
    )
}