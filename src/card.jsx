import { FaTimes } from 'react-icons/fa';
function Card({name,check,fchange,bagla}) {
  return (
    <p>
      <input type="checkbox" checked={check}  onChange={fchange} />
      <span>{name}</span>
      <FaTimes size={20} onClick={bagla}/>  
    </p>
  );
 
}
export default Card;
