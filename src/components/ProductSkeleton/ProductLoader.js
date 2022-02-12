import React, {useRef} from 'react'
import skeletonstyles from "./ProductLoader.module.css";

export const ProductLoader = () => {



    return (<section className={`all-product-flex`}>
        <article className="product">
            <div className="border">
                <div className={`image-container ${skeletonstyles.skeleton}`}>
      
                </div>
                <div className="product-details">
                    <div className={`name ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                        
                    </div>
                    <div className={`price ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                       
                    </div>
                </div>
            </div>
        </article>

        <article className="product">
            <div className="border">
                <div className={`image-container ${skeletonstyles.skeleton}`}>
      
                </div>
                <div className="product-details">
                    <div className={`name ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                        
                    </div>
                    <div className={`price ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                       
                    </div>
                </div>
            </div>
        </article>

        <article className="product">
            <div className="border">
                <div className={`image-container ${skeletonstyles.skeleton}`}>
      
                </div>
                <div className="product-details">
                    <div className={`name ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                        
                    </div>
                    <div className={`price ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                       
                    </div>
                </div>
            </div>
        </article>

        <article className="product">
            <div className="border">
                <div className={`image-container ${skeletonstyles.skeleton}`}>
      
                </div>
                <div className="product-details">
                    <div className={`name ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                        
                    </div>
                    <div className={`price ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                       
                    </div>
                </div>
            </div>
        </article>
        <article className="product">
            <div className="border">
                <div className={`image-container ${skeletonstyles.skeleton}`}>
      
                </div>
                <div className="product-details">
                    <div className={`name ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                        
                    </div>
                    <div className={`price ${skeletonstyles.skeleton} ${skeletonstyles.skeleton_text}`}>
                       
                    </div>
                </div>
            </div>
        </article>

    </section>
    )
}
