import AddProduct from "@/components/add-product/add-product";
import {ListProduct} from "@/components/list-product";
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";

const Page = () => {
    return (
      <main>
          <h2><RiTodoLine className="icons" />Teste prático da mission <RiTodoLine className="icons" /> </h2>
          <AddProduct />
          <ListProduct />
      </main>
    );
};

export default Page;