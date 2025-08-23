import videoImage from "../assets/video.webp";

function Video() {
  return (
    <section className="relative h-[50dvh] w-full">
      <div className="absolute inset-0">
        <img
          src={videoImage}
          alt="video-image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Video;
