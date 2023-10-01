import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const MyFooter = () => {
    return (
        <div className="footer">
            <p className="footer-text">Made by Sohaib Ahmed</p>
            <p>®️ 2023</p>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/sohaib-ahmed-sipra/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="icon1" />
                </a>
            </div>
        </div>
    );
};

export default MyFooter;
