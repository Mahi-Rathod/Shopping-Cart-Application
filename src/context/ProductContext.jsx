import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        { id: 1, name: "WD Blue SN580 NVMe™ SSD | SanDisk", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBhmrfYlfAqUFF4TmIVIsaMU_mWi6NSlzqQ&s", quantityAvailable: 5 },
        { id: 2, name: "Men Pure Linen Orangy Green Checked Shirt - LS53 40 cm / Full", price: 25, image: "https://ramrajcotton.in/cdn/shop/files/240524_ramraj1382.jpg?v=1718354622", quantityAvailable: 5 },
        { id: 3, name: "Samsung LF22T350FHWXXL 22 Inch Gaming Monitor", price: 30, image: "https://www.tpstech.in/cdn/shop/files/81wEGCnscBL._SL1500.jpg?v=1703183550&width=1946", quantityAvailable: 5 },
        { id: 4, name: "HP Victus 39.6 cm (15.6) Gaming Laptop 15-FA1314TX, Blue", price: 35, image: "https://electronicparadise.in/cdn/shop/files/4_65e28377-a245-4b2d-b59a-9a4d1d88d331.jpg?v=1731587298", quantityAvailable: 5 },
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
