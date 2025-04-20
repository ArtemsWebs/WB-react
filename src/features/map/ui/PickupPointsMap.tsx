import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { pickupPoints as defaultPoints } from "~/shared/data/pickupPoints";
import { useRef, useState, RefObject } from "react";

interface PickupPoint {
  id: number;
  rating: string;
  address: string;
  description: string;
  coordinates: [number, number];
}

interface PickupPointsMapProps {
  onPointSelect?: (point: PickupPoint) => void;
  selectedPointId?: number;
  points?: PickupPoint[];
  mapRef?: RefObject<any>;
}

export const PickupPointsMap = ({
  onPointSelect,
  selectedPointId,
  points = defaultPoints,
  mapRef: externalMapRef,
}: PickupPointsMapProps) => {
  const internalMapRef = useRef<any>(null);
  const [zoom, setZoom] = useState(10);

  const mapRef = externalMapRef || internalMapRef;

  const handlePointClick = (point: PickupPoint) => {
    onPointSelect?.(point);
  };

  const handleZoomChange = (newZoom: number) => {
    setZoom(newZoom);
  };

  const getPointOptions = (point: PickupPoint, index: number) => {
    if (zoom >= 14) {
      const isSelected = selectedPointId === point.id;
      const isNearSelected =
        selectedPointId &&
        !isSelected &&
        points.some(
          (p) =>
            p.id === selectedPointId &&
            Math.abs(p.coordinates[0] - point.coordinates[0]) < 0.01 &&
            Math.abs(p.coordinates[1] - point.coordinates[1]) < 0.01
        );

      return {
        iconLayout: "default#imageWithContent",
        iconImageHref: "",
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -64],
        iconContentLayout: `
          <div style="
            position: relative;
            width: 48px;
            height: 64px;
            display: flex;
            flex-direction: column;
            align-items: center;
          ">
            <div style="
              width: 48px;
              height: 48px;
              background: ${isSelected ? "#4c1d95" : "#9333ea"};
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            ">
              ${
                isSelected
                  ? `
                <div style="
                  width: 32px;
                  height: 32px;
                  background-image: url('/wb-marker-1.svg');
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-position: center;
                "></div>
              `
                  : isNearSelected
                    ? `
                <div style="
                  width: 32px;
                  height: 32px;
                  background-image: url('/wb-marker-2.svg');
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-position: center;
                "></div>
              `
                    : `
                <div style="
                  color: white;
                  font-weight: bold;
                  font-size: 20px;
                ">WB</div>
              `
              }
            </div>
            <div style="
              position: absolute;
              bottom: 0;
              background: white;
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 12px;
              font-weight: 500;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              display: flex;
              align-items: center;
              gap: 2px;
            ">
              <span style="color: #EAB308;">★</span>
              <span>${point.rating}</span>
            </div>
          </div>
        `,
      };
    }

    return {
      preset:
        selectedPointId === point.id
          ? "islands#darkVioletCircleDotIcon"
          : "islands#violetCircleDotIcon",
      iconContent: (index + 1).toString(),
    };
  };

  return (
    <YMaps query={{ apikey: "66729946-e078-43a1-aa5b-3bf7d8842dee" }}>
      <Map
        instanceRef={mapRef}
        defaultState={{
          // Центр Москвы
          center: [55.751244, 37.618423],
          zoom: 10,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        width="100%"
        height="100%"
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        onZoomChange={handleZoomChange}
      >
        {points.map((point, index) => (
          <Placemark
            key={point.id}
            geometry={point.coordinates}
            options={getPointOptions(point, index)}
            properties={{
              balloonContentHeader: point.address,
              balloonContentBody: `
                <div>
                  <p>${point.description}</p>
                  <div style="margin-top: 8px;">
                    <span style="color: #EAB308;">★</span>
                    <span style="font-weight: 500;">${point.rating}</span>
                  </div>
                </div>
              `,
            }}
            modules={["geoObject.addon.balloon"]}
            onClick={() => handlePointClick(point)}
          />
        ))}
      </Map>
    </YMaps>
  );
};
