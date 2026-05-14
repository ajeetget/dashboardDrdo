import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { PencilIcon, TrashBinIcon } from "../../../icons";
import Badge from "../../ui/badge/Badge";
import { Link } from "react-router";
interface Order {
  id: number;
  projectCode: string;
  projectTitle: string;
  piName: string;
  scientistName: string;
  startDate: string;
  endDate: string;
  budget: string;
  expenditures: string;
  status: string;
  reviewRemarks: string;
}

const tableData: Order[] = [
  {
    id: 1,
    projectCode: "P001",
    projectTitle: "AI Based Crop Monitoring System",
    piName: "Dr. John Doe",
    scientistName: "Jane Smith",
    startDate: "01 Jan 2023",
    endDate: "31 Dec 2023",
    budget: "₹3.9 Cr",
    expenditures: "₹2.5 Cr",
    status: "Active",
    reviewRemarks: "Excellent progress",
  },
  {
    id: 2,
    projectCode: "P002",
    projectTitle: "Climate Change Research",
    piName: "Dr. Michael Brown",
    scientistName: "Robert Wilson",
    startDate: "15 Feb 2023",
    endDate: "15 Feb 2024",
    budget: "₹5.2 Cr",
    expenditures: "₹1.8 Cr",
    status: "Pending",
    reviewRemarks: "Awaiting approval",
  },
  {
    id: 3,
    projectCode: "P003",
    projectTitle: "Water Purification Technology",
    piName: "Dr. Sarah Lee",
    scientistName: "David Kumar",
    startDate: "10 Mar 2023",
    endDate: "10 Mar 2025",
    budget: "₹4.7 Cr",
    expenditures: "₹3.2 Cr",
    status: "Completed",
    reviewRemarks: "Successfully completed",
  },
];

const tableHeaders = [
  "Project Code",
  "Project Title",
  "PI Name",
  "Scientist",
  "Start Date",
  "End Date",
  "Budget",
  "Spent",
  "Status",
  "Remarks",
  "Actions",
];

export default function ProjectListTable() {
  return (
    <div className="w-full min-w-0">
      {/* Card Container */}
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/[0.05] dark:bg-white/[0.03]">
        {/* Only this container should scroll horizontally */}
        <div className="w-full overflow-x-auto">
          <Table className="min-w-full">
            {/* Header */}
            <TableHeader className="border-b border-gray-200 bg-gray-50 dark:border-white/[0.05] dark:bg-white/[0.02]">
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableCell
                    key={index}
                    isHeader
                    className="whitespace-nowrap px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300"
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>

            {/* Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((project) => (
                <TableRow
                  key={project.id}
                  className="transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                >
                  {/* Project Code */}
                  <TableCell className="whitespace-nowrap px-4 py-4">
                    <span className="inline-flex rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">
                      {project.projectCode}
                    </span>
                  </TableCell>

                  {/* Project Title */}
                  <TableCell className="px-4 py-4">
                    <p className="max-w-[220px] truncate font-medium text-gray-800 dark:text-white/90">
                      {project.projectTitle}
                    </p>
                  </TableCell>

                  {/* PI Name */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-gray-600 dark:text-gray-400">
                    {project.piName}
                  </TableCell>

                  {/* Scientist */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-gray-600 dark:text-gray-400">
                    {project.scientistName}
                  </TableCell>

                  {/* Start Date */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-gray-600 dark:text-gray-400">
                    {project.startDate}
                  </TableCell>

                  {/* End Date */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-gray-600 dark:text-gray-400">
                    {project.endDate}
                  </TableCell>

                  {/* Budget */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-right font-semibold text-gray-800 dark:text-white/90">
                    {project.budget}
                  </TableCell>

                  {/* Expenditures */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-right font-semibold text-gray-800 dark:text-white/90">
                    {project.expenditures}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="whitespace-nowrap px-4 py-4">
                    <Badge
                      size="sm"
                      color={
                        project.status === "Active"
                          ? "success"
                          : project.status === "Pending"
                          ? "warning"
                          : "primary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>

                  {/* Review Remarks */}
                  <TableCell className="px-4 py-4">
                    <p className="max-w-[180px] truncate text-gray-600 dark:text-gray-400">
                      {project.reviewRemarks}
                    </p>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Link 
                      to="/edit-project"
                      title="Edit Project"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-success-200 bg-success-50 text-success-700 transition hover:bg-success-100 dark:border-success-500/20 dark:bg-success-500/10 dark:text-success-400">
                        <PencilIcon />
                      </Link>

                      <button
                        title="Delete Project"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-700 transition hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
                      >
                        <TrashBinIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
