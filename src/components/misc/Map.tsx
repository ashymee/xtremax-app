import MarkerLarge from "@components/layout/Menu/browse/Marker/MarkerLarge";
import MarkerSmall from "@components/layout/Menu/browse/Marker/MarkerSmall";
import constants from "@utils/constants";
import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import L, { ZoomPanOptions } from "leaflet";
import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import SingaporeBackground from "./background/SingaporeBackground";

const ShadowMap = () => {
  const { expanded, zoomDefault } = useStore();
  const map = useMap();

  useEffect(() => {
    const options: ZoomPanOptions = {
      duration: 0.25,
      animate: true,
    };

    map.setView([expanded.lat, expanded.lng], map.getZoom(), options);

    setTimeout(() => {
      map.setZoom(zoomDefault, options);
    }, 500);
  }, [expanded.lat, expanded.lng, map, zoomDefault]);

  return null;
};

const Map = () => {
  const { zoomDefault, expanded, biggerIcon, setBiggerIcon } = useStore();
  const { getCities, handleClickedIcon } = useHandler();

  const [clicked, setClicked] = useState(false);

  if (!getCities) return <SingaporeBackground />;

  return (
    <MapContainer
      className="flex-1 w-full h-full"
      center={[expanded.lat, expanded.lng]}
      zoom={zoomDefault}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      fadeAnimation
    >
      <TileLayer
        attribution={constants.mapOptions.contribution}
        url={constants.mapOptions.theme.light}
      />
      {getCities &&
        getCities.map((city) => {
          const icon = L.divIcon({
            // className: "custom-icon",
            html: ReactDOMServer.renderToString(
              !biggerIcon.toggled ? (
                <MarkerSmall title={city.name} />
              ) : biggerIcon.id === city.id ? (
                <MarkerLarge title={city.name} address={city.address} />
              ) : (
                <MarkerSmall title={city.name} />
              )
            ),
          });

          const click = () => {
            handleClickedIcon(city);
            biggerIcon.toggled ? setClicked(false) : setClicked(true);
          };

          const mouseover = () => {
            if (
              !clicked &&
              !biggerIcon.toggled &&
              biggerIcon.event !== "clicked"
            ) {
              return setBiggerIcon({
                event: "hover",
                toggled: true,
                id: city.id,
                detailIsShown: undefined,
              });
            }
            return;
          };

          const mouseout = () => {
            if (
              !clicked &&
              biggerIcon.toggled &&
              biggerIcon.event !== "clicked"
            ) {
              return setBiggerIcon({
                event: "",
                toggled: false,
                id: "",
              });
            }
            return;
          };

          return (
            <Marker
              key={city.id}
              position={[city.lat, city.lng]}
              title={city.name}
              icon={icon}
              eventHandlers={{ click, mouseover, mouseout }}
            />
          );
        })}

      <ShadowMap />
    </MapContainer>
  );
};

export default Map;

/* 
<LayerGroup>
  <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
  <Circle
    center={center}
    pathOptions={fillRedOptions}
    radius={100}
    stroke={false}
  />
  <LayerGroup>
    <Circle
      center={[51.51, -0.08]}
      pathOptions={greenOptions}
      radius={100}
    />
  </LayerGroup>
</LayerGroup>
<FeatureGroup pathOptions={purpleOptions}>
  <Popup>Popup in FeatureGroup</Popup>
  <Circle center={[51.51, -0.06]} radius={200} />
  <Rectangle bounds={rectangle} />
</FeatureGroup>
*/
