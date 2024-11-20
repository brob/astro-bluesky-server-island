export const prerender = false;

export async function GET({ params }) {
    return new Response(
        JSON.stringify({ message: "Hello, world!" }),
       {
        status: 200,
       }
    )};
