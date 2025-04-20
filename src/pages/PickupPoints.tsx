import { useState, useRef } from "react";
import { PickupPointsMap } from "~/features/map/ui/PickupPointsMap";
import { pickupPoints } from "~/shared/data/pickupPoints";
import { useWindowSize } from "~/shared/hooks/useWindowSize";

interface PickupPoint {
  id: number;
  rating: string;
  address: string;
  description: string;
  coordinates: [number, number];
}

export const PickupPoints = () => {
  const { isMobile } = useWindowSize();
  const [selectedPoint, setSelectedPoint] = useState<PickupPoint | null>(null);
  const mapRef = useRef<any>(null);

  const handlePointSelect = (point: PickupPoint) => {
    setSelectedPoint(point);
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      const targetZoom = 16;

      // Сначала плавно отдаляемся, если текущий зум больше 12
      if (currentZoom > 12) {
        mapRef.current
          .setZoom(12, {
            duration: 300,
          })
          .then(() => {
            setTimeout(() => {
              // Затем перемещаемся к точке
              mapRef.current
                .panTo(point.coordinates, {
                  duration: 600,
                  flying: true,
                  timingFunction: "ease-in-out",
                })
                .then(() => {
                  // И плавно приближаемся в два этапа
                  setTimeout(() => {
                    mapRef.current
                      .setZoom(14, {
                        duration: 400,
                        timingFunction: "ease-in",
                      })
                      .then(() => {
                        setTimeout(() => {
                          mapRef.current.setZoom(targetZoom, {
                            duration: 400,
                            timingFunction: "ease-out",
                          });
                        }, 200);
                      });
                  }, 200);
                });
            }, 200);
          });
      } else {
        // Если текущий зум меньше или равен 12, просто перемещаемся и приближаем
        mapRef.current
          .panTo(point.coordinates, {
            duration: 600,
            flying: true,
            timingFunction: "ease-in-out",
          })
          .then(() => {
            setTimeout(() => {
              mapRef.current
                .setZoom(14, {
                  duration: 400,
                  timingFunction: "ease-in",
                })
                .then(() => {
                  setTimeout(() => {
                    mapRef.current.setZoom(targetZoom, {
                      duration: 400,
                      timingFunction: "ease-out",
                    });
                  }, 200);
                });
            }, 200);
          });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Список точек */}
      <div className="w-full md:w-[400px] h-1/2 md:h-screen overflow-y-auto bg-white p-4 border-b md:border-r border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Пункты выдачи</h1>
        <div className="space-y-4">
          {pickupPoints.map((point, index) => (
            <div
              key={point.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                selectedPoint?.id === point.id
                  ? "bg-purple-100 border-purple-300"
                  : "bg-gray-50 hover:bg-gray-100 border-transparent"
              } border`}
              onClick={() => handlePointSelect(point)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{point.address}</h3>
                  <p className="text-sm text-gray-500">{point.description}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600">
                      {point.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Карта */}
      <div className="flex-1 h-1/2 md:h-screen">
        <PickupPointsMap
          selectedPointId={selectedPoint?.id}
          onPointSelect={handlePointSelect}
          mapRef={mapRef}
        />
      </div>
    </div>
  );
};
