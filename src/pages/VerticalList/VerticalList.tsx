import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import VerticalListTable from "../../components/tables/BasicTables/VerticalListTable";

const VerticalList = () => {
  return (
    <div className="w-full min-w-0">
      <PageMeta
        title="Project List Dashboard | Admin Dashboard"
        description="This is Project List page"
      />

      {/* Breadcrumb */}
      <PageBreadcrumb pageTitle="Project Lists" />

      {/* Main content */}
      <div className="w-full min-w-0 rounded-2xl border border-gray-200 bg-white px-4 py-6 dark:border-gray-800 dark:bg-white/[0.03] xl:px-8 xl:py-8">
        {/* Search Section */}
        <div className="mb-6 w-full min-w-0">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full min-w-0 rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <VerticalListTable />
        </div>
      </div>
    </div>
  );
};

export default VerticalList;
