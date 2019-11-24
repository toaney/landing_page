import React from 'react';
import Hero from '../components/hero';
import Feature from '../components/feature';
import axios from 'axios';

const Landing = () => {
    const [assets, setAssets] = React.useState([]);

    const get_assets = () => {
        axios
        .get("/travel-assets")
        .then(res => {
            setAssets(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    React.useEffect(() => {
        get_assets();
    }, []);

    return (
        <div className="page">
            <Hero 
                heroBackground=""
                heroTitle="Earn 4x on Travel or Use Points to Pay"
                heroCaption=""
            />
            {assets.map( (item, index) => (
                <Feature 
                    contentRight = {(index%2 === 0)? true : false}
                    featureTitle = {item.captionTitle}
                    captionBody = {item.captionBody}
                    backgroundImage = {item.backgroundImage}
                    featureImage = {item.featureImage}
                    featureImageAltText = {item.featureImageAltText}
                />
            ))}
        </div>
    )
}

export default Landing;