const Blankmsg = ({fetchpostclick}) => {
  return (
    <div className=" row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png"
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div className="hero col-lg-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          No Posts for today!
        </h1>
        <p className="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button onClick={fetchpostclick} type="button" className="btn btn-outline-secondary btn-lg px-4">
            Fetch Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blankmsg;
