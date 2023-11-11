import aboutimg from "../assets/pexels-brett-jordan-825661.jpg"
import "../styles/about.css"

export const AboutUs = () => {
       return (
     <div className="about-us">
        <div className="abouttop" style={{backgroundImage: `url(${aboutimg})`}}></div>
        <div className="aboutbottom">
            <h1>ABOUT US</h1>
            <p> 
            Welcome to Your Pizza's Passion where passion for pizza meets a world of flavor! At PizzasPassion, we believe that a great pizza experience goes beyond just a meal; it's a celebration of taste, tradition, and togetherness.
            Our journey began with a simple idea: to craft pizzas that not only satisfy your hunger but also tantalize your taste buds with an explosion of flavors. Every pizza we create is a labor of love, from the finest ingredients to the skilled hands that bring them together. We take pride in our commitment to quality, ensuring that each slice is a testament to our dedication to excellence.
            What sets us apart is our dedication to authenticity. Drawing inspiration from the rich and diverse pizza traditions around the world, we've curated a menu that showcases the best of Italian craftsmanship with a dash of global influence. Whether you're a fan of the classic Margherita or crave the bold flavors of a BBQ Chicken pizza, our menu caters to every palate.
            </p>
        </div>
     </div>
)

}