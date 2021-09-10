export default function fetchTicket(passcode) {
    return (dispatch) => {
        fetch(`http://localhost:3001/tickets/${passcode}`).then(resp => resp.json()).then(ticket => {debugger})
    }
}