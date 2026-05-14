import { 
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function ProjectMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Total Projects */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          <GroupIcon className="size-6 text-gray-800 dark:text-white/90" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Projects
            </span>
            <h4 className="mt-2 font-bold text-title-sm text-gray-800 dark:text-white/90">
              42
            </h4>
          </div>

          <Badge color="success">
            <ArrowUpIcon />
            8.5%
          </Badge>
        </div>
      </div>

      {/* Completed Projects */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          <BoxIconLine className="size-6 text-gray-800 dark:text-white/90" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Completed Projects
            </span>
            <h4 className="mt-2 font-bold text-title-sm text-gray-800 dark:text-white/90">
              18
            </h4>
          </div>

          <Badge color="success">
            <ArrowUpIcon />
            12.3%
          </Badge>
        </div>
      </div>
    </div>
  );
}
