import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMAGES } from "../data/images";

const Memotest = () => {
  const [selected, setSelected] = useState([]);
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("Has Ganado!!!");
      location.reload();
    }
  }, [guessed]);

  return (
    <div>
      <Link to="/">Home</Link>
      <main>
        <ul className="memo-grid">
          {IMAGES.map((image) => {
            const [, url] = image.split("|");
            return (
              <li
                key={url}
                onClick={() => {
                  selected.length < 2 &&
                    setSelected((selected) => selected.concat(image));
                }}
              >
                {selected.includes(image) || guessed.includes(image) ? (
                  <img src={url} />
                ) : (
                  <img src="https://icongr.am/simple/ipfs.svg?size=92&color=currentColor&colored=true" />
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Memotest;
