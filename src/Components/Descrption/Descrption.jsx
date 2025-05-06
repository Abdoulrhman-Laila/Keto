import "./Descrption.css";

const myRoomsinfo = [
    {
        id: 1,
        Image: "banner1.jpg",
        Title: "BedRoom",
        Descrip: "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
        Price: "50.000 SYP",
        view: "On the main street",
        SubImages: ["bath.jpg", "belcony.jpg"] // إضافة صور فرعية
    }
];

function Descrption() {
    return (
        <div className="descrption-container">
            <div className="descrption">
                {myRoomsinfo.map(room => (
                    <div key={room.id}>
                        <div className="image-container">
                            <img src={room.Image} alt={room.Title} className="main-image" />
                            <div className="sub-images">
                                {room.SubImages.map((subImage, index) => (
                                    <img key={index} src={subImage} alt={`SubImage ${index + 1}`} className="sub-image" />
                                ))}
                            </div>
                        </div>
                        <h2 className="title">{room.Title}</h2>
                        <p className="des">{room.Descrip}</p>
                        <p className="view flex"><h4>View:</h4> {room.view}</p>
                        <p className="price"><span>Price per night:</span> {room.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Descrption;