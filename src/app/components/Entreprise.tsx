/* eslint-disable @next/next/no-img-element */
const Entreprise = () => {
  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Ils m'ont fait confience
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
            src="/logo/entreprise/signature.jpg"
            alt="signature"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logo/entreprise/acsd.jpg"
            alt="acsd"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
            src="/logo/entreprise/terabois.jpg"
            alt="terabois"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
            src="/logo/entreprise/avenue-immo.jpg"
            alt="avenue-immo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
            src="/logo/entreprise/duval.jpg"
            alt="duval"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
            src="/logo/entreprise/dutruch.jpg"
            alt="duval"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
};

export default Entreprise;
