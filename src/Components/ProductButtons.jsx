export default function ProductButtons({del, id}) {
    return(
        <div className="btn-holder">
            <button className="btn btn1">View</button>
            <button className="btn btn2">Edit</button>
            <button onClick={del} value={id} className="btn btn3">Delete</button>
        </div>
    )
}