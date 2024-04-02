import "./Trip.css";
import TripData from "./TripData";
function Trip(){
    return(
    <div class="trip">
        <h1>Recent Trips</h1>
        <p> explore kerala</p>
        <div className="tripcard">
            <TripData
            image="https://www.holidify.com/images/compressed/750.jpg"
            heading="Trip to Wayanaaad"
            text="Replete with waterfalls, historical caves, comfortable resorts and homestays, Wayanad in Kerala is famous for its spice plantations and wildlife. Walking through the sprawling spice plantations, trekking to the pre-historic caves and experiencing a resort holiday are one of the many things you can do to get a taste of Wayanad."
             />
              <TripData
            image="https://cdn.getyourguide.com/img/tour/d7d90a5cbbda760c.jpeg/98.jpg"
            heading="Trip to Trivendrum"
            text="In the context of database management systems (DBMS), the level of abstraction refers to the degree of complexity or detail that is hidden from the user or application developer. DBMS provides multiple levels of abstraction to simplify the interaction with the database and to shield users from the complexities of the underlying data storage and management."
             />
              <TripData
            image="https://irisholidays.com/keralatourism/wp-content/uploads/2023/08/thekkady-boating-1024x576.jpg"
            heading="Trip to Thekkady "
            text="Thekkady is the tourist destination in Kerala where you can  view Elephants, Kathakali and Martial Arts. Thekkady is one of the best forest tourist places in Kerala and home to wildlife like elephants, bison, deer, Nilgiri langurs and tigers. Cruise along the length of the lake in a tourist boat while sighting animals, birds and reptiles."
             />
        </div>
    </div>
    );
}
export default Trip;