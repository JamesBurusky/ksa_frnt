import {MapContainer,TileLayer,GeoJSON,MapConsumer} from "react-leaflet"
import useWFS from "../components/Utils/useWFS"
import { useState } from "react"
//import Pie from "../Components/Util/pieChart"

export default function Map(props) {
  const states= useWFS('topp:states')
  //const baselayer= useWFS('riyadh:Riyadh')

  let categories = [
"brownfield",
"farmyard",
"depot",
"agricultural",
]

let cats =  [];
let colors = [
    "#241F07",
    "#4D6FA3",
    "#97DF59",
    
]


const onEachFeature = (feature,layer) =>{
   populateCategories(feature.properties.name,feature.properties.area)
}

function populateCategories(name, area) {
  const ar = (area !== undefined) ? area : 0

  if(name){
  let i = cats.map(function(e) { return e.name; }).indexOf(name);
  
  if(i !== -1){
    cats[i].value = cats[i].value + ar 
  }
  else {
    const index = categories.indexOf(name)
    let prop = {name:name,value:ar,color:colors[index],}
    cats.push(prop)
      }
    }
}

const style = (feature) => {
     const index = categories.indexOf(feature.properties.name)

     const style1 = {
          weight: 1,
          opacity: 1,
          color: colors[index],
          dashArray: "3",
          fillOpacity: 0.7,
          fillColor: colors[index]
          }

        const style2 = {
          weight: 1,
          opacity: 0,
          color: "white",
          dashArray: "3",
          fillOpacity: 0,
          fillColor: 'white'
          }
  return (index !== -1)? style1 : style2
}

 function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 
    return (
      <div className="map">
          <MapContainer style={{width:"100vw",height:"100vh"}} center={[38.3774,-98.66]} zoom={8}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* {baselayer && <GeoJSON data={baselayer} style={style}/>} */}
          {states && <GeoJSON data={states} onEachFeature={onEachFeature} /*style={style}*//>}
            
     <MapConsumer>
        {(map) => {
          return null
        }}
      </MapConsumer>
</MapContainer>
        <div className="sidebar">
 <div className="kpi">
          <h4>Land Use Mix</h4>
          
          <div className="tb">
            <h5>District KPI</h5>
            <h5>Optimum KPI</h5>
          </div>
             
           <div className="tb">
             <p>1.61</p>
             <p>1.61</p>
           </div>
          
        </div>
        </div>
       
</div>
)
    
}