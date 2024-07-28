export default function PlaceImg({ place, index = 0, className = null }) {
    if (!place.photos?.length) {
      return null;
    }
    if (!className) {
      className = 'object-cover';
    }
    return (
      <img 
        src={`http://localhost:4000/${place.photos[index]}`} 
        className={className} 
        alt={place.title || "Place image"} 
      />
    );
  }
  