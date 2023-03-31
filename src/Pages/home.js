import "../Pages/home.css"
import shapes from "../images/image-web-3-desktop.jpg"

function Home() {
    return (
        <>
            <div className="grid-container">
                <div className="grid-item item1"><img src= {shapes} alt="shapes"width={"100%"}/></div>
                <div className="grid-item item2">
                    <h1 className="title-new">New</h1>
                    <h5 className="title-news">Hydrogen VS Electric Cars</h5>
                    <p className="para-news">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className="line-news" />
                    <h5 className="title-news">The Downsides of AI Artistry</h5>
                    <p className="para-news">What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr className="line-news" />
                    <h5 className="title-news">Is VC Funding Drying Up?</h5>
                    <p className="para-news">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
                <div className="grid-item item3">
                    <h1 className="web-heading">The Bright <br /> Future of <br /> Web 3.0?</h1>
                </div>  
                <div className="grid-item item4">
                    <p className="para-news">     
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?
                    </p>
                    <button className="read-more">READ MORE</button>
                </div>
            </div>
        </>
    )
};

export default Home;