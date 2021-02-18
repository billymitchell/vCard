import Head from 'next/head'
import Link from 'next/link'
import React from "react"

// To do 
// Combine phone into one felid 
// Post data to database 
// Query data into links
// On Build, fetch data and generate cards
// page styling 

// // Next Serverless Function
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

// pass data to page { data } to use serverless function 



export default function Home() {

  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState(
      { ...state, [e.target.name]: e.target.value }
    )
    console.log("state: ", { ...state }.first_name);
    console.log("state: ", { ...state }.last_name);
  }

  // name = name state
  let first_name = { ...state }.first_name
  let last_name = { ...state }.last_name
  let link = `public/${first_name}-${last_name}.vcf`
  let linkText = `${first_name}-${last_name}.vcf`

  const populateCardLink = () => {
    // if the first/last names have been entered
    if (
      { ...state }.first_name,
      { ...state }.last_name
    ) {
      // return the link and text
      return (
        <a href={link} target="_blank">
          <h2 className="dark:text-white">{linkText}</h2>
        </a>
      )
    } else {
      // return nothing 
      return (
        <>
        </>
      )
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target);
    // Run Serverless function 
    Promise.all([
      // Submit form data to next.js api endpoint
      fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(state)
      })
        .then(response => console.log('Success!', response))
        // No action currently 
        .then(() => e.getAttribute("action"))
        .catch(error => console.error('Error!', error.message))
    ])
  }




  return (
    <>
      <Head>
        <title>vCard Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen flex items-center dark:bg-gray-800">
        <div className="container max-width prose mx-auto ">
          <h1 className="dark:text-white">vCard Generator</h1>
          <p className="dark:text-white">Type in your information and hit submit. Then click the link bellow to download your vCard.</p>
          <form
            className="contact"
            name="submit-to-google-sheet"
            method="post"
            action={populateCardLink}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* honey pot */}
            <div hidden>
              <input name="bot-field" onChange={handleChange} />
            </div>
            <input
              className="mt-1 w-full rounded-xl  border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="first_name"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="last_name"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="organization"
              type="text"
              placeholder="Organization"
              onChange={handleChange}
            />
            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="phone_1"
              type="number"
              placeholder="000"
              onChange={handleChange}
            />

            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="phone_2"
              type="number"
              placeholder="000"
              onChange={handleChange}
            />

            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="phone_3"
              type="number"
              placeholder="000"
              onChange={handleChange}
            />

            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="twitter"
              type="text"
              placeholder="twitter.com/"
              onChange={handleChange}
            />

            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="linkedin"
              type="text"
              placeholder="linkedin.com/"
              onChange={handleChange}
            />

            <input
              className="mt-1 w-full rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              name="url"
              type="text"
              placeholder="yourwebsite.com"
              onChange={handleChange}
            />

            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className="text-white pt-2 pb-2 pl-3 pr-3 mt-1 rounded-xl bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              Submit
            </button>

          </form>
          <div>
            {populateCardLink()}
          </div>
        </div>

      </div>
      <footer className="absolute bottom-0 p-2 flex content-center w-full text-center">
        <div className="dark:text-white flex content-center w-full text-center">Created By Billy Mitchell | Built with: Next.js & Tailwind CSS</div>
      </footer>
    </>
  )
}








