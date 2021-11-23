type IYoutubeEmbed = {
  embedId: number;
};

const YoutubeEmbed = ({ embedId }: IYoutubeEmbed) => (
  <div className="video-responsive">
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      // height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="Embedded youtube"
      // width="853"
    />
  </div>
);

export default YoutubeEmbed;
