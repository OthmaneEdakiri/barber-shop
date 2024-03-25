import { appointmentImg } from "../../assets"
import "./Appointment.css"

const Appointment = () => {
  return (
    <div className="appointment">
        <img src={appointmentImg} alt="" />
        <h4><strong>Hurry Up! Get good haircut.</strong></h4>
        <a href="">Book a seat</a>
    </div>
  )
}

export default Appointment
