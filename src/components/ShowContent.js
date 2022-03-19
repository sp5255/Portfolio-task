const ShowContent = (props) => {
    return (
        <div className="card position-fixed  text-white content-card" style={{ width: "18rem", top:"20%", left:"40%" }}>
            <button className="bg-primary text-white" onClick={props.close} type="button">close</button>
            <div className="card-body">
                <p className="card-text">
                   {props?.content.body}
                </p>
            </div>
        </div>
    );
};

export default ShowContent;
