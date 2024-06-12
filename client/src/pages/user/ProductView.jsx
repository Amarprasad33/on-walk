import { useParams } from 'react-router-dom';

export default function ProductView() {
    const { id } = useParams();
    console.log("id--", id);
  return (
    <div>ProductView</div>
  )
}