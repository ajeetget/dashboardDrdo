import PieChartOne from "../charts/Pie/PieChartOne";

export default function ProjectStatusSummaryCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Project Status Summary
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Distribution of projects by current status
          </p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="my-6 flex justify-center rounded-2xl px-4 py-6 sm:px-6">
        <div
          id="project-status-chart"
          className="mx-auto w-[252px] 2xsm:w-[307px] xsm:w-[358px] md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
        >
          <PieChartOne />
        </div>
      </div>

      {/* Legend Summary (Optional) */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">Ongoing</p>
          <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            12
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
          <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            8
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">Delayed</p>
          <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            3
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">On Hold</p>
          <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            2
          </p>
        </div>
      </div>
    </div>
  );
}
