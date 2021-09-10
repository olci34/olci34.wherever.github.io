import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Ticket() {
    const { passcode } = useParams()
    const trips = useSelector(state => state.trips)
    let [ticket, setTicket] = useState({passcode: ''})
    useEffect(() => {
        const lookTicket = async () => {
            if (trips.length) {
                ticket = trips.find(t => t.passcode === passcode)
            } else if (!ticket.passcode) {
                ticket = await fetchTicket(passcode)
                console.log(ticket)
                setTicket(ticket)
            }
        }
        lookTicket()
        },[ticket])

    return (
        <div id='ticket'>
            <h2 >Ticket Number: {ticket.passcode} </h2>
        </div>
    )
}

function fetchTicket(passcode) {
    return fetch(`http://localhost:3001/tickets/${passcode}`).then(resp => resp.json())
}