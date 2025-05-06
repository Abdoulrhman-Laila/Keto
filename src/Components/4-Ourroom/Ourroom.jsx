import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ourroom.css";
import { Link } from "react-router-dom";

function Ourroom() {
  const [myrooms, setMyRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/room/index`, {
          headers: {
            Accept: "application/json",
          },
        });

        console.log("Response Data:", response.data); // تحقق من البيانات المسترجعة

        // تحقق مما إذا كانت حالة الاستجابة OK والرمز 200
        if (response.status === 200) {
          // تحقق مما إذا كانت البيانات مصفوفة
          if (Array.isArray(response.data) && response.data.length > 0) {
            setMyRooms(response.data); // تعيين البيانات إذا كانت صحيحة
          } else {
            setError("لا توجد بيانات متاحة.");
          }
        } else {
          setError("فشل الاستجابة: " + response.status);
        }
      } catch (err) {
        console.error(err); // طباعة الخطأ في وحدة التحكم
        // تحقق مما إذا كانت هناك استجابة من الخادم
        if (err.response) {
          setError("حدث خطأ أثناء جلب البيانات: " + (err.response.data.message || err.response.statusText));
        } else {
          setError("حدث خطأ: " + err.message);
        }
      } finally {
        setLoading(false); // تأكد من تغيير حالة التحميل هنا
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // عرض رسالة التحميل
  }

  if (error) {
    return <div>Error: {error}</div>; // عرض رسالة الخطأ
  }

  return (
    <div className="our-room">
      <h1>OUR ROOM</h1>
      <p>Lorem Ipsum available, but the majority have suffered</p>
      <section className="cards flex">
        {myrooms.length > 0 ? (
          myrooms.map((item) => (
            <article className="card2" key={item.id}>
              <Link to="/descrption">
                <img src={item.image} alt={item.title} />
              </Link>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </article>
          ))
        ) : (
          <div>لا توجد بيانات متاحة.</div>
        )}
      </section>
    </div>
  );
}

export default Ourroom;