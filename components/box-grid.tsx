import { imageUrlFor } from "../lib/image-url";
import CTALink from "./cta-link";

type ServiceProps = {
  name: string;
  summary: string;
  slug: string;
  cta?: {
    title: string;
    url: string;
  };
};

type BoxGridItemProps = {
  key?: string;
  service: ServiceProps;
  icon: any;
};

type BoxGridProps = {
  title: string;
  kicker?: string;
  key: string;
  columns: number;
  _type: string;
  disabled: boolean;
  services: BoxGridItemProps[];
};

const maybeImage = (icon, { imageClass = "" }) => {
  let img = null;
  if (icon && icon.disabled !== true && icon.image && icon.image.asset) {
    const image = imageUrlFor(icon.image)
      .width(1000)
      .crop("focalpoint")
      .fit("crop")
      .url();
    img = <img className={imageClass} src={image} alt={icon.image.alt} />;
  }
  return img;
};

const BoxGrid = (props: BoxGridProps) => {
  const { services, kicker, title } = props;
  return (
    <div className="container mx-auto flex flex-col items-center py-16 space-y-8">
      {/* kicker */}
      {kicker && (
        <h3 className="my-0 text-tiny font-black leading-tight text-primary mx-auto">
          {kicker}
        </h3>
      )}

      {/* title */}
      {title && (
        <h2 className="my-0 text-4xl font-bold text-center">{title}</h2>
      )}

      <div className="grid grid-cols-12 gap-12">
        {services.map((item) => {
          const { service, icon } = item;
          return (
            <div
              className="flex flex-col col-span-6 px-16 py-12 rounded-2xl md:flex-row items-center bg-white shadow-xl shadow-neutral/5"
              key={item.key}
            >
              <div className="grid grid-cols-12">
                {maybeImage(icon, {
                  imageClass: "col-span-2",
                })}
                <div className="col-span-10 flex flex-col justify-center items-start text-center md:text-left space-y-4">
                  <h3 className="my-0 text-2xl font-black leading-wide text-neutral">
                    {service.name}
                  </h3>
                  <div className="leading-relaxed mb-32 text-normal text-base-content text-opacity-70">
                    {service.summary}
                  </div>
                  <CTALink
                    title="Læs mere"
                    kind="link"
                    route={`/projekter/${service.slug}`}
                    buttonActionClass="btn btn-primary px-12 rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxGrid;
