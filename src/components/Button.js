

const Button = props => {

    return (
        <div>
            <button onClick={props.clickHandler}>{props.name}</button>
        </div>
    );
};


export default Button;