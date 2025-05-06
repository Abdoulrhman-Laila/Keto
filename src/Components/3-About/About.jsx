import "./About.css"

function About() {
  return (
    <div className="about flex">
      <section className="one-sec ">
        <h2>ABOUT US</h2>
        <p>The passage experienced a surge in popularity during the 1960s
           when Letraset used it on their dry-transfer sheets,
           and again during the 90s as desktop publishers bundled the text with their 
           software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, 
          or read on for the authoritative history of lorem ipsum.</p>
          <button className="about-btn">Read More</button>
      </section>
      <section className="two-sec ">
        <img src="about.png" alt="" />
      </section>
    </div>
  )
}

export default About
