import "./Contact.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback  } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [center, setCenter] = useState({ lat: 40.730610, lng: -73.935242 });
  const [zoom, setZoom] = useState(12);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCS0P0J-LehdkRsA8HmISAbY_jk6BZK2ns'
  });

  const onLoad = useCallback(function callback(map) {
    // تم تحميل الخريطة بنجاح
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, phone, message });
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  const handleCenterChange = (newCenter) => {
    setCenter(newCenter);
  };

  return (
    <div className="contact">
      <h1>CONTACT US</h1>
      <div className=" N flex">
        <section className="left-sec">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Phone"
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">SEND</button>
          </form>
        </section>
        <section className="right-sec">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={center}
              zoom={zoom}
              onLoad={onLoad}
              onZoomChanged={() => handleZoomChange(zoom)}
              onCenterChanged={() => handleCenterChange(center)}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div>Loading map...</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Contact;