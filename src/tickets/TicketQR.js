export default function TicketQR(props) {
    let imgQR = generateQR(props.ticketNo)
    return (
        <div id="qrcode">
            <img src={imgQR} alt="QR Code" />
        </div>
    )
}

function generateQR(tixNo) {
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/?data="
    let size = "200x200"
    let data = `http://localhost:3001/tickets/${tixNo}`
    let url = baseURL + `${data}` + `&size=${size}`
    return url
}
