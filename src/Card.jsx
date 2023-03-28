export default function Card(a){
    return(
       <div className="card">
            <img src={a.img} alt="" />
            <h1>{a.header}</h1>
            <p>{a.desc}</p>
            <h3>{a.sum}</h3>
            <div>
                <select name="" id="">
                    <option value="">Regular</option>
                </select>
            </div>
            <button>Add to cart</button>
       </div>
            
            )
           

}