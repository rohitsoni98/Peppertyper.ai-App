import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import img1 from "./Img/logo.png";

const App = () => {
  return (
    <>
      <div className=" container-fluid d-flex">
        <div className="left">
          <div className="conatiner top_menu d-flex align-items-center p-3">
            <img src={img1} className="me-1"></img>
            <h2>Peppertyper.ai</h2>
          </div>
          <div className="conatiner mid_menu">
            <h3 className="mb-3">Hi rohit 👋</h3>
            <h1>Welcome to Peppertype.ai</h1>
            <p className="para">
              Congratulations on taking your first step towards creating
              content, the modern way!<br/>Help us tailor an amazing experience for
              you by answering these three questions
            </p>
            <div className="d-flex btn_box">
                <button className="btn btn-light me-3">Skip for Now</button>
                <button className="btn btn-primary">Continue</button>
            </div>
            <p className="para_dark">Get the most out of it - <a href="#">Book a live demo</a></p>
          </div>
        </div>

        <div className="right">
          <h4 className="text-center p-5">
            A few clicks away from an awesome writing experience
          </h4>
          <p className="text-center my-5">
            <span>50K+</span> Peppertypers trust us with their content
          </p>
          <button className="btn btn-primary px-2">
            <HelpOutlineIcon fontSize="small" /> Need Help?
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
