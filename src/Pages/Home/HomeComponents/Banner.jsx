import image from '../../../assets/toy-car.jpg'

const Banner = () => {
    return (
        <div
      className="flex  items-center bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${image})` }}
    >
       <div className="text-white ml-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to the <br /> world of toy cars!
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Explore our wide range of toy cars for kids.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mt-4">
          We have cars of different sizes, colors, and models <br /> to spark imagination and provide hours of fun playtime.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mt-2">
          Shop now and bring joy to your little ones!
        </p>
      </div>
    </div>
    );
};

export default Banner;