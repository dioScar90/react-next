interface IfProps {
    teste: boolean
    children: any
}

export default function If(props: IfProps) {
    if (props.teste)
        return props.children;
    
    return null;
}