import Reservation from "./Reservation"
import ReservationCalendar from "./ReservationCalendar"

const Dashboard = ({ reservations }) => {

  const ReservationList = ({ label, reservations }) => {

    const createReservations = (reservations) => {
      return reservations.map((value, index) => {
        return <Reservation key={index} reservation={value}/>
      });
    }

    return (
      <span className="flex flex-col flex-1 mr-8 last:mr-0">
        <div className="py-4 text-2xl font-bold font-grotesk">{label}</div>
        <div className="flex flex-col flex-1 w-full p-4 overflow-y-auto border rounded ">
          {createReservations(reservations)}
        </div>
      </span>
    )
  }

  return (
    <span className="flex flex-col flex-1 p-10">
      <div className="flex flex-row flex-1 mb-8 overflow-y-hidden">
        <ReservationList label="Pending Reservation" reservations={reservations.filter(r => new Date(r.date).getTime() > new Date().getTime())}/>
        <ReservationList label="Recent Reservation" reservations={reservations.filter(r => new Date(r.date).getTime() < new Date().getTime())}/>
      </div>
      <div className="flex flex-row flex-1 mb-8 overflow-y-hidden">
        <span className="flex flex-row items-center justify-center flex-1">
          <ReservationCalendar/>
        </span>
        <span className="flex flex-1">
        </span>
      </div>
    </span>
  )
}

export default Dashboard;