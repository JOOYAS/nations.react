import placeholder from './assets/placeholder.jpg'

function Cards4Country(props) {
    return(
        <article className='w-full bg-white border-2 hover:animate-pulse hover:border-sky-500 p-1 flex sm:flex-col-reverse justify-between sm:justify-end'>
            <div className='w-48 sm:min-w-50 sm:text-center self-center'>
                <h2 className='text-xl sm:text-lg'>{props.name}</h2>
            </div>
            <div className='w-52 sm:w-full overflow-hidden flex aspect-[16/9]'>
                <img src={props.flag} className="object-cover w-full sm:hover:scale-110 duration-1000" alt={`flag of ${props.name}`}/>
            </div>
            
        </article>
        
    )
}

export default Cards4Country