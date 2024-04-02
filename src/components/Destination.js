import "./Destination.css"
const Destination = () => {
    return(
        <div className="destination">
            <h1>popular destinations</h1>
            <p>this is good</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>COCHIN-Backwater village</h2>
                    <p>Trade the bustle of the city for the quiet of Kerala's famed backwaters on this group tour, which includes round-trip transportation from Fort Cochin. You'll take in the scenery from aboard a non-mechanized country boat, passing villages and natural landscapes. You'll return to Fort Cochin after dining on an included lunch of vegetarian fare.</p>
                </div>
                <div className="image">
                    <img alt="img" src="https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/97.webp"/>
                    <img alt="img"src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VyYWxhJTIwbmF0dXJlfGVufDB8fDB8fHww"/>

                </div>
            </div>
            <div className="first-des-reverse">
                <div className="des-text">
                    <h2> Athirapally Falls, Thrissur</h2>
                    <p>Located 60 km from the Thrissur district of Kerala, Athirapally Falls is a marvellous cascade of frothy waters that makes its way from the Anamudi mountains of the Western Ghats. Also called as Bahubali Waterfall, this 80 ft high and 330 ft wide marvel is the largest waterfall in Kerala. It is often referred to as the "Niagara Falls of India". From here, the Athirapally falls flows through the verdant greenery of Vazhachal Forest toward the Arabian Sea, creating a spectacular vista of scintillating water, emerald jungles and azure sky.</p>
                </div>
                <div className="image">
                    <img alt="img" src="https://www.holidify.com/images/compressed/attractions/attr_1877.jpg"/>
                    <img alt="img"src="https://holidify.com/images/attr_wiki/compressed/attr_wiki_4087.jpg"/>
                </div>
            </div>

        </div>
    );
};
export default Destination;