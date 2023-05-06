import { useState } from "react";

export default function Personagens() {
    const [processando, setProcessando] = useState<boolean>(false);

    async function simularChamadaAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1);
            }, 6000)
        })
    }

    async function obterPersonagens() {
        setProcessando(true);
        await simularChamadaAPI();
        setProcessando(false);
    }

    return (
        <div>
            {processando ? (
                <div>Processando...</div>
            ) : (
                <h1>Conteúdo com os personagens</h1>
            )}
            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
                Obter
            </button>
        </div>
    )
}