
import '../styles/Partner.css'



export default function Partner(props) {
  return (
    <div className="partner-list">
              {
                // eslint-disable-next-line react/prop-types
                props.partnerList.map((item,index) =>{
                    return(
                        <div className='kartu-partner' key={index}>
                            <img src={item.image}/>
                        </div>
                    )
                })
              }
      </div>
  )
}
