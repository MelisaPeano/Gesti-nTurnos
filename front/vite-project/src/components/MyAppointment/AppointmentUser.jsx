import { Card } from "./MyAppointmentStyle";
const AppoinmentUser = ({ date, time, status, handleCancel}) => {
    return (
        <>
        <div>
            <h1></h1>
        </div>
        <Card>
        
            <h1>{date}</h1>
            <h1> {time}</h1>
            <h1>{status}</h1>
            <button onClick={handleCancel} disabled= {status === "cancelled"}
            >
            Cancelar</button>
        </Card>
        </>
    )
}
export default AppoinmentUser;