import Link from "next/link"

export const metadata = {
  title: 'Larissa Guilherme',
}

export default function Home() {
  return (
    <main id="smooth-wrapper" className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Hello World!</h1>
      <Link href="/about">Dashboard</Link>
    </main>
  )
}
