import { BookingForm } from '../';
import './Booking.css'

const Booking = () => {
    return (
        <div className='booking section-padding'>
            <div className="booking-content content">
                <h2 className="title">Book a seat</h2>
                <p>Please fill out the form and we get back to you</p>
                <BookingForm />
            </div>
        </div>
    )
}

export default Booking
