export default function Ticket(props) {

    return (
        <div id='ticket'>
            <h2>Ticket Number: {props.ticket.passcode}</h2>
        </div>
    )
}