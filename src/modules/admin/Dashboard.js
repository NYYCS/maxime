import Reservation from "./Reservation"
import ReservationCalendar from "./ReservationCalendar"

const Dashboard = () => {

  const ReservationList = ({ label, reservations }) => {
    return (
      <span className="flex flex-col flex-1 mr-8 last:mr-0">
        <div className="py-4 text-2xl font-bold font-grotesk">{label}</div>
        <div className="flex flex-col flex-1 w-full p-4 overflow-y-auto border rounded ">
          {reservations}
        </div>
      </span>
    )
  }

  return (
    <span className="flex flex-col flex-1 p-10">
      <div className="flex flex-row flex-1 mb-8 overflow-y-hidden">
        <ReservationList label="Pending Reservation" reservations={[]}/>
        <ReservationList label="Recent Reservation" reservations={[]}/>
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