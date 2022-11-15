export const FormBooking = (props) => {
    const formData = props.form;
    return(
        <>
        <form className="form-booking" id="bookingform">
            <div className="booking-filterbar">
                <div className="filter-date">
                    <label htmlFor="">Date</label>
                    <input type="date" name="date"/>
                </div>
                <div className="filter-time">
                    <label htmlFor="">Time</label>
                    <select name="time" id="time">
                        { formData.filter[1].options.map((item, index) => <option key={index} value={item}>{item}</option>) }
                    </select>
                </div>
                <div className="filter-guest">
                    <label htmlFor="">Guest</label>
                    <select name="guest" id="guest">
                        { formData.filter[2].options.map((item, index) => <option key={index} value={item}>{item}</option>) }
                    </select>
                </div>
            </div>
            
        </form>
        <button type="submit" form="bookingform" value="Submit">Search Restaurant</button>
        </>
    )
}