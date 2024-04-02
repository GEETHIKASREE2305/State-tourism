import "./Culture.css";
import Culturedata from "./Culturedata";
function Culture(){
    return(
    <div class="trip">
        <h1>CULTURES OF KERALA</h1>
        <p> pride ofkerala</p>
        <div className="tripcard">
            <Culturedata
            image="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/Idiyappam.jpg"
            heading=" Our Food"
            text="The staple food of Kerala is greatly influenced by the history and culture of the state. It’s a blend of both vegetarian and non-vegetarian options, in which the latter is prepared a variety of items like fish, poultry and red meat. Rice, fish, and coconut are the most common ingredients of almost all Kerala famous food. The flavours are enhanced with chillies, curry leaves, mustard seeds, turmeric tamarind, black pepper, cardamom, clove, ginger, cinnamon, and asafoetida."
             />
              <Culturedata
            image="https://www.eastcoastdaily.in/wp-content/uploads/2018/08/onam.jpg"
            heading="Our Festivals"
            text="Onam is the biggest and the most important festival of the state of Kerala. It is a harvest festival and is celebrated with joy and enthusiasm all over the state by people of all communities. According to a popular legend, the festival is celebrated to welcome King Mahabali, whose spirit is said to visit Kerala at the time of Onam."
             />
              <Culturedata
            image="https://s4.scoopwhoop.com/anj2/5d6f62f59d041365efc81b1c/d99a0f7d-6c7a-4c54-bfe7-a6956ab594b3.jpg"
            heading="Our Traditions "
            text="Vallamkali or the Snake Boat Race is the most enchanting facet of the festival of Onam. The event is promoted as a major tourist attraction of the state of Kerala and draws a large number of domestic and international tourists. Vallamkali has been going on for good number of years and its popularity is soaring with each passing year. Much credit for the success of Snake Boat Race can be attributed to Pandit Jawahar Lal Nehru who was so enamoured by this colourful event that he instituted a trophy for the race."
             />
        </div>
    </div>
    );
}
export default Culture ;