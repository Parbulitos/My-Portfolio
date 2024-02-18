export default function HeaderButton({label}){
    return(
        <div className="mono text-3xl hover:text-custom-lila hover:cursor-pointer transition duration-200">
            {label}
        </div>
    )
}