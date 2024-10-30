import Reblend, { useEffect, useReducer, useState } from "reblendjs";
import Format from "./Format";
import { useHash } from "reblend-router";

function Model({ model }: any) {
  const [showModel, setShowModel] = useState(false);

  const hashTag = `#${model?.tag}`;

  const hash = useHash();

  useEffect(() => {
    if (hashTag === hash) {
      setShowModel(true);
    } else {
      setShowModel(false);
    }
  }, [hash]);

  return (
    <div id={model.tag} class="model-container">
      <span class="models-jump-to-path"></span>
      <span class="model-box">
        <div class="model-box">
          <span class="model">
            <span class="">
              <a style="cursor: pointer;" href={`/${hashTag}`}>
                <span class="model-title">
                  <span class="model-title__text">{model.tag}</span>
                </span>
              </a>
              <a style="cursor: pointer;" href={`/${hashTag}`}>
                <span
                  class={`model-toggle ${!showModel ? "collapsed" : ""}`}
                ></span>
              </a>
              {showModel ? (
                <Format language="json" code={model.model} colored />
              ) : null}
            </span>
          </span>
        </div>
      </span>
    </div>
  );
}

export default Model;
