export function SectionHeading({ eyebrow, title, accent, description, id }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={id} className="section-title">
          {title} <span>{accent}</span>
        </h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
