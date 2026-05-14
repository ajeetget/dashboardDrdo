import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import EditProjectForm from "./EditProjectForm";


export default function EditProject() {
  return (
    <div>
      <PageMeta
        title="Edit Project"
        description="This is Edit Project page"
      />
      <PageBreadcrumb pageTitle="Edit Project" />
      <div className="grid grid-cols-1">
        <div className="space-y-6">
          <EditProjectForm /> 
        </div>
      </div>
    </div>
  );
}
