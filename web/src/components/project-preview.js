import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  return (
  
        <Link className={styles.root} to={`/project/${props.slug.current}`}>
          <div className={styles.leadMediaThumb}>
            {props.mainImage && props.mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .url()}
                alt={props.mainImage.alt}
                class="w-full"
              />
            )}
          </div>

          <h3 className="p-8 sm:p-9 md:p-7 xl:p-9 text-center ">{props.title}</h3>

          {props._rawExcerpt && (
            <div className="text-base text-body-color leading-relaxed mb-7">
              <BlockContent blocks={props._rawExcerpt} />
            </div>
          )}

         
        </Link>




 
  );
}

export default ProjectPreview;
