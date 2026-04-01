export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Next.js Multi-Deploy</h1>
      <p className="text-lg text-gray-600">
        Built by ShipFast Syndicate
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-green-100 rounded">
          <strong>Vercel</strong> ✅
        </div>
        <div className="p-4 bg-blue-100 rounded">
          <strong>Cloudflare</strong> ✅
        </div>
      </div>
    </main>
  )
}