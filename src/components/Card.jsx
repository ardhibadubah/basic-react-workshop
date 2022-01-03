const Card = (props) => {  
  // Children props
  return (
    <div className="card bg-dark p-4">
      { props.children }
    </div>
  )
}

export default Card