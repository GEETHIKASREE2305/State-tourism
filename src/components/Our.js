import "./our.css";
import Ourdata from "./Ourdata";
function Our(){
    return(
    <div class="trip">
        <h1>OUR SERVICES</h1>
        <p> </p>
        <div className="tripcard">
            <Ourdata
            image="https://i.pinimg.com/originals/70/df/35/70df35273fa0b6418dddbc7fa0fc6c43.jpg"
            heading="BOAT HOUSES"
            text=" nearby"
            
             />
              <Ourdata
              image="https://miro.medium.com/max/1280/1*8Cdc4Yi1zrFrB6VY8kc3Mw.jpeg"
              heading="HOTELS"
              text=" nearby"
            
             />
              <Ourdata
              image="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/Appam-with-Ishtu.jpg"
              heading="RESTAURANTS"
              text="nearby"
            
             />
        </div>
    </div>
    );
}
export default Our ;