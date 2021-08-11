
import getStripe from "../../lib/getStripe";


function CheckoutView({ formDataRef }) {

  const dateString = formDataRef.current.date ? formDataRef.current.date.toLocaleDateString("en-gb", {day: "numeric", month: "long", year: "numeric"}): "";

  async function checkout() {
    const stripe = await getStripe();
    fetch("/api/checkout", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataRef.current)
    })
      .then(res => res.json())
      .then(payload => {
        stripe.redirectToCheckout({ sessionId: payload.data })
      });
  }


  return (
    <div className="flex flex-col justify-center max-w-screen-sm">
      <div className="flex text-5xl font-bold text-center md:text-7xl">Here is Your Reservation Details.</div>
      <div className="flex flex-row justify-center gap-4 py-4 text-sm text-gray-500">
        <span className="flex items-center justify-center gap-1">
          <span className="text-sm material-icons-outlined">
            calendar_today
          </span> 
          <span>{dateString}</span>
        </span>
        <span className="flex items-center justify-center gap-1">
          <span className="text-sm material-icons-outlined">
            schedule
          </span> 
          <span>{formDataRef.current.time}</span>
        </span>
        <span className="flex items-center justify-center gap-1">
          <span className="text-sm material-icons-outlined">
            person
          </span> 
          <span>{formDataRef.current.guest} guests</span>
        </span>
      </div>
      <button className="w-full p-2 mt-4 rounded before:font-bold ring-white ring-2 hover:bg-white hover:text-black" onClick={checkout}>
        proceed to payment
      </button>
    </div>
  )
}

export default CheckoutView;