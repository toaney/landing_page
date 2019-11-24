import React from 'react';
// import { connect } from 'react-redux';

const Feature = ({contentRight, backgroundImage, featureImage, featureImageAltText, featureTitle, captionBody}) => {
    //const [ contentRight, setContentRight ] = React.useState(true);
    // const [ backgroundImage, setBackgroundImage ] = React.useState("https://placebear.com/g/500/300");
    // const [ featureImage, setFeatureImage ] = React.useState("https://placebear.com/g/200/300");
    //const [ captionTitle, setCaptionTitle ] = React.useState(obj.captionTitle);
    //const [ captionBody, setCaptionBody ] = React.useState(obj.captionBody);

    return(
        <React.Fragment>
            <div className="feature">
                <div className={contentRight? "feature-background-right" : "feature-background-left"}></div>
                <div className={contentRight? "feature-content-container-right" : "feature-content-container-left"}>
                    <div className={contentRight? "feature-image-container-right" : "feature-image-container-left"} style={{backgroundImage: `url(${backgroundImage})`}}>
                        <img className="feature-image" alt={featureImageAltText || ""} src={featureImage}></img>
                    </div>
                    <div className="feature-content-container">
                        <div className="feature-content">
                            <h2 className="feature-header" tabindex="0">{featureTitle}</h2>
                            <p className="feature-caption">{captionBody}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
            // <articleReact.Fragment>
            //     <div className="feature">
            //         <div className={contentRight? "feature-background-right" : "feature-background-left"}></div>
            //         <div className={contentRight? "feature-content-container-right" : "feature-content-container-left"}>
            //             <div className={contentRight? "feature-image-container-right" : "feature-image-container-left"} style={{backgroundImage: `url(${backgroundImage})`}}>
            //                 <img className="feature-image" src={featureImage}></img>
            //             </div>
            //             <div className="feature-content-container">
            //                 <div className="feature-content">
            //                     <h2 className="feature-header">{featureTitle}</h2>
            //                     <p>{captionBody}</p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </React.Fragment>
    )
}

// const mapStateToProps = state => {
//     return({
//     })    
// }

export default Feature;