export default function Table2() {
  return (
    <div className="flex flex-col p-5 italic sm:p-30">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden md:max-w-7xl mx-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <caption className="py-2 text-center text-sm sm:text-2xl text-gray-800 dark:text-gray-800 font-bold">
                溶接加工機
              </caption>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    パナソニック
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    YD350GR　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    3台
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
