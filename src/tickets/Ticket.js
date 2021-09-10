import TicketQR from "./TicketQR"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import fetchTicket from "../actions/fetchTicket"
export default function Ticket(props) {
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchTicket(props.ticket.passcode)))

    return (
        <div id='ticket'>
            <h2>Ticket Number: {props.ticket.passcode}</h2>
            <TicketQR ticketNo= {props.ticket.passcode} />
        </div>
    )
}