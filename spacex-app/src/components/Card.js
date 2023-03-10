export const Card = (prop) => (
 <div className="col-sm-6">
    <div className="card" key={prop.rocket.id}>
      <img src={prop.rocket.flickr_images[1]} 
      className="card-img-top" 
      alt="" 
      />
    <div className="card-body">
      <h5 className="card-title">{prop.rocket.name}</h5>
      <p className="card-text">
        Some quick details about the rocket specifications & performance fetched by SpaceX API service.
        </p>
      <a 
        href="#" 
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#popup${prop.rocket.id}`}
      >
        View More
      </a>
    </div>
    </div>
 </div>
);