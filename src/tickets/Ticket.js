import TicketQR from "./TicketQR"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchTicket from "../actions/fetchTicket"
import { useParams } from "react-router-dom"

export default function Ticket() {
    const dispatch = useDispatch()
    const { passcode } = useParams()
    const trips = useSelector(state => state.trips)
    useEffect(() => trips ? trips.find(t => t.ticket.passcode === passcode) : dispatch(fetchTicket(passcode)))

    return (
        <div id='ticket'>
            <h2>Ticket Number: {passcode}</h2>
            <TicketQR ticketNo={passcode} />
        </div>
    )
}