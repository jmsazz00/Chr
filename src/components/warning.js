import React from "react";

function Warning(props) {
  return (
    <section className="block block--lightgray block--mixedgray">
      <div className="warning-block container">
        <header className="block__heading">
          <h1 className="warning__header">
            <span>\:</span>
            <p className="warning__heading">OOPS..</p>
            <span>:/</span>
          </h1>
          <img className="warning__logo" src="./logo192.png"></img>
        </header>
        <article className="warning__box">
          <span>!</span>
          <p>
            Due to unwanted technical issues, we have shut down the website
            until further notice. Could you give us your feedback about the
            following below?
          </p>
        </article>
      </div>
    </section>
  );
}

export default Warning;
