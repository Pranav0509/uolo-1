import {Component} from 'react'
import Swal from 'sweetalert2';



import './index.css'

class Header extends Component {
  render() {
    const  demo=()=>{
      
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You want our executives to make a demo call!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Confrimed!",
            text: "You will be contacted shortly.",

          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Thank you :)",

          });
        }
      });
      
    }
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <img
              className="website-logo"
              src="https://assets.telegraphindia.com/telegraph/2022/Nov/1668867174_2-2.jpg" 
              alt="website logo"
            />
          </div>
          <div className="nav-bar-texts">
            <h1>Learning Products</h1>
            <h1>School Platform</h1>
          </div>
          <div>
            <button onClick={demo} className="nav-button">
              <h1>Request demo</h1>
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
