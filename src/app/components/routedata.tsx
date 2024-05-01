import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import FindOptimalRoute from "./findoptimalroute";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function RouteFinder() {
    const[addresses, setAddresses] = useState(['','']);
    const[result, setResult] = useState([])
    const[loading, setLoading] = useState(false)

    const handleAddressChange = (index: number, value: string) => {
        const updatedAddresses = [...addresses];
        updatedAddresses[index] = value;
        setAddresses(updatedAddresses);
    };

    const handleSubmit = async() => {
      if(result!==null && result.length > 0) {return}
        setLoading(true)
        const res = await FindOptimalRoute(addresses)
        setResult(res);
        setLoading(false)
    }
    const handleAdd = () => {
        setAddresses([...addresses, '']);
    }
    const handleOpenNew = () => {
      const joinedAddresses = result.join('+');
      const mapsURL = `https://www.google.com/maps/search/?api=1&query=${joinedAddresses}`;
      window.open(mapsURL);
    }

    return (
        <section className="w-full" id="content-section">
        <p className="text-sky-600">mndabashdbhbdjhcbdjcbhsd</p>
         <div className="flex flex-col gap-2">
         {addresses.map((address, index) => (
           <TextField 
             key={index}
             id={`filled-basic-${index}`}
             variant="filled"
             value={address}
             onChange={(e) => handleAddressChange(index, e.target.value)}
           />
         ))}
           <button onClick={handleAdd}> <AddCircleOutlineOutlinedIcon /></button>
         </div>
         <button onClick={handleSubmit}>Submit</button>
         {loading && <Box sx={{ width: 300 }}>
      <Skeleton animation="wave" />
    </Box>}
          { result && result.map(res => (
            <div key={res}>{res}</div>
          ))}
          <button onClick={handleOpenNew}>Open in New Window</button>
       </section>
    )
}

export default RouteFinder;
