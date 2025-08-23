import Icon from "./common/Icon";

function Form() {
  return (
    <div className="absolute top-0 end-0 -translate-y-1/2 w-full md:w-9/10 py-4 md:py-10 px-2 md:px-6 bg-accent-primary/95 rounded-xxlarge md:rounded-s-xxlarge z-40">
      <form
        action=""
        className="flex justify-between flex-wrap gap-2 text-content-light"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="check-in">Check In</label>
          <input
            type="date"
            id="check-in"
            className="py-1 px-1 text-content-dark bg-white rounded-small"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="check-out">Check Out</label>
          <input
            type="date"
            id="check-out"
            className="py-1 px-1 text-content-dark bg-white rounded-small"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="room">Room</label>
          <select
            id="room"
            className="py-1 px-1 text-content-dark bg-white rounded-small"
          >
            <option>Room 1</option>
            <option>Room 2</option>
            <option>Room 3</option>
            <option>Room 4</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="adults">Adults</label>
          <select
            id="adults"
            className="py-1 px-1 text-content-dark bg-white rounded-small"
          >
            <option disabled>Adults</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="children">Children</label>
          <select
            id="children"
            className="py-1 px-1 text-content-dark bg-white rounded-small"
          >
            <option disabled>Children</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full px-2 text-content-dark bg-accent-secondary hover:scale-110 rounded-small cursor-pointer"
          >
            Check Now <Icon name="arrow-up-right" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
