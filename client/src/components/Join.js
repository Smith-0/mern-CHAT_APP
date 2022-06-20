import React , {useState} from 'react';
import {Link} from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="container joinContainer card p-5">
      <div className="d-grid gap-2 mb-3">
        <h1 className="btn btn-dark btn-block">Join Room</h1>
      </div>
      
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="room" className="form-label">Room</label>
          <input type="text" className="form-control" id="room" value={room} onChange={(e)=> setRoom(e.target.value)}/>
        </div>
        <Link onClick={e => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
          <button type="submit" className="btn btn-primary mt-3">Join</button>
        </Link>
      </form>
    </div>
  )
}

export default Join