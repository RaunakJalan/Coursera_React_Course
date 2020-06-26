import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    formatDate({ date }) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }

    

    renderComments(comments){
        
        if (comments != null) {

            let list = comments.map((comments)=>{

                
                let date = comments.date
                

                return(

                    <li key={comments.id} >
                        <p>{comments.comment}</p>
                        <p>--{comments.author},{this.formatDate({date})}</p>
                    </li>


                )
            })

            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){

        
        const {dishSelect} = this.props;
        

        return dishSelect?(
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dishSelect.comments)}
                </div>
        ):(
            <div></div>
        )
    }

}

export default DishDetail;