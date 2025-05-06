import "./Home.css";
import  { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';



function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"]; // قائمة الصور
  const intervalTime = 3000; // فاصل زمني بين تغيير الصور

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval); // تنظيف الفاصل الزمني عند تفكيك المكون
  }, [images.length, intervalTime]);

  return (
    <div className="home">
      <section className="img-sec">
        <div className="image-container">
          <img src={images[currentImageIndex]} alt="" />
          <div className="card">
            <div className='container'>
              <h2>BOOK A ROOM ONLINE</h2>
              <Formik
                initialValues={{ checkInDate: '', checkOutDate: '' }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="checkInDate">Arrival</label>
                    <div className="input-with-icon">
                      <Field type="date" id="checkInDate" name="checkInDate" required />
                      <img src="date.png" alt="Calendar Icon" className="icon" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkOutDate">Departure</label>
                    <div className="input-with-icon">
                    <Field type="date" id="checkOutDate" name="checkOutDate" required />
                    <img src="date.png" alt="Calendar Icon" className="icon" />
                    </div>
                  </div>
                  <button type="submit">BOOK NOW</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;