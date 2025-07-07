import { useState } from "react";

export default function VinSearch() {
  const [vin, setVin] = useState("");
  const [url, setUrl] = useState(null);

  const handleSubmit = () => {
    if (vin.trim().length >= 10) {
      const target = `https://xgss.xcmg.com/#/struct/car/${vin}/epc/815249`;
      setUrl(target);
    } else {
      alert("Введите корректный VIN (минимум 10 символов)");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white shadow-xl p-6 rounded-2xl">
        <h1 className="text-xl font-bold text-center mb-4">XCMG Онлайн Просмотр</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="Введите VIN (напр. LXGCPA339LA025257)"
            className="flex-grow border p-2 rounded-lg"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Перейти
          </button>
        </div>
        {url && (
          <div className="mt-6 border-t pt-4">
            <p className="text-sm mb-1 text-gray-600">Сгенерированная ссылка:</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {url}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}