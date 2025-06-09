"use client";

import { useState } from "react";

const devices = [
  {
    name: "ASIC miner Bitmain Antminer S21+ 235TH/s",
    hashrate: 235,
    power: 3500, // ориентировочно
    price: 325000,
  },
  {
    name: "ASIC Bitmain Antminer S19K PRO 120TH/s",
    hashrate: 120,
    power: 2760,
    price: 99000,
  },
  {
    name: "ASIC Bitmain Antminer T21 190TH/s",
    hashrate: 190,
    power: 3500,
    price: 244000,
  },
];

type CalcResult = {
  profit: string;
  roi: string;
  monthly: string;
  yearly: string;
};

export default function ProfitCalculator() {
  const [deviceIndex, setDeviceIndex] = useState(-1);
  const [customHashrate, setCustomHashrate] = useState(0);
  const [customPower, setCustomPower] = useState(0);
  const [customPrice, setCustomPrice] = useState(0);
  const [electricity, setElectricity] = useState(5); // руб./кВт·ч

  const [result, setResult] = useState<CalcResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hashrate =
      deviceIndex >= 0 ? devices[deviceIndex].hashrate : customHashrate;
    const power = deviceIndex >= 0 ? devices[deviceIndex].power : customPower;
    const price = deviceIndex >= 0 ? devices[deviceIndex].price : customPrice;

    const btcPerThPerDay = 0.0000005;
    const rubPerBtc = 8560000; // упрощённо: 1 BTC = 3 млн руб

    const dailyBtc = hashrate * btcPerThPerDay;
    const dailyProfitRub = dailyBtc * rubPerBtc;
    const dailyElectricityCost = (power / 1000) * electricity * 24;

    const netProfitPerDay = dailyProfitRub - dailyElectricityCost;
    const netProfitPerMonth = netProfitPerDay * 30;
    const roiMonths = price > 0 ? price / netProfitPerMonth : 0;
    const percentMonthly = (netProfitPerMonth / price) * 100;
    const percentYearly = percentMonthly * 12;

    setResult({
      profit: netProfitPerMonth.toFixed(0),
      roi: roiMonths.toFixed(1),
      monthly: percentMonthly.toFixed(1),
      yearly: percentYearly.toFixed(1),
    });
  };

  return (
    <section className="bg-white text-blue2 mt-15 rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto mt-16 flex flex-col md:flex-row gap-8">
      <form
        onSubmit={handleSubmit}
        className="flex-1 space-y-6 border-r border-gray-200 pr-8"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Выберите устройство
          </label>
          <select
            className="w-full border rounded-lg p-2"
            value={deviceIndex}
            onChange={(e) => setDeviceIndex(Number(e.target.value))}
          >
            <option value={-1}>Своё устройство</option>
            {devices.map((d, i) => (
              <option key={i} value={i}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {deviceIndex === -1 && (
          <>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">
                  Мощность (TH/s)
                </label>
                <input
                  type="number"
                  value={customHashrate}
                  onChange={(e) => setCustomHashrate(+e.target.value)}
                  placeholder="TH/s"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">
                  Потребление (Вт)
                </label>
                <input
                  type="number"
                  value={customPower}
                  onChange={(e) => setCustomPower(+e.target.value)}
                  placeholder="Вт"
                  className="w-full border rounded-lg p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">
                Стоимость устройства (₽)
              </label>
              <input
                type="number"
                value={customPrice}
                onChange={(e) => setCustomPrice(+e.target.value)}
                placeholder="₽"
                className="w-full border rounded-lg p-2"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium">
            Цена электроэнергии (₽/кВт·ч)
          </label>
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(+e.target.value)}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue2 text-white py-3 rounded-lg hover:bg-blue-950 transition"
        >
          Рассчитать доходность
        </button>
      </form>

      {/* Правая часть: результат */}
      <div className="flex-1 pl-8">
        <h3 className="text-xl font-semibold mb-4">Результаты расчётов</h3>
        <ul className="space-y-2 text-sm">
          <li>Чистая прибыль: {result?.profit ?? "—"} ₽/мес</li>
          <li>Окупаемость: {result?.roi ?? "—"} мес</li>
          <li>Доходность в месяц: {result?.monthly ?? "—"} %</li>
          <li>Доходность в год: {result?.yearly ?? "—"} %</li>
        </ul>
      </div>
    </section>
  );
}
