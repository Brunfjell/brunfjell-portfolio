const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-lg mx-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle