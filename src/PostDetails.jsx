import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    
    const load = useLoaderData();

    const {id, image, country, description} = load;

    return (
        <div>


            
           <div>
           

               <img src={image} alt="" />
               <h1> country: {country}  </h1>
                 
            </div>            



            
        </div>
    );
};

export default PostDetails;