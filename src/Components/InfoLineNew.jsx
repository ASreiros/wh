export default function InfoLine({label, type, value, change}) {
    return(
        <div className="vertical-holder">
            <label>{label}</label>
            <input onChange={change} className="information-new" type={type}  value={value} />
        </div>
    )
}