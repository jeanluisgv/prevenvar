function ImageBase({ src }: { src: string }) {
    return (
        <>
            <div className="flex justify-center max-h-[350px]">
                <img src={src} className="w-full h-auto "></img>
            </div>
        </>
    )
}

export default ImageBase