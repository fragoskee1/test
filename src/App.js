import './App.css';
function App() {
  return (
    <>
<div className="container-fluid">
  <div className="row layout">
    <div className="navbar col-sm-2 navbar-expand-lg">
      <div className="items">
        <img src="/logo.png" alt="img" className="logo img-fluid" />
        <li className="Dashboard" href="/">Dashboard</li>
        <li className="Booking" href="/">Booking</li>
        <li className="Analytics" href="/">Analytics</li>
        <li className="Passengers" href="/">Passengers</li>
        <li className="Cars" href="/">Cars</li>
        <li className="Drivers" href="/">Drivers</li>
        <li className="App Settings" href="/">App Settings</li>
        <li className="Notifications" href="/">Notifications</li>
        <li className="Reports" href="/">Reports</li>
        <li className="Vendor" href="/">Vendor</li>
        <li className="Admin" href="/">Admin</li>
        <li className="logout" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" className="bi bi-box-arrow-right logouticon" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
        </svg>Logout</li>
      </div>
    </div>
    <div className="details col-sm-10 bg-secondary">
      <div className="header container">
        <div className="row">
          <div className="vendor col-sm-10">
            Vendor
          </div>
          <div className="id col-sm-2 bg-light">
            <img src="/logo.png" alt="image" className="user img-fluid" />
            Hello, Anita
            <div className="dropdown">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
          </div>
          </div>
        </div>
       </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
