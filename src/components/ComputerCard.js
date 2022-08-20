import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ComputerCard = (props) => {
    const  computer  = props.computer;

    return(
        <div className="card-container">
            <img src="/computer.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-computer/${computer._id}`}>
                        { computer.model_name }
                    </Link>
                </h2>
                <h3>{computer.company_name}</h3>
                <Link to={`/edit-computer/${computer._id}`}  ><img src="/edit.png" alt="No ss of edit" /></Link>
            </div>
        </div>
    )
};

export default ComputerCard;