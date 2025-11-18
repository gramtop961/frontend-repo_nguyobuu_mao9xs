import QRCodeCard from './components/QRCodeCard'

function App() {
  const targetUrl = `${window.location.origin}/details`

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <QRCodeCard url={targetUrl} />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">رمز QR للانتقال</h1>
          <p className="text-black/70">قم بمسح الرمز باستخدام هاتفك للانتقال مباشرةً إلى صفحة التفاصيل. التصميم بالأبيض والأسود ومتوافق مع الجوال.</p>
          <ul className="list-disc ps-5 space-y-2 text-black/80">
            <li>متوافق مع جميع الهواتف.</li>
            <li>ينقلك إلى الصفحة المطلوبة فوراً.</li>
            <li>يمكنك أيضاً الضغط على الزر لفتح الصفحة الآن.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
