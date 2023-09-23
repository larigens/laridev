import ScrollAnimation from "@/components/ScrollAnimation"


// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Layout({ children }) {
    return (
        <>
            <ScrollAnimation />
            {children}
        </>

    )
}