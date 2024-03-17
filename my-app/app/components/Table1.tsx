export default function Table1() {
  return (
    <div className="flex flex-col p-5 italic">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="relative text-3xl text-center font-bold p-5">
            主要設備
          </div>
          <div className="overflow-hidden md:max-w-7xl mx-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 sm:px-20">
              <caption className="py-2 text-center text-sm sm:text-2xl text-gray-800 dark:text-gray-800 font-bold">
                プレス加工機
              </caption>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    コマツ　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    200t
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    1台
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    コマツ　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    150t
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    2台
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    コマツ　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    サーボ150t
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    1台
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    コマツ　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    85t
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    1台
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    コマツ　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    45t
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    1台
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
