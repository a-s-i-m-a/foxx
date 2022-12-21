import { Button } from '../';
import { useRouter } from 'next/router'

const Center = ({ price, title, link }) => {
  const router = useRouter()
  function navigate() {
    router.push(link)
  }
  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">Товар дня</p>
      <p className="py-6 tracking-wide">ОТ <span>${price}</span></p>
      <Button
        onClick={navigate}
        title="Заказать"
      />
    </div>
  )
}

export default Center