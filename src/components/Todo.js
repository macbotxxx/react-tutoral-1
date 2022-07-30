import { useState }  from 'react';
import Model from "./Model";
import Backdrop from "./Backdrop";


function Todo ( props ) {
    const [ modalIsOpen, setModalIsOpen ] = useState( false );
    
    // this function is been called when the button is clicked
    // using the onClick function

    function deleteHandler () {
        setModalIsOpen(true);
    }

    function closeModalHandler () {
        setModalIsOpen(false);
    }

    return(
        <div className="card">
            <h2> { props.title } </h2>
            {/* michael is working really hard to get things done here */}
            <div className="actions" >
                <button className="btn btn-danger" onClick={deleteHandler} > { props.delete } </button>
            </div>  

            { modalIsOpen && < Model onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && < Backdrop onCancel={closeModalHandler} /> }
            
        </div>

    );
}

export default Todo;