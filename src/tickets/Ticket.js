import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../NavBar"
import TicketQR from "./TicketQR"
import { HEROKU_URL } from "../constants/AppUrlConstants"

export default function Ticket() {
    const { passcode } = useParams()
    let [ticket, setTicket] = useState({passcode: '', trip: {departure: '' ,planets: [] }})
    useEffect(() => {
        const lookTicket = async () => {
            let t;
            if (!ticket.passcode) {
                t = await fetchTicket(passcode)
                setTicket(t)
            }
        }
        lookTicket()
        },[ticket])

    return (
        <>
            <NavBar signedIn={localStorage.getItem('userId')} />
            <div id='ticket'>
                <h2 >Ticket Number: {ticket.passcode} </h2>
                <h3 >Destinations: {convertPlanetsToString(ticket.trip.planets)}</h3>
                <h3 >Departure Date: {ticket.trip.departure} </h3>
                <TicketQR ticketNo={ticket.passcode}/>
            </div>
        </>
    )
}

function fetchTicket(passcode) {
    return fetch(`${HEROKU_URL}/tickets/${passcode}`).then(resp => resp.json())
}

function convertPlanetsToString(planets) {
    let res = ""
    for (let i in planets) {
        res += `${planets[i].name} `
    }
    return res
}