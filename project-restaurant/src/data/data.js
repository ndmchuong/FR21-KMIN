import bgBranch1 from "../assets/branch/bg-branch1.jpg"
import bgBranch2 from "../assets/branch/bg-branch2.jpg"
import serviceIcon1 from "../assets/icon/service-icon1.jpg"
import serviceIcon2 from "../assets/icon/service-icon2.jpg"
import serviceIcon3 from "../assets/icon/service-icon3.jpg"
import appleIcon from "../assets/icon/apple-icon.png"
import ggPlayIcon from "../assets/icon/chplay-icon.png"
import screenApp from "../assets/app-mobile/screen-app.jpg"
import cartIcon from "../assets/icon/cart-icon.png"
import userIcon from "../assets/icon/user-icon.png"
import closeIcon from "../assets/icon/close-icon.png"
import callIcon from "../assets/icon/call-icon.png"
import bannerHeader from "../assets/banner/banner.png"
import arrowLeft from "../assets/icon/arrow-left.png"
import arrowRight from "../assets/icon/arrow-right.png"
import highlight1 from "../assets/icon/clock-icon.png"
import highlight2 from "../assets/icon/delivery-icon.png"
import highlight3 from "../assets/icon/paris.png"
import instagramIcon from "../assets/icon/insta.png"
import twitterIcon from "../assets/icon/twitter.png"
import fbIcon from "../assets/icon/fb.png"

export const dataHeader = {
    logo: "expice",
    ico: {
        cart: cartIcon,
        user: userIcon,
        close: closeIcon,
        call: callIcon,
        arrowLeft: arrowLeft,
        arrowRight: arrowRight
    },
    numberPhone: "0800 111 126",
    time: "8:00 - 22:00",
    subTitle: "Food",
    title: "Discover Restaurant & Delicious Food",
    banner: bannerHeader,
    navLinks: ["Delivery info", "About us", "Restaurants", "Specialities"],
    highlight: [
        {
            ico: highlight1,
            content: "delivery in all paris in less than 30 minutes"
        },
        {
            ico: highlight2,
            content: "Free delivery from 29 euros"
        },
        {
            ico: highlight3,
            content: "Only fresh and French products"
        }
    ]
};
export const dataLocation = {
    title: "Some Top Restaurant For Dining In Or Take away!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.",
    cardBranch: [
        {
            id: 1,
            name: "Fire Water",
            desc: "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
            location: "New Market",
            img: bgBranch1
        },
        {
            id: 2,
            name: "The Wonton",
            desc: "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
            location: "Saheb Bazar",
            img: bgBranch2
        }
    ]
};
export const dataBooking = {
    title: "advance booking",
    form: {
        label: "Search Restaurant",
        filter: [
            {
                filterName: "Date"
            },
            {
                filterName: "Time",
                options: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]
            },
            {
                filterName: "Guest",
                options: ["1-4 People", "5-10 People", ">10 People"]
            }
        ]
    }
    

}
export const dataFood = {
    title: "Explore Our Foods",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.",
    food: {
        name: "hamburger",
        price: "$10",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime nulla architecto tenetur deserunt magnam aspernatur quis minima iste inventore.",
        img: bgBranch1
    }
}
export const dataServices = {
    title: "Our Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.",
    serviceItem: [
        {
            img: serviceIcon1,
            title: "Advance Table",
            supTitle: "Booking",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img: serviceIcon2,
            title: "Food For Free",
            supTitle: "24 / 7",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img: serviceIcon3,
            title: "Free Home Delivery At Your Door Steps",
            supTitle: null,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]
}
export const dataMobileApp = {
    title: "Download App For Exciting Deals",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt.",
    img: screenApp,
    icon: {
        appStore: appleIcon,
        ggPlay: ggPlayIcon
    }
}
export const dataFooter = {
    linkFooter: [
        {
            title: "About us",
            links: ["Concept", "Franchise", "Business", "Restaurant Signup", "For Investors"]
        },
        {
            title: "Get Help",
            links: ["Read FAQs", "Restaurants", "Specialities", "Sign up to deliver", "English"]
        },
        {
            title: "Contact us",
            links: ["Expice Restaurant Paris 11", "69 avenue de la Republique 75011 Paris", "0800 111 126", "contact@expicerestaurant.com"]
        }
    ],
    ico: {
        insta: instagramIcon,
        twitter: twitterIcon,
        fb: fbIcon
    },
    license: ["Privacy Policy", "Terms", "© 2020 Expice Restaurant"]
}