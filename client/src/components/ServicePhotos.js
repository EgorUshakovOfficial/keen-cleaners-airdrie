import React from 'react'; 

const ServicePhotos = () => {
    const photosObj = {
        "bathroom": "Bathrooms",
        "bedroom": "Bedrooms",
        "family-room": "Family Rooms",
        "kitchen": "Kitchens",
        "living-room": "Living Rooms",
        "office": "Offices"
    }

    const photoKeys = Object.keys(photosObj);

    return (
        <div id="services-photos">
            {photoKeys.map(key => {
                return (<div className="service" key={key}>
                    <img src={require(`../Images/${key}.jpg`)} />
                    <div className="service-room">{photosObj[key]}</div>
                </div>)
            })}
        </div>
    )
}

export default ServicePhotos;