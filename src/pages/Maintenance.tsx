// SRC/pages/Maintenance.tsx
import React from "react";

export type MaintenanceNoticeProps = {
  countdownMinutes?: number;
};

const MaintenanceNotice: React.FC<MaintenanceNoticeProps> = ({
  countdownMinutes = 30,
}) => {
  return (
    <div className="min-h-screen grid place-items-center bg-[#0c0f14] text-white px-6">
      <div className="max-w-xl text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="tracking-wider text-sm text-[#d9b15b]">MANTENIMIENTO</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Estamos en mantenimiento
        </h1>
        <p className="text-white/75 text-lg">
          Volvemos en breve. Estamos mejorando la experiencia para vos.
        </p>
        <p className="text-white/60">
          ETA ~{countdownMinutes} min
        </p>
      </div>
    </div>
  );
};

export default MaintenanceNotice;
export { MaintenanceNotice };
