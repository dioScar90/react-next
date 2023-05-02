import Filho from "./Filho";

interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai({ nome, sobrenome }: PaiProps) {
    return (
        <div className={`
            flex flex-col gap-5
            bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Pai:</span>
                <span>{nome}</span>
                <span>{sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Filho nome="Diogo" sobrenome={sobrenome} />
                <Filho nome="Bruna" sobrenome={sobrenome} />
            </div>
        </div>
    )
}