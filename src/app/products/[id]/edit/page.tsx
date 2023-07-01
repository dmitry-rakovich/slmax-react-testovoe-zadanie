'use client'
import { BASE_URL } from "@/url"
import { useParams, useRouter } from "next/navigation"
import { useState, ChangeEvent, SetStateAction, FC, useEffect } from "react"

const EditPage: FC =  () => {
    const { id } = useParams()
    const router = useRouter()

    const [brand, setBrand] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    
    
        useEffect(() => {
            document.title = `Редактирование товара №${id}`
            fetch(`${BASE_URL}/${id}`).then(res => res.json()).then(data => {
                setBrand(data.brand)
                setName(data.name)
                setPrice(data.price)
                setAmount(data.amount)
            })
        }, [id])
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>, setState: { (value: SetStateAction<string>): void; (arg0: any): void; }) => {
        setState(e.target.value)
    }
    const saveProduct = async () => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                brand,
                name,
                price,
                amount
            })
        })
        if(response.ok) {
            navigator
            router.push('/products')
        }
    }
  return (
    <main className="main">
        <h1>Изменить товар</h1>
        <div>
            <label>Изменить бренд: </label>
            <input type="text" placeholder='бренд' value={brand} onChange={(e) => handleChange(e, setBrand)}/>
        </div>
        <div>
            <label>Изменить имя: </label>
            <input type="text" placeholder='имя' value={name} onChange={(e) => handleChange(e, setName)}/>            
        </div>
        <div>
            <label>Изменить цену: </label>
            <input type="number" min={1} placeholder='цена' value={price} onChange={(e) => handleChange(e, setPrice)}/>
        </div>
        <div>
            <label>Изменить количество: </label>
            <input type="number" min={1} placeholder='количество' value={amount}  onChange={(e) => handleChange(e, setAmount)}/>
        </div>
        <button onClick={saveProduct}>Сохранить</button>
    </main>
  )
}

export default EditPage