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
interface Project {
  id: number;
  researchVerticalCode: string;
  projectTitle: string;
  piName: string;
  stakeholdingLab: string;
  budgetLakhs: number;
  initialProjectReceivedDate: string;
  sanctionDate: string;
  originalPdc: string;
  revisedPdc: string;
  presentStatus: string;
  tec: string;
  gcApproval: string;
  financiallyClosed: boolean;
  labRecommendation: string;
  technicallyClosed: boolean;
  administrativeStatus: string;
  piPhone: string;
  piEmail: string;
  lastTec: string;
}

const tableData: Project[] = [
  {
    id: 1,
    researchVerticalCode: "AI-001",
    projectTitle: "AI Based Surveillance System",
    piName: "Dr. Rajesh Kumar",
    stakeholdingLab: "DRDL",
    budgetLakhs: 450,
    initialProjectReceivedDate: "10 Jan 2025",
    sanctionDate: "20 Feb 2025",
    originalPdc: "31 Dec 2026",
    revisedPdc: "30 Jun 2027",
    presentStatus: "Ongoing",
    tec: "Approved",
    gcApproval: "Approved",
    financiallyClosed: false,
    labRecommendation: "Recommended",
    technicallyClosed: false,
    administrativeStatus: "In Progress",
    piPhone: "9876543210",
    piEmail: "rajesh.kumar@drdo.gov.in",
    lastTec: "15 Mar 2026",
  },
  {
    id: 2,
    researchVerticalCode: "ML-002",
    projectTitle: "Machine Learning for Radar Systems",
    piName: "Dr. Anita Sharma",
    stakeholdingLab: "LRDE",
    budgetLakhs: 600,
    initialProjectReceivedDate: "05 Apr 2024",
    sanctionDate: "25 Apr 2024",
    originalPdc: "31 Mar 2026",
    revisedPdc: "31 Dec 2026",
    presentStatus: "Completed",
    tec: "Completed",
    gcApproval: "Approved",
    financiallyClosed: true,
    labRecommendation: "Closed",
    technicallyClosed: true,
    administrativeStatus: "Closed",
    piPhone: "9123456780",
    piEmail: "anita.sharma@drdo.gov.in",
    lastTec: "20 Dec 2026",
  },
];
const tableHeaders = [
    "S. No",
    "Research Vertical",
    "Project Title",
    "PI Name",
    "Lab",
    "Budget",
    "Received",
    "Sanction",
    "Orig. PDC",
    "Rev. PDC",  
    "TEC",
    "GC",
    "Fin. Closed",
    "Lab Recommendation",
    "Tech. Closed",
    "Admin",
    "Phone",
    "Email",
    "Last TEC", 
      "Status",   
    "Actions",
];

export default function VerticalListTable() {
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
                      {project.id}
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-4">
                    <span className="inline-flex rounded-md bg-brand-50 px-2.5 py-1 text-xs text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">
                      {project.researchVerticalCode}
                    </span>
                  </TableCell>

                  {/* Project Title */}
                  <TableCell className="px-4 py-4">
                    <p className="max-w-[220px] truncate text-xs text-gray-600 dark:text-gray-400">
                      {project.projectTitle}
                    </p>
                  </TableCell>

                  {/* PI Name */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-xs text-gray-600 dark:text-gray-400">
                    {project.piName}
                  </TableCell>

                  {/* Scientist */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-xs text-gray-600 dark:text-gray-400">
                    {project.stakeholdingLab}
                  </TableCell>

                  {/* Start Date */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-xs text-gray-600 dark:text-gray-400">
                    {project.budgetLakhs}
                  </TableCell>

                  {/* End Date */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-xs text-gray-600 dark:text-gray-400">
                    {project.initialProjectReceivedDate}
                  </TableCell>

                  {/* Budget */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.sanctionDate}
                  </TableCell>

                  {/* Expenditures */}
                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.originalPdc}
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.revisedPdc}
                  </TableCell>                 

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.tec} 
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.gcApproval} 
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.financiallyClosed === false ? "Closed" : "Active"}
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.labRecommendation}
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.technicallyClosed  === false ? "Closed" : "Active"}
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.administrativeStatus}
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.piPhone}
                  </TableCell>

                  <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.piEmail}
                  </TableCell>

                   <TableCell className="whitespace-nowrap px-4 py-4 text-right text-xs text-gray-600 dark:text-white/90">
                    {project.lastTec}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="whitespace-nowrap px-4 py-4">
                    <Badge
                      size="sm"
                      color={
                        project.presentStatus === "Active"
                          ? "success"
                          : project.presentStatus === "Pending"
                          ? "warning"
                          : "primary"
                      }
                    >
                      {project.presentStatus}
                    </Badge>
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
