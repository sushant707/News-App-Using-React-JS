
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description ? description.slice(0, 90) : "The US conducted major airstrikes on 85 targets across seven locations in Iraq and Syria on Friday, the start of what will likely be a series of larger-scale US strikes on Iranian-backed militias who have carried out attacks on US troops in the Middle East."}</p>

    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem 