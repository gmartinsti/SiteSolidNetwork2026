import { Link } from 'react-router-dom';
import { BRAND_LOCKUP, nexcicloLogo, solidnetworkLogo } from '@/lib/brandLogos';

const BrandLockup = () => {
  return (
    <div className="flex shrink-0 items-center gap-3 sm:gap-5">
      <Link
        to="/"
        className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
        aria-label="Solid Network — Início"
      >
        <img
          src={solidnetworkLogo("light")}
          alt="Solid Network"
          className="h-20 w-auto max-w-[240px] object-contain object-left sm:max-w-none md:h-[6.5rem]"
        />
      </Link>

      <span className="h-16 w-px shrink-0 bg-[#E6E1F2] md:h-20" aria-hidden="true" />

      <Link
        to="/nexciclo"
        className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
        aria-label={`${BRAND_LOCKUP} — Saúde Digital`}
      >
        <img
          src={nexcicloLogo("light")}
          alt={BRAND_LOCKUP}
          className="h-[4.5rem] w-auto max-w-[220px] object-contain object-left sm:max-w-none md:h-[5.5rem]"
        />
      </Link>
    </div>
  );
};

export default BrandLockup;
