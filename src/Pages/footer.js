import "../Pages/footer.css";
import retro from "../images/image-retro-pcs.jpg"
import laptop from "../images/image-top-laptops.jpg"
import gaming from "../images/image-gaming-growth.jpg"

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="news-container">
                    <img src={retro} alt="retro" />
                    <div className="right-box">
                        <h1 className="heading-number">01</h1>
                        <h5 className="heading-news">Reviving Retro PCs</h5>
                        <p className="para-news">What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="news-container">
                    <img src={laptop} alt="laptop" />
                    <div className="right-box">
                        <h1 className="heading-number">02</h1>
                        <h5 className="heading-news">Top 10 Laptops of 2022</h5>
                        <p className="para-news">Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="news-container">
                    <img src={gaming} alt="gaming" />
                    <div className="right-box">
                        <h1 className="heading-number">03</h1>
                        <h5 className="heading-news">The Growth of Gaming</h5>
                        <p className="para-news">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;