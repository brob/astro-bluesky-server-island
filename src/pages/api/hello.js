export const prerender = false
export const GET = ({ params, request }) => {
    return new Response(JSON.stringify({
        message: "This was a GET!"
      })
    )
  }