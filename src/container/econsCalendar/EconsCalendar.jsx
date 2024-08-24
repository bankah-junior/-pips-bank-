import { useEffect, useState } from "react";
import { Navbar, Footer } from '../../components';

const Blogs = () => {
  const [actual, setActual] = useState();
  const [actualError, setActualError] = useState("");
  // const [forecastColor, setForecastColor] = useState("");
  const [forecastError, setForecastError] = useState("");
  const [previous, setPrevious] = useState();
  const [previousError, setPreviousError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [signalEnergy, setSignalEnergy] = useState("");
  const [signalGeneral, setSignalGeneral] = useState("");
  const [mainCurrency, setmainCurrency] = useState("");
  const [baseCurrency, setbaseCurrency] = useState("");

  useEffect(() => {
    if (actualError || previousError) {
      setShowResult(false);
    }
  }, [actualError, forecastError, previousError, showResult]);

  const handleSubmitGeneralFormula = () => {
    setShowResult(true);
    let AA = actual;
    let PV = previous;

    if (AA < PV) {
      setSignalGeneral("Buy");
      setSignalEnergy("");
      setbaseCurrency("Buy Main Currency");
      setmainCurrency("Sell Base Currency");
    } else if (AA > PV) {
      setSignalGeneral("Sell");
      setSignalEnergy("");
      setbaseCurrency("Sell Main Currency");
      setmainCurrency("Buy Base Currency");
    } else {
      setSignalGeneral("Hold");
      setSignalEnergy("");
      setbaseCurrency("Hold Main Currency");
      setmainCurrency("Hold Base Currency");
    }
  };

  const handleSubmitEnergyFormula = () => {
    setShowResult(true);
    setSignalGeneral("");
    // let AP = actual - previous;
    let AA = actual;
    let PV = previous;

    if (!AA) {
      setActualError("Actual field is required");
    }

    setForecastError("");

    if (!PV) {
      setPreviousError("Previous field is required");
    }

    if (AA - PV < 0 && (AA < 0 || PV < 0)) {
      setSignalEnergy("Buy");
      setSignalGeneral("");
    } else {
      setSignalEnergy("Sell");
      setSignalGeneral("");
    }

    if (AA === PV) {
      setSignalEnergy("Hold");
      setSignalGeneral("");
    }
  };
  return (
      <div>
        <Navbar />
        <div className="flex flex-wrap py-4 sm:h-screen">
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <iframe
          title="Economic Calendar"
          src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_credit,_centralBanks,_confidenceIndex,_balance,_Bonds&importance=2,3&features=datepicker,timezone,timeselector,filters&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=day&timeZone=55&lang=1"
          width="650"
          height="467"
          frameborder="0"
          allowtransparency="true"
          marginwidth="0"
          marginheight="0"
        ></iframe>
      </div>
      <div className="flex items-center justify-center w-full mt-8 mb-8 sm:w-1/2">
        <div className="flex flex-col p-4 border rounded-lg shadow-2xl sm:w-1/2">
          <h2 className="mb-5 text-2xl font-bold text-center underline">
            Economic Value Cracker
          </h2>
          <div
            className={`flex items-center space-x-4 ${
              !actualError ? "mb-5" : ""
            }`}
          >
            <label
              for="actual"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Actual
            </label>
            <input
              type="number"
              id="actual"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeHolder="1.354"
              onChange={(e) => setActual(e.target.value)}
            />
          </div>
          {actualError && (
            <p className="mb-5 text-right text-red-500">{actualError}</p>
          )}
          <div
            className={`flex items-center space-x-4 ${
              !previousError ? "mb-5" : ""
            }`}
          >
            <label
              for="previous"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Previous
            </label>
            <input
              type="number"
              id="previous"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeHolder="-1.354"
              onChange={(e) => setPrevious(e.target.value)}
            />
          </div>
          {previousError && (
            <p className="mb-5 text-right text-red-500">{previousError}</p>
          )}
          {showResult && (
            <>
              <div className="flex flex-col p-2 space-y-3 bg-gray-200 border rounded-lg sm:flex-row sm:space-y-0">
                {signalGeneral === "Buy" && (
                  <>
                    <button className="bg-green-700 sm:mr-4 hover:bg-green-800 text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      {baseCurrency}
                    </button>
                    <button className="bg-red-700 hover:bg-red-800 focus:ring-4 text-white focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      {mainCurrency}
                    </button>
                  </>
                )}
                {signalGeneral === "Sell" && (
                  <>
                    <button className="bg-red-700 sm:mr-4 hover:bg-red-800 focus:ring-4 text-white focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      {baseCurrency}
                    </button>
                    <button className="bg-green-700 hover:bg-green-800 text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      {mainCurrency}
                    </button>
                  </>
                )}
                {signalGeneral === "Hold" && (
                  <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Hold
                  </button>
                )}
                {signalGeneral !== "Buy" &&
                  signalGeneral !== "Sell" &&
                  signalGeneral !== "Hold" && (
                    <button className="text-white hidden bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      No action
                    </button>
                  )}

                {signalEnergy === "Buy" && (
                  <button className="bg-green-700 hover:bg-green-800 text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Buy
                  </button>
                )}
                {signalEnergy === "Sell" && (
                  <button className="bg-red-700 hover:bg-red-800 focus:ring-4 text-white focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Sell
                  </button>
                )}
                {signalEnergy === "Hold" && (
                  <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Hold
                  </button>
                )}
                {signalEnergy !== "Buy" &&
                  signalEnergy !== "Sell" &&
                  signalEnergy !== "Hold" && (
                    <button className="text-white hidden bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      {signalEnergy}
                    </button>
                  )}
              </div>
              <br />
            </>
          )}
          <div className="flex flex-col w-full space-x-0 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <button
              type="submit"
              onClick={handleSubmitGeneralFormula}
              className="text-white bg-blue-700 sm:w-1/2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              General
            </button>
            <button
              type="submit"
              onClick={handleSubmitEnergyFormula}
              className="text-white sm:w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              For Energy
            </button>
          </div>
        </div>
      </div>
    </div>
        <Footer />
      </div>
  )
}

export default Blogs