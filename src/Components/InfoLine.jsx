export default function InfoLine({label, type, value}) {
    return(
        <div className="vertical-holder">
            <label>{label}</label>
            <input className="information" type={type} readOnly  value={value} />
        </div>
    )
}