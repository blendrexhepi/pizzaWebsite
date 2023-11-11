import leftimg from "../assets/pexels-polina-tankilevitch-4109111.jpg"
import "../styles/contact.css"

export const ContactUs = () => {
       return (
     <div className="contact">
       <div className="leftside" style={{backgroundImage: `url(${leftimg})`}}>
       </div>
       <div className="rightside">
            <h1>Contact Us</h1>

            <form id="contactform" method="post">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" placeholder="Enter Full name..."/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Enter your email..."/>
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div> 
     </div>
)

}