import images from "./images.ts";
import "./CoverFlow.css";

export default function CoverFlow() {
  return (
    <main className="coverFlow">
      <ul className="cards">
        {images.map((image, index) => (
          <li key={index}>
            <img draggable="false" src={image} alt="Wedding" enable-xr />
          </li>
        ))}
      </ul>
    </main>
  );
}
