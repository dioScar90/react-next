interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    const timesParaExibir = props.times.map(time => {
        const timeClass = "text-3xl list-decimal odd:text-blue-500 even:text-yellow-500";
        const timeLi = (
            <li key={time} className={timeClass}>
                {time}
            </li>
        );
        
        return timeLi;
    })

    return (
        <ol>
            {timesParaExibir}
        </ol>
    )
}