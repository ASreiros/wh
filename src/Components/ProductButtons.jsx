export default function ProductButtons({del, id, edit}) {
    return(
        <div className="btn-holder">
            <button className="btn btn1">View</button>
            <button onClick={()=> edit(id)} className="btn btn2">Edit</button>
            {/* <button onClick={del} value={id} className="btn btn3">Delete</button> */}
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) del(id) } }  className="btn btn3">Delete</button>
        </div>
    )
}


// onClick={() => {if(window.confirm('Delete the item?')){this.removeToCollection(key, e)};}}
// onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) } }