import { useState, useEffect, useRef } from 'react';
import mockData from '../../data/nodo-ia-mock.json';

export default function MulticriteriaMatrix() {
  const { mcda } = mockData;
  const [isVisible, setIsVisible] = useState(false);
  const [activeCriterionId, setActiveCriterionId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth entry animation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col justify-between h-full bg-[#111827] border border-[#374151] rounded-xl p-4 sm:p-6 shadow-2xl overflow-hidden font-sans select-none"
    >
      {/* 1. Technical Header */}
      <div className="pb-4 border-b border-[#374151]">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            {/* Terminal status dots */}
            <div className="flex items-center gap-1.5 mr-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635]/80"></span>
            </div>
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#F9FAFB] tracking-tight">
              nodo-ia <span className="text-[#A3E635] font-normal">{mcda.version}</span>
            </span>
          </div>

          <span className="font-mono text-[10px] text-[#A3E635] bg-[#A3E635]/10 px-2 py-0.5 rounded border border-[#A3E635]/20 uppercase tracking-widest font-medium">
            mcda / ahp engine
          </span>
        </div>

        {/* Subtitle */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF] pl-7">
          <span className="tracking-wider uppercase text-[#BEF264]/90 font-medium">
            MATRIZ MULTICRITERIO / PESO DE CRITERIOS
          </span>
        </div>
      </div>

      {/* 2. Criteria List with Animated Horizontal Bars and Hover State */}
      <div className="py-4 space-y-3.5 flex-grow">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280] pb-1 border-b border-[#374151]/40 uppercase tracking-wider">
          <span>Criterio de Evaluación</span>
          <span>Ponderación</span>
        </div>

        {mcda.criteria.map((item, index) => {
          const isHovered = activeCriterionId === item.id;
          const isTop = index === 0;

          return (
            <div
              key={item.id}
              tabIndex={0}
              role="region"
              aria-label={`Criterio ${item.name}: ${item.weight}% de ponderación. ${item.description}`}
              onMouseEnter={() => setActiveCriterionId(item.id)}
              onMouseLeave={() => setActiveCriterionId(null)}
              onFocus={() => setActiveCriterionId(item.id)}
              onBlur={() => setActiveCriterionId(null)}
              className={`p-2.5 rounded-lg border transition-all duration-200 cursor-default focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635] ${
                isHovered
                  ? 'bg-[#1F2937] border-[#A3E635]/50 shadow-sm translate-x-1'
                  : 'bg-[#0B0F17]/60 border-[#374151]/40 hover:border-[#374151]'
              }`}
            >
              {/* Row Header: Name & Mono Percentage */}
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono ${isHovered ? 'text-[#A3E635]' : 'text-[#6B7280]'}`}>
                    0{index + 1}
                  </span>
                  <span className={`font-medium ${isHovered ? 'text-[#F9FAFB]' : 'text-[#9CA3AF]'}`}>
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <span
                    className={`font-semibold text-xs ${
                      isTop
                        ? 'text-[#A3E635]'
                        : isHovered
                        ? 'text-[#BEF264]'
                        : 'text-[#F9FAFB]'
                    }`}
                  >
                    {item.weight}%
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="h-2 w-full bg-[#0B0F17] rounded-full overflow-hidden border border-[#374151]/50 p-[1px]">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    isTop
                      ? 'bg-gradient-to-r from-[#4D7C0F] via-[#A3E635] to-[#BEF264]'
                      : isHovered
                      ? 'bg-[#A3E635]'
                      : 'bg-[#A3E635]/80'
                  }`}
                  style={{
                    width: isVisible ? `${item.weight}%` : '0%',
                    transitionDelay: `${index * 120}ms`,
                    boxShadow: isTop || isHovered ? '0 0 8px rgba(163, 230, 53, 0.4)' : undefined,
                  }}
                />
              </div>

              {/* Description preview in hover state */}
              {isHovered && (
                <div className="pt-1.5 text-[10px] text-[#9CA3AF] font-mono animate-fadeIn flex items-center gap-1">
                  <span className="text-[#A3E635]">↳</span> {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Footer with Total 100% and Vista Ilustrativa */}
      <div className="pt-3 border-t border-[#374151] flex items-center justify-between font-mono text-xs text-[#9CA3AF]">
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-[#6B7280]">Total acumulado:</span>
          <span className="font-semibold text-xs text-[#A3E635] bg-[#A3E635]/10 px-2 py-0.5 rounded border border-[#A3E635]/30">
            {mcda.total}%
          </span>
        </div>

        <span className="italic text-[10px] tracking-wide text-[#6B7280]">
          Vista ilustrativa
        </span>
      </div>
    </div>
  );
}
