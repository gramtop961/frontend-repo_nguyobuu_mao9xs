import QRCode from 'qrcode'
import { useEffect, useRef, useState } from 'react'

function QRCodeCard({ url }) {
  const canvasRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function generate() {
      if (!canvasRef.current) return
      try {
        await QRCode.toCanvas(canvasRef.current, url, {
          width: 220,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        })
        setReady(true)
      } catch (e) {
        console.error('QR error', e)
      }
    }
    generate()
  }, [url])

  return (
    <div className="w-full max-w-sm mx-auto bg-white text-black border border-black rounded-xl p-5 shadow-sm">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">امسح الرمز للدخول</h2>
        <p className="text-sm text-black/70">سيوجهك مباشرةً إلى الصفحة المطلوبة</p>
      </div>
      <div className="flex items-center justify-center">
        <canvas ref={canvasRef} aria-label="QR Code" />
      </div>
      {ready && (
        <p className="mt-4 text-center text-sm break-all">{url}</p>
      )}
      <a
        href={url}
        className="mt-4 block text-center w-full bg-black text-white py-2 rounded hover:bg-black/90 transition"
      >
        فتح الصفحة الآن
      </a>
    </div>
  )
}

export default QRCodeCard
