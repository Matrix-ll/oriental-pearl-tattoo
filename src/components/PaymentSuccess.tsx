import { useEffect, useState } from 'react'

export default function PaymentSuccess() {
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setPaid(params.has('session_id'))
  }, [])

  if (!paid) return null

  return (
    <div
      data-component="src/components/PaymentSuccess.tsx"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-slate-900">You are all set.</h2>
        <p className="mt-2 text-slate-600">
          Thank you for your purchase. A receipt is on its way to your email.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-xl bg-stone-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-stone-700"
        >
          Back to site
        </a>
      </div>
    </div>
  )
}
