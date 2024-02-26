export default function HeaderButton({label, onClick}){
    return(
        <div onClick={onClick} className="mono text-3xl hover:text-custom-lila hover:cursor-pointer transition duration-200">
            {label}
        </div>
    )
}