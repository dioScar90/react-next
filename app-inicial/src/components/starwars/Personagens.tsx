import { IconCheck } from "@tabler/icons-react"

interface PersonagensProps {
    personagens: any[],
    selecionar: (personagem: any) => void
}

export default function Personagens({ personagens, selecionar }: PersonagensProps) {
    
    return (
        <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-900">
                    <th className="p-2 font-black">Nome</th>
                    <th className="p-2 font-black">Altura</th>
                    <th className="p-2 font-black">Peso</th>
                    <th className="p-2 font-black">Ações</th>
                </tr>
            </thead>
            <tbody>
                {personagens.map(p => (
                    <tr
                        key={p.name}
                        className={`
                        text-center odd:bg-zinc-700 even:bg-zinc-800
                        `}
                    >
                        <td className="p-2">{p.name}</td>
                        <td className="p-2">{p.height}</td>
                        <td className="p-2">{p.mass}</td>
                        <td className="p-2">
                            <button className="botao" onClick={() => selecionar(p)}>
                                <IconCheck size={20} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}