import Price from "./Price";
import './Product.css';

function Product({title,idx}){
    let oldPrices = ["12900","11000","1500","599"];
    let newPrices = ["10000","8790", "899","279"];
    let des = [["8,000 DPI","5 Programmable buttons"]
    , ["Intuitive surface", "designed for ipad Pro"],
     ["designed for iPad Pro","intuitive surface"],
     ["Wireless","optical orientation"]]
     return (
        <>
        <div className="Product">
         <p>{title}</p>
         <p>{des[idx][0]}</p>
         <p>{des[idx][1]}</p>
         <Price OldPrice= {oldPrices[idx]} NewPrice = {newPrices[idx]}/>

        </div>

        </>
    );
}

export default Product;