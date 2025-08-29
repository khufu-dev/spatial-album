import "./CoverFlow.css";

const IMAGES = [
  "/images/IMG_3394.JPG",
  "/images/IMG_0412.jpg",
  "/images/IMG_2981.HEIC",
  "/images/IMG_3008.PNG",
  "/images/IMG_3368.JPG",
  "/images/IMG_3372.JPG",
  "/images/IMG_3373.JPG",
  "/images/IMG_3374.JPG",
  "/images/IMG_3375.JPG",
  "/images/IMG_3377.JPG",
  "/images/IMG_3381.JPG",
  "/images/IMG_3385.JPG",
  "/images/IMG_3387.JPG",
  "/images/IMG_3388.JPG",
  "/images/IMG_3389.JPG",
  "/images/IMG_3390.JPG",
  "/images/IMG_3392.JPG",
] as const;

export default function CoverFlow() {
  return (
    <main className="coverFlow" enable-xr>
      <h1>Hello Siyaman</h1>
      <div className="cards-wrapper">
        <ul className="cards">
          {IMAGES.map((image) => (
            <li>
              <img
                draggable="false"
                src={image}
                width="600"
                height="600"
                alt="Wedding"
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
