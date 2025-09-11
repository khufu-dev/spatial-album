import images from "./images.ts";
import "./CoverFlow.css";

export default function CoverFlow() {
  return (
    <main className="coverFlow" enable-xr>
      <ul className="cards">
        {images.map((image, index) => (
          <li key={index}>
            <img
              draggable="false"
              src={image}
              width="1200"
              height="1200"
              alt="Wedding"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
