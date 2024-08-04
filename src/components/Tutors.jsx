import '../styles/Tutors.css'

function Tutors(props) {
  return (
    
         <div className="tutor-list">
             {
                // eslint-disable-next-line react/prop-types
                props.tutorList.map((item,index) =>{
                  return(

                    <div className='kartu-tutor'  key={index}>

                      <img src= {item.image} />
                      <p>{item.name}</p>
                    </div> 
                  )
                }
                  
                )
             }
        </div>
    
  )
}

export default Tutors
