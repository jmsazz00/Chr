import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { AiFillLike } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";

function Proposal(props) {
  let left = useRef();
  let right = useRef();

  let [answer, setAnswer] = useState("");

  const style = { color: "#fff", fontSize: "4em" };

  let handleInput = (ev) => {
    setAnswer(ev.target.getAttribute("content"));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let leftElement = left.current.classList;
    let rightElement = right.current.classList;

    if (answer === "yes") {
      if (leftElement.contains("error")) lrAction("error", "rem");

      lrAction("success", "add");
      toast.success("20$ please.");
    } else {
      if (leftElement.contains("success")) lrAction("success", "rem");
      lrAction("error", "add");
      toast.error("Yala maaleh");
    }

    leftElement.add("like-move-left");
    rightElement.add("like-move-right");
  };

  let lrAction = (exp, action) => {
    let leftElement = left.current.classList;
    let rightElement = right.current.classList;

    if (action === "rem") {
      leftElement.remove(exp);
      rightElement.remove(exp);
    } else if (action === "add") {
      leftElement.add(exp);
      rightElement.add(exp);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="block block--stone">
      <div className="proposal-block container">
        <header className="block__header">
          <h1 className="block__heading" data-aos="fade-down">
            But before you proceed:
          </h1>
          <BsArrowDown className="arrow" style={style} />
        </header>

        <div style={{ position: "relative" }}>
          <span className="likes icon-container" ref={right}>
            <AiFillLike style={style} />
          </span>
          <span className="likes icon-container" ref={left}>
            <AiFillLike style={style} />
          </span>
          <div className="proposal__quest" data-aos="zoom-in">
            <h1 className="no-highlight">May i order you at prom?</h1>
          </div>
          <form onSubmit={handleSubmit} className="proposal__ans">
            <div className="proposal__options">
              <div className="form-group" data-aos="fade-right">
                <input
                  content="yes"
                  onChange={(ev) => handleInput(ev)}
                  name="ans"
                  type="radio"
                  id="opt1"
                ></input>
                <label htmlFor="opt1">YES</label>
              </div>
              <span>OR</span>
              <div className="form-group" data-aos="fade-left">
                <input
                  content="no"
                  onChange={(ev) => handleInput(ev)}
                  name="ans"
                  type="radio"
                  id="opt2"
                ></input>
                <label htmlFor="opt2">NO</label>
              </div>
            </div>
            <button
              disabled={!answer || false}
              onClick={handleSubmit}
              type="submit"
              className="proposal__btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Proposal;
