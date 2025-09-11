import images from "./images.ts";
import "./CoverFlow.css";

export default function CoverFlow() {
  return (
    <main className="coverFlow" enable-xr>
      <ul className="cards">
        {images.map((image, index) => (
          <li key={index}>
            <img draggable="false" src={image} alt="Wedding" />
          </li>
        ))}
      </ul>
    </main>
  );
}
