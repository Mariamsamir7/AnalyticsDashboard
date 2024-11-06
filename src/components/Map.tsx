import  { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "Dallas", coordinates: [-96.7970, 32.7767] },
];

const MapComponent = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    if (zoom < 4) setZoom(zoom * 1.5); 
  };

  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom / 1.5); 
  };

  return (
    <Card sx={{  borderRadius: '8px', boxShadow: 1, height: '95%' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Real-Time
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Box sx={{ height: '300px', position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              zIndex: 10,
              borderRadius: '4px',
              boxShadow: 1,
            }}
          >
            <IconButton onClick={handleZoomIn} size="small">
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleZoomOut} size="small">
              <RemoveIcon />
            </IconButton>
          </Box>
          
          <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "100%" }}>
            <ZoomableGroup zoom={zoom} center={[-97.0, 38.0]}> 
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} fill="#E0E0E0" stroke="#FFFFFF" />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={9} fill="#4782DA" />
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MapComponent;