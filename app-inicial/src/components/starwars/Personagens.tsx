export default function Personagens() {
    async function simularChamadaAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1);
            }, 6000)
        })
    }

    async function obterPersonagens() {
        console.log("Início da chamada...");
        await simularChamadaAPI();
        console.log("Fim da chamada.");
    }

    return (
        <div>
            <h1>Personagens</h1>
            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
                Obter
            </button>
        </div>
    )
}