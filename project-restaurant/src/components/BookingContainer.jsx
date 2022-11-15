import { dataBooking } from "../data/data"
import { FormBooking } from "./FormBooking";


export const BookingContainer = () => {
    const data = dataBooking;
    return (
        <section className="booking">
            <div className="container-form-booking">
                <h2 className="title-form-booking">
                    <hr className="sub-line-title" />
                    {data.title}
                </h2>
                <FormBooking form={data.form}/>
            </div>
        </section>
    )
}