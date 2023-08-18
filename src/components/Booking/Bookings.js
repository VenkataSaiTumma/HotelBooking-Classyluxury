import Menu from "./Menu";
import { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/bookings")
        .then((response) => setBooking(response.data));
    };
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <Menu item={booking} />
      </div>
    </section>
  );
};

export default Bookings;
