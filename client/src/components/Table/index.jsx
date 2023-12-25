import React, { useEffect } from "react";
import { Table, Image } from "antd";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteBasket, addBasket,basketIncrement,  } from '../../features/basketSlice.jsx';
import Button2 from "../button2/index.jsx";

const TableBasket = () => {
  const basket = useSelector((state) => state.basketS.value);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket])
  

  const handleQuantityChange = (id, value) => {
    dispatch(addBasket({ id, count: value.target.value }));
  };

  const handleClick = (record) => {
    dispatch(deleteBasket(record.id));
  };
  const artir = (item)=>{
    dispatch(basketIncrement(item))
  }
  // const azalt = (item) => {
  //   dispatch(basketDecrement(item))
  // }

  const columnsData = columns({ handleQuantityChange, handleClick,artir });

  return (
    <section className="py-20">
      <div className="wrapper ">
        <Table
          columns={columnsData}
          dataSource={basket.map((item) => ({ ...item, key: item.id }))}
          pagination={{
            pageSize: 3,
          }}
          scroll={{
            y: 200,
          }}
        />
        <div className="flex justify-between items-center py-10">
        <div><Button2 text={"Return To Shop"}/></div>
        <div><Button2 text={"Update Cart"}/></div>
      </div>
      </div>
      
    </section>
  );
};
export default TableBasket

export const columns = ({  handleClick,artir, }) => [
  {
    title: "Product",
    dataIndex: "product",
    render: (text, record) => (
      <div className="flex items-center relative">
        <span
          onClick={() => handleClick(record)}
          className="text-secondary text-lg absolute top-0 left-0 z-50 bg-white rounded-full"
        >
          <FaTimesCircle />
        </span>
        <Image src={record.img} alt={text} width={50} />
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "count",
    render: (text, item) => (
      <div className="flex items-center  px-2">
        <div className="border border-solid rounded-md flex pl-1 items-center p-1">
        <p className="text-md">{text}</p> 
        <div className="flex flex-col pl-6">
        <button onClick={()=>artir(item)}>+</button>
        {/* <button onClick={()=>azalt(item)}>-</button> */}
        </div>
        </div>
      </div>
    ),
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    render: (text, record) =>`$ ${record.count * record.price}`
  },
];