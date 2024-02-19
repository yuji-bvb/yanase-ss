export default function Table4() {
  return (
    <div className="flex flex-col p-5 italic">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <caption className="py-2 text-center text-sm sm:text-2xl text-gray-800 dark:text-gray-800 font-bold">
                輸送
              </caption>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    日野　　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    3tトラック
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    1台
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl font-medium text-gray-800 dark:text-gray-800">
                    スズキ　　　
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-2xl text-gray-800 dark:text-gray-800">
                    軽トラック
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
