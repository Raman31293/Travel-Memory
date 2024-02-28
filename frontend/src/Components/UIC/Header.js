import React from 'react'

export default function Header() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* href address to '/' this will go to main page when we click on Travel Memory */}
    <a className="navbar-brand" href="/">Travel Memory</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            {/* href="/addexpierence" this will go to Add Expierence address when we click on it */}
          <a className="nav-link active" aria-current="page" href="/addexpierence">Add Expierence</a>
        </li>       
          
          
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
