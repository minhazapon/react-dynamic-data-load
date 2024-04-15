import { Link } from "react-router-dom";




const DataDetails = ({data}) => {


    const {id, image, country, description} = data

  

    return (
        <div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{country}</h2>
                <p>{description}</p>
                <div className="card-actions">

                  <Link to={`/post/${id}`}  >  
                  <button className="btn btn-primary">data details</button>
                  
                  </Link>

                 
                </div>
              </div>
            </div>
                 
            </div>            
        </div>
    );
};

export default DataDetails;