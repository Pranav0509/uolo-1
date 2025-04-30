import {Component} from 'react'
import Swal from 'sweetalert2';

import './index.css'

class About extends Component {
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
      <div className="about-cont">
        <div className="text-cont">
          <h1 className="a-main-head">Set up your students for success!</h1>
          <h1 className="sub-head">
            Help build essential skills with our<br/> scholastic programs
          </h1>
          <button onClick={demo} type='button'>Request demo</button>
        </div>
        <div>
          <img
            className="children"
            src="https://www.uolo.com/images/home-hero.png"
            alt="children"
          />
        </div>
      </div>
    )
  }
}
export default About

