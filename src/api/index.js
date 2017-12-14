import axios from 'axios';

const API_PORT = process.env.REACT_APP_API_PORT || 8090;

const listVirtualizations = () => axios.get( `http://localhost:${API_PORT}/sv/v1/virtualizations` );

const updateVirtualization = ( id, body ) => axios.put( `http://localhost:${API_PORT}/sv/v1/virtualizations/${id}`, body );

export { listVirtualizations, updateVirtualization };
