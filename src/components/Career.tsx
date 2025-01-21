import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer(React.js)</h4>
                <h5>FUTURE18 DIGITAL LLP</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
  I am a Front-End Developer at Future18 Digital LLP, specializing in building interactive web applications using React.js. I focus on translating design concepts into responsive and efficient front-end solutions.
</p>

          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>GURUKRUPA PLACEMENT & EDUCATION SOLUTIONS PVT LTD</h5>
              </div>
              <h3>2M</h3>
            </div>
            <p>
  I interned as a Web Developer at Gurukrupa Placement & Education Solutions Pvt Ltd, where I gained experience in developing web applications, focusing on coding efficiency and responsive design.
</p>

          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Dcodetech | Industrial Training Pvt.Ltd</h5>
              </div>
              <h3>2M</h3>
            </div>
            <p>
  I worked as a Web Developer at Dcodetech | Industrial Training Pvt. Ltd, where I gained hands-on experience in developing web applications, focusing on front-end and back-end technologies.
</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
