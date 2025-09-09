function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Rafi Ullah</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " href="#container">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#experience">Experience</a>
        <a className="nav-link" href="#">Tutorials</a>
        <a className="nav-link" href="#">Books</a>
        <a className="nav-link" href="#">Blogs</a>
        <a className="nav-link"href="#contact" >Contacts</a>
        <button className='btn'>Get In Touch</button>
      </div>
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar