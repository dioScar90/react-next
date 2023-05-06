import Image from "next/image";

export default function Background() {
    return (
        <div>
            <Image
                src="https://wallpaperaccess.com/full/11801.jpg"
                fill
                alt="background"
                className="-z-50 opacity-30 object-cover"
            />
        </div>
    )
}