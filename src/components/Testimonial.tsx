import hotelImage1 from "../assets/testimonial-1.webp";
import hotelImage2 from "../assets/testimonial-2.webp";
import testimonialAvatar from "../assets/client-1.webp";
import Icon from "./common/Icon";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";

function Testimonial() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full h-dvh section-padding bg-surface-light dark:bg-surface-dark">
      <div className="flex justify-center items-center">
        <div className="relative w-3/5 lg:w-3/4">
          <div className="rounded-2xl overflow-hidden">
            <img src={hotelImage1} alt="hotel-image" className="" />
          </div>

          <div className="absolute w-1/2 bottom-12 end-0 translate-x-1/4 border-2 border-white rounded-xl overflow-hidden">
            <img
              src={hotelImage2}
              alt="hotel-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="">
          <div className="space-y-2">
            <SectionTitle title="Testimonial" />
            <SectionHeading title="Amazing Feedback Say About Services" />
          </div>

          <div className="flex flex-col gap-4 mt-6 p-5 bg-surface-alt rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <Icon
                  name="star"
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
                <Icon
                  name="star"
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
                <Icon
                  name="star"
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
                <Icon
                  name="star"
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
                <Icon
                  name="star"
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
              </div>

              <p className="text-small md:text-regular text-content-muted">
                "Special treat to dine, It was wow experience food was really
                delicious outstanding dinner made by Master chef, food
                experience was unforgetable!"
              </p>
            </div>

            <div className="w-full h-0.5 bg-[#cdcfcf]"></div>

            <div className="flex gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={testimonialAvatar}
                  alt="client-avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <h3 className="font-bold text-xl text-content-dark-alt">
                  John Doe
                </h3>
                <span className="text-content-muted">Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
