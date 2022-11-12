import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {currentCategory} from "../../redux/products/types";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {appSelectors} from "../../redux/app/appSelectors";

export const ProductsPage = () => {

    const {category} = useParams()
    const products = useAppSelector(productsSelectors.selectProducts)
    const isLoading = useAppSelector(appSelectors.selectIsLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        switch (category) {
            case 'jewelery': {
                dispatch(productsSagaActions.fetchCategoryProducts('jewelery', 10))
                break
            }
            case "men-clothing": {
                dispatch(productsSagaActions.fetchCategoryProducts("men's clothing", 10))
                break
            }
            case 'electronics': {
                dispatch(productsSagaActions.fetchCategoryProducts('electronics', 10))
                break
            }
            case "women-clothing": {
                dispatch(productsSagaActions.fetchCategoryProducts("women's clothing", 10))
                break
            }
        }
    }, [category, dispatch])

    if(isLoading) return <div>loading</div>
    return (
        <div>
            {products.map(product => <div key={product.id}>{product.title}</div>)}
        </div>
    );
};

