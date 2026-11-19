function VideoBase({ src, title }: { src: string, title: string }) {
    return (
        <>
            <iframe
                className="w-full aspect-video rounded-lg"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </>
    )
}

export default VideoBase