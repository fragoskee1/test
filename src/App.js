import './App.css';
function App() {
  return (
    <>
<div className="container-fluid">
  <div className="row">
    <div className="navbar col-sm-2 navbar-expand-lg">
      <div className="items">
        <img src="/logo.png" alt="img" className="logo img-fluid" />
        <div className="navitem">
        <a href="https://www.google.com" className="Dashboardlink"><li className="Dashboard" href=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-house dashboardicon" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>Dashboard</li></a>
        <a href="https://www.google.com" className="Bookinglink"><li className="Booking" href=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-earmark bookingicon" viewBox="0 0 16 16">
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
        </svg>Booking</li></a>
        <a href="https://www.google.com" className="Analyticlink"><li className="Analytics" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clipboard-data analyticicon" viewBox="0 0 16 16">
        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
        </svg>Analytics</li></a>
        <a href="https://www.google.com" className="Passengerlink"><li className="Passengers" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-people passengericon" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
        </svg>Passengers</li></a>
        <a href="https://www.google.com" className="Carlink"><li className="Cars" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-car-front-fill caricon" viewBox="0 0 16 16">
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
        </svg>Cars</li></a>
        <a href="https://www.google.com" className="Driverlink"><li className="Drivers" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle drivericon" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>Drivers</li></a>
        <a href="https://www.google.com" className="Appsettinglink"><li className="App Settings" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-gear appsettingicon" viewBox="0 0 16 16">
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
        </svg>App Settings</li></a>
        <a href="https://www.google.com" className="Notificationlink"><li className="Notifications" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bell notificationicon" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </svg>Notifications</li></a>
        <a href="https://www.google.com" className="Reportlink"><li className="Reports" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-text reporticon" viewBox="0 0 16 16">
        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
        </svg>Reports</li></a>
        <a href="https://www.google.com" className="Vendorlink"><li className="Vendor" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-rolodex vendoricon" viewBox="0 0 16 16">
        <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"/>
        </svg>Vendor</li></a>
        <a href="https://www.google.com" className="Adminlink"><li className="Admin" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-gear adminicon" viewBox="0 0 16 16">
        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
        </svg>Admin</li></a>
        <span className="log"><a href="https://www.google.com" className="Logoutlink"><li className="logout" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentcolor" className="bi bi-box-arrow-right logouticon logouticon" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
        </svg>Logout</li></a></span>
        </div>
      </div>
    </div>
    <div className="details col-sm-10">
      <div className="header container">
        <div className="row vendorrow">
          <div className="vendor col-sm-9">
            Vendor
          </div>
            <div className="dropdown col-sm-3">
              <button className="dropbtn ">
              <spam className="username"><img src="/logo.png" alt="image" className="user img-fluid" />Hello, Anita</spam>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill userarrow" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
              </button>
              <div class="dropdown-content">
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
            </div>
        </div>
       </div>
       <div className="buttons">
        <div className="row">       
          <div className="search-container col-sm-9">
            <input type="text" className="search-box search" placeholder="Search..."/>
            <button type="submit" className="search-button  ">Search</button>
          </div>
          <div className="dropd col-sm-2 ">
          <button className="drop">
              <spam className="username">Export</spam>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill userarrow" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
              </button>
              <div class="drop-content">
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
          </div>
          <div className="col-sm-2 menu">
            <img src="/menu.png" alt="image" className="menubox img-fluid" />
            </div>
          </div>
        </div>
        <div className="container driver">
          <div className="row">
            <div className="col-sm-6">
            <button className="drop">
              <spam className="username">Export</spam>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill userarrow" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
              </button>
              <div class="drop-content">
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
            </div>
            <div className="col-sm-6">
            <button type="submit" className="driver-button">Add driver</button>
            </div>
          </div>
        </div>
        <div className="container table">
          <div className="row">
            <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Total Trips</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1293450</td>
                <td>daksh</td>
                <td>ahemdabad,Gujrat</td>
                <td>8160795741</td>
                <td>5</td>
                <td>8160795741@okaxis</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1293450</td>
                <td>daksh</td>
                <td>ahemdabad,Gujrat</td>
                <td>8160795741</td>
                <td>5</td>
                <td>8160795741@okaxis</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1293450</td>
                <td>daksh</td>
                <td>ahemdabad,Gujrat</td>
                <td>8160795741</td>
                <td>5</td>
                <td>8160795741@okaxis</td>
              </tr>
              <tr>
                <td>4</td>
                <td>1293450</td>
                <td>daksh</td>
                <td>ahemdabad,Gujrat</td>
                <td>8160795741</td>
                <td>5</td>
                <td>8160795741@okaxis</td>
              </tr>
              <tr>
                <td>5</td>
                <td>1293450</td>
                <td>daksh</td>
                <td>ahemdabad,Gujrat</td>
                <td>8160795741</td>
                <td>5</td>
                <td>8160795741@okaxis</td>
              </tr>
              <tr>
                <td>6</td>
                <td>1293450</td>
                <td>daksh</td>
                <td>ahemdabad,Gujrat</td>
                <td>8160795741</td>
                <td>5</td>
                <td>8160795741@okaxis</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        </div>
       </div>
       </div>
    </>
  );
}

export default App;
