import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import PageMeta from "../../components/common/PageMeta";

export default function Admin() {
  return (
    <>
      <PageMeta
        title="Dashboard | Admin"
        description="This is Admin  page" />
      <div className="grid grid-cols-12">       

        <div className="col-span-12">
          <MonthlyTarget />
        </div>       
      </div>
    </>
  );
}
