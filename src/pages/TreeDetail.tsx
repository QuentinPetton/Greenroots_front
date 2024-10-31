import Image from '../../public/Images/Hetre2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { useState } from 'react';

function TreesDetail () {

  // Quantity state
  const [quantity, setQuantity] = useState(1); 

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Ajout de ${quantity} au panier`);
  };

  return (
    <main className="container mx-auto flex flex-col p-5">
  {/* Back link */}
  <div className="flex justify-start mt-5 mb-3">
    <a href="/trees" className="flex items-center pr-1">
      <FontAwesomeIcon icon={faChevronLeft} className="pr-1 ml-6" /> Retour
    </a>
  </div>

  {/* Detail one tree */}
  <div className="flex justify-center mt-10 mb-10">
  <img 
    src={Image}
    alt="Nom arbre" 
    className="w-full lg:max-w-md h-100 rounded-[20px] object-cover"
  />
  </div>

  {/* Tree Information */}
  <div className="flex flex-col justify-between p-5 mb-5 rounded-t-[20px] rounded-b-[20px] border border-grey shadow-xl">
    <div className="flex justify-between items-center">
      <h3 className="text-h3 pl-3 mb-2">Chêne</h3>
      <p className="text-greenroots_green pr-4">50 €</p>
    </div>
    <p className="p-2 m-1">Age : 0 à 2 ans</p>
    <p className="p-2 m-1">Lieu : France, Forêt du Pinsan</p>
    <p className="p-2 m-1">Co2 absorbé : 300 par an</p>

    {/* Quantity Selector */}
    <form onSubmit={handleSubmit} className="flex flex-row justify-between items-center p-2 mt-5 mb-2 flex-wrap">
      <div className="flex items-stretch h-10 w-auto">
        <button type="button" onClick={handleDecrement} className="border border-blue-300 rounded-l-full w-7 text-sm md:text-base">-</button>
        <span className="border-t border-b border-blue-300 flex items-center justify-center text-sm md:text-base font-medium px-8">{quantity}</span>
        <button type="button" onClick={handleIncrement} className="border border-blue-300 rounded-r-full w-7 text-sm md:text-base">+</button>
      </div>
      <button type="submit" className="bg-greenroots_orange text-greenroots_white text-[0.8rem] p-2 px-3 rounded-full">
        Ajouter au panier
      </button>
    </form>
  </div>

  {/* Tree Description */}
  <div className="flex flex-col p-5 mt-1 mb-5 rounded-t-[20px] rounded-b-[20px] border border-grey shadow-xl">
    <h3 className="text-h3 mt-2 mb-2">Chêne</h3>
    <p className="mt-2 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam officia</p>
  </div>

  {/* Forest Information */}
  <div className="flex flex-col p-5 mt-1 mb-5 rounded-t-[20px] rounded-b-[20px] border border-grey shadow-xl">
    <h3 className="text-h3 mt-2 mb-2">Forêt du Pinsan</h3>
    <p className="mt-2 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam officia</p>
  </div>
</main>

  );
}

export default TreesDetail;