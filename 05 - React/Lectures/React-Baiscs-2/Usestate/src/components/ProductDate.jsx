import '../css/ProductDate.css'

export default function ProductDate({date}) {
  return (
    <div className='product-date'>
        <p>{date.getDate()}</p>
       
        {/* added +1 bcz getMohth() will return month in range 0-11*/}
        {/* <p>{date.getMonth() + 1}</p>  */}
        <p>{date.toLocaleString('en-US', {month: 'long'})}</p> 
        <p>{date.getFullYear()}</p>
      
    </div>
  )
}
