import { useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { PickupPointsMap } from "~/features/map/ui/PickupPointsMap";
import { pickupPoints } from "~/shared/data/pickupPoints";

interface PickupPoint {
  id: number;
  rating: string;
  address: string;
  description: string;
  coordinates: [number, number];
}

export const Address = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPoint, setSelectedPoint] = useState<PickupPoint | null>(null);
  const mapRef = useRef<any>(null);

  const filteredPoints = pickupPoints.filter((point) =>
    point.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Пункты выдачи</h1>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Поиск мест и адресов"
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tab.Group>
          <Tab.List className="flex gap-2 border-b border-gray-200 mb-4">
            <Tab
              className={({ selected }: { selected: boolean }) =>
                clsx(
                  "px-4 py-2 font-medium focus:outline-none",
                  selected
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                )
              }
            >
              Пункт выдачи
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                clsx(
                  "px-4 py-2 font-medium focus:outline-none",
                  selected
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                )
              }
            >
              Курьером
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="overflow-y-auto max-h-[600px] pr-4">
                  {filteredPoints.map((point) => (
                    <div
                      key={point.id}
                      className={clsx(
                        "mb-4 p-4 border rounded-lg cursor-pointer transition-colors",
                        selectedPoint?.id === point.id
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-500"
                      )}
                      onClick={() => handlePointSelect(point)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-purple-600 font-medium">
                          {point.rating}
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{point.address}</h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {point.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                              <span className="w-2 h-2 rounded-full bg-green-500"></span>
                              Пункт выдачи • Бесплатно
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden">
                  <PickupPointsMap
                    points={filteredPoints}
                    selectedPointId={selectedPoint?.id}
                    onPointSelect={handlePointSelect}
                    mapRef={mapRef}
                  />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-center text-gray-500 py-8">
                Доставка курьером временно недоступна
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
