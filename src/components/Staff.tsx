import logosImage from "../assets/logos.webp";
import { info } from "../config/info";
import { staffList } from "../config/staff";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";

function Staff() {
  return (
    <section className="flex flex-col justify-between section-padding w-full min-h-dvh bg-gradient-to-b from-accent-primary from-0% via-accent-primary via-58% to-white to-50%">
      <div className="flex flex-col items-center mb-4">
        <SectionTitle title={`${info.company.name} Staff`} />
        <SectionHeading
          title="Expert Staff Persons"
          className="text-content-light"
        />
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 items-center gap-4">
        {staffList.map((staff) => (
          <li
            key={staff.id}
            className="flex flex-col gap-5 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={staff.image}
                alt="staff-image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 py-2 px-2">
              <h3 className="font-bold text-xl">{staff.name}</h3>
              <div className="flex items-center gap-2">
                <span className="w-7 h-0.5 bg-accent-primary"></span>
                <span className="text-content-muted">{staff.position}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <img
          src={logosImage}
          alt="logos-image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Staff;
