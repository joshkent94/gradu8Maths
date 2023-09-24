type EmbeddedVideoProps = {
    src: string
}

const EmbeddedVideo = ({ src }: EmbeddedVideoProps) => {
    return (
        <div className="wow fadeIn" data-wow-delay="0.4s">
            <iframe
                width="852"
                height="480"
                src={src}
                frameBorder="0"
                allowFullScreen
                title="Cambridge Acceptance Discussion with Ilya"
            />
        </div>
    )
}

export default EmbeddedVideo
