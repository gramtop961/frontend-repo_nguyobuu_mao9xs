import { useMemo } from 'react'

function Details() {
  const info = useMemo(() => ({
    name: 'الاسم: أحمد محمد',
    specialty: 'الاختصاص: تقانة معلومات',
    branch1: {
      title: 'الفرع الأول',
      content:
        'نص تجريبي يوضح تفاصيل الفرع الأول. يمكن وضع وصف موجز للخدمات أو الأقسام المتعلقة بهذا الفرع مع أمثلة مختصرة.'
    },
    branch2: {
      title: 'الفرع الثاني',
      content:
        'نص تجريبي يشرح ما يتضمنه الفرع الثاني مع نقاط أساسية مختصرة توضح ما يمكن للعميل توقعه.'
    },
    branch3: {
      title: 'الفرع الثالث',
      content:
        'نص تجريبي يصف محتوى الفرع الثالث مع سطرين توضيحيين للاستخدام كتجربة عرض.'
    },
    mall: 'المول: رباعي 2031',
    servicesNumber: 'رقم خدماتنا: 0912345678',
    whatsapp: 'رقم زبائن واتس: 0933202404',
    customerService: 'خدمة الزبائن: اتصال'
  }), [])

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <header className="mb-10 border-b border-black/10 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">البيانات التفصيلية</h1>
          <p className="mt-2 text-sm sm:text-base text-black/70">كل المعلومات المطلوبة مع أمثلة توضيحية، بتصميم أسود وأبيض بسيط.</p>
        </header>

        <section className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-black rounded p-4">
              <p className="font-semibold mb-1">{info.name}</p>
              <p className="font-semibold">{info.specialty}</p>
            </div>

            <div className="border border-black rounded p-4">
              <p className="mb-1"><span className="font-semibold">{info.mall}</span></p>
              <p className="mb-1"><span className="font-semibold">{info.servicesNumber}</span></p>
              <p className="mb-1"><span className="font-semibold">{info.whatsapp}</span></p>
              <p className=""><span className="font-semibold">{info.customerService}</span></p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="border border-black rounded p-5">
              <h2 className="text-xl font-bold mb-2">{info.branch1.title}</h2>
              <p className="leading-relaxed">{info.branch1.content}</p>
            </div>

            <div className="border border-black rounded p-5">
              <h2 className="text-xl font-bold mb-2">{info.branch2.title}</h2>
              <p className="leading-relaxed">{info.branch2.content}</p>
            </div>

            <div className="border border-black rounded p-5">
              <h2 className="text-xl font-bold mb-2">{info.branch3.title}</h2>
              <p className="leading-relaxed">{info.branch3.content}</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t border-black/10 text-sm text-black/70">
          <p>© 2025 جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </div>
  )
}

export default Details
