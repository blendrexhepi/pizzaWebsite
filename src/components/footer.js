import "../styles/footer.css"
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'


export const Footer = () => {
    return (
        <div className="footer">
            <div className="socialmedia">
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
            </div>
            <p>&copy; 2023 pizzapassion.com </p>
        </div>
    )
}

