type PropsType ={
    filled: boolean
}
const Rating = ({filled}:PropsType) => {
    
    return (
            <span className={`star ${filled ? 'filled' : 'empty'}`}>★</span>
       )
  
    }
export default Rating
