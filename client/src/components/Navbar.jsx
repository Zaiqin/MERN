import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="React logo" className="h-12 inline mr-3" src="https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"></img>
          <img alt="Vite logo" className="h-12 inline mr-3" src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh4jbiijckmk65al45e6x.jpg"></img>
          <img alt="Tailwind logo" className="h-12 inline mr-3" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png"></img>
          <img alt="Nodejs logo" className="h-12 inline mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
          <img alt="Expressjs logo" className="h-12 inline mr-3" src="https://media.licdn.com/dms/image/D4D12AQFXvctolWIgaA/article-cover_image-shrink_600_2000/0/1690180190333?e=2147483647&v=beta&t=iroYw37WHp2udjZFfYnoETLcCR_Ma5XHt-esmPvodlw"></img>
          <img alt="MongoDB logo" className="h-12 inline mr-3" src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img>
        </NavLink>
        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
      <div className="flex mb-6">
        <h1 className="font-medium">Powered by React.js, Vite, Tailwind, Node.js, Express.js, MongoDB</h1>
      </div>
    </div>
  );
}