import {  useState } from "react";
import { CounterStore } from "../../Context/CounterContext";
import { Data } from "../../Context2/Counter";
import { useDispatch} from "react-redux";
import { decrease, increase } from "../../lib/CounterSlice";

const ProductCard = ({ data }) => {
  const [isAded, setisAded] = useState(false);
  const [count, setCount] = useState(1);

// const {state} = useSelector((state)=>state)
// console.log(state)

let dispatch =useDispatch() 

  
// const Test = useContext(Data)


// console.log(Test)


  function addToCart() {
    setisAded(true);
 
     setCount(count + 1);
    //  Test.setCount(x => x  + 1)
  }

  function decremnt() {
    if (count > 1) {
      setCount(count - 1);
      // storeData?.setCounter(c=>c-1)
      // setCounterAtChild()
      //  Test.setCount(x => x  - 1)


    } else {
      setisAded(false);
      setCount(0);
    }
    // console.log("this is the event from decremnt");
  }

  function increamnt() {
    setCount(count + 1);
    // Test.setCount(x => x +1)
      // Test.setCounter(item => item + 1 )
    // setCounterAtChild()

    // console.log("this is the event from increamnt");
  }

  // console.log(data);

  return (
    <div className="col-md-4 my-3">
      <div className="card ">
        <div className="card-header">
          <h4 className="text-center text-bg-warning">{data.title}</h4>
        </div>

        <div className="card-body d-flex flex-column">
          <img
            src={data.thumbnail}
            className="img-fluid rounded mb-3"
            style={{ height: "200px" }}
          />

          <p>
            <strong>ID:</strong> {data.id}
          </p>
          <p>
            <strong>Category:</strong> {data.category}
          </p>
          <p>
            <strong>Description:</strong> {data.description}
          </p>
          <p>
            <strong>Price:</strong> ${data.price}
          </p>
          <p>
            <strong>Discount:</strong> {data.discountPercentage}%
          </p>
          <p>
            <strong>Rating:</strong> {data.rating} ⭐
          </p>
          <p>
            <strong>In Stock:</strong> {data.stock}
          </p>

          <p>
            <strong>Tags:</strong>
          </p>

          <div className="mt-auto">
            {!isAded ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToCart();
                }}
              >
                Add To Cart
              </button>
            ) : (
              <div className="d-flex justify-content-between align-items-center p-2">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    dispatch(decrease())
                  }}
                  // onClick={() => {
                  //   decremnt();
                  // }}
                >
                  -
                </button>

                <span className="text-danger">
                  {count > data.stock ? "Out Of Stock" : count -1}
                </span>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                                        dispatch(increase())

                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="card-footer">
          <ul className="d-flex justify-content-between">
            {data.tags.map((e) => {
              return (
                <>
                  <li className="badge bg-secondary">{e}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
