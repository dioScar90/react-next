import Pai from "./Pai";

interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Avo({ nome, sobrenome }: AvoProps) {
    return (
        <div className={`
            flex flex-col gap-5 p-5 rounded-md
            bg-purple-500 text-white border border-white
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-bold">Avo:</span>
                <span>{nome}</span>
                <span>{sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Pai nome="Vanderlei" sobrenome={sobrenome} />
                <Pai nome="Vladimir" sobrenome={sobrenome} />
                <Pai nome="Valdenir" sobrenome={sobrenome} />
            </div>
        </div>
    )
}