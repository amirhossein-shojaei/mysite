import { ReactNode } from 'react'

export function Marquee({ items, reverse = false, label }: { items: string[]; reverse?: boolean; label: string }) {
  const content = [...items, ...items]
  return <div className="marquee-row"><span className="marquee-label">{label}</span><div className="marquee-window"><div className={`marquee-track ${reverse ? 'reverse' : ''}`}>{content.map((item, index) => <span className="marquee-item" key={`${item}-${index}`}><i />{item}</span>)}</div></div></div>
}
