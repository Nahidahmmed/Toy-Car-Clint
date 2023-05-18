

const Gallery = () => {
    return (
        <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">A Miniature Wonderland of Toy Car Marvels</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src="https://i.ibb.co/g7Wyn1k/car-1.webp"
                alt="Image 1"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-4">
              <img
                src="https://i.ibb.co/D78XTr3/1-18-Scale-Ford-Mustang-Boss-429-Simulation-Alloy-Car-Model-Collection-Ornament-Souvenir-Hobby-Toy.jpg"
                alt="Image 2"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-4">
              <img
                src="https://i.ibb.co/0CZPX8H/car-3.jpg"
                alt="Image 3"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-4">
              <img
                src="https://i.ibb.co/hHdw5dh/car-4.jpg"
                alt="Image 4"
                className="rounded-lg object-cover"
              />
            </div>
            {/* Add more images as needed */}
          </div>
        </div>
      </section>
    );
};

export default Gallery;