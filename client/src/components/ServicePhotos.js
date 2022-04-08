// JavaScript source code
const ServicePhotos = () => {
    const photosObj = {
        bathtubs: "Bathtubs",
        bedrooms: "Bedrooms",
        beds: "Beds",
        couches: "Couches",
        "shower-heads": "Shower-heads",
        "sinks-mirrors": "Sinks and Mirrors",
        "carpet-stairs": "Carpet and stairs",
        "toilets": "Toilets"
    }

    const photoKeys = Object.keys(photosObj);

    return (
        <div id="services-photos">
            {photoKeys.map(key => {
                return (<div className="service" key={key} style={{ backgroundImage: "url(" + require(`../Images/${key}.jpg`) + ")"}}>
                    <span class="shaded">{photosObj[key]}</span>
                </div>)
            })}
        </div>
    )
}

export default ServicePhotos;