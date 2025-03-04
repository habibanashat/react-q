import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
	const [url, setUrl] = useState('')
	const [qrcode, setQrcode] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF'
				
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQrcode(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Code With Image💦</h1>
			<input 
				type="text"
				placeholder="Enter content to generate QR Code"
				value={url}
				onChange={evt => setUrl(evt.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qrcode && <>
				<img src={qrcode} />
				<div className='button1'>
        <a href={qrcode} download="qrcode.png">Download</a>
        </div>
			</>}
		</div>
	)
}

export default App
