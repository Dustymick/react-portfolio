import React from "react";

function Projects() {
    return (
      <section className="container" id="Projects">
        <div className="title">
        <h1> Projects </h1>
        </div> 
            <div className="content">
                <div id="project-grid">
                    <div className="project-box" id="box1">
                        <a href="https://alien-generator.herokuapp.com/">
                            <div className="project-box-title">
                                <h1>Alien Lifeform Generator</h1>
                            </div>
                        </a>
                    </div>
                    <div className="project-box" id="box2">
                        <a href="https://dustymick.github.io/weather-dashboard/">
                            <div className="project-box-title">
                                <h1>Weather App</h1>
                            </div>
                        </a>
                    </div>

                    <div className="project-box" id="box3">
                        <a href="https://dustymick.github.io/run-buddy/">
                            <div className="project-box-title">
                                <h1>Run Buddy</h1>
                            </div>
                        </a>
                    </div>
                    <div className="project-box" id="box4">
                        <a href="https://dustymick.github.io/Password-Generator/">
                            <div className="project-box-title">
                                <h1>Password Generator</h1>
                            </div>
                        </a>                        
                    </div>
                    <div className="project-box" id="box5">
                        <a href="https://mid-south-blog-spot.herokuapp.com/">
                            <div className="project-box-title">
                                <h1>Mid-South Blog Spot</h1>
                            </div>
                        </a>                        
                    </div>
                    <div className="project-box" id="box6">
                        <a href="https://alehr45.github.io/weekly-food-planner/">
                            <div className="project-box-title">
                                <h1>Weekly Food Planner Pro</h1>
                            </div>
                        </a>                        
                    </div>
                </div>
            </div>
      </section>
    );
  }
  
  export default Projects