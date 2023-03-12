const SectionTitle = ({subtitle, title, description}) => {
  return (
    <div className="title">
      <span>{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionTitle;