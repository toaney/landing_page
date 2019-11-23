import React from 'react';
import Search from '../components/search';
import Hero from '../components/hero';
import Feature from '../components/feature';

const Home = () => {
    return (
        <div className="page">
            <Hero 
                backgroundImage=""
                heroTitle="Earn 4x on Travel or Use Points to Pay"
            />
            {/* // data=content-left
            // or data= content=right */}
            <Feature 
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
            />
        </div>
    )
}

export default Home;