import { useReducer } from 'react'
import './BookingForm.css'

const BookingForm = () => {

    const initState = {
        fullName : '',
        mobile : '',
        time : '06:30',
        date : '',
        numberPeople : '',
        comment : '',
    }

    const reducer = (state, action)=>{
        switch (action.type){
            case 'input' : return {[action.name] : action.payload};
            default : return state ;
        }
    }

    const [state,dispatch]=useReducer(reducer,initState);

    const inputHandel = (e)=>{
        dispatch({
            type:'input',
            name : e.target.name,
            payload : e.target.value
        })
    }

    return (
        <form className='booking-form' action="">
            <div className="box">
                <input onChange={inputHandel} value={state.fullName} className='input' name='fullName' placeholder='Full name' type="text" />
            </div>
            <div className="box">
                <input onChange={inputHandel} value={state.mobile} className='input' name='mobile' placeholder='Mobile 010-020-0340' type="text" />
            </div>
            <div className="box">
                <input onChange={inputHandel} value={state.time} name='time' className='input' type='time'/>
            </div>
            <div className="box">
                <select className='input' name="" id="">
                    <option value="">Select Branches</option>
                    <option value="">Grünberger</option>
                    <option value="">Behrenstraße</option>
                    <option value="">Weinbergsweg</option>
                </select>
            </div>
            <div className="box">
                <input onChange={inputHandel} value={state.date} name='date' className='input' type='date' />
            </div>
            <div className="box">
                <input onChange={inputHandel} value={state.numberPeople} name='numberPeople' className='input' placeholder='Number of People' type='number' />
            </div>
            <div className="textArea-box box">
                <textarea onChange={inputHandel} value={state.comment} className='input' placeholder='Comment (Optionals)' name="comment" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="submit-box">
                <input type="submit" />
            </div>
        </form>
    )
}

export default BookingForm
