import Link from 'next/link'
import React from 'react'
const Page = () => {
  return (
    <main className="text-center notFound">
      <h2 className="text-3xl text-primary">There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>Go back to the <Link href="/">home page</Link>.</p>
    </main>
  )
}
export default Page
