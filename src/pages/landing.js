import React from 'react';
import Search from '../components/search';
import Hero from '../components/hero';
import Feature from '../components/feature';
import axios from 'axios';

const Home = () => {
    const [assets, setAssets] = React.useState([]);
    const [positionRight, setPositionRight] = React.useState(true);

    // const toggleContent = () => {
    //     setPositionRight(!positionRight)
    // }

    const get_assets = () => {
        axios
        .get("/travel-assets")
        .then(res => {
            console.log(res)
            setAssets(res.data)
            // console.log(res);
            // if (res.data.status === "ok") {
            // console.log("valid")
            // //setShowSuccess(true)
            // } else {
            // console.log("also valid")
            // //setShowError(true)
            // }
            // // document.cookie = "username=username"; //set cookies with key/value pairs
            // // document.cookie = "password=password"; //set cookies with key/value pairs
            // console.log(res);
        })
        .catch((err) => {
            console.log(err)
            //setShowError(true)
        });
    };

    React.useEffect(() => {
        get_assets();
        // signalUpdateNotes();
    }, []);

    return (
        <div className="page">
            <Hero 
                backgroundImage=""
                heroTitle="Earn 4x on Travel or Use Points to Pay"
            />
            {assets.map( (item, index) => (
                //toggleContent(),
                // console.log("num"),
                <Feature 
                    contentRight = {(index%2 === 0)? true : false}
                    featureTitle = {item.captionTitle}
                    captionBody = {item.captionBody}
                    backgroundImage = {item.backgroundImage}
                    featureImage = {item.featureImage}
                    featureImageAltText = {item.featureImageAltText}
                />
                //setPositionRight(!positionRight)
            ))}
            {/* // data=content-left
            // or data= content=right */}
            {/* <Feature 
                contentRight={true}
                backgroundImage = "/feature-booking.jpg"
                featureImage = "/feature-booking-highlight.png"
                featureTitle = "Seamlessly Book and Manage Travel"
                captionBody = "Brex Travel lets you save travel profiles and frequent flyer information for anyone in your company, streamline the process to book travel for you and others."
            />
            <Feature 
                contentRight={false}
                backgroundImage = "/feature-support.jpg"
                featureImage = "/feature-support-highlight.png"
                featureTitle = "Enjoy 24/7 Travel Support"
                captionBody = "By using Brex Travel, you get complimentary access to a team of experienced corporate travel agents available 24/7/365 to assist with all your travel needs."
            />
            <Feature 
                contentRight={true}
                backgroundImage = "/feature-rewards.png"
                featureImage = ""
                featureTitle = "Earn 4X or use points to pay"
                captionBody = "Brex customers earn 4 points per dollar on all travel booked through Brex Travel, including flights, hotels and Airbnb. You can also use your points to pay for travel through the portal and not spend a cent to get to the next offsite."
            />
            <Feature 
                contentRight={false}
                backgroundImage = "/feature-savings.jpg"
                featureImage = "/feature-savings-highlight.png"
                featureTitle = "Get access to corporate rates and unmatched inventory"
                captionBody = "Brex travel gives you access to negotiated rates and inventory traditionally only accessible to large enterprises. While typical saving may be 30%, you can save up to as much as 60% on some bookings. Brex also gives you access to an unmatched inventory of airline and lodging options, including Airbnb."
            /> */}
        </div>
    )
}

export default Home;