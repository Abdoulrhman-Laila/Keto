import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";


function Blog() {
  const [myblogs, setMyBlogs] = useState([]); // استخدام الحالة لتخزين البيانات
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blog/index`);
        setMyBlogs(response.data); // تعيين البيانات المستلمة إلى الحالة
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
        setLoading(false); // إنهاء حالة التحميل
      }
    };

    fetchBlogs(); 
  }, []); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="blog">
      <h1>BLOG</h1>
      <p>Lorem Ipsum available, but the majority have suffered</p>
      <section className="cards3 flex">
        {myblogs.map((item) => (
          <article className="card4" key={item.id}>
            <img src={item.image} alt={item.title} /> 
            <h2 className="title">{item.title}</h2>
            <h3 className="description">{item.description}</h3>
            <p className="sub-title">{item.sub_title}</p> 
          </article>
        ))}
      </section>
    </div>
  );
}

export default Blog;