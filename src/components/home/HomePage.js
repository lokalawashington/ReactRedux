import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Washington Portfolio</h1>
    <p>Washington Lokala is an undergrad student at Kibabii University in Kenya. He is a Mobile & Full stack web developer and User Experience designer in training. Washington is a self-described introvert and strives to show empathy and understanding in everything he does. He is a champion for tech communities and enjoys taking part in community-building to foster connection, learning , and growth - both in terms of skills and growth in network and experience.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
