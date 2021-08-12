import { useEffect, useState, useRef } from "react"

import Layout from "../layout/Layout"
import DateTimeView from "./DateTimeView"
import GuestView from "./GuestsView"
import CheckoutView from "./CheckoutView"
import ProtectedRoute from "../protected/ProtectedRoute"

import useUpdateEffect from "../hooks/useUpdateEffect"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import ProgressBar from "../ui/ProgressBar"

function ReservationPage() {
  const formDataRef = useRef({
    date: "",
    time: "",
    guest: "",
  })

  const [viewIndex, setViewIndex] = useState(0);

  const [min, setMin] = useState(true);
  const [max, setMax] = useState(false);

  const [message, setMessage] = useState({});

  const [dates, setDates] = useState([]);

  const views = [
    <DateTimeView key={1} dates={dates.map(date => new Date(date))} message={message} setMessage={setMessage} formDataRef={formDataRef}/>,
    <GuestView key={2} message={message} formDataRef={formDataRef}/>,
    <CheckoutView key={3} message={message} formDataRef={formDataRef}/>
  ];

  useUpdateEffect(() => {
    if (min != (viewIndex == 0)) setMin(!min);
    if (max != (viewIndex == views.length - 1)) setMax(!max);
  }, [viewIndex]);

  useEffect(() => {
   fetch("/api/reservations")
    .then(res => res.json())
    .then(payload => payload.reservations)
    .then(reservations => setDates(reservations));
  }), [];

  function validateCurrentView() {
    let validated = true;
    switch (viewIndex) {
      case 0:
        setMessage({
          date: formDataRef.current.date ? "": "please state the date.",
          time: formDataRef.current.time ? "": "please state the time.",
        });
        if (!formDataRef.current.date || !formDataRef.current.time) validated = false;
        break;
      case 1:
        setMessage({
          guest: formDataRef.current.guest ? "": "please state the number of guests."
        });
        if (!formDataRef.current.guest) validated = false;
        break;
    }
    return validated;
  }

  function nextView() {
    console.log(validateCurrentView());
    if (!max && validateCurrentView()) {
      setViewIndex(viewIndex + 1);
    }
  }

  function prevView() {
    if (!min) setViewIndex(viewIndex - 1);
  }


  return (
    <ProtectedRoute>
      <Layout>
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <SwitchTransition>
            <CSSTransition key={viewIndex} timeout={500} classNames="fade">
              {views[viewIndex]}
            </CSSTransition>
          </SwitchTransition>
          <div className="absolute flex flex-row items-center justify-center w-full max-w-screen-md gap-12 p-4 transition-all md:p-10 top-3/4 md:gap-32">
            <span className="flex" onClick={prevView}>
              <button className="flex flex-row gap-2 transition-all md:gap-4">
                <span className="material-icons-outlined">
                  arrow_back
                </span>
                <span>back</span>
              </button>
            </span>
            <span className="flex items-center justify-center flex-1">
              <ProgressBar percent={(viewIndex + 1) / 3}/>
            </span>
            <span className="flex justify-end" onClick={nextView}>
              <button className="flex flex-row gap-2 transition-all md:gap-4">
                <span>next</span>
                <span className="material-icons-outlined">
                  arrow_forward
                </span>
              </button>
            </span>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  )
}

export default ReservationPage;