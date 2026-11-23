import { useState } from 'react';
import mockData from '../../data/nodo-ia-mock.json';

export default function NodoIaSimulation() {
  const { graph, distribution } = mockData;
  const [hoveredScenario, setHoveredScenario] = useState<string | null>(null);

  // Map nodes for easy coordinate lookup
  const nodeMap = new Map(graph.nodes.map(n => [n.id, n]));

  return (
    <div className="w-full flex flex-col justify-between h-full bg-[#111827] border border-[#374151] rounded-xl p-4 sm:p-5 shadow-2xl overflow-hidden font-sans select-none">
      {/* 1. Technical Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#374151]">
        <div className="flex items-center gap-2">
          {/* Mac-like terminal status dots */}
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635]/80"></span>
          </div>
          <span className="font-mono text-xs sm:text-[13px] text-[#9CA3AF] tracking-tight">
            nodo-ia <span className="text-[#374151]">/</span> simulación
          </span>
        </div>

        {/* Pulse & active badge */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#A3E635] bg-[#A3E635]/10 px-2.5 py-0.5 rounded border border-[#A3E635]/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3E635] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A3E635]"></span>
          </span>
          <span className="tracking-wide uppercase font-medium">simulación activa</span>
        </div>
      </div>

      {/* 2. Top Half: Native SVG Graph with Active Lit Route */}
      <div className="py-3 sm:py-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280] mb-2 px-1">
          <span className="uppercase tracking-wider">Topología de ruteo & latencia</span>
          <span className="text-[#9CA3AF]">5 saltos • nodo objetivo</span>
        </div>

        <div className="w-full bg-[#0B0F17]/80 rounded-lg p-2 sm:p-3 border border-[#374151]/50 relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#A3E635 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          <svg
            viewBox="0 0 300 140"
            className="w-full h-auto max-h-[140px] overflow-visible"
            aria-label="Grafo de simulación topológica"
          >
            <defs>
              {/* Glow filter for active path and target */}
              <filter id="glow-lime" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-target" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4D7C0F" />
                <stop offset="60%" stopColor="#A3E635" />
                <stop offset="100%" stopColor="#BEF264" />
              </linearGradient>
            </defs>

            {/* Inactive background edges */}
            {graph.edges
              .filter(e => !e.active)
              .map((edge, idx) => {
                const source = nodeMap.get(edge.from);
                const target = nodeMap.get(edge.to);
                if (!source || !target) return null;
                return (
                  <line
                    key={`inact-${idx}`}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                );
              })}

            {/* Active illuminated path */}
            {graph.edges
              .filter(e => e.active)
              .map((edge, idx) => {
                const source = nodeMap.get(edge.from);
                const target = nodeMap.get(edge.to);
                if (!source || !target) return null;
                return (
                  <g key={`act-${idx}`}>
                    {/* Outer glow line */}
                    <line
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="#A3E635"
                      strokeWidth="4"
                      strokeOpacity="0.3"
                      filter="url(#glow-lime)"
                    />
                    {/* Core energetic animated line */}
                    <line
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="url(#activeGradient)"
                      strokeWidth="2"
                      strokeDasharray="6 3"
                      className="animate-pulse"
                      style={{
                        animationDuration: `${1.8 + idx * 0.2}s`
                      }}
                    />
                  </g>
                );
              })}

            {/* Render Nodes */}
            {graph.nodes.map(node => {
              const isOnActivePath = graph.activePath.includes(node.id);
              const isTarget = node.isTarget;

              return (
                <g key={node.id} className="transition-transform duration-300">
                  {/* Target Node subtle pulsating halo */}
                  {isTarget && (
                    <>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="14"
                        fill="none"
                        stroke="#A3E635"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        className="animate-ping"
                        style={{ animationDuration: '3s', transformOrigin: `${node.x}px ${node.y}px` }}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="10"
                        fill="#A3E635"
                        fillOpacity="0.15"
                        filter="url(#glow-target)"
                      />
                    </>
                  )}

                  {/* Standard Node Circles */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isTarget ? 6.5 : isOnActivePath ? 5 : 4}
                    fill={isTarget ? "#A3E635" : isOnActivePath ? "#111827" : "#0B0F17"}
                    stroke={isTarget ? "#BEF264" : isOnActivePath ? "#A3E635" : "#374151"}
                    strokeWidth={isOnActivePath || isTarget ? 2 : 1.5}
                  />

                  {/* Node Inner Dot for active nodes */}
                  {isOnActivePath && !isTarget && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="2"
                      fill="#A3E635"
                      className="animate-pulse"
                    />
                  )}

                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y + (node.y > 70 ? 14 : -10)}
                    textAnchor="middle"
                    className="font-mono text-[8px] select-none"
                    fill={isTarget ? "#BEF264" : isOnActivePath ? "#A3E635" : "#6B7280"}
                    fontWeight={isOnActivePath ? "600" : "400"}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* 3. Bottom Half: Bell Curve Histogram */}
      <div className="pt-2 pb-3 border-t border-[#374151]/70">
        <div className="flex items-center justify-between text-[11px] font-mono mb-2 px-1">
          <span className="text-[#6B7280] uppercase tracking-wider">Distribución Monte Carlo</span>
          <span className="text-[#A3E635] font-medium">p50 óptimo: 22.5 ms</span>
        </div>

        {/* Histogram Bars Container */}
        <div className="w-full bg-[#0B0F17]/80 rounded-lg p-3 sm:px-4 sm:py-3 border border-[#374151]/50">
          <div className="flex items-end justify-between gap-1.5 sm:gap-2 h-20 sm:h-24 pt-2 pb-1 border-b border-[#374151]/40">
            {distribution.bars.map((bar) => {
              const isBase = bar.scenario === 'base';
              const isAccent = bar.color === 'accent';
              const isDim = bar.color === 'dim';
              const isHovered = hoveredScenario === bar.scenario;

              // Height percentage based on bar value (max 100)
              const heightPercent = `${bar.value}%`;

              return (
                <div
                  key={bar.id}
                  className="flex-1 flex flex-col items-center justify-end h-full group relative"
                >
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-7 left-1/2 -translate-x-1/2 bg-[#111827] border border-[#374151] px-1.5 py-0.5 rounded text-[9px] font-mono text-[#F9FAFB] pointer-events-none whitespace-nowrap z-20 shadow-md">
                    {bar.label}: {bar.value}%
                  </div>

                  {/* Animated Bar with CSS breathing effect */}
                  <div
                    className={`w-full rounded-t transition-all duration-300 relative ${
                      isAccent
                        ? 'bg-[#A3E635] shadow-[0_0_12px_rgba(163,230,53,0.35)]'
                        : isBase
                        ? 'bg-[#A3E635]/40 border border-[#A3E635]/50'
                        : isDim
                        ? 'bg-[#1F2937]/70 border border-[#374151]/40'
                        : 'bg-[#374151] border border-[#4B5563]/40'
                    } ${isHovered ? 'brightness-125 scale-y-105 origin-bottom' : ''}`}
                    style={{
                      height: heightPercent,
                      animation: isAccent ? 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' : undefined,
                    }}
                  >
                    {bar.isPeak && (
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#BEF264] ring-2 ring-[#0B0F17]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lower Labels: Escenario bajo, base (en lima), escenario alto */}
          <div className="grid grid-cols-3 pt-2 text-center font-mono text-[11px] sm:text-xs">
            {distribution.scenarios.map((sc) => {
              const isBase = sc.key === 'base';
              return (
                <button
                  key={sc.key}
                  type="button"
                  aria-label={`Visualizar escenario ${sc.label} (${sc.range})`}
                  onMouseEnter={() => setHoveredScenario(sc.key)}
                  onMouseLeave={() => setHoveredScenario(null)}
                  onFocus={() => setHoveredScenario(sc.key)}
                  onBlur={() => setHoveredScenario(null)}
                  className={`flex flex-col items-center justify-center transition-colors duration-200 py-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A3E635] ${
                    isBase
                      ? 'text-[#A3E635] font-semibold font-mono'
                      : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {isBase && <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />}
                    {sc.label}
                  </span>
                  <span className="text-[10px] text-[#6B7280] font-normal">{sc.range}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Footer discreto */}
      <div className="pt-2.5 mt-1 border-t border-[#374151]/50 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#374151]"></span>
          mc-kernel: 10,000 iter.
        </span>
        <span className="italic text-[10px] tracking-wide text-[#9CA3AF]/80">
          Vista ilustrativa
        </span>
      </div>
    </div>
  );
}
