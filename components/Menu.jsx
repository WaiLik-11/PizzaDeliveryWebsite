import Image from 'next/image';
import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css';

export default function Menu({pizzas}) {
    console.log(pizzas);
    return (
        <div className={css.container}>
            <div className={css.heading}>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall In Love</span>
            </div>

            <div className={css.menu}>
                {/* pizzas */}
                {pizzas.map((pizza, id)=> {
                    const src = urlFor(pizza.image).url()
                    return (
                        <div className={css.pizza} key={id}>
                            <div className={css.ImageWrapper}>
                                <Image 
                                    loader={() => src}
                                    src={src} 
                                    alt="" 
                                    objectFit='cover'
                                    layout='fill'
                                />
                            </div>
                            <span>{pizza.name}</span>
                            <span>RM {pizza.price[1]}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};