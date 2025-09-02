import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
import "./CoverFlow.css";

import IMG_3394 from "./assets/IMG_3394.JPG";
import IMG_0412 from "./assets/IMG_0412.jpg";
import IMG_3008 from "./assets/IMG_3008.PNG";
import IMG_3368 from "./assets/IMG_3368.JPG";
import IMG_3372 from "./assets/IMG_3372.JPG";
import IMG_3373 from "./assets/IMG_3373.JPG";
import IMG_3374 from "./assets/IMG_3374.JPG";
import IMG_3375 from "./assets/IMG_3375.JPG";
import IMG_3377 from "./assets/IMG_3377.JPG";
import IMG_3381 from "./assets/IMG_3381.JPG";
import IMG_3385 from "./assets/IMG_3385.JPG";
import IMG_3387 from "./assets/IMG_3387.JPG";
import IMG_3388 from "./assets/IMG_3388.JPG";
import IMG_3389 from "./assets/IMG_3389.JPG";
import IMG_3390 from "./assets/IMG_3390.JPG";
import IMG_3392 from "./assets/IMG_3392.JPG";

const IMAGES = [
  IMG_3394,
  IMG_0412,
  IMG_3008,
  IMG_3368,
  IMG_3372,
  IMG_3373,
  IMG_3374,
  IMG_3375,
  IMG_3377,
  IMG_3381,
  IMG_3385,
  IMG_3387,
  IMG_3388,
  IMG_3389,
  IMG_3390,
  IMG_3392,
] as const;

export default function CoverFlow() {
  return (
    <main className="coverFlow" enable-xr>
      <ul className="cards">
        {IMAGES.map((image, index) => (
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
