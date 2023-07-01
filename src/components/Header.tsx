import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
        <Link href ="/">Главная</Link>
        <Link href ="/products">Каталог товаров</Link>
    </header>
  )
}