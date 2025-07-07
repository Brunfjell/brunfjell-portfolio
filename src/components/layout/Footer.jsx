const Footer = ({ year }) => {
  return (
    <footer className="bg-stone-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>©{year} Brunfjell. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer