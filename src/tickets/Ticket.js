import TicketQR from "./TicketQR"

export default function Ticket(props) {

    return (
        <div id='ticket'>
            <h2>Ticket Number: {props.ticket.passcode}</h2>
            <TicketQR ticketNo= {props.ticket.passcode} />
        </div>
    )
}