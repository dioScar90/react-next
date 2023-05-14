import { IconCheck } from "@tabler/icons-react"

interface FilmesProps {
    filmes: any[],
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {
    
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-2 font-black">Título</th>
                        <th className="p-2 font-black">Episódio</th>
                        <th className="p-2 font-black">Data de lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.map(f => {
                        const releaseDate = new Date(f.release_date).toLocaleDateString("pt-BR");

                        return (
                            <tr
                                key={f.title}
                                className={`
                                    text-center even:bg-zinc-700 odd:bg-zinc-800
                                `}
                            >
                                <td className="p-2">{f.title}</td>
                                <td className="p-2">{f.episode_id}</td>
                                <td className="p-2">{releaseDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <button className="botao" onClick={props.voltar}>Voltar</button>
        </div>
    )
}