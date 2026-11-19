function VideoBase({ src, title }: { src: string; title: string }) {
    return (
        <iframe
            className="
        w-full aspect-[9/16] rounded-none
        md:w-3/4 md:aspect-video md:rounded-lg md:mx-auto
        lg:max-w-4xl
      "
            src={src}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
    );
}

export default VideoBase