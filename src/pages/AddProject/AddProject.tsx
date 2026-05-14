import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import AddProjectForm from "./AddProjectForm";


export default function AddProject() {
  return (
    <div>
      <PageMeta
        title="Add Project"
        description="This is Add Project page"
      />
      <PageBreadcrumb pageTitle="Add Project" />
      <div className="grid grid-cols-1">
        <div className="space-y-6">
          <AddProjectForm /> 
        </div>
      </div>
    </div>
  );
}
