import Image from "next/image";

const Home = () => (
  <div className="portfolio-app">
    {/* HERO STARTS */}
    <section className="fj-hero">
      <div className="fj-hero-wrapper row">
        <div className="hero-left col-md-6">
          <h1 className="white hero-title">
            Hey Im Filip. Experienced full stack developer
          </h1>
          <h2 className="white hero-subtitle">
            Check my portfolio and video tutorials
          </h2>
          <div className="button-container">
            <a href="" className="btn btn-main bg-blue ttu">
              See my work
            </a>
          </div>
        </div>
        <div className="hero-right col-md-6">
          <div className="hero-image-container">
            <a className="grow hero-link"></a>
          </div>
        </div>
      </div>
    </section>
    {/* HERO ENDS */}
    <div className="container">
      {/* HOME PAGE STARTS */}

      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Ask Me</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 black">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <div className="avatar-container my-2">
              <Image
                src={"https://via.placeholder.com/150"}
                className="avatar-image mr-2"
                alt={"Landscape picture"}
                width={300}
                height={200}
              />
              <span className="avatar-title">Filip Jerga</span>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 black">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <div className="avatar-container my-2">
              <Image
                src={"https://via.placeholder.com/150"}
                className="avatar-image mr-2"
                alt={"Landscape picture"}
                width={300}
                height={200}
              />
              <span className="avatar-title">Filip Jerga</span>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 black">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <div className="avatar-container my-2">
              <Image
                src={"https://via.placeholder.com/150"}
                className="avatar-image mr-2"
                alt={"Landscape picture"}
                width={300}
                height={200}
              />
              <span className="avatar-title">Filip Jerga</span>
            </div>
          </a>
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">
        See More Posts
      </a>
      {/* HOME PAGE ENDS */}
      {/* FORUM CATEGORIES START */}

      {/* FORUM CATEGORIES ENDS */}
      {/* TOPICS PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Specific Category</h1>
          </div>
        </div>
      </section>
      <section className="fj-topic-list">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Topic</th>
              <th scope="col">Category</th>
              <th scope="col">Author</th>
              <th scope="col">Replies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* TOPICS PAGE ENDS */}
      {/* POSTS PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Specific Topic</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="fj-post-list">
          <div className="row">
            <div className="col-md-9">
              <div className="topic-post">
                <article>
                  <div className="row">
                    <div className="topic-avatar">
                      <div className="main-avatar"></div>
                    </div>
                    <div className="topic-body">
                      <div className="topic-header">
                        <div className="topic-meta">
                          <div className="name-container">
                            <span className="name">Filip Jerga</span>
                          </div>
                          <div className="date-container">
                            <span className="date">21h</span>
                          </div>
                        </div>
                      </div>
                      <div className="topic-content">
                        <div className="cooked">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <section className="post-menu-area">
                          <nav className="post-controls">
                            <div className="actions">
                              <button className="btn">reply</button>
                            </div>
                          </nav>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="topic-post">
                <article>
                  <div className="row">
                    <div className="topic-avatar">
                      <div className="main-avatar">
                        <Image
                          className="avatar subtle-shadow"
                          src={"https://i.imgur.com/cVDadwb.png"}
                          alt={"apollo picture"}
                          width={300}
                          height={200}
                        />
                      </div>
                    </div>
                    <div className="topic-body">
                      <div className="topic-header">
                        <div className="topic-meta">
                          <div className="name-container">
                            <span className="name">Filip Jerga</span>
                          </div>
                          <div className="date-container">
                            <span className="date">21h</span>
                          </div>
                        </div>
                      </div>
                      <div className="topic-content">
                        <div className="cooked">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <section className="post-menu-area">
                          <nav className="post-controls">
                            <div className="actions">
                              <button className="btn">reply</button>
                            </div>
                          </nav>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="topic-post">
                <article>
                  <div className="row">
                    <div className="topic-avatar">
                      <div className="main-avatar">
                        <Image
                          className="avatar subtle-shadow"
                          src={"https://i.imgur.com/cVDadwb.png"}
                          alt="apollo picture"
                          width={300}
                          height={200}
                        />
                      </div>
                    </div>
                    <div className="topic-body">
                      <div className="topic-header">
                        <div className="topic-meta">
                          <div className="name-container">
                            <span className="name">Filip Jerga</span>
                          </div>
                          <div className="date-container">
                            <span className="date">21h</span>
                          </div>
                        </div>
                      </div>
                      <div className="topic-content">
                        <div className="cooked">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <section className="post-menu-area">
                          <nav className="post-controls">
                            <div className="actions">
                              <button className="btn">reply</button>
                            </div>
                          </nav>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* POSTS PAGE ENDS */}
      {/* LOGIN PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Login Page</h1>
          </div>
        </div>
      </section>
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-main bg-blue py-2 ttu">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* LOGIN PAGE ENDS */}
    </div>

    {/* REPLIER STARTS */}
    {/* <div className='reply-controls is-open'> */}
    <div className="reply-controls">
      <div className="reply-area">
        <div className="reply-to">
          Reply To: <span className="text ml-2">User1</span>
        </div>
        <div className="fj-editor-input">
          <input name="title" placeholder="Topic title" type="text"></input>
        </div>
        <div className="fj-editor">
          <div className="fj-editor-textarea-wrapper">
            <textarea name="content" placeholder="Type here"></textarea>
          </div>
          <div className="fj-editor-preview-wrapper">
            <div className="preview">
              <p></p>
            </div>
          </div>
        </div>
        <div className="submit-area">
          <div className="send mr-auto">
            <button href="#" className="btn btn-main bg-blue py-2 ttu">
              Reply
            </button>
            <a className="btn py-2 ttu gray-10">Cancel</a>
          </div>
          <div>
            <a className="btn py-2 ttu gray-10">hide preview</a>
          </div>
        </div>
      </div>
    </div>
    {/* REPLIER ENDS */}
    {/* FOOTER STARTS */}
    <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
      <div className="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
    {/* FOOTER ENDS */}
  </div>
);

export default Home;
