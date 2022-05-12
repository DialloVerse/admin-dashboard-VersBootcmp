import { Publish } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import "./product.css";

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/8224531/pexels-photo-8224531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="productInfoImg" />
                    <span className="productName">Recommended Racket</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Recommended Racket" />
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.pexels.com/photos/8224531/pexels-photo-8224531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  );
}