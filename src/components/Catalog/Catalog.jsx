import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsync } from "../../store/product/productSlice";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import { Product } from "../Product/Product";
import style from "./Catalog.module.css";

export const Catalog = () => {
  const { products } = useSelector((state) => state.product);
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          {products.length ? (
            <div className={style.wrap_list}>
              <ul className={style.list}>
                {products.map((item) => (
                  <li key={item.id} className={style.item}>
                    <Product item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>К сожалению, данный товар закончился</p>
          )}
        </div>
      </Container>
    </section>
  );
};
